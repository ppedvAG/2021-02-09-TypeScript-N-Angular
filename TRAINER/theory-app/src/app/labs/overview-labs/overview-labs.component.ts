import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-labs',
  templateUrl: './overview-labs.component.html',
  styleUrls: ['./overview-labs.component.css']
})
export class OverviewLabsComponent implements OnInit {

  diamonds: string = 'diamonds'

  constructor() { }

  ngOnInit(): void {
  }

}
