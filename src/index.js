const express = require('express');
const morgan = require('morgan');
const exprhbs = require('express-handlebars');
const path = require ('path');

//inicio
const app = express();
//configuracion
app.set('port',process.env.PORT || 8000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exprhbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');

//peticiones
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Variables globales
app.use((req,res,next)=>{
    next();
});
//rutas

app.use('/notas',require('./routes/notas'));



app.listen(app.get('port'),()=>{

    console.log('server on port',app.get('port'));
});

 