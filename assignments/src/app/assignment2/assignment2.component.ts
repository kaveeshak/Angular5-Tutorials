import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment2',
    templateUrl: './assignment2.component.html'
})
export class Assignment2Component {

    username = '';

    getIsClearButtonDisabled() {

        return this.username === '' ? true : false;
    }

    onClearButtonClick() {

        this.username = '';
    }
}