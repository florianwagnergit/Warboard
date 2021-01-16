export class Ability {
    name: string;     // Strike, Shoot
    description: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

}
