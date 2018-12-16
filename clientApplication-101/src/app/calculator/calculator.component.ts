import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

    number1 = 0;
    number2 = 0;

    getSumOfNumbers() {
        
        return this.number1 + this.number2;
    }
}

