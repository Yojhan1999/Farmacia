const router = require('express').Router();


/* /links_admin/admit_venta */

router.get('/admint_venta',async(req,res)=>
{
    res.render('admint_venta/adminVentaModificar')
});
router.get('/admint_venta',async(req,res)=>
{
    res.render('admint_venta/adminVentaProducto')
});
router.get('/admint_venta',async(req,res)=>
{
    res.render('admint_venta/adminVentaUsuario')
});


module.exports = router;