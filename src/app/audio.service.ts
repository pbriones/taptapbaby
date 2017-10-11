import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
  private laughAudio: any;
  private failAudio: any;
  constructor() {
    this.setupFail();
    this.setupLaugh();
   }
  playLaugh(): void {
    this.laughAudio.play();
  }

  playFail(): void {
    this.failAudio.play();
  }

  private setupLaugh(): void {
    this.laughAudio = new Audio();
    this.laughAudio.src = "assets/laugh.mp3";
  }

  private setupFail(): void {
    this.failAudio = new Audio();
    this.failAudio.src = 'assets/uh.mp3';
  }
}
