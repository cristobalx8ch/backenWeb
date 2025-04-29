const express = require('express');
const routes = require('./routes/routes.js');

const app = express();
const port = 5000;

app.use(routes);


app.listen(port, () => {
    console.log(`Servicio levantador: http://localhost:${port}`);
});