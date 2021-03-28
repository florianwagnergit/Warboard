import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-selection-menu',
  templateUrl: './player-selection-menu.component.html',
  styleUrls: ['./player-selection-menu.component.scss']
})
export class PlayerSelectionMenuComponent implements OnInit {

  gameId: string = '';

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
    this.gameId = this.boardService.getGameId();
  }

}
