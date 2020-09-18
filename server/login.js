const express = require("express");
const router = express.Router();
const conn = require("./database/db_config");

router.post("/", (req, res) => {
  authenticate(req.body)
    .then((result) => {
      if (result.length === 1) {
        res.json({ status: "OK", sessionID: result[0].login_sessionID });
      } else {
        res.json({ status: "Failed" });
      }
    })
    .catch((err) => console.log("Failed to authenticate", err));
});

const authenticate = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT name, password, login_sessionID FROM users WHERE name=? and password=?", [username, password], (err, res, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};
module.exports = router;
