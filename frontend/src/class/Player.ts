import { Hero } from "./Hero";

export class Player {
    playerId: string;
    playerName: string;
    isReady: boolean;
    team: string;
    turn: boolean;
    hero: Hero;

    constructor() {
        this.playerId = null;
        this.isReady = false;
        this.playerName = 'unnamed';
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

    setPlayerName(name) {
        this.playerName = name;
    }

    setPlayerId(playerId) {
        this.playerId = playerId;
    }

    setIsReady(isReady: boolean) {
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

    getHero(): Hero {
        return this.hero;
    }

}
