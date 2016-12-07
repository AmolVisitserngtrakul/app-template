import AppCtrl from '../app/app.controller';

/* @ngInject */
export default class Router {
    
    constructor($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app');
        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'app/app.html',
                controller: AppCtrl,
                controllerAs: 'vm'
            });
    }
}