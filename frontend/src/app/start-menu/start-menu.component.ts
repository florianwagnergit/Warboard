import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Player } from '../../class/Player'
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  boardSize: number;
  players: Player[];
  playerSelectionDone: boolean;
  gameStarted: boolean;

  @Output() gameStart = new EventEmitter();

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.players = [];
    this.players.push(new Player(uuidv4()));
    this.players.push(new Player(uuidv4()));
    this.boardSize = 30;
    this.playerSelectionDone = false;
    this.gameStarted = false;
  }

  addPlayer() {
    if(!this.playerSelectionDone) {
      this.players.push(new Player(uuidv4()));
    }
  }

  setBoardSize(size) {
    this.boardSize = size;
  }

  removePlayer(playerId) {
    if(this.players.length > 2) {
      this.players = this.players.filter((player) => { return player.getPlayerId() !== playerId; });
    }
  }

  readyPlayer(readyPlayer) {
    let readyCount = 0;
    this.playerSelectionDone = false;
    for(let player of this.players) {
      if(player.getPlayerId() === readyPlayer.getPlayerId()) {
        player = readyPlayer;
      }
      if(player.getIsReady()) {
        readyCount ++;
        if(readyCount === this.players.length) {
          this.playerSelectionDone = true;
        }
      }
    }
  }

  startGame() {
    console.log('START GAME ....');
    this.boardService.initBoard(this.boardSize, this.boardSize, this.players);
    this.gameStarted = true;
    this.gameStart.emit(true);
  }
}
