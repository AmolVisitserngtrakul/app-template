/// <reference path="../../typings/index.d.ts" />
/// <reference path="../scripts/typings/app.d.ts" />

import Application from './core/application';

window.createjs = {};

window.onload = e => {
    Application.init('app', [
        'ui.router',
        'ui.bootstrap',
        'templates'
    ]);
}
