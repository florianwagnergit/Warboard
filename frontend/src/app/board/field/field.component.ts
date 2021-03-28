import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../../services/board.service';
import { Field } from '../../../class/Field';
import { Player } from 'src/class/Player';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() field: Field;
  playerName: string;
  isInRange;

  constructor(private board: BoardService) {  }

  ngOnInit(): void {}


  setSelected(): void {
  }

  hasHero() {
    return this.field.getPlayer();
  }

  getPlayerName() {
    if(this.field.getPlayer()) {
      return this.field.getPlayer().getPlayerName() + ' at';
    } else {
      return '';
    }
  }

  getTurn() {
    if(this.field.getPlayer()) {
      return this.field.getPlayer().getTurn();
    }
  }

}
