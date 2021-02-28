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

  @Output() readyPlayer = new EventEmitter();

  // Template Variables
  playerName: string;
  class: string;
  userInfo: string;
  lockedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.playerName = 'Test Player';
    this.class = 'Warrior';
    this.userInfo = null;
    this.lockedIn = false;
  }

  setClass(value) {
    this.class = value;
  }

  lockIn() {
    if(this.class && this.playerName) {
      this.lockedIn = true;
      this.readyPlayer.emit( { playerName: this.playerName, class: this.class } );
    } else {
      this.userInfo = 'Please enter your class and your name.'
    }
  }

  unlock() {
    this.lockedIn = false;
    this.readyPlayer.emit(false);
  }

}
