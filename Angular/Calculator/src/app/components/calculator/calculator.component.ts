import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1 = 0;
  number2 = 0;
  result = 0;
  screen = "0";
  num1Conseguido = false;
  suma = false;
  resta = false;

  getDigit(num: number) {
    if (!this.num1Conseguido) {
      this.num1Conseguido = true;
      this.number1 = num;
      this.screen = "";
      this.screen += this.number1;
    } else {
      this.number2 = num;
      this.screen += this.number2;
      this.num1Conseguido = false;
    }   
  }
  sum() {
    this.suma = true;
    this.resta = false;
    this.screen += "+";
  }
  rest() {
    this.resta = true;
    this.suma = false;
    this.screen += "-";
  }
  getResult() {
    
    if (this.suma) {
      this.result = this.number1 + this.number2;
    }
    if (this.resta) {
        this.result = this.number1 - this.number2;
    }
    this.screen += "=" + this.result;
  
  }
  clear() {
    
    this.screen = "";
  }
}
