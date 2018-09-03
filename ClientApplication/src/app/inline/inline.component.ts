import { Component } from '@angular/core';

@Component({
    selector: 'app-inline',
    template: `<div id="inlineText">This is an inline HTML template. This template
                  has been written over multiple lines. This has been styled from inline CSS.</div>`,
    styles: [`#inlineText{
        display: inline;
        background-color: orange;
    }`]
})
export class InlineComponent {

}