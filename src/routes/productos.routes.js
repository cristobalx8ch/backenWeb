const Router = require('express');
const ruta = Router();

ruta.get('/', (req, res) => {
    res.send('Ruta de producto');
});

ruta.get('/filtro', (req, res) =>{
    res.send('filtro de productos');
});

ruta.post('/',(req, res) =>{
    console.log('Datos recibido:',req.body)
    res.send(`Provedor agregado`);
});

ruta.put('/:id',(req, res) => {
    res.send(`Producto con id:${req.params.id} actualizado `);
});

ruta.delete('/:id', (req, res) =>{
    const id = req.params.id;
    res.send(`El producto con ID ${id} fue eliminado`)
});

module.exports = ruta;