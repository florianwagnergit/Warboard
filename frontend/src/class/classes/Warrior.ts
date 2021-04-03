import { Strike } from '../abilites/Strike';
import { Move } from '../abilites/Move';
import { Hero } from '../Hero';

export class Warrior extends Hero {

    movement: number;
    resetMovement: number;
    rage: number;
    
    constructor() {
        super();
        this.class = 'Warrior';
        this.movement = 7;
        this.resetMovement = 7;
        this.hp = 120;
        this.rage = 50;
        this.abilities = [];
        this.abilities.push(new Move(), new Strike());
    }

    getMovement() {
        return this.movement;
    }

    setMovement(movement) {
        this.movement = movement;
    }

    resetResources() {
        this.movement = this.resetMovement;
    }
    
    getRage() {
        return this.rage;
    }
}
