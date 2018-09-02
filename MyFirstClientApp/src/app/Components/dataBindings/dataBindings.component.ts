import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'app-dataBindings',
    templateUrl: './dataBindings.component.html'
})
export class DataBindingsComponent{

    dataBindingsTitle = '09. Databinding';
    loadingProgressText = 'Connecting...';
    loadingProgress;
    isEnableButton = false;
    instanceName;
    instanceCreatedText;
    

    constructor(){

        this.getLoadingProgress();
    }

    public getLoadingProgress() {

        var i = 3;
        setInterval(() => {
            if (i == 0)
            {
                this.loadingProgressText = 'Please create an instance.';
                this.loadingProgress = '';
                this.isEnableButton = true;
            }
            else
            { 
                this.loadingProgress = i;
                i--;
            }
        }, 1000);
    }

    public onKeyboardType(event: any){

        this.instanceName = event.target.value;
    }

    public onCreateInstance(){

        console.log(event);
        this.instanceCreatedText = "The instance " + this.instanceName + " has been created.";
    }
}