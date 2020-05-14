const pool = require('../database');

const router = require('express').Router();

router.get('/cliente',async(req,res)=>{
    const tablaPedido = await pool.query('select * from pedido');
    res.render('customer/cliente',{tablaPedido})
});
router.get('/carrito',async(req,res)=>{
    const tablaCarrito = await pool.query('select * from productos');
    res.render('customer/carrito',{tablaCarrito})
});
router.post('/aggPedido',async(req,res)=>{
    const{id_producto,cantidad} = req.body;
    const newpedido ={id_producto,cantidad};
    await pool.query('insert into pedido set ?',[newpedido])
    res.redirect('/customer/carrito')
});
/*router.get('/cliente/:id_usuario',async(req,res)=>{
    const tablaPedido = await pool.query('select * from pedido');
    const {id_usuario} = req.params;
    const cliente = await pool.query(`select * from usuario 
    where id_usuario = '${id_usuario}'`);
    res.render('customer/cliente',{tablaPedido,cliente})
});*/
router.get('/customer/eliminar/:id_pedido',async(req,res)=>{
    const {id_pedido} = req.params;
    await pool.query('delete from pedido where id_pedido = ?',[id_pedido]);
    res.redirect('/customer/cliente');
});
router.get('/homeCliente',async(req,res)=>{
    res.render('customer/homeCliente')
})
router.get('/clienteProducto',async(req,res)=>{

    res.render('customer/clienteProducto')
});
router.post('/registroUsuario',async(req,res)=>{
    const {nombreUsuario,apellidoUsuario,edadUsuario,cedulaUsuario,telefonoUsuario,direccion,correo,contra,rol} = req.body;
    await pool.query(`insert into usuario(nombreUsuario,apellidoUsuario,edadUsuario,cedulaUsuario,telefonoUsuario,direccion,correo,contra,id_rol)
    values('${nombreUsuario}','${apellidoUsuario}','${edadUsuario}','${cedulaUsuario}','${telefonoUsuario}','${direccion}','${correo}','${contra}','${rol}')`);
    res.redirect('/customer/clienteProducto');
})
//----- Parciallllll
router.get('/facefet',async(req,res)=>{
    const tablaAmigos = await pool.query('select * from persona');
    res.render('customer/facefet',{tablaAmigos})
});

router.post('/facefet',async(req,res)=>{
    const {id_persona} = req.params;
    await pool.query('insert into persona(nombre,apellido,edad,cedula)values()',[id_persona]);
    res.redirect('customer/vista')
});
router.get('/vista2',async(req,res)=>{
    const tablaOtro= await pool.query('select * from amigos');
    res.redirect('customer/vista2',{tablaOtro})
});


// agregar un producto que pida un certificado por pdf o por archivo

//listar las mebresias y eliminar ,tambien mandar un mensaje al que genero la membresia

//consulta que me selecione el usuario por id y(membresia si es el caso) ,me muestre su info + un formurairo agg membresia

// agregar un comentario
router.post('/empleadoComentario',async(req,res)=>{
    const {comentario} = req.body;
    await pool.query(`insert into clienteComen(comentario)
    values('${comentario}')`);
    res.redirect('/customer/homeCliente')
});
//solicitar domicilio

// Listar otro para categorias de metodo de pago

// listar terminos y condiciones


module.exports = router;
