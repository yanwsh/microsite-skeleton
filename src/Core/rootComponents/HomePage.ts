/**
 * Created by yanwsh on 5/17/16.
 */
import {Component} from '@angular/core';
import {BaseLayout} from '../layout/BaseLayout';
@Component({
    selector: 'HomePage',
    template: `
        <BaseLayout>
            <div top><h1>This is home page.</h1></div>
            <div footer>This is footer</div>
        </BaseLayout>
    `,
    directives: [BaseLayout]
})
export class HomePage {

}