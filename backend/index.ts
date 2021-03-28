import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GamesController } from './boardmanagement/GamesController';

const app = express();

const gamesController = new GamesController();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.send('Hello!');
    res.end();
});

app.get('/create-new-game', (req, res) => {
    gamesController.createNewGame().then((result) => {
        res.status(result.status).json(result);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error: 'Error creating game!'});
        res.end();
    });
});

app.get('/join-game', (req, res) => {
    gamesController.joinGame(req).then((result) => {
        res.status(result.status).json(result);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(err.status).json(err.msg);
        res.end();
    });
});

app.post('/send-chat-message', (req, res) => {
    let broadcast = {
        action: 'append-chat-message',
        from: req.body.message.from,
        message: req.body.message.msg
    }
    gamesController.broadcastToGame(req.body.gameId, req.body.playerId, broadcast).then((result) => {
        res.status(result.status).json(result);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(err.status).json(err.msg);
        res.end();
    });
});

app.listen(3000, () => {
    console.log('app listening on localhost:3000');
    gamesController.websocketLaunchServer();
});
