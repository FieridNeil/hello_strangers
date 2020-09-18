const express = require("express");
const router = express.Router();
const conn = require("./database/db_config");
const uuidv4 = require("uuid").v4;

router.post("/", (req, res) => {
  addUser(req.body)
    .then((result) => res.json({ status: "OK", sessionID: result.sessionID }))
    .catch((err) => {
      res.json({ status: "Failed", err });
    });
});

const addUser = ({ username, password }) => {
  const sessionID = uuidv4();
  return new Promise((resolve, reject) => {
    conn.query(
      "INSERT INTO users (name, password, created_date, login_sessionID) VALUES (?, ?, NOW(), ?)",
      [username, password, sessionID],
      (err, res, fields) => {
        if (err) {
          reject(err);
          return;
        }
        res.sessionID = sessionID;
        resolve(res);
      }
    );
  });
};
module.exports = router;
