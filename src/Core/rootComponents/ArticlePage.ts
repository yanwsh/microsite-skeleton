/**
 * Created by yanwsh on 5/17/16.
 */
import {Component} from '@angular/core';
import {BaseLayout} from '../layout/BaseLayout';
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'ArticlePage',
    template: `
        <BaseLayout>
            <div top>

            </div>
            <div footer><footer></footer></div>
        </BaseLayout>
    `,
    directives: [BaseLayout, FooterComponent]
})
export class ArticlePage {

}