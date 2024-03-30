import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { getTimecode } from './util';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MessageComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  title = 'SdvChat';
  hasEnteredName = false;
  user: string = '';

  messages = [
    { contents: "Proutent", timecode: getTimecode() },
    { contents: "Bonjours", timecode: getTimecode() },
    { contents: "ChiasseCoulante", timecode: getTimecode() },
  ];

  setUsername(username: string) {
    if (!username) return;

    this.user = username;
    this.hasEnteredName = true;

    this.initChat();
  }

  initChat() {
    const topicData = {
      topicName: this.user
    }
    const subData = {
      topicName: this.user,
      subscriptionName: 'nicolas-sub'
    }

    this.http.post<any>('http://localhost:3000/topics', topicData);
    this.http.post<any>('http://localhost:3000/subscriptions', subData);
  }

  sendMessage(contents: string) {
    console.log("CALLED");
    if (!contents) return;

    this.messages.unshift({
      contents,
      timecode: getTimecode()
    });
  }
}
