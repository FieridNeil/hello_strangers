const express = require("express");
const router = express.Router();
const conn = require("./database/db_config");

router.post("/", (req, res) => {
  console.log(req.body);
  addUser(req.body)
    .then((result) => res.json({ status: "OK", result }))
    .catch((err) => {
      res.json({ status: "Failed to signup", err });
    });
});

const addUser = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    conn.query("INSERT INTO users (name, password, created_date) VALUES (?, ?, NOW())", [username, password], (err, res, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};
module.exports = router;
