const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio
const app = express();

router.get('/',async(req,res) =>{
    res.render('index/indexFarmacia');
});

router.get('/indexFarmacia',(req,res)=>{
    res.render('index/indexFarmacia');
});


app.use(express.static('public'));
app.use(express.static('lib'))
module.exports = router;