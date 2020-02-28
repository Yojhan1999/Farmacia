const router = require('express').Router();


router.get('/customer_venta',async(req,res)=>
{
    res.render('customer_venta/customersVentaProducto')
});

router.get('/customer_venta',async(req,res)=>
{
    res.render('customer_venta/customerVentaProducto')
});


module.exports = router;