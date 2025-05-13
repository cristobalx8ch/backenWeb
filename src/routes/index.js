const Router = require('express');

const productosRoutes = require('./productos.routes');
const clienteRoutes = require('./clientes.routes');
const provedoresRoutes = require('./provedores.routes');
const almacenRoutes = require('./almacen.routes');
const personalRoutes = require('./personal.route')


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

ruta.use('/productos', productosRoutes);
ruta.use('/cliente', clienteRoutes);
ruta.use('/provedor', provedoresRoutes);
ruta.use('/almacen', almacenRoutes);
ruta.use('/personal', personalRoutes);

module.exports = ruta;