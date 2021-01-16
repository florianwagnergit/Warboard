import { Ability } from '../Ability';

export class Lightningbolt extends Ability {

    costType: string; // Energy, Mana, etc.
    castCost: number; // 5 Mana
    range: number;

    constructor() {
        super('Lightningbolt');
        this.costType = 'mana';
        this.castCost = 15;
        this.range = 10;
        this.description = 'Performs the Lightningstrike doing tons of damage.';
    }

    getRange() {
        return this.range;
    }

}
