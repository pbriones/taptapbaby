import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let audio = new Audio();
    audio.src = 'assets/uh.mp3';
    audio.play();
  }

}
