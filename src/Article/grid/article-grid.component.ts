/**
 * Created by wensheng on 2016/5/29.
 */
import {Component, Input} from '@angular/core';
import {ArticleList} from "./article-list";
import {LoadmoreComponent} from '../btn/loadmore.component';

@Component({
    selector: 'article-grid',
    template: `
        <div class="row">
            <div *ngFor="let article of articlelist.articles" class="article-grid col-md-{{24 / numOfCols}} col-sm-12 col-xxs-24">
                <div class="article-grid__wrapper">
                    <div class="article-grid__container">
                        <img [src]="article.imageUrl" [alt]="article.title" class="img-fluid" />
                        <div class="article-grid--hover">
                            <div class="article-grid__bg"></div>
                            <div class="article-grid__detail">
                                <h1>{{article.shortTitle}}</h1>
                                <h3>{{article.subtitle}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xxs-24">
                <load-more></load-more>
            </div>
        </div>
    `,
    directives: [LoadmoreComponent]
})
export class ArticleGridComponent {
    @Input('articles') articlelist: ArticleList;
    @Input('numOfCols') numOfCols: number;
    constructor(){
    }
}