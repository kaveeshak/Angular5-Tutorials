import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InlineComponent } from './inline/inline.component';
import { SelectorComponent } from './selector/selector.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';
import { DirectivesComponent } from 'src/app/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InlineComponent, 
    SelectorComponent,
    DataBindingComponent,
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
