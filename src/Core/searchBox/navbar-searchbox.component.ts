/**
 * Created by wensheng on 2016/5/27.
 */
import {Component, Input, ViewChild} from '@angular/core';
import {animationEvent} from "../utility/utility";
import * as $ from 'jquery';

@Component({
    selector: 'navbar-search-box',
    template: `
        <div class="navbar-searchbox hide" #root>
            <div class="row">
                <div class="col-md-1 col-md-offset-1" (click)="close()">
                    <span class="skeleton-icon skeleton-icon-close-round close-btn"></span>
                </div>
                <div class="col-md-12 col-md-offset-6">
                   <div class="input-group">
                      <input type="text" class="form-control navbar-searchbox--input" placeholder="Search" />
                      <span class="input-group-btn input-group-btn-green">
                        <button class="btn btn-secondary" type="button"><span class="skeleton-icon skeleton-icon-search"></span></button>
                      </span>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class NavbarSearchBoxComponent {
    @ViewChild('root') root: any;
    iconElement: any;
    open(){
        var ele = $(this.root.nativeElement);
        ele.removeClass("hide");
        ele.removeClass("fadeOutUp");
        ele.addClass("show");
        ele.addClass("fadeInDown");
        ele.one(animationEvent, ()=>{
            ele.removeClass("fadeInDown");
        });
    }

    close(){
        var ele = $(this.root.nativeElement);
        ele.removeClass("fadeInDown");
        ele.addClass("fadeOutUp");
        ele.one(animationEvent, ()=>{
            ele.removeClass("show");
            ele.removeClass("fadeOutUp");
            ele.addClass("hide");
        });
    }

    toggle(){
        var ele = $(this.root.nativeElement);
        (ele.hasClass("show"))? this.close(): this.open();
    }
}