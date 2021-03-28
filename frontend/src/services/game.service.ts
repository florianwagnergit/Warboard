import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Field } from '../class/Field'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  matrix: Field[][];
  currentField = new Subject();
  isInRageOfSkill = new Subject<Calculation>();

  constructor() { }

  initBoard() {

  }
  
  getMatrix() {
  }

  
  getPlayerAtPos(x, y) {
    return this.matrix[x][y].getPlayer();
  }

  nextTurn() {
  }

  setFieldSelection() {
  }

  getFieldSelection() {
  }

  getIsInRangeOfSkill() {
  }

  calculateSkillRange(posX, posY, range) {
    let toCalculate: Calculation = { posX: posX, posY: posY, range: range };
    this.isInRageOfSkill.next(toCalculate);
  }

  movePlayer(player, posX, posY) {
    // Check range
    let dx = posX - player.getHero().getX();
    let dy = posY - player.getHero().getY();
    let distance = Math.sqrt(((dx*dx)+(dy*dy)));
    if (player.getHero().getMovement() < distance) {
      return 'Target not in range.'
    } else {
      player.getHero().setMovement(player.getHero().getMovement().toFixed(2) - <any>distance.toFixed(2));
    }

    // If valid set Matrix and Hero and notify Fields
    this.matrix[player.getHero().getX()][player.getHero().getY()].removePlayer();
    this.matrix[posX][posY].setPlayer(player);
    player.getHero().setX(posX);
    player.getHero().setY(posY);
    this.calculateSkillRange(player.getHero().getX(), player.getHero().getY(), player.getHero().getMovement());
    return 'Moved Player.'
  }

}


interface Calculation {
  posX?: number;
  posY?: number;
  range?: number;
}

