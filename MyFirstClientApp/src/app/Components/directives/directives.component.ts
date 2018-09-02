import { Component } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styles: [`
        .offline{
            color: white
        }
    `]
})
export class DirectivesComponent{

    serverStatus;
    datesTimes = [];

    constructor(){

        this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
    }

    public onPrintTime(){
        
        this.datesTimes.push(new Date().toLocaleString());
    }
}