import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import { Player } from 'src/class/Player';
import { Warrior } from 'src/class/classes/Warrior';
import { Mage } from 'src/class/classes/Mage';

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
    this.playerName = 'unnamed';
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
      this.boardService.joinGame(this.gameId, this.boardService.getPlayer().getPlayerId()).subscribe((result: any) => {
        this.boardService.setGameId(this.gameId);
        console.log(result.msg.players);
        for(let player of result.msg.players) {
          let playerClass = new Player();
          playerClass.setPlayerName(player.playerName ? player.playerName : 'unnamed');
          playerClass.setPlayerId(player.playerId ? player.playerId : 'missing player id');
          playerClass.setIsReady(player.isReady ? player.isReady : false);
          let hero;
          if (player.hero?.class) {
            if (player.hero?.class === 'Warrior') {
              hero = new Warrior();
            } else if (player.hero?.class === 'Mage') {
              hero = new Mage();
            }
          } else {
            hero = new Warrior();
          }
          hero.setClass(player.hero?.class ? player.hero.class : 'Warrior');
          playerClass.setHero(hero);
          this.boardService.addPlayer(playerClass);
          console.log(playerClass);
        }
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
      this.boardService.joinGame(this.boardService.getGameId(), this.boardService.getPlayer().getPlayerId()).subscribe((players) => {
        this.router.navigate(['player-selection']);
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }
}
