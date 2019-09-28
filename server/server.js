const express = require('express');

// add del package de socket y del modulo http con el que puede interactuar socket.io
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');
const app = express();

// creacion server (por alguna razon que no se se manda el server express app)
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// esta es la comunicacion del backend. io sera nuestra interfaz para informar que pasa en le backend
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});