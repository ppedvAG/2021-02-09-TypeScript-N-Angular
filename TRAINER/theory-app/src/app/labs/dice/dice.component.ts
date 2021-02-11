import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  zufallsZahl!: number;
  info: string = '';

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  wuerfeln() {
    this.zufallsZahl = Math.ceil(Math.random()*6)
    this.info = `Gewürfelt! Es ist eine `
  }

}
