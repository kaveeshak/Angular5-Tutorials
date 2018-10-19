import { Component } from '@angular/core';

@Component({
    selector: 'app-dataBinding',
    templateUrl: './dataBinding.component.html'
})
export class DataBindingComponent {

    age: number = 25;
    buttonClass = "btn btn-success";

    constructor() {
        
        setTimeout(() => {this.buttonClass = "btn btn-danger";}, 5000)
    }
}