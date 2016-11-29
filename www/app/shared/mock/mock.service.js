angular.module('ibmTravel.mock.service', [])

.factory('MockService', mockService);

function mockService() {
    return {
        getCitiesMock: getCitiesMock,
        getAssets: getAssets
    }

    function getCitiesMock(destination) {
        var mock = {
            "beaches": {
                "country": "Brazil",
                "city": "Fernando de Noronha",
                "details": [
                    "The archipelago of Fernando de Noronha is a UNESCO World Heritage Site with a delicate ecosystem.",
                    "Fernando de Noronha is full of unrivaled beaches and soothing warm waters filled with dolphins and sea turtles."
                ]
            },
            "romantic": {
                "country": "France",
                "city": "Paris",
                "details": [
                    "Everyone who visits Paris for the first time probably has the same punchlist of major attractions to hit: The Louvre, Notre Dame, The Eiffel Tower, etc.",
                    "Don’t forget the shopping—whether your tastes run to Louis Vuitton or Les Puces."
                ]
            },
            "paradise": {
                "country": "Mexico",
                "city": "Cancun",
                "details": [
                    "One of America's most preferred vacation destination - and there are several reasons why.",
                    "Cancun, with its golden beaches and perfect climate, is the premiere coastal destination in Mexico."
                ]
            }
        }

        return mock[destination];
    }

    function getAssets(destination) {
        var assets = {
            background: {
                beaches: ['city-fernando-noronha-background-1', 'city-fernando-noronha-background-2'],
                romantic: ['city-paris-background-1', 'city-paris-background-2'],
                paradise: ['city-cancun-background-1', 'city-cancun-background-2']
            }
        }
        
        return assets.background[destination];
    }
}