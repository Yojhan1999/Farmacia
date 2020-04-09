const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require ('path');




//inicio
const app = express();
//configuracion
app.set('port',process.env.PORT || 5000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Variables globales
app.use((req,res,next)=>{
    next();
});
//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/index',require('./routes/index'));
app.use('/links_index',require('./routes/links_index'));
app.use('/admint_venta',require('./routes/links_admin'));
app.use('/customer_venta',require('./routes/links_customer'));
app.use('/employed',require('./routes/links_employed'));
app.use('/parcial',require('./routes/parcial'));

//public
app.use(express.static(path.join(__dirname,'public')));
// iniciar server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

