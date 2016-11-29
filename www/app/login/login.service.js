angular.module('ibmTravel.login.service', [])

.factory('LoginService', loginService);

loginService.$inject = ['$q', '$state'];
function loginService($q, $state) {
    return {
        doLogin: doLogin,
        doLogout: doLogout
    }
    
    function doLogin(credentials) {
        var deffered = $q.defer(),
            emptyObject = {};
        
        if(!(angular.equals(credentials, emptyObject))) {
            if(credentials.username == 'ibm' && credentials.password == '123456') {
                deffered.resolve({status: 'success'});
                $state.go('home.destination');
            } else {
                deffered.reject({status: 'fail', message: 'Wrong Credentials'});
            }
        } else {
            deffered.reject({status: 'fail', message: 'Fields Cannot be Null'});
        }
        
        return deffered.promise;
    }
    
    function doLogout() {
        $state.go('login');
    }
}