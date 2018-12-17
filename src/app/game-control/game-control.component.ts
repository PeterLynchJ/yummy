import { Component, OnInit } from '@angular/core';
const interval = 60;
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  count = 0;
  intervalRef;
  odds = [];
  evens = [];

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.intervalRef = setInterval(() => {
      this.count ++;
      this.count % 2 === 0 && (this.evens.push(this.count)) || (this.odds.push(this.count));
    }, interval);
  }

  onStopGame() {
    clearInterval(this.intervalRef);
  }

}
