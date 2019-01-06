import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment2',
    templateUrl: './assignment2.component.html'
})
export class Assignment2Component {

    username = '';
    isDisabledClearButton = true;

    onInputFieldInteraction() {

        if (this.username != '' ) {
            this.isDisabledClearButton = false;
        }
        else {
            this.isDisabledClearButton = true;
        }
    }

    onClearButtonClick() {

        this.username = '';
        this.onInputFieldInteraction();
    }
}