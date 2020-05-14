const router = require('express').Router();
const pool = require('../database');


/* /links_admin/admit_venta */
/* --------------------CrudProducto-----------------------------*/
//listar
/*
router.get('/adminVentaProduco/:id_usuario',(req,res)=>{
    res.render('admint_venta/adminVentaProducto')
});*/
router.get('/adminVentaProducto',async(req,res)=>{
    const Tablaproducto = await pool.query('select * from productos');
    res.render('admint_venta/adminVentaProducto',{Tablaproducto});
});


// Insertar Producto
router.post('/adminVentaProducto',async(req,res)=>{
   // console.log(req.body);
        const {nombreProducto,cantidadProducto,precioProducto,codigoProducto} = req.body;
        const newProducto = {nombreProducto,cantidadProducto,precioProducto,codigoProducto};
        await pool.query('insert into productos set ?',[newProducto]);
        res.redirect('/admint_venta/adminVentaProducto');
});
// Eliminar Producto
router.get('/delete/:id_producto',async(req,res)=>{
    const {id_producto} = req.params;
    await pool.query('delete from productos where id_producto = ?',[id_producto]);
    res.redirect('/admint_venta/adminVentaProducto');
});
/* --------------------crudUsuario-------------------------------------*/
//Listar Usuarios
router.get('/adminVentaUsuario',async(req,res)=>{
    const TablaUsuario = await pool.query('SELECT * from Usuario;');
    res.render('admint_venta/adminVentaUsuario',{TablaUsuario})
});
//Insertar Usuarios
router.post('/adminVentaUsuario',async(req,res)=>{
    const {nombreUsuario,apellidoUsuario,edadUsuario,cedulaUsuario,telefonoUsuario,direccion,correo,contra,rol} = req.body;
    await pool.query(`insert into usuario(nombreUsuario,apellidoUsuario,edadUsuario,cedulaUsuario,telefonoUsuario,direccion,correo,contra,id_rol)
    values('${nombreUsuario}','${apellidoUsuario}','${edadUsuario}','${cedulaUsuario}','${telefonoUsuario}','${direccion}','${correo}','${contra}','${rol}')`);
    res.redirect('/admint_venta/adminVentaUsuario');
});
// modificar
router.post('/modificar-producto/:id_producto', async(req,res)=>{
    const{id_producto} = req.params;
    const{nombreProducto,cantidadProducto,precioProducto,codigoProducto}=req.body;
    const modificarProducto = {nombreProducto,cantidadProducto,precioProducto,codigoProducto};
    const productoID = await pool.query('update productos set ? where id_producto =?',[req.body, id_producto]);
    res.redirect('/admint_venta/adminVentaProducto');
});

// Eliminar Usuario
router.get('/eliminar/:id_usuario', async (req,res) =>{
    const {id_usuario} = req.params;
    await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]);
    res.redirect('/admint_venta/adminVentaUsuario');
})

//ofertas del dia  agg productos

router.get('/agg',(req,res)=>{   
    res.render('admint_venta/agg')
});
router.post('/agregarTerminos', async(req,res)=>{
    const {termino} = req.body;
    await pool.query(`insert into terminos (termino) 
    values('${termino}')`)
    res.redirect('/admint_venta/agg')
});

// servicio al cliente 

// Listas mostrar los tarjetas de regalo 
//agregar otra categoria
router.post('/categoria', async(req,res)=>{
    const {nombreCate} = req.body;
    await pool.query(`insert into categoria(nombreCate)
    values('${nombreCate}')`);
    res.redirect('/admint_venta/agg')
});
// agregar una membresia por medio del mensaje que le salga al listar
// listar un producto que pida un certificado por pdf o por un archivo !! agg u eliminarlo
//listar los de membresia y eliminarlos
// agg al cliente o usuario como parte de la membresia
// agg un formulario agg para otro rol creando otra tabla que sea tipo rol
// listar comentarios delete,
router.get('/holis',async(req,res)=>{

    const tablaComentarios  = await pool.query('select * from comentarios');
    const comentariosCliente = await pool.query('select * from clienteComen');
    const comentariosEmpleado = await pool.query('select * from empleadoComen');
    res.render('admint_venta/holis',{tablaComentarios,comentariosCliente,comentariosEmpleado}); 

    //const comentariosCliente = await pool.query('select * from clienteComen');
    //res.render('admint_venta/holis',{comentariosCliente});
    
});





// agregar un comentario
// categoria oferta de la semana
// categoria oferta del mes
// listar el regisro de ventas del dia, mes y año
// agregar categoria para metodos de pago
// listar terminos y condiciones






module.exports = router;

