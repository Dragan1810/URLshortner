const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const URLy = require('../models/url');

mongoose.Promise=global.Promise;

router.get('/',(req,res,next)=>{
    res.render('index');
})

router.get('/new/:url(*)',(req,res,next)=>{
    const {url} = req.params;
    const shorty = Math.floor(Math.random()*100);
    const data = new URLy({
        url,
        shorty
    });
    data.save(err=>{
        if(err){
            res.send("error saving");
        }
    })
    res.json(data);
    
});

router.get('/:url',(req,res)=>{
    let {url} = req.params;

    URLy.findOne({'shorty':url},(err,data)=>{
        if (err){
            res.send("ERORRRRRR in Finding");
        } else {
            res.redirect(301,`http://${data.url}`);
        }

        
    })
})


module.exports = router;