angular.module('ibmTravel.routes', [])

.config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    })
    
    .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'app/menu/menu.view.html',
        controller: 'MenuController',
        controllerAs: 'vm'
    })

    .state('home.destination', {
        url: '/destination',
        views: {
            'menuContent': {
                templateUrl: 'app/destination/destination.view.html'
            }
        }
    })

    .state('home.cities', {
        url: '/cities/:destination',
            views: {
                'menuContent': {
                    templateUrl: 'app/cities/cities.view.html',
                    controller: 'CitiesController',
                    controllerAs: 'vm'
                }
            }
        });

    $urlRouterProvider.otherwise('/login');
}