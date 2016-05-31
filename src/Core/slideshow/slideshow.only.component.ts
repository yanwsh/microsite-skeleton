/**
 * Created by wensheng on 2016/5/28.
 */
import {Component, Input, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {slideshowSettings} from './slideshowSettings';
import * as $ from 'jquery';

@Component({
    selector: 'slide-show-only',
    template: `
<div class="slideshow--only">
    <div #root class="carousel slide">
      <div class="carousel-inner" role="listbox">
        <div *ngFor="let slideshow of settings.slides" class="carousel-item" [ngClass]="{active: slideshow.isActive}">
            <img data-src="{{slideshow.imageUrl}}" alt="{{slideshow.alt}}">
        </div>
      </div>
      <a class="left carousel-control" (click)="prev()" role="button">
        <span class="skeleton-icon skeleton-icon-left-arrow icon-left" aria-hidden="true"></span>
        <span class="skeleton-icon-icon-bg icon-bg"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" (click)="next()" role="button">
        <span class="skeleton-icon skeleton-icon-right-arrow icon-right" aria-hidden="true"></span>
        <span class="skeleton-icon-icon-bg icon-bg"></span>
        <span class="sr-only">Next</span>
      </a>
      <ol class="carousel-indicators">
        <li *ngFor="let slideshow of settings.slides; let i = index" (click)="switchTo(i)" [ngClass]="{active: slideshow.isActive}"></li>
      </ol>
    </div>
    <div #subslider *ngIf="!hideCaption" class="carousel slide slideshow--only__caption-slider">
       <div class="carousel-inner" role="listbox">
        <div *ngFor="let slideshow of settings.slides" class="carousel-item" [ngClass]="{active: slideshow.isActive}">
              <div *ngIf="slideshow.caption && slideshow.subCaption" class="carousel-caption">
                <h1 *ngIf="slideshow.caption">{{slideshow.caption}}</h1>
                <p *ngIf="slideshow.subCaption">{{slideshow.subCaption}}</p>
              </div>
        </div>
      </div>
    </div>
</div>
    `,
    directives: []
})
export class SlideshowOnlyComponent implements AfterViewInit{
    @Input('settings') settings: slideshowSettings;
    @Input('hideCaption') hideCaption: boolean;
    @ViewChild('root') root: any;
    @ViewChild('subslider') sub: any;

    ngAfterViewInit() {
        var ele : any = $(this.root.nativeElement);
        ele.carousel();
        if(!this.hideCaption){
            var sub: any = $(this.sub.nativeElement);
            sub.carousel({interval: false});
            ele.on('slide.bs.carousel', (event: any)=>{
                if(event.direction == "left"){
                    sub.carousel('next');
                }else{
                    sub.carousel('prev');
                }
            });
        }
    }

    switchTo(index: number){
        var ele : any = $(this.root.nativeElement);
        ele.carousel(index);
    }

    prev(){
        var ele : any = $(this.root.nativeElement);
        ele.carousel('prev');
    }

    next(){
        var ele : any = $(this.root.nativeElement);
        ele.carousel('next');
    }
}