const express = require("express");
const router = express.Router();
const mysql = require("../db/db");
const { checkIfExist } = require("./modules/checkLogin");

// post login data
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  console.log(username+", "+password);
  const query = mysql.query(`SELECT * FROM users WHERE password = ${password}`)
  checkIfExist(query).then((flag)=>{
    if(flag){
      res.send(flag[0])
    }
    else {
      res.send("user or password in not correct please try again")
    }
    
  })
  .catch((err)=>{
    res.send({status:false,message:"somthint went wrong falled to login "+err})
  })

});

//post register data
router.post("/register", (req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  const { username, password } = req.body;
  console.log(username + "," + password);
  const exist = mysql.query(`SELECT * FROM user WHERE username='${username}'`);
  console.log(exist);
  mysql.query(
    `INSERT INTO user(id, username, password) VALUES ('id','${password}','${username}');`,
    (err, result) => {
      console.log(err);
      res.send("somthing went wrong please try again later");
    }
  );
  res.send('you have successfully registered :-)');
  // let result = checkIfExist(username, password);
  // res.send(result);
});

module.exports = router;
