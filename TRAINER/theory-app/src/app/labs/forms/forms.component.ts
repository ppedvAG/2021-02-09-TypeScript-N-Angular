import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent implements OnInit {

  /* 
  Scrhitt 1: FromsModule anschließen
  Schritt 2: ngModel-Direktive bei Form-Controls
   */

  inputValue: any
  constructor() { }

  ngOnInit(): void {
    console.log('this.inputValue', this.inputValue)
  }

  handleInput() {
    console.log('this.inputValue', this.inputValue)
  }

  handleNgSubmit(formValue: any) {
    console.log('formValue', formValue)
  }

  handleColorInput(inp: any) {
    console.log('inp', inp)
  }

}
