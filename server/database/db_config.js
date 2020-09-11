const mysql = require("mysql");
const config = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hello_strangers",
};

module.exports = mysql.createPool(config);
