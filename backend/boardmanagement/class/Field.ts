import { Player } from './Player';

export class Field {
    x: number;
    y: number;
    player: Player;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}