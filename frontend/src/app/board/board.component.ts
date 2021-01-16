import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  matrix;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.matrix = this.boardService.getMatrix();
  }

}
