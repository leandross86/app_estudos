'use strict';

const app = require('./bin/express');
const { Server } = require('http');
const server = require('http').Server(app);

let port = process.env.PORT || 3333;

server.listen(port, () => {
    console.log('Servidor do Leandro esta no ar!')
});