/**
 * Created by wensheng on 2016/5/22.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Social} from './SocialSettings';

@Component({
    selector: 'social-icon',
    template: `
        <div class="social-icon">
            <div [class]="settings.className" (click)="onClick($event)">
                <div class="sr-only">{{settings.name}}</div>
            </div>
        </div>
    `,
    directives: []
})
export class SocialIconComponent implements OnInit{
    @Input('settings') settings: Social;
    target: string;
    constructor(){
    }

    ngOnInit(){
        this.target = this.settings.target || "_blank";
    }

    onClick($event: any){
        if(this.settings.clickUrl){
            window.open(this.settings.clickUrl, this.target);
        }
        else if(this.settings.onClick){
            this.settings.onClick($event);
        }
    }
}