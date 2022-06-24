const mysql = require("mysql");

require("dotenv").config();
let con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
function createServerSql() {
  return new Promise((resolve, reject) => {
    con.connect((err) => {
      if (err) {
        console.log(err);
        reject(err);
        throw err;
      }
      console.log("MySql Conected");
    });
    resolve();
  });
}
module.exports = { con,createServerSql };
