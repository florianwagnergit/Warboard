import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
    res.end();
});

app.listen(3000, () => {
    console.log('app listening on localhost:3000');
});

/* Webserver listen
const server = app.listen(config.port, config.host, () => {
  console.log('Server is listening on: ' + config.host + ':' + config.port);
  
  // Websocket server erstellen
  websocket(config, server);
}); */
