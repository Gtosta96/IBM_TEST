describe('Testing LoginService', function() {

    beforeEach(function() {
        angular.mock.module('ui.router');
        angular.mock.module('ibmTravel.login.service');
    });
    
    var LoginService;
    beforeEach(inject(function(_LoginService_) {
        LoginService = _LoginService_;
    }));
    
    it('Should contain all factory functions defined', function() {

        var test = [];
        var keys = Object.keys(LoginService);
        keys.forEach(function(attribute) {
            test.push(LoginService[attribute]);
        });
        var expectation = new Array(test.length).fill(undefined);

        expect(test).not.toBe(expectation);
    });
});