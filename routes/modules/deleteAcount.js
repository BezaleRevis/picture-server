const express = require("express");
const deleteUser = express();
const { con } = require("../../config/db");

// post delete account
const deleteAcount = deleteUser.delete("/", (req, res) => {
  const { username, password } = req.body;
  console.log(password + "," + username + " in delete account");
  try {
    const query = con.query(
      `SELECT username,password FROM register WHERE username = ? AND password = ?`,
      [username, password],
      (err, result) => {
        if (err) {
          // username not correct or !exist
          res.send({
            message: "username not exixt please make sure you entred an exixted username...",
          });
          console.log("deleteUser err\n" + err);
          res.end();
        } else if (result.length > 0) {
          // sucseded to deleteUser password
          con.query(
            `DELETE FROM register WHERE username = "${username}" AND password = ${password};`
          );
          res.send({
            message: "your acount was successfully deleted...",
          });
          res.end();
        } else { // username or password is null
          console.log(
            "sothing went wrong with updating password with user " + username
          );
          res.send({
            message: "sothing went wrong we coudn't delete your account please try again later...",
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = { deleteAcount };
