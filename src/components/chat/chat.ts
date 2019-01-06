import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 } from 'uuid';
import { PusherProvider } from '../../providers/pusher/pusher';

interface Message {
  id: string;
  text: string;
  timeStamp?: Date;
  type: string;
}

@Component({
  selector: 'chat',
  templateUrl: 'chat.html',
})


export class ChatComponent implements OnInit {
  constructor(private http: HttpClient, private pusher: PusherProvider) {}
  messages: Array<Message> = [];
  message: string = '';
  lastMessageId;
  showEmojis = false;
  score = {
    tone: '',
    score: 0,
  };

  sendMessage() {
    if (this.message !== '') {
      this.lastMessageId = v4();
      this.showEmojis = false;

      const data = {
        id: this.lastMessageId,
        text: this.message,
        type: 'outgoing',
      };
      this.messages = this.messages.concat(data);
      this.message = '';
      this.http
       .post('http://739fedff.ngrok.io/messages', data)
      //this.http
      //.post('https://2f1e6177.ngrok.io/message.php',data)
        .subscribe((res: Message) => {});
    }
  }

  selectEmoji(e) {
    const emoji = String.fromCodePoint(e);
    this.message += ` ${emoji}`;
    this.showEmojis = false;
  }

  getClasses(messageType) {
    return {
      incoming: messageType === 'incoming',
      outgoing: messageType === 'outgoing',
    };
  }

  ngOnInit() {
    const channel = this.pusher.init();
    channel.bind('message', (data) => {
      if (data.id !== this.lastMessageId) {
        const message: Message = {
          ...data,
          type: 'incoming',
        };
        this.showEmojis = false;
        this.score = data.sentiment;
        this.messages = this.messages.concat(message);
      }
    });
  }
}
