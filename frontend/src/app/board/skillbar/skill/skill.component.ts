import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardService } from 'src/services/board.service';

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
  }

  showDetails() {
    this.details = true;
  }

  hideDetails() {
    this.details = false;
  }

}
