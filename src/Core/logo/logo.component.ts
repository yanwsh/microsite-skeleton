/**
 * Created by wensheng on 2016/5/21.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'logo',
    template: `
        <div class="logo">
            <div class="logo--wrapper">
                 <img [src]="url" [alt]="alt" />
            </div>
        </div>
    `
})
export class LogoComponent {
    @Input('url') url: string;
    @Input('alt') alt: string;
    constructor(){
    }
}