import { Injectable } from '@angular/core';
import { Field } from '../../class/Field'
import { Player } from '../../class/Player'
import { Observable, Subject } from 'rxjs';
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  matrix: Field[][];
  players: Player[];
  currentField = new Subject();
  isInRageOfSkill = new Subject<Calculation>();
  ws;
  constructor() { }

  initBoard(width: number, height: number, players: Player[]): void {
    // Init Board
    this.matrix = [];
    this.players = players;
    // Create Matrix
    for (let x = 0; x < width; x++) {
      this.matrix.push([]);
      for (let y = 0; y < height; y++) {
        this.matrix[x].push(new Field(x, y));
      }
    }
    // Push Player Heros to Team Field
    let distanceTop = 0;
    let distanceBot = 0;
    for (let player of players) {
      if(player.getTeam() === 'top') {
        player.getHero().setX((Math.floor(width/2) - 5 + distanceTop));
        player.getHero().setY(0);
        this.matrix[(Math.floor(width/2) - 5 + distanceTop)][0].setPlayer(player);
        distanceTop += 2;
      } else if (player.getTeam() === 'bot') {
        player.getHero().setX((Math.floor(width/2) - 5 + distanceBot));
        player.getHero().setY((height - 1));
        this.matrix[(Math.floor(width/2) - 5 + distanceBot)][(height - 1)].setPlayer(player);
        distanceBot += 2;
      }
    }
    // Give Turn to Player 1
    this.players[0].setTurn(true);
    console.log('BOARD INITIALIZED');

    // Init Websocket
    // https://github.com/ReactiveX/rxjs/issues/4166
    this.ws = webSocket({
      url: 'ws://localhost:3001',
      deserializer: msg => msg
    });
    this.ws.subscribe((message) => {
      console.log(message);
    }, (err) => console.error(err), () => console.warn('Completed!'));
  }

  getMatrix(): Field[][] {
    return this.matrix;
  }

  getPlayers() {
    return this.players;
  }

  getPlayerAtPos(x, y): Player {
    return this.matrix[x][y].getPlayer();
  }

  nextTurn() {
    this.isInRageOfSkill.next({posX: 0, posY: 0, range: -1});
    for (let i = 0; i < this.players.length; i++) {
      if(this.players[i].getTurn()) {
        this.players[i].setTurn(false);
        // Refresh player if alive
        // this.players[i].refresh();
        // if dead pop this player
        console.log(i, this.players.length);
        if(i === this.players.length-1) {
          this.players[0].setTurn(true);
          break
        } else {
          this.players[i+1].setTurn(true);
          break;
        }
      }
    }
  }

  getCurrentPlayer(): Player {
    for (let player of this.players) {
      if(player.getTurn()) {
        return player;
      }
    }
  }

  setFieldSelection(field): void {
    this.currentField.next(field);
  }

  getFieldSelection(): Observable<any> {
    return this.currentField;
  }

  getIsInRangeOfSkill() {
    return this.isInRageOfSkill;
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



