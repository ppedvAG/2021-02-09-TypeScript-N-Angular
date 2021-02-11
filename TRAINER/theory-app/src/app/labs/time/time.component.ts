import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  //#region M011
  date!: Date;
  timeString: string = '';

  constructor() { }

  ngOnInit(): void {
    // this.intervalID = setInterval(this.tick, 1000) // funktioniert nicht
    // this.intervalID = setInterval(() => this.tick, 1000) // funktioniert nicht
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.date = new Date();
    this.timeString = this.date.toLocaleTimeString();
  }
  // LAB1 M011 // zu früh: events
  intervalID: any // todo #10

  stopTicking() {
    clearInterval(this.intervalID);
  }

  //#endregion M011



}
