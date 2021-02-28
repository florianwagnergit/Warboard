import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  playerName: string;
  class: string;
  joinGameColor = 'light';
  createGameColor = 'success';
  userInfo = ''
  gameId = ''


  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
    this.playerName = null;
    this.class = null;
  }

  gameIdChange() {
    if(this.gameId.length == 36) {
      this.joinGameColor = 'info';
    } else {
      this.joinGameColor = 'light';
    }
  }

  joinGame() {
    if(this.gameId.length == 36) {
      this.boardService.joinGame(this.gameId, this.boardService.getPlayerId()).subscribe((result: any) => {
        this.boardService.setGameId(this.gameId);
        console.log(result);
        this.boardService.setPlayers(result.msg);
        this.router.navigate(['player-selection']);
      }, (err) => {
        console.log(err);
        this.userInfo = 'Something went wrong, please try again.';
      });
    } else {
      this.userInfo = 'Invalid Game ID.';
    }

  }

  createNewGame() {
    this.boardService.createNewGame().subscribe((result: any) => {
      this.boardService.setGameId(result.gameId);
      console.log(result.gameId);
      this.boardService.joinGame(this.boardService.getGameId(), this.boardService.getPlayerId()).subscribe((players) => {
        console.log(players);
        this.router.navigate(['player-selection']);
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }
}
