const express = require('express');
const routes = express.Router();



routes.get('/agregar',(req,res)=>{
    const primer = ' hola primer';
    let segun ='segun';
    res.render('notas/agregar');
    console.log(segun)
})
routes.get('/modificar',(req,res)=>{
    const segundo = ' hola segundo';
    let terc ='tercer';
    res.render('notas/modificar');
    console.log(terc)
})
routes.get('/eliminar',(req,res)=>{
    const tercero = ' hola tercero';
    let cuart ='segun';
    res.render('notas/eliminar');
    console.log(cuart)
})
routes.get('/consultar',(req,res)=>{
    const cuarto = ' hola cuarto';
    let quin ='quin';
    res.render('notas/consultar');
    console.log(quin)
})

module.exports = routes;