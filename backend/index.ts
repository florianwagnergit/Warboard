import express from 'express';
import { websocketLaunchServer } from './websocket';

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
    res.end();
});

app.get('/connect', (req, res) => {

});

const server = app.listen(3000, () => {
    console.log('app listening on localhost:3000');
    websocketLaunchServer();
});
