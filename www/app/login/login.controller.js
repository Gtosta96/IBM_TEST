angular.module('ibmTravel.login.controller', [])

.controller('LoginController', loginController)

loginController.$inject = ['LoginService', 'LoadingService'];
function loginController(LoginService, LoadingService) {
    var vm = this;
    
    vm.credentials = {};
    vm.doLogin = doLogin;
    
    function doLogin() {
        LoadingService.show();
        LoginService.doLogin(vm.credentials)
        .then(loginDone)
        .catch(loginFail);

        
        function loginDone(response) {
            LoadingService.hide();
            console.log(response);
        }
        
        function loginFail(response) {
            LoadingService.hide();
            console.log(response);
        }
    }
}