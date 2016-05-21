/**
 * Created by yanwsh on 5/18/16.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'BaseLayout',
    template: `
        <div class="container">
            <ng-content select="[top]"></ng-content>
        </div>
        <ng-content select="[footer]"></ng-content>
    `
})
export class BaseLayout {

}