import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment3',
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
    isShowParagraph = true;
    timeStamps = [];

    onDisplayDetails() {
            this.isShowParagraph = !this.isShowParagraph;
            this.timeStamps.push(new Date());
    }

    getBackgroundColor(index) {
        return index >= 5 ? 'blue' : '';
    }
}