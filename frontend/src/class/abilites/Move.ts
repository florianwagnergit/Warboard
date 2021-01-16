import { Ability } from '../Ability';

export class Move extends Ability {
    
    costType: string; // Energy, Mana, etc.
    castCost: number; // 5 Mana

    constructor() {
        super('Move');
        this.costType = 'movement';
        this.description = 'Performs movement to selected location.';
    }

}
