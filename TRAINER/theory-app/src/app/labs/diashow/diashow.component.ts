import { Component, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styleUrls: ['./diashow.component.css']
})
export class DiashowComponent implements OnInit {

  @Input() images: string[] = []
  activeImg = 0
  intervalId!: any // any, damit die Prop mit NODEJS.Timeout kompatibel ist

  constructor() {
    console.log('Komponente instanziiert')
  }

  //   export declare interface OnInit {
  //     /**
  //      * A callback method that is invoked immediately after the
  //      * default change detector has checked the directive's
  //      * data-bound properties for the first time,
  //      * and before any of the view or content children have been checked.
  //      * It is invoked only once when the directive is instantiated.
  //      */
  //     ngOnInit(): void;
  // }
  ngOnInit(): void {
    console.log('Komponente initialisiert')
    this.intervalId = setInterval(() => {
      this.activeImg === 3 ? this.activeImg = 0 : this.activeImg++
    }, 2000)
  }


  //   export declare interface OnChanges {
  //     /**
  //      * A callback method that is invoked immediately after the
  //      * default change detector has checked data-bound properties
  //      * if at least one has changed, and before the view and content
  //      * children are checked.
  //      * @param changes The changed properties.
  //      */
  //     ngOnChanges(changes: SimpleChanges): void;
  // } 
  ngOnChanges(changes: any): void {
    console.log('Komponente geändert')
    console.log('changes', changes)
  }


  //   export declare interface OnDestroy {
  //     /**
  //      * A callback method that performs custom clean-up, invoked immediately
  //      * before a directive, pipe, or service instance is destroyed.
  //      */
  //     ngOnDestroy(): void;
  // }
  ngOnDestroy(): void {
    console.log('Komponente zerstört')
    clearInterval(this.intervalId)
  }
  // todo #12
}
