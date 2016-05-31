/**
 * Created by yanwsh on 5/18/16.
 */
import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {NavbarWithLogoComponent} from '../navbar/navbar-with-logo.component';
import {NavbarSettings} from '../navbar/NavbarSettings';
import {SocialSettings} from '../socialicon/SocialSettings';
import {SocialIconListComponent} from '../socialicon/social-icon-list.component';
import {SearchBoxComponent} from "../searchBox/searchbox.component";
import {NavbarSearchBoxComponent} from "../searchBox/navbar-searchbox.component";
import * as $ from 'jquery';

@Component({
    selector: 'BaseLayout',
    template: `
        <navbar-with-logo [settings]="navSetting" logo-icon-class="skeleton-icon skeleton-icon-greenlabel-logo">
            <navbar-left>
                <div class="hidden-sm-up"><search-box></search-box></div>
            </navbar-left>
            <navbar-right>
                <social-icon-list [settings]="socialSetting"></social-icon-list>
            </navbar-right>
        </navbar-with-logo>
        <navbar-search-box #searchbox></navbar-search-box>
        <div class="container container-wrap">
            <ng-content select="[top]"></ng-content>
        </div>
        <ng-content select="[footer]"></ng-content>
    `,
    directives: [NavbarWithLogoComponent, SocialIconListComponent, SearchBoxComponent, NavbarSearchBoxComponent]
})
export class BaseLayout {
    navSetting: NavbarSettings;
    socialSetting: SocialSettings;
    @ViewChild('searchbox') searchbox: NavbarSearchBoxComponent;
    constructor(){
        this.navSetting = {
            nav: [
                {id: 0, name:'SOUND', url: '/sound', active: false},
                {id: 1, name:'ACTION', url: '/action', active: false},
                {id: 2, name:'ART', url: '/art', active: false},
                {id: 3, name:'STYLE', url: '/style', active: false},
                {id: 4, name:'PLACES', url: '/places', active: false},
                {id: 5, name:'GAMING', url: '/gaming', active: false}
            ]
        };
        this.socialSetting = {
            socials: [
                {
                    id: 0,
                    name: "search",
                    className: "skeleton-icon skeleton-icon-search",
                    onClick: (event) => {
                        this.searchbox.toggle();
                    }
                },
                {
                    id: 1,
                    name: "facebook",
                    className: "skeleton-icon skeleton-icon-facebook",
                    clickUrl: "https://www.facebook.com/greenlabel",
                },
                {
                    id: 2,
                    name: "twitter",
                    className: "skeleton-icon skeleton-icon-twitter",
                    clickUrl: "https://twitter.com/greenlabel",
                },
                {
                    id: 3,
                    name: "instagram",
                    className: "skeleton-icon skeleton-icon-instagram",
                    clickUrl: "https://www.instagram.com/greenlabel/",
                },
                {
                    id: 4,
                    name: "youtube",
                    className: "skeleton-icon skeleton-icon-youtube",
                    clickUrl: "https://www.youtube.com/user/greenlabel",
                },
                {
                    id: 5,
                    name: "tumblr",
                    className: "skeleton-icon skeleton-icon-tumblr",
                    clickUrl: "http://greenlabel.tumblr.com/",
                },
                {
                    id: 6,
                    name: "google_plus",
                    className: "skeleton-icon skeleton-icon-google_plus",
                    clickUrl: "https://plus.google.com/+Greenlabel/",
                }
            ]
        };
    }

}