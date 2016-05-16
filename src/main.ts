/**
 * Created by yanwsh on 5/15/16.
 */
import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './Core/app.component';

if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent);