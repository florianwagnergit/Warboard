import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/services/board.service';
import { Move } from 'src/class/abilites/Move';
import { Ability } from 'src/class/Ability';
import { Player } from 'src/class/Player';

@Component({
  selector: 'app-skillbar',
  templateUrl: './skillbar.component.html',
  styleUrls: ['./skillbar.component.scss']
})
export class SkillbarComponent implements OnInit {

  player: Player;
  skills: Ability[];
  selectionX: number;
  selectionY: number;
  selectedSkill: Ability;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  endTurn() {
  }

  selectSkill(skill) {
  }

  executeSkill() {
  }

}
