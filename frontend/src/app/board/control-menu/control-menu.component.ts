import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { Player } from '../../../class/Player'

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.scss']
})
export class ControlMenuComponent implements OnInit {

  players: Player[];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.players = [];
    this.players = this.boardService.getPlayers();
  }

}
