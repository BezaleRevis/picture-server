const express = require("express");
const router = express.Router();
const { con } = require("../../config/db");

  //post register data
const register = router.post("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    const { username, password } = req.body;
    console.log(username + "," + password);
    try {
      con.query(
        `INSERT INTO register (username, password) VALUES ('${username}','${password}');`,
        (err, result) => {
          // console.log(result);
          if (err === null) {
            res.send("you have successfully registered :-)");
            res.end();
          } else {
            if (err.code === "ER_DUP_ENTRY") {
              res.send("username is alreddy taken please try another usename");
            } else
              res.send("somthing went wrong please try again later " + err);
            res.end();
          }
        }
      );
    } catch (err) {
      console.log(err);
      res.send("somthing went wrong please try again later " + err);
      res.end();
    }
  });
  module.exports = { register };