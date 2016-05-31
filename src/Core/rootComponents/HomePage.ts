/**
 * Created by yanwsh on 5/17/16.
 */
import {Component} from '@angular/core';
import {BaseLayout} from '../layout/BaseLayout';
import {SlideshowOnlyComponent} from "../slideshow/slideshow.only.component"
import {slideshowSettings} from '../slideshow/slideshowSettings';
import {ArticleList} from "../../Article/grid/article-list";
import {ArticleGridComponent} from "../../Article/grid/article-grid.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'HomePage',
    template: `
        <BaseLayout>
            <div top>
                <div class="row">
                    <div class="col-xs-24">
                        <slide-show-only [settings]="slideSetting"></slide-show-only>
                    </div>
                </div>
                <article-grid [numOfCols]="3" [articles]="articles"></article-grid>
            </div>
            <div footer><footer></footer></div>
        </BaseLayout>
    `,
    directives: [BaseLayout, SlideshowOnlyComponent, ArticleGridComponent, FooterComponent]
})
export class HomePage {
    slideSetting: slideshowSettings;
    articles: ArticleList;
    constructor(){
        this.slideSetting = {
            slides: [
                {
                    id: 0,
                    imageUrl: "/images/One-Hit-Wonder-920x422-920x422.gif",
                    alt: "One-Hit-Wonder-920x422",
                    isActive: true,
                    caption: "Five One-Hit Wonders With Great Careers",
                    subCaption: "Respect the hitmakers. They may still be pumping out certified jams."
                },
                {
                    id: 1,
                    imageUrl: "/images/rap-on-late-night-tv-chance-920x422.png",
                    alt: "rap-on-late-night-tv",
                    isActive: false,
                    caption: "Late-Night TV Has Become Rap’s Most Important Stage",
                    subCaption: "The rap revolution will be televised."
                },
                {
                    id: 2,
                    imageUrl: "/images/post-malone-animation-920x422.gif",
                    alt: "post malone",
                    isActive: false,
                    caption: "Post Malone Changed What It Means To Be A Fan",
                    subCaption: "You don't get asked to tour with Bieber by accident. "
                }
            ]
        };

        this.articles = {
            articles: [
                {
                    id: 0,
                    shortTitle: "Destiny the taken king tips",
                    subtitle: "Get out your pen and pad, and let one of Destiny: The Taken King's best gamers put you on.",
                    imageUrl: "/images/destiny-the-taken-king-lead-374x251.jpg"
                },
                {
                    id: 1,
                    shortTitle: "Nessly atlanta rap",
                    subtitle: "Atlanta rapper Nessly puts us onto his favorite things.",
                    imageUrl: "/images/nessly-374x251.jpg"
                },
                {
                    id: 2,
                    shortTitle: "Atlanta art greg mike",
                    subtitle: "ATL street artist Greg Mike is bringing his nostalgic style to a streetball court downtown.",
                    imageUrl: "/images/greg-mike-1-374x251.jpg"
                }
            ]
        }
    }
}