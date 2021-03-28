import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/services/board.service';
import { Message } from '../../class/Message';

@Component({
  selector: 'app-warboard-chat',
  templateUrl: './warboard-chat.component.html',
  styleUrls: ['./warboard-chat.component.scss']
})
export class WarboardChatComponent implements OnInit {

  messages: Object[];
  message = {
    from: '',
    time: '',
    msg: ''
  }

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.messages = [];
    this.boardService.getStream().subscribe((msg: any) => {
      if(msg.action === 'append-chat-message') {
        this.messages.push(new Message(msg.from, msg.message));
      }
    });
  }

  appendMessage() {
    if(this.message.msg) {
      this.message.from = this.boardService.getPlayer().getPlayerName();
      this.messages.push(new Message(this.message.from, this.message.msg));
      this.boardService.sendChatMessage(this.message).subscribe();
      this.message.msg = '';
    }
  }
}
