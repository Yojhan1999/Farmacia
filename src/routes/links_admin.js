const router = require('express').Router();


/* /links_admin/admit_venta */

router.get('/adminVentaModificar',async(req,res)=>{
    res.render('admint_venta/adminVentaModificar')
});
router.get('/adminVentaProducto',async(req,res)=>{
    res.render('admint_venta/adminVentaProducto')
});
router.get('/adminVentaUsuario',async(req,res)=>{
    res.render('admint_venta/adminVentaUsuario')
});


module.exports = router;