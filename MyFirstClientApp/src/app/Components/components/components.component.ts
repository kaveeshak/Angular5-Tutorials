import { Component } from '@angular/core';

@Component({
    selector: 'app-components',
    template: `
                <div id="inlineHtml">This is the Components class using inline HTML and CSS. </div>
                <br>
              `,
    styles: [
        `#inlineHtml { 
            display: inline; /* Highlights only the area with texts. */
            background-color: yellow;
        }`
    ]
})
export class ComponentsComponent {

}