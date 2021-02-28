import express from 'express';
import cors from 'cors';
import { GamesController } from './boardmanagement/GamesController';

const app = express();

const gamesController = new GamesController();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello!');
    res.end();
});

app.get('/create-new-game', (req, res) => {
    gamesController.createNewGame().then((result) => {
        res.status(result.status).json(result);
        res.end();
    }).catch((result) => {
        res.status(500).json(result.gameId);
        res.end();
    });
});

app.get('/join-game', (req, res) => {
    gamesController.joinGame(req).then((result) => {
        res.status(result.status).json(result);
        res.end();
    }).catch((result) => {
        res.status(500).json(result);
        res.end();
    });
});

app.listen(3000, () => {
    console.log('app listening on localhost:3000');
    gamesController.websocketLaunchServer();
});
