'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('HomeController', ['$scope',
        function($scope) {

        }
    ])
    .controller('LoginController', ['$scope','$location',
        function($scope, $location) {
          console.log('url : /login');
          $location.path('/choix-mode');
        }
    ])
    .controller('ChoixModeController', ['$scope',
        function($scope) {
          console.log('url : /choix-mode');

        }
    ])
    .controller('SpontaneController', ['$scope',
        function($scope) {
          console.log('controller : spontane');
          console.log('niveauHumeur = ' + $scope.niveauHumeur);
        }
    ])
    .controller('ChoixHumeurController', ['$scope',
        function($scope) {
          console.log('url : /choix-humeur');
          console.log('niveauHumeur = ' + $scope.niveauHumeur);

          // cablage choix-defi ou attente-defi-confirmee
        }
    ])
    .controller('ChoixDefiController', ['$scope',
        function($scope) {
          console.log('url : /choix-defi');
        }
    ])
    .controller('DetailsDefiController', ['$scope',
        function($scope) {
          console.log('url : /details-defi');
        }
    ])
    .controller('ConfirmationDefiController', ['$scope',
        function($scope) {
          console.log('url : /confirmation-defi');
        }
    ])
    .controller('AttenteDefiConfirmeeController', ['$scope',
        function($scope) {
          console.log('url : /attente-defi-confirmee');
        }
    ]);
