import { Component, OnInit } from '@angular/core';
import { DiashowComponent } from '../diashow/diashow.component'

@Component({
  selector: 'app-overview-labs',
  templateUrl: './overview-labs.component.html',
  styleUrls: ['./overview-labs.component.css']
})
export class OverviewLabsComponent implements OnInit {

  //#region CARDS
  diamonds: string = 'diamonds'
  //#endregion CARDS

  constructor() { }

  //#region DIASHOW
  diashow: any = DiashowComponent
  ngOnInit(): void {
    console.log('this.diashow', this.diashow)
  }
  destroyDiashow() {
    this.diashow = null
  }
  //#endregion DIASHOW

  //#region TIMER
  startMessage: string = '';
  tickMessage: string = '';
  threeSecondsMessage: string = ''
  endMessage: string = '';

  handleStart() {
    this.startMessage = 'Timer gestartet';
  }
  handleTick(seconds: number) { // anders als bei DOM-Events ist dieses Event kein komplexes Objekt, sondern kann auch eine Primitive sein
    this.tickMessage = `Geblieben: ${seconds}`;
    if (seconds === 3)
      this.threeSecondsMessage = '3 Sekunden geblieben'
  }
  handleEnd(msg: string) {
    this.endMessage = msg;
  }
  //#endregion TIMER
}
