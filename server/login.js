const express = require("express");
const router = express.Router();
const conn = require("./database/db_config");

router.post("/", (req, res) => {
  console.log(req.body);
  authenticate(req.body)
    .then((result) => {
      if (result.length === 1) {
        res.json({ status: "OK", user: req.body.username });
      } else {
        res.json({ status: "Failed to authenticate, wrong username and/or password" });
      }
    })
    .catch((err) => console.log("Failed to authenticate", err));
});

const authenticate = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT name, password FROM users WHERE name=? and password=?", [username, password], (err, res, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};
module.exports = router;
