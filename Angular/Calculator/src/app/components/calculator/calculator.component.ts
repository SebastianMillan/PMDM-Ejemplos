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
  screen = "";
  getDigit(num: number) {
    if (this.number1 == 0)
      this.number1 = num;
      this.screen.concat("{this.number2}");
    else {
      this.number2 = num;
      this.screen.concat("{this.number2}");
    }
      
  }
  sum(num1:number, num2:number) {
    this.result = num1 + num2;
    this.screen.concat("+")
  }
  rest(num1:number, num2:number) {
    this.result = num1 - num2;
    this.screen.concat("-")
  }
  getResult() {
    return this.screen.concat(result);
  }
}
