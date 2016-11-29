angular.module('ibmTravel.menu.controller', [])

.controller('MenuController', menuController); 

menuController.$inject = ['LoginService'];
function menuController(LoginService) {

    var vm = this;
    vm.doLogout = LoginService.doLogout;
}