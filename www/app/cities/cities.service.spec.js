describe('Testing CitiesService', function() {

    beforeEach(function() {
        angular.mock.module('ui.router');
        angular.mock.module('ibmTravel.mock.service');
        angular.mock.module('ibmTravel.cities.service');
    });
    

    var CitiesService;
    beforeEach(inject(function(_CitiesService_) {
        CitiesService = _CitiesService_;
    }));


    it('Should contain all factory functions defined', function() {

        var test = [];
        var keys = Object.keys(CitiesService);
        keys.forEach(function(attribute) {
            test.push(CitiesService[attribute]);
        });
        var expectation = new Array(test.length).fill(undefined);

        expect(test).not.toBe(expectation);
    });
    
    it('Should contain the return of loadData()', function() {

        var test = CitiesService.loadData();
        var expectation = {cityData: undefined, assets: undefined};

        expect(test).toEqual(expectation);
    });
});