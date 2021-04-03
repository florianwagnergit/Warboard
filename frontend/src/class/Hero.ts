import { Buff } from '../class/Buff';
import { Ability } from './Ability';

export class Hero {
    posX: number;
    posY: number;
    class: string;
    hp: number;
    buffs: Buff[];
    abilities: Ability[];

    constructor() {
        this.posX = null;
        this.posY = null;
        this.buffs = [];
    }

    getX(): number {
        return this.posX;
    }
    
    setX(posX) {
        this.posX = posX;
    }

    getY(): number {
        return this.posY;
    }

    setY(posY) {
        this.posY = posY;
    }

    getBuffs() {
        return this.buffs;
    }

    getAbilities() {
        return this.abilities;
    }

    getHp() {
        return this.hp;
    }

    setHp(hp) {
        this.hp = hp;
    }

    recieveDamage(damage) {
        this.hp -= damage;
    }

    getClass() {
        return this.class;
    }

    setClass(heroClass) {
        this.class = heroClass;
    }

}
