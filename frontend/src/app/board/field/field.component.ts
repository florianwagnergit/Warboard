import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
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

  ngOnInit(): void {
    this.board.getFieldSelection().subscribe((field) => {
      if (this.field === field) {
        this.field.setSelected(true);
      } else {
        this.field.setSelected(false);
      }
    });

    this.board.getIsInRangeOfSkill().subscribe((calc) => {
      // reset
      this.isInRange = false;
      // validate
      const distanceX = calc.posX - this.field.getPosX();
      const distanceY = calc.posY - this.field.getPosY();
      const distance = Math.sqrt(((distanceX * distanceX) + (distanceY * distanceY)));
      if (distance > calc.range) {
          this.isInRange = false;
      } else {
        this.isInRange = true;
      }
    });
  }

  setSelected(): void {
    this.field.setSelected(true);
    this.board.setFieldSelection(this.field);
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
