/**
 * Created by wensheng on 2016/5/30.
 */
import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {NavbarSettings} from '../navbar/NavbarSettings';

@Component({
    selector: 'footer',
    template: `
        <div class="container-fluid footer">
            <div class="row">
                <div class="col-md-18 col-xxs-24">
                    <navbar customClass="navbar-with-split" [settings]="left_navSetting"></navbar>
                </div>
                <div class="col-md-6 col-xxs-24"><navbar customClass="navbar-pull-right" [settings]="right_navSetting"></navbar></div>
            </div>
        </div>
    `,
    directives: [NavbarComponent]
})
export class FooterComponent {
    left_navSetting: NavbarSettings;
    right_navSetting: NavbarSettings;
    constructor(){
        this.left_navSetting = {
            nav: [
                {id: 0, name:'Advertise', url: '/advertise', active: false},
                {id: 1, name:'About Us', url: '/aboutus', active: false},
                {id: 2, name:'Site Map', url: '/sitemap', active: false},
                {id: 3, name:'Legacy', url: '/legacy', active: false}
            ]
        };
        this.right_navSetting = {
            nav: [
                {id: 0, name:'@Complex Media', url: 'http://www.complex.com/', active: false}
            ]
        }
    }
}