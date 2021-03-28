import { Hero } from './Hero';
import { v4 as uuidv4 } from 'uuid'; 

export class Player {
    playerId;
    playerName: string;
    playerHero: Hero;

    constructor(playerId) { 
        this.playerId = playerId;
    }

    getPlayerId() {
        return this.playerId;
    }

    setPlayerId(playerId) {
        this.playerId = playerId;
    }

    setPlayerName(playerName) {
        this.playerName = playerName;
    }

    setPlayerHero(playerHero) {
        this.playerHero = playerHero;
    }

    getPlayerName() {
        return this.playerName;
    }

    getPlayerHero() {
        return this.playerHero;
    }
}