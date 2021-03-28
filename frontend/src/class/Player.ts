import { Warrior } from "./classes/Warrior";
import { Mage } from "./classes/Mage";

export class Player {
    playerId: string;
    playerName: string;
    isReady: boolean;
    team: string;
    turn: boolean;
    hero: Mage | Warrior;

    constructor() {
        this.playerId = null;
        this.isReady = null;
        this.playerName = null;
        this.team = null;
        this.turn = false;
    }

    getPlayerId(): string {
        return this.playerId;
    }

    getPlayerName(): string {
        return this.playerName;
    }

    getIsReady() {
        return this.isReady;
    }

    getTeam(): string {
        return this.team;
    }

    getTurn(): boolean {
        return this.turn;
    }

    getHero() {
        return this.hero;
    }

    setPlayerName(name) {
        this.playerName = name;
    }

    setPlayerId(playerId) {
        this.playerId = playerId;
    }

    setIsReady(isReady) {
        this.isReady = isReady;
    }

    setPlayerTeam(team) {
        this.team = team;
    }

    setTurn(isTurn) {
        this.turn = isTurn;
    }

    setHero(hero) {
        this.hero = hero;
    }

}
