import WebSocket from 'ws';

const connections = new Map();

export function websocketLaunchServer() {
 
  const socket = new WebSocket.Server({ port: 3001 });
  
  socket.on('connection', (conn) => {
    // connections.set(conn.id, conn);
    console.log(conn);

    conn.on('disconnect', () => {

    });
    
    conn.on('msg', (msg) => {
      console.log(msg);
      conn.send( { msg: msg } );
    });

    // https://github.com/ReactiveX/rxjs/issues/4166
    conn.send('Welcome! Websocket User :)');

  });
}
