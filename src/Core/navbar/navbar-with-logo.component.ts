/**
 * Created by wensheng on 2016/5/21.
 */
import {Component, Input} from '@angular/core';
import {NavbarSettings} from './NavbarSettings';
import {LogoComponent} from "../logo/logo.component";
import {LogoIconComponent} from "../logo/logo-icon.component";

@Component({
    selector: 'navbar-with-logo',
    template: `
<nav class="navbar navbar-lg navbar-fixed-top navbar-with-logo navbar-green bg-black-shadow">
       <button type="button" class="navbar-toggler hidden-sm-up collapsed" data-toggle="collapse" data-target="#navbar-header" aria-expanded="false" aria-controls="navbar-header">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
       </button>
        <div class="navbar-logo">
          <logo [url]="logoUrl" alt="" *ngIf="logoUrl != null"></logo>
          <logo-icon [icon-class]="logoIconClass" *ngIf="logoIconClass != null"></logo-icon>
        </div>
        <div class="collapse navbar-toggleable-xs navbar-menu" id="navbar-header">
          <ng-content select="navbar-left"></ng-content>
          <ul class="nav navbar-nav">
            <li *ngFor="let nav of settings.nav" class="nav-item" [ngClass]="{active: nav.active}">
                <a class="nav-link"  href="{{nav.url}}">{{nav.name}}</a>
            </li>
          </ul>
        </div>
        <div class="navbar-right hidden-sm-down">
            <ng-content select="navbar-right"></ng-content>
        </div>
</nav>
    `,
    directives: [LogoComponent, LogoIconComponent]
})
export class NavbarWithLogoComponent {
    @Input() settings: NavbarSettings;
    @Input('logo-url') logoUrl: string;
    @Input('logo-icon-class') logoIconClass: string;
    constructor(){

    }
}