const router = require('express').Router();

router.get('/parcial',async(req,res)=>
{
    res.render('parcials/parcial');

    console.log(':D')
});
router.get('/Vista2',async(req,res)=>{
    res.render('parcials/Vista2')
});

module.exports = router;