const Router = require('express');
const ruta = Router();

ruta.get('/', (req, res) => {
    res.send('Ruta de producto');
});

ruta.get('/filtro', (req, res) =>{
    res.send('filtro de productos');
});


module.exports = ruta;