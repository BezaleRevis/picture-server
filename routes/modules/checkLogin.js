const mysql = require("../../db/db");

const checkIfExist = (query) => {
  return new Promise((reslove, reject) => {
    mysql.query(query, (err, result, field) => {
      if (err) reject(err); // field user not exist
      if (result && result.length > 0) { // query successeded and user corect
        reslove(result);
      } else { // query sucseded but user not exist
        reslove(false)
      }
    })
  })
}
const insert = (query) => {
  return new Promise((reslove, reject) => {
    mysql.query(query, (err, result, field) => {
      if (err) reject(err);
      reslove(true);
    })
  })
}
module.exports = { checkIfExist, insert };
