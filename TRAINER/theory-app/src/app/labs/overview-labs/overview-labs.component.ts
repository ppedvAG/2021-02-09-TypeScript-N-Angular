import { Component, OnInit } from '@angular/core';
import { DiashowComponent } from '../diashow/diashow.component'

@Component({
  selector: 'app-overview-labs',
  templateUrl: './overview-labs.component.html',
  styleUrls: ['./overview-labs.component.css']
})
export class OverviewLabsComponent implements OnInit {

  diamonds: string = 'diamonds'

  diashow: any = DiashowComponent

  constructor() { }

  ngOnInit(): void {
    console.log('this.diashow', this.diashow)
  }

  destroyDiashow() {
    this.diashow = null
  }

}
