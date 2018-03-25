var express = require('express');
var router = express.Router();
var user = require("../model/user");


router.post('/', function(req, res, next){
    user.find({phone:req.body.phone},function(error,info){
        if (!error && info.length ==0){
            user.create({
               name:req.body.name,
               phone:req.body.phone,
               password:req.body.password
            },function(error,info){
                if(!error){
                   res.send('1');
                }
            })
        }else{
            res.send('0');
        }
    });

});

module.exports = router;