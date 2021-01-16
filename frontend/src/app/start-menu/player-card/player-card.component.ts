import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Player } from '../../../class/Player'
import { Warrior } from '../../../class/classes/Warrior'
import { Mage } from 'src/class/classes/Mage';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;
  @Output() removePlayer = new EventEmitter();
  @Output() readyPlayer = new EventEmitter();

  // Template Variables
  playerName: string;
  class: string;
  team: string;
  userInfo: string;
  lockedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.playerName = 'Default';
    this.class = 'Warrior';
    this.team = 'top';
    this.userInfo = null;
    this.lockedIn = true;
  }

  removeThisPlayer() {
    this.removePlayer.emit(this.player.getPlayerId());
  }

  setClass(value) {
    this.class = value;
    if(value === 'Warrior') {
      this.player.setHero(new Warrior());
    } else if(value === 'Mage') {
      this.player.setHero(new Mage());
    }
  }

  lockIn() {
    if(this.class && this.playerName && this.team) {
      this.setClass(this.class);
      this.player.setIsReady(true);
      this.player.setPlayerName(this.playerName);
      this.player.setPlayerTeam(this.team);
      this.readyPlayer.emit(this.player);
    } else {
      this.userInfo = 'Please enter your class, name and team.'
    }

  }

  unlock() {
    this.player.setIsReady(false);
    this.readyPlayer.emit(this.player);
  }

}
