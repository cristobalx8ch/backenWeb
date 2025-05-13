const Router = require('express');
const ruta = Router();

ruta.get('/',(req, res) =>{
    res.send('ruta almacen');
});

ruta.get('/listas', (req,res) =>{
    res.send('ruta almacen/listas');
});

ruta.post('/', (req, res) =>{
    res.send('almacen agregado');
});

ruta.put('/:id',(req,res) =>{
    res.send(`almacen actualizado con el id ${req.params.id}`);
});

ruta.delete('/:id',(req, res)=>{
    res.send(`almacen  con ID: ${req.params.id} Fue eliminado `);
});

ruta.patch('/:id', (req, res) =>{
    res.send(`se actualizaco  varios  parametros de alamcen  con la id ${req.params.id}`);
});

module.exports = ruta;