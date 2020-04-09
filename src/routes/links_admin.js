const router = require('express').Router();
const pool = require('../database');


/* /links_admin/admit_venta */

router.get('/adminVentaModificar',async(req,res)=>{

    res.render('admint_venta/adminVentaModificar')
});
router.get('/adminVentaProducto',async(req,res)=>{

    const Tablaproducto = await pool.query('select * from productos');
    res.render('admint_venta/adminVentaProducto',{Tablaproducto});
});
router.get('/adminVentaUsuario',async(req,res)=>{
    const Tablausuario = await pool.query('select * from Usuario');
    res.render('admint_venta/adminVentaUsuario',{Tablausuario})

});


// Trabajo 01/04/2014




module.exports = router;