angular.module('ibmTravel.cities.controller', [])

.controller('CitiesController', citiesController); 
            
citiesController.$inject = ['$stateParams', 'CitiesService', 'LoadingService'];
function citiesController($stateParams, CitiesService, LoadingService) {

    var vm = this;
    var destination = $stateParams.destination;
    
    var data = CitiesService.loadData(destination);
    var backgrounds = data.assets;
    
    vm.cityData = data.cityData;
    vm.getBackground = getBackground;
    
    function getBackground(index) {
        return backgrounds[index];    
    }
}