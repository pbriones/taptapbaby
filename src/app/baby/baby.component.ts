import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let audio = new Audio();
    audio.src = "assets/laugh.mp3";
    audio.play();
  }
  goToRegistry(): void {
    location.href = 'https://www.amazon.com/baby-reg/2D8RVNVW24G8N';
  }
}
