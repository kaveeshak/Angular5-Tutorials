import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment3',
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
    isShowParagraph = true;
    clickedEventsCount = [];

    onDisplayDetails() {
            this.isShowParagraph = !this.isShowParagraph;
            this.clickedEventsCount.push(this.clickedEventsCount.length + 1);
    }

    getBackgroundColor(clickedEvent) {
        return clickedEvent >= 5 ? 'blue' : '';
    }
}