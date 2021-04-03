import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import { Player } from '../../class/Player'
import { Warrior } from 'src/class/classes/Warrior';

@Component({
  selector: 'app-player-selection-menu',
  templateUrl: './player-selection-menu.component.html',
  styleUrls: ['./player-selection-menu.component.scss']
})
export class PlayerSelectionMenuComponent implements OnInit {

  gameId: string = '';
  players: Player[];

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
    this.gameId = this.boardService.getGameId();
    this.players = this.boardService.getPlayers();
    let testPlayer = new Player();
    testPlayer.setPlayerName('TEST PLAYER');
    testPlayer.setIsReady(true);
    testPlayer.setPlayerId('TEST ID');
    testPlayer.setTeam('South');
    let hero = new Warrior();
    testPlayer.setHero(hero);
    this.players.push(testPlayer);
    this.boardService.getStream().subscribe((msg: any) => {
      if(msg.action === 'add-player') {
        this.players = this.boardService.getPlayers();
      }
    });
  }

  copyMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.gameId;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
