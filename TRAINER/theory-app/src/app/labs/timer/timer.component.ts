import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  /* 
  time kommt von oben 
  events start und tick werden nach oben geschickt und dort abgefangen
  bei 3 Sekunden muss eine Meldung ausgegeben werden
  */

  // todo: es gibt zwei EventEmitter

  @Input() time!: number;
  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() tick: EventEmitter<number> = new EventEmitter();
  @Output() end: EventEmitter<string> = new EventEmitter();

  remainingTime: number = 0;
  intervalId: any;
  // endMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.start.emit();
    this.remainingTime = this.time;
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      this.tick.emit(this.remainingTime);      
      if (this.remainingTime === 0) {
        this.end.emit('Zeit ist abgelaufen');
        clearInterval(this.intervalId);
      }
    }, 1000)
  }

}
