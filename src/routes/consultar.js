const express = require('express');
const router = express.Router();
const productos = require('../Taller.json');
const pool =require('../database');
console.log(usuario)
router.get('/', async(req,res)=>{
    const produTodos = await pool.query('select * from productos ');
    //res.json(produTodos);
    const num1 = 'hola';
    console.log(num1);
    //res.render('productos/list',{produTodos});
    res.json(productos);
    //res.send('soy productos');
});
Console.log()