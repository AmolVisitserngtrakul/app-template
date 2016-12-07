'use strict';

export default class jsonService implements IJsonService {

    static $inject = ['$http'];
    private url:string;

    constructor(
        private $http: ng.IHttpService
    ) {
        this.url = 'json/json.json';
    }

    get(): ng.IPromise<{}> {
        return this.$http({
            method: 'GET',
            url: this.url
        });
    }
}