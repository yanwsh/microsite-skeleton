/**
 * Created by yanwsh on 5/18/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {NavbarWithLogoComponent} from '../navbar/navbar-with-logo.component';
import {NavbarSettings} from '../navbar/NavbarSettings';
import {SocialSettings} from '../socialicon/SocialSettings';
import {SocialIconListComponent} from '../socialicon/social-icon-list.component';

@Component({
    selector: 'BaseLayout',
    template: `
        <navbar-with-logo [settings]="navSetting" logo-icon-class="skeleton-icon skeleton-icon-greenlabel-logo">
            <navbar-right>
                <social-icon-list [settings]="socialSetting"></social-icon-list>
            </navbar-right>
        </navbar-with-logo>
        <div class="container-fluid">

            <ng-content select="[top]"></ng-content>
        </div>
        <ng-content select="[footer]"></ng-content>
    `,
    directives: [NavbarWithLogoComponent, SocialIconListComponent]
})
export class BaseLayout {
    navSetting: NavbarSettings;
    socialSetting: SocialSettings;
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
                    onClick: () => {
                        console.log("search clicked");
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