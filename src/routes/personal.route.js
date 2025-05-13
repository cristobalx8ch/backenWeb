const Router = require('express');
const ruta = Router();


ruta.get('/',(req, res) =>{
    res.send('ruta de personal')
});

ruta.get('/perfil', (req, res) =>{
    res.send('perfil del personal');
});

ruta.post('/', (req, res) =>{
    res.send('se agrego una persona');
});

ruta.put('/:id', (req, res) => {
    res.send(`se actualiazo una pefil de persona con la ID:${req.params.id}`);
});
ruta.delete('/:id', (req,res) =>{
    res.send(`se elimino una persona con la ID: ${req.params.id}`)
});

module.exports = ruta;