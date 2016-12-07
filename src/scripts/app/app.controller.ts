/* @ngInject */
export default class AppController {
    public test:string;
    public data:Object;

    constructor (private $scope: ng.IScope, private jsonService: IJsonService) {
        this.test = "TEST";

        jsonService.get().then((data:any)=>{
            this.data = data.data;
        });
    }
} 