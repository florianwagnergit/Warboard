import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
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
    this.player = this.boardService.getCurrentPlayer();
    this.skills = this.boardService.getCurrentPlayer().getHero().getAbilities();
    this.boardService.getFieldSelection().subscribe((field) => {
      this.selectionX = field.getPosX();
      this.selectionY = field.getPosY();
    });
    this.selectedSkill = this.skills[0];
  }

  endTurn() {
    this.player.getHero().resetResources();
    this.boardService.nextTurn();
    this.ngOnInit();
  }

  selectSkill(skill) {
    this.selectedSkill = skill;
  }

  executeSkill() {
    if (this.selectedSkill instanceof Move) {
      let result = this.boardService.movePlayer(this.player, this.selectionX, this.selectionY);
      console.log(result);
    } else {
      console.log('Skill not implemented yet...');
    }
  }

}
