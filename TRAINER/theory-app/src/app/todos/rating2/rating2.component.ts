import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating2',
  templateUrl: './rating2.component.html',
  styleUrls: ['./rating2.component.css']
})
export class Rating2Component implements OnInit {

  @Input() starsNumber: number = 0
  starsString: string = ''
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter()

  constructor() { 
    console.log('this.starsNumber', this.starsNumber)
    this.starsString = '*'.repeat(this.starsNumber);
    console.log('this.starsString', this.starsString)
  }

  ngOnInit(): void {
    console.log('this.starsNumber', this.starsNumber)
    this.starsString = '*'.repeat(this.starsNumber);
    console.log('this.starsString', this.starsString)
  }

  handleInput() {
    console.log('input event triggered');
    console.log('this.starsNumber aus Rating2', this.starsNumber)
    this.ratingChanged.emit(this.starsNumber)

  }
  

}
