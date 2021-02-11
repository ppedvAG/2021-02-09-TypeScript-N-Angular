import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() value: number = 0
  @Input() suit: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {
    if (this.suit === 'hearts' || this.suit === 'diamonds') {
      return 'red'
    }
    return 'black'
  }
}
