/**
 * Created by yanwsh on 5/15/16.
 */
import {Component, DynamicComponentLoader, Injector, Input, ElementRef} from '@angular/core';
import {HomePage} from './rootComponents/HomePage';
import {ArticlePage} from './rootComponents/ArticlePage';

@Component({
    selector: 'microsite-app',
    template: `
        <div id="rootComponent"></div>
    `
})
export class AppComponent {
    @Input('root-component') rootComponent:string;
    constructor(dcl: DynamicComponentLoader, injector: Injector, elementRef: ElementRef){
        this.rootComponent = elementRef.nativeElement.getAttribute("root-component");
        switch(this.rootComponent){
            case "HomePage":
                dcl.loadAsRoot(HomePage, '#rootComponent', injector);
                break;
            case "ArticlePage":
                dcl.loadAsRoot(ArticlePage, '#rootComponent', injector);
                break;
        }
    }
}