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
    .controller('LoginController', ['$scope',
        function($scope) {
          console.log('url : /login');
          //$location.path('/spontane/choix-humeur');

          $scope.validate = function(login, password) {
            console.log('login = ' + login + ', password = ' + password);
          };
        }
    ])
    // Décablé pour l'instant
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
