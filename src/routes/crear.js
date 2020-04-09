const express = require('express');
const router = express.Router();
const productos = require('../Taller.json');
const pool =require('../database');

router.get('/', async(req,res)=>{
    const produTodos = await pool.query('select * from productos');
    //res.json(produTodos);
    const num1 = 'hola';
    console.log(num1);
    //res.render('productos/list',{produTodos});
    res.json('crear/admint_venta',{produTodos});
    //res.send('soy productos');
});
router.get('/adminVentaProducto',async(req,res)=>{
    res.render('admint/adminVentaProducto');
});
router.post('/adminVentaProducto',async(req,res)=>{
    const {nombre,usuario,contrasena} = req.body;
    const newProdcuto ={nombre,usuario,contrasena};
    await pool.query('insert into productos set ?',[newProdcuto]);
    console.log(req.body);
    res.send("ok :'V")
});
Console.log()
module.exports = router;