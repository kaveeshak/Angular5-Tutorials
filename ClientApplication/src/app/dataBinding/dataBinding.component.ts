import { Component } from '@angular/core';

@Component({
    selector: 'app-dataBinding',
    templateUrl: './dataBinding.component.html'
})
export class DataBindingComponent {

    age: number = 25;
    buttonClass = "btn btn-success";
    incrementNumber = 0;

    constructor() {
        
        setTimeout(() => {this.buttonClass = "btn btn-danger";}, 5000)
    }

    onIncrementButtonClick(eventInfo: Event) {

        this.incrementNumber += 1;
        console.log(eventInfo);
    }
}