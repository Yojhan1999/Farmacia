const router = require('express').Router();
const pool = require('../database');


/* /links_admin/admit_venta */

router.get('/adminVentaModificar',async(req,res)=>{

    res.render('admint_venta/adminVentaModificar')
});
router.get('/adminVentaProducto',async(req,res)=>{
    const producto = await pool.query('select * from productos');
    res.render('admint_venta/adminVentaProducto',{usuario});
});
router.get('/adminVentaUsuario',async(req,res)=>{
    res.render('admint_venta/adminVentaUsuario')
});


// Trabajo 01/04/2014




module.exports = router;