import { Injectable } from '@angular/core';
import { Player } from '../class/Player'
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  gameId: string;
  player: Player;
  players: Player[];
  ws: WebSocketSubject<any>;
  messageStream = new Subject();

  constructor(private http: HttpClient) { 
      this.player = new Player();
      this.players = [];
      // Init Websocket
      // https://github.com/ReactiveX/rxjs/issues/4166
      this.ws = webSocket({
        url: environment.WebsocketUrl
      });

      this.ws.subscribe((msg) => {
        console.log(msg);
        this.messageHandler(msg);
        this.messageStream.next(msg);
      }, (err) => console.error(err), () => console.warn('Completed!'));
  }

  createNewGame() {
    return this.http.get(environment.serverUrl + '/create-new-game');
  }

  joinGame(gameId, playerId) {
    return this.http.get(environment.serverUrl + '/join-game?gameId=' + gameId + '&playerId=' + playerId);
  }

  messageHandler(msg) {
    if(msg.action === 'set-player-id' && msg.playerId) {
      this.player.setPlayerId(msg.playerId);
    } else if(msg.action === 'set-game-id' && msg.gameId) {
      this.setGameId(msg.gameId);
    } else if(msg.action === 'add-player' && msg.playerId) {
      let player = new Player();
      player.setPlayerId(msg.playerId);
      this.addPlayer(player);
    }
  }

  setGameId(gameId) {
    this.gameId = gameId;
  }

  getGameId() {
    return this.gameId;
  }

  getPlayer() {
    return this.player;
  }

  setPlayers(players) {
    this.players = players;
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  getStream() {
    return this.messageStream;
  }

  sendChatMessage(message) {
    return this.http.post(environment.serverUrl + '/send-chat-message', {
      gameId: this.getGameId(),
      playerId: this.player.getPlayerId(),
      message: message
    });
  }

}
