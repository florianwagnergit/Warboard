import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill;
  @Output() selectedSkill = new EventEmitter;
  details = false;

  constructor(private board: BoardService) { }

  ngOnInit(): void {
  }

  selectSkill() {
    this.board.calculateSkillRange(this.board.getCurrentPlayer().getHero().getX(), this.board.getCurrentPlayer().getHero().getY(), this.board.getCurrentPlayer().getHero().getMovement());
    this.selectedSkill.emit(this.skill);
  }

  showDetails() {
    this.details = true;
  }

  hideDetails() {
    this.details = false;
  }

}
