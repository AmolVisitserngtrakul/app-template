import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

// Route
import Router from './router';

//Services
import jsonService from '../services/json.service';

export default class Application {

    app: ng.IModule;
    el: HTMLElement;
    name: string;
    dependencies: [string];

    static init(id, dependencies) {
        return new Application(document.getElementById(id), dependencies);
    }

    constructor(el: HTMLElement, dependencies: [string]) {
        this.el = el;
        this.name = el.id;
        this.dependencies = dependencies;
        
        this.isCordova() ? this.bindEvents() : this.start();
    }

    private isCordova() {
        return !(window.location.protocol.indexOf('http') > -1);
    }

    private bindEvents() {
        document.addEventListener('deviceready', e => this.start());
    }

    private start() {
        this.createApp();
    }

    private createApp() {
        this.app = angular.module(this.name, this.dependencies);
        this.app
            .service('jsonService', jsonService);
        this.registerModules();
        this.registerRoutes();
        this.bootstrap();
    }

    private registerModules() {
        this.app.run(($rootScope: ng.IRootScopeService) => {
        });
    }

    private registerRoutes() {
        this.app.config(($stateProvider, $urlRouterProvider) => {
            return new Router($stateProvider, $urlRouterProvider);
        });
    }

    private bootstrap() {
        angular.bootstrap(this.el, [this.name]);
    }
}