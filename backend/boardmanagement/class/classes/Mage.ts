import { Lightningbolt } from '../abilites/Lightningbolt';
import { Move } from '../abilites/Move';
import { Hero } from '../Hero';

export class Mage extends Hero {

    movement: number;
    resetMovement: number;
    mana: number;

    constructor() {
        super();
        this.class = 'Mage';
        this.hp = 70;
        this.mana = 110;
        this.movement = 5;
        this.resetMovement = 5;
        this.abilities = [];
        this.abilities.push(new Move(), new Lightningbolt());
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

    getMana() {
        return this.mana;
    }
}
