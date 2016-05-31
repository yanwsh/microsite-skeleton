/**
 * Created by wensheng on 2016/5/30.
 */
import {Component, Input, OnInit} from '@angular/core';
import {NavbarSettings} from './NavbarSettings';

@Component({
    selector: 'navbar',
    template: `
        <nav class="navbar {{customClass}}">
          <ul class="nav navbar-nav">
            <li *ngFor="let nav of settings.nav" class="nav-item" [ngClass]="{active: nav.active}">
                <a class="nav-link"  href="{{nav.url}}">{{nav.name}}</a>
            </li>
          </ul>
        </nav>
    `,
    directives: []
})
export class NavbarComponent implements OnInit{
    @Input() customClass: string;
    @Input() settings: NavbarSettings;

    constructor(){
    }

    ngOnInit() {
        if(!this.customClass){
            this.customClass = "";
        }
    }
}