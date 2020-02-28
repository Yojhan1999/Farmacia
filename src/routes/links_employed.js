const router = require('express').Router();

router.get('/employed',async(req,res)=>
{
    res.render('employed/employed')
});


module.exports = router;