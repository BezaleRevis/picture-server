const mysql = require("mysql");

require("dotenv").config();
let con = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net" || process.env.database,
  user: "bc15022fc4dc2c" || process.env.user,
  password: "44b69c46" || process.env.password,
  database: "heroku_f4d1fd157ccd4f3" || process.env.database,
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
// mysql://bc15022fc4dc2c:44b69c46@us-cdbr-east-05.cleardb.net/heroku_f4d1fd157ccd4f3?reconnect=true
