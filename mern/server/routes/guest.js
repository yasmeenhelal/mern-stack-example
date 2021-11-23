const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
var user = require("../schema/users");
const router = express();

router.post('http://localhost:3000/guest/createuser', (req, res)=>{
    let users ={
        username: 'Admin2',
        Password: 'Pass2'
    }

    user.create(users).then(function(userdata){
        res.send(userdata)
    })
})

console.log("ADMIN ADDED");

router.get('/test', (req, res)=>{
    res.send("test")
})

module.exports = router;