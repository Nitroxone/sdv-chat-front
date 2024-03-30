import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message';
import { getTimecode } from '../util';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message!: Message;

  saveMessage() {
    this.message.timecode = getTimecode();
  }
}
