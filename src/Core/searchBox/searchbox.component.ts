/**
 * Created by wensheng on 2016/5/27.
 */
import {Component, Input} from '@angular/core';
@Component({
    selector: 'search-box',
    template: `
        <div class="searchbox">
            <input type="text" class="form-control searchbox--input" placeholder="SEARCH" />
        </div>
    `
})
export class SearchBoxComponent {

}