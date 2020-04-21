const router = require('express').Router();
const pool = require('../database');


/* /links_admin/admit_venta */

router.get('/adminVentaModificar',async(req,res)=>{
<<<<<<< HEAD

    res.render('admint_venta/adminVentaModificar')
});
router.get('/adminVentaProducto',async(req,res)=>{

    const Tablaproducto = await pool.query('select * from productos');
    res.render('admint_venta/adminVentaProducto',{Tablaproducto});
});
router.get('/adminVentaUsuario',async(req,res)=>{
    const Tablausuario = await pool.query('select * from Usuario');
    res.render('admint_venta/adminVentaUsuario',{Tablausuario})

=======
<<<<<<< HEAD

    res.render('admint_venta/adminVentaModificar')
});
router.get('/adminVentaProducto',async(req,res)=>{
    const producto = await pool.query('select * from productos');
    res.render('admint_venta/adminVentaProducto',{usuario});
=======
    res.render('admint_venta/adminVentaModificar')
});
router.get('/adminVentaProducto',async(req,res)=>{
    res.render('admint_venta/adminVentaProducto')
>>>>>>> ac8fa863929bf921d1dcaf5dc92ad3f034526539
});
router.get('/adminVentaUsuario',async(req,res)=>{
    res.render('admint_venta/adminVentaUsuario')
>>>>>>> aa76c122450ba3ab60d41a345efa9a38a1f30e51
});


// Trabajo 01/04/2014




module.exports = router;