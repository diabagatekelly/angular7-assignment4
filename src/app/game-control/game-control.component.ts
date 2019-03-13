import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() secCount = 0;
   intervalID;

  constructor() {}

  ngOnInit() {
  }

  onStartGame($event) {
   this.intervalID = setInterval(() => {
      this.secCount++;
    }, 1000);
  }

  onEndGame($event) {
    clearInterval(this.intervalID);
  }


}
