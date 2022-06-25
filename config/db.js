const mysql = require("mysql");

require("dotenv").config();
let con = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net" || process.env.database,
  user: "b2b677e2d8d9a8" || process.env.user,
  password: "5f1ce9d2" || process.env.password,
  database: "heroku_4b725e02090791b" || process.env.database,
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
// mysql://b2b677e2d8d9a8:5f1ce9d2@eu-cdbr-west-02.cleardb.net/heroku_4b725e02090791b?reconnect=true
// mysql://bc15022fc4dc2c:44b69c46@us-cdbr-east-05.cleardb.net/heroku_f4d1fd157ccd4f3?reconnect=true
