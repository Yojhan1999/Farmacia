const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/loginPedidos',async(req,res)=>{
    res.render('links_index/loginPedidos')
});
router.get('/loginAdmin',async(req,res)=>{
    res.render('admint_venta/holis');
});
router.get('/loginEmple',async(req,res)=>{
    res.render('employed/holis')
});
router.get('/logincliente',async(req,res)=>{

    res.render('customer/cliente')
});


router.post('/loginCliente',async(req,res)=>{

    const {correo,contra}=req.body;
    const login = await pool.query(`select * from usuario where correo = '${correo}' AND contra ='${contra}'`);
    const rol = login[0].id_rol;
    console.log(rol);
    if(rol == 1){
        //res.redirect(`/admint_venta/adminVentaProducto/${login[0].id_usuario}`)
        res.redirect('/admint_venta/adminVentaProducto')
    }
    if(rol == 2){
        res.redirect('/customer/cliente')
    }
    if(rol == 3){
        res.redirect('/employed/empleado')
    }
})
router.get('/registroPedido',async(req,res)=>{
    res.render('links_index/registroPedido')
});
router.post('/registropedido',async(req,res)=>{
    const {nombreUsuario,apellidoUsuario,edadUsuario,cedulaUsuario,telefonoUsuario,direccion,correo,contra,rol} = req.body;
    await pool.query(`insert into usuario(nombreUsuario,apellidoUsuario,edadUsuario,cedulaUsuario,telefonoUsuario,direccion,correo,contra,id_rol)
    values('${nombreUsuario}','${apellidoUsuario}','${edadUsuario}','${cedulaUsuario}','${telefonoUsuario}','${direccion}','${correo}','${contra}','${rol}')`);
    res.redirect('/');
})
router.get('/about',async(req,res)=>{
    res.render('links_index/about')
});
router.get('/productos',async(req,res)=>{
    res.render('links_index/productos')
});
router.get('/carrito',async(req,res)=>{
    res.render('links_index/carrito')
});
// recuperar contraseña 
router.get('/recordar',async(req,res)=>{
    res.render('links_index/recordar')
});
router.post('/recordarContra',async(req,res)=>{
    let email = [];
    const {
        correo,
        contra,
        contraRepetir
    } = req.body;

    const validarCorreo = await pool.query(`SELECT correo FROM usuario WHERE correo = '${correo}'`);
    for(var _email of validarCorreo){ email.push(_email.correo) };

    if(email.length > 0){
        if(contra == contraRepetir){
            await pool.query(`UPDATE usuario SET contra = '${contra}' WHERE correo = '${correo}'`);
            res.redirect('/links_index/loginPedidos')
        }
    }else{
        res.redirect('/links_index/recordar')
    }
});

// agregar un producto que pida un certificado por pdf o por archivo validar el archivo
// agg un comentario

router.post('/comentarios',async(req,res)=>{
    const {comentario} = req.body;
    await pool.query(`insert into comentarios(comentario)
    values('${comentario}')`);
    res.redirect('/')
});
// Listar otro para categorias de metodo de pago
// listar terminos y condiciones

module.exports = router;