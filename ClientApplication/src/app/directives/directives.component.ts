import { Component } from "@angular/core";

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

    randomNumber = 0;
    isEvenRandomNumber = true;

    ngOnInit() {

        this.getRandomInteger();
    }

    getRandomInteger() {

        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        if ((this.randomNumber%2) == 0)
            this.isEvenRandomNumber = true;
        else
            this.isEvenRandomNumber = false;
    }

    getBackgroundColor() {

        if (this.isEvenRandomNumber)
            return 'green';
        else
            return 'red';
    }
}