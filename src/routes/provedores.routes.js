const Router = require('express');
const ruta = Router();


ruta.get('/', (req, res) => {
    res.send('ruta provedor');
});

ruta.get('/nombres', (req, res)=>{
    res.send('ruta provedor nombres');
});

ruta.get('/empresas', (req, res) => {
    res.send('ruta de empresas');
});

ruta.post('/',(req, res) =>{
    res.send(`Proveedor agregado:`);
});

ruta.put('/:id', (req, res) => {
    const id = req.params.id;
    const provedor = req.body;
    res.send(`proveedor con ID ${id} actualizada  
        nombre: ${provedor.nombre}| empreza: ${provedor.empreza}`);
});

ruta.delete('/:id', (req, res) =>{
    res.send(`Provededor con ID ${req.params.id} Eliminado`)
});

module.exports = ruta;