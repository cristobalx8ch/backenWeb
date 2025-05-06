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

module.exports = ruta;