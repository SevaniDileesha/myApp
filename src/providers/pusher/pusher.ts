import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
/*
  Generated class for the PusherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PusherProvider {


  constructor() {
      var pusher = new Pusher('PUSHER_KEY', {
        cluster: 'eu',
        encrypted: true,
      });
      this.channel = pusher.subscribe('chat');
    }
    channel;

    public init() {
      return this.channel;
    }

}
