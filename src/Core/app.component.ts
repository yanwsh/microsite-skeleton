/**
 * Created by yanwsh on 5/15/16.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'microsite-app',
    template: `
        <h1>{{title}}</h1>
    `
})
export class AppComponent {
    title : string = "It works!";
}