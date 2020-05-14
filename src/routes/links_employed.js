const router = require('express').Router();
const pool = require('../database');

router.get('/empleado',async(req,res)=>{
    const tablaPedido = await pool.query('select * from pedido');
    res.render('employed/empleado',{tablaPedido})
});
router.get('/employed/eliminar/:id_pedido',async(req,res)=>{
    const {id_pedido} = req.params;
    await pool.query('delete from pedido where id_pedido = ?',[id_pedido]);
    res.redirect('/employed/cliente');
});
router.get('/holis',async(req,res)=>{
    res.render('employed/holis')
});
router.get('/Usuarios',async(req,res)=>{
    
    res.render('employed/Usuarios')
});
// agregar un comentario
router.post('/empleadoComentario',async(req,res)=>{
    const {comentario} = req.body;
    await pool.query(`insert into empleadoComen(comentario)
    values('${comentario}')`);
    res.redirect('/employed/holis')
});
// domicilio empleado
// listar terminos y condiciones


module.exports = router;
