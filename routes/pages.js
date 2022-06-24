const express = require("express");
const router = express.Router();
const { createServerSql } = require("../config/db");
const { login } = require("./modules/login");
const { register } = require("./modules/register");
const { updatePassword } = require("./modules/updatePassword");
const { deleteAcount } = require("./modules/deleteAcount");

async function startRegister() {
  await createServerSql();

  // post login data
  router.use("/login", function (req, res) {
    login(req, res); //call func for login
  });

  //post register data
  router.use("/register", function (req, res) {
    register(req, res); //call func for register
  });

  //post update password
  router.use("/updatePassword", function (req, res) {
    //call func for updating password if user forgot
    updatePassword(req, res);
  });

  //post delete account
  router.use("/delete-account", function (req, res) {
    //call func for updating password if user forgot
    deleteAcount(req, res);
  });
}
startRegister();

module.exports = router;
