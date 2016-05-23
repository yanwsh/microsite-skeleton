/**
 * Created by wensheng on 2016/5/22.
 */
import {Component, OnInit, Input} from '@angular/core';
import {SocialSettings} from './SocialSettings';
import {SocialIconComponent} from './social-icon.component';

@Component({
    selector: 'social-icon-list',
    template: `
        <div class="social-icon-list">
            <ul>
                <li *ngFor="let social of settings.socials">
                    <social-icon [settings]="social"></social-icon>
                </li>
            </ul>
        </div>
    `,
    directives: [SocialIconComponent]
})
export class SocialIconListComponent {
    @Input('settings') settings: SocialSettings;
    constructor(){

    }
}