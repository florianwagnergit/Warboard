import { Player } from "./Player";

export class Field {
    posX: number;
    posY: number;
    isSelected: boolean;
    player: Player;
    characteristic: string;

    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.isSelected = false;
        this.player = null;
        this. characteristic = null;
    }

    getPosX()  {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getSelected() {
        return this.isSelected;
    }

    setSelected(isSelected) {
        this.isSelected = isSelected;
    }

    getPlayer() {
        return this.player;
    }

    setPlayer(player: Player) {
        this.player = player;
    }

    removePlayer() {
        this.player = null;
    };

    getCharacteristic() {
        return this.characteristic;
    }

    setCharacteristic(characteristic) {
        this.characteristic = characteristic;
    }

}