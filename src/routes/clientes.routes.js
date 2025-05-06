const Router = require('express');
const ruta = Router();

ruta.get('/', (req, res) => {
    res.send('ruta de cliente');
});

ruta.get('/perfil', (req, res) =>{
    res.send('perfil del cliente');
});

module.exports = ruta;