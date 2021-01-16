"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const connections = new Map();
function websocket(config, server) {
    const socket = socket_io_1.default(server, { origins: '*:*' }).listen(8181);
    socket.origins("*:*");
    socket.on('connection', (conn) => {
        connections.set(conn.id, conn);
        console.log('ID: ' + conn.id + ' connected via SocketIO');
        conn.on('disconnect', () => {
            connections.delete(conn.id);
            console.log('Current connections: ' + connections.size);
            console.log(conn.id + ' disconnected');
        });
        conn.on('msg', (msg) => {
            console.log(msg);
            conn.send(msg + 'recieved!');
        });
        conn.send('You are now connected to the server with Socket.io');
    });
}
exports.websocket = websocket;
function updatePizzaList() {
    // NOTIFY CONNECTIONS TO GET NEW LIST
    connections.forEach((conn) => {
        if (conn && conn.send) {
            conn.emit('updatePizzaList', 'List updated');
        }
    });
}
exports.updatePizzaList = updatePizzaList;
