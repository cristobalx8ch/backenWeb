const { Router } = require('express');
const ruta = Router();

ruta.get('/', (req, res) => {
    res.send('ruta raiz');
});

ruta.get('/h', (req, res) => {
    res.send('ruta alternativa');
});

ruta.get('/hola', (req, res) => {
    res.send('ruta hola');
});

module.exports = ruta;