var express = require('express');
var router = express.Router();
var user = require("../model/user");


router.post("/",function(req,res){
    user.find({
        phone:req.body.phone,
        password:req.body.password
    },function(error,info){
        if(!error){
            if(info.length>0){
                res.send('1');
            }else{
                res.send('0');
            }
        }
    })
})

module.exports = router;