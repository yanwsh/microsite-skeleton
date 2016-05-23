/**
 * Created by wensheng on 2016/5/22.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'logo-icon',
    template: `
        <div class="logo">
            <span [class]="iconClass"></span>
        </div>
    `
})
export class LogoIconComponent  implements OnInit {
    @Input('icon-class') iconClass: string;
    constructor(){
    }

    ngOnInit() {
        this.iconClass += " logo--icon";
    }
}