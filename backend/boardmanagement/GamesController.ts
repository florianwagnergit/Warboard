import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './class/Game';

export class GamesController {
    private games;
    private connections;
  
    constructor() { 
        this.games = new Map();
        this.connections = new Map();
    }

    websocketLaunchServer() {
        const socket = new WebSocket.Server({ port: 3001 });
        socket.on('connection', (conn) => {
            conn.id = uuidv4();
            this.connections.set(conn.id, conn);
            console.log('New Connection: ' + conn.id);
            conn.on('close', () => {
                console.log('Closed Connection: ' + conn.id);
            });
            conn.on('message', (msg) => {
                this.messageHandler(conn, msg);
            });
            conn.send(JSON.stringify({ action: 'set-player-id', playerId: conn.id }));
        });
    }


    async messageHandler(conn, msg) {
        try {
            msg = JSON.parse(msg);
            console.log('Message from ' + conn.id + ': ' + msg.action);
        } catch(err) {
            console.log('Parse Error:: invalid Message: ' + msg + ' from Connection: ' + conn);
        }
        try {
            if(msg.action === 'XXXXXXXXX' && msg.gameId) {
                if(this.games.has(msg.gameId)) {
                    // TODO
                } else {
                    conn.send(JSON.stringify({ action:'error', error: 'Error joining game: This game does not exist.' }));
                }
            }
        } catch (err) {
            conn.send(JSON.stringify({ action: 'error', error: '500 Internal server error' }));
        }
    }

    async createNewGame() {
        let game = new Game();
        this.games.set(game.getGameId(), game);
        return {
            status: 200,
            gameId: game.getGameId()
        }
    }

    async joinGame(req) {
        const gameId = req.query.gameId;
        const playerId = req.query.playerId;
        if(this.games.has(gameId)) {
            this.games.get(gameId).addPlayer(playerId);
            for(let player of this.games.get(gameId).getPlayers()) {
                if(player.getPlayerId() !== playerId) {
                    this.connections.get(player.getPlayerId()).send({ action: 'add-player', player: this.games.get(gameId).getPlayer(playerId)});
                }
            }
            return {
                status: 200,
                msg: this.games.get(gameId).getPlayers()
            }
        } else {
            return {
                status: 200,
                msg: 'Error joining game: invalid gameId'
            }
        }
    }
}