const express = require("express");
const update = express();
const { con } = require("../../config/db");

// post login data
const updatePassword = update.post("/", (req, res) => {
  const { username, newPassword } = req.body;
  console.log(newPassword + "," + username + " in update");
  try {
    const query = con.query(
      `SELECT username FROM register WHERE username = ?`,
      [username],
      (err, result) => {
        if (err) {
          res.send({
            err:
              "username not exixt please make sure you entred an exixted username",
          });
          console.log("update err\n" + err);
          res.end();
        } else if (result.length > 0) {
          // sucseded to update password
          con.query(
            `UPDATE register SET password=${newPassword} WHERE username = '${username}'`
          );
          res.send({
            message: "your password was secsuflly update",
          });
          res.end();
        } else {
          console.log(
            "sothing went wrong with updating password with user " + username
          );
          res.send({
            err:
              "sothing went wrong we coudn't update your password try again or check if the username is correct",
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = { updatePassword };
