import { Board } from './Board';
import { Player } from './Player';
import { v4 as uuidv4 } from 'uuid'; 

export class Game {

    gameId: string;
    board: Board;
    players: Player[];

    constructor() {
        this.gameId = uuidv4();
        this.board = new Board(30);
        this.players = [];
    }

    getGameId() {
        return this.gameId;
    }

    addPlayer() {
        this.players.push(new Player());
    }
    
    getPlayers() {
        return this.players;
    }

    getPlayer(playerId) {
        for(let player of this.players) {
            if(player.getPlayerId() === playerId) {
                return player;
            }
        }
        return false;
    }
}