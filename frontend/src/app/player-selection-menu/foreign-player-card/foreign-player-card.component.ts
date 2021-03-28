import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/services/board.service';
import { Player } from '../../../class/Player'

@Component({
  selector: 'app-foreign-player-card',
  templateUrl: './foreign-player-card.component.html',
  styleUrls: ['./foreign-player-card.component.scss']
})
export class ForeignPlayerCardComponent implements OnInit {
  
  class = 'oma';
  playerName = 'Mitspieler';
  players: Player[];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.players = this.boardService.getPlayers();
  }

}
