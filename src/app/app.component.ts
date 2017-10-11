import { Component, HostListener, HostBinding } from '@angular/core';
import { AudioService } from './audio.service';

const colors = ['blue', 'pink'];
const negative = [
  'Gotta be faster!',
  'Faster!'
]
const positive = [
  'Doing good...',
  'Keep it up!'
]
@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AudioService]
})  
export class AppComponent {
  failAudio: HTMLAudioElement;
  laughAudio: HTMLAudioElement;
  show = false;
  wait = false;
  total = 0;
  message = 'Tap (anywhere) fast!';
  private prev = 0;
  private max = 9;
  private counter = 0;
  private timer = 2 * 1000;
  private color;
  constructor(private audioService: AudioService) { }
  @HostListener('document:click', ['$event'])
  globalClick(event: MouseEvent): void {
    this.failAudio.pause();
    this.laughAudio.pause();
    event.preventDefault();
    if (this.counter === 9) return;
    this.toggleColor();
    this.total++;
    if (this.total === 20) { 
      this.flash();
      setTimeout(() => this.failAudio.play(), this.timer + 1);
      return;
    }
    const time = event.timeStamp;
    if (this.prev === 0 || time - this.prev > 190) {
      this.counter = 0;
    } else {
      this.counter++;
    }
    if (this.counter === 9) {
      this.flash();
      setTimeout(() => this.laughAudio.play(), this.timer + 1);
    }
    this.generateMessage(this.counter);
    this.prev = time;
  }

  toggleColor(): void {
    if (!this.color) {
      this.color = colors[0];
    } else {
      const index = colors.indexOf(this.color);
      this.color = index ? colors[0] : colors[1];
    }
    this.background = this.color;
  }

  flash() {
    this.wait = true;
    const interval = setInterval(() => this.toggleColor(), 200);
    setTimeout(() => {
      clearInterval(interval);
      this.background = colors[1];
      this.show = true;
    }, this.timer);
  }

  generateMessage(counter: number): void {
    const index = Math.round(Math.random());
    if (counter === 0) {
      this.message = negative[index];
    } else {
      this.message = positive[index];
    }
  }

  @HostBinding('class') background = 'split';
  private setupLaugh(): void {
    this.laughAudio = new Audio();
    this.laughAudio.src = "assets/laugh.mp3";
  }

  private setupFail(): void {
    this.failAudio = new Audio();
    this.failAudio.src = 'assets/uh.mp3';
  }
}
