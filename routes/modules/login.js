const express = require("express");
const router = express.Router();
const { con } = require("../../config/db");


// post login data
const login = router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username + ", " + password + " in login");
  try {
    const query = con.query(
      `SELECT * FROM register WHERE username = ? AND password = ?`,
      [username, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
          res.end();
        } else if (result.length > 0) {
          res.send(result);
          console.log("i'm in result " + result.length);
          res.end();
        } else {
          res.send({
            message: "Wrong username or password please try again",
          });
          res.end();
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = { login };
