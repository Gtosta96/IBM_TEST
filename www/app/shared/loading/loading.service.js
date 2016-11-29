(function() {
    'use strict';
    
    angular.module('ibmTravel.loading.service', [])
    .factory('LoadingService', loadingService);
    
    loadingService.$inject = ['$ionicLoading'];
    function loadingService($ionicLoading) {
        return {
            show: show,
            hide: hide
        };

        function show() {
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        function hide() {
            $ionicLoading.hide();
        }
    };
})();