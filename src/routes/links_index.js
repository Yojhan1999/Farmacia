const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

router.get('/loginPedidos',async(req,res)=>{
    res.render('links_index/loginPedidos')
});
router.get('/registroPedido',async(req,res)=>{
    res.render('links_index/registroPedido')
});
router.get('/recordar',async(req,res)=>{
    res.render('links_index/recordar')
});
router.get('/about',async(req,res)=>{
    res.render('links_index/about')
});
router.get('/productos',async(req,res)=>{
    res.render('links_index/productos')
});
router.get('/carrito',async(req,res)=>{
    res.render('links_index/carrito')
});
module.exports = router;