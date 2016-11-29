angular.module('ibmTravel.cities.service', [])

.factory('CitiesService', citiesService);

citiesService.$inject = ['$q', '$state', 'MockService'];
function citiesService($q, $state, MockService) {
    return {
        loadData: loadData
    }

    function loadData(destination) {
        return {
            cityData: MockService.getCitiesMock(destination),
            assets: MockService.getAssets(destination)
        };
    }
}