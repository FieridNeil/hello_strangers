const conn = require("./db_config");

conn.query(`SELECT * FROM room_status`, (err, res, field) => {
  if (err) throw new Error(err);
  console.log(res);
});
