import { Ability } from '../Ability';

export class Strike extends Ability {
    
    costType: string; // Energy, Mana, etc.
    castCost: number; // 5 Mana
    range: number;

    constructor() {
        super('Strike');
        this.costType = 'rage';
        this.castCost = 10;
        this.range = 1.5;
        this.description = 'Performs the Strike doing massive damage.';
    }

    getRange() {
        return this.range;
    }

}
