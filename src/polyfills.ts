/**
 * Created by yanwsh on 5/15/16.
 */
import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = 500;
    require('zone.js/dist/long-stack-trace-zone');
}