"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devConfig = {
    mode: 'development',
    host: 'localhost',
    wsshost: 'localhost',
    port: 8080,
    wssport: 8181,
    db: 'mongodb://localhost:27017/',
    header: { 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE' },
};
exports.prodConfig = {
    mode: 'production',
    host: '',
    wsshost: 'localhost',
    port: 'passenger',
    wssport: 8181,
    db: 'mongodb://localhost:27017/',
    header: { 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE' },
};
