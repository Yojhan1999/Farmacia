const router = require('express').Router();
const pool = require('../database');

router.get('/facefet',async(req,res)=>{
    res.render('links_index/Facefet')
});