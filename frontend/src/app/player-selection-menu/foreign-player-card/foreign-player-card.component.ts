import { Component, OnInit } from '@angular/core';
import { Warrior } from 'src/class/classes/Warrior';
import { BoardService } from 'src/services/board.service';
import { Player } from '../../../class/Player'

@Component({
  selector: 'app-foreign-player-card',
  templateUrl: './foreign-player-card.component.html',
  styleUrls: ['./foreign-player-card.component.scss']
})
export class ForeignPlayerCardComponent implements OnInit {
  
  players: Player[];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    // this.players = this.boardService.getPlayers();
    this.players = this.createDummyPlayers(3)
  }

  createDummyPlayers(amount) {
    let players: Player[] = [];
    for (let i=0; i<amount; i++) {
      let player = new Player();
      let warrior = new Warrior();
      player.setPlayerId('DUMMY ID ' + i);
      player.setIsReady(true);
      player.setPlayerName('Dummy name ' + i);
      player.setPlayerTeam(i % 2 ? 0 : 1);
      player.setHero(warrior);
      players.push(new Player())
    }
    return players;
  }

}
