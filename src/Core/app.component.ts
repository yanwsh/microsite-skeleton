/**
 * Created by yanwsh on 5/15/16.
 */
import {Directive, Component, DynamicComponentLoader, Injector, Input, ElementRef, ViewContainerRef, ViewChild} from '@angular/core';
import {HomePage} from './rootComponents/HomePage';
import {ArticlePage} from './rootComponents/ArticlePage';

@Directive({ selector: 'root' })
export class RootDirective {
    @Input('template') set templateString(template: string){
        switch(template){
            case "HomePage":
                this.dcl.loadNextToLocation(HomePage, this.viewContainerRef);
                break;
            case "ArticlePage":
                this.dcl.loadNextToLocation(ArticlePage, this.viewContainerRef);
                break;
        }
    }
    constructor(private dcl: DynamicComponentLoader,el: ElementRef, private viewContainerRef: ViewContainerRef) {

    }
}

@Component({
    selector: 'microsite-app',
    template: `
        <root [template]="rootComponent"></root>
    `,
    directives: [RootDirective]
})
export class AppComponent {
    @Input('root-component') rootComponent:string;
    constructor(dcl: DynamicComponentLoader,elementRef: ElementRef, viewContainerRef: ViewContainerRef){
        this.rootComponent = elementRef.nativeElement.getAttribute("root-component");

    }
}