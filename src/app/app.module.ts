import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GettingStartedComponent } from './Components/gettingStarted/gettingStarted.component';
import { ComponentsComponent } from './Components/components/components.component';
import { DataBindingsComponent } from './Components/dataBindings/dataBindings.component';
import { DirectivesComponent } from './Components/directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    ComponentsComponent,
    DataBindingsComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
