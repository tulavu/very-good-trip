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
    .controller('LoginController', ['$scope', '$location','$timeout',
        function($scope, $location, $timeout) {
          console.log('url : /login');
          //$location.path('/spontane/choix-humeur');

          $scope.validate = function(login, password) {
            console.log('login = ' + login + ', password = ' + password);
            $("#loading-overlay").css('display','block');
            $timeout(function(){
              $location.path('/spontane/choix-humeur');
              $("#loading-overlay").css('display','none');
            },2000)
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
    .controller('DetailsDefiController', ['$scope','$timeout', '$location',
        function($scope, $timeout, $location) {
          console.log('url : /details-defi');

          $scope.godefi = function(){
          $("#loading-overlay").css('display','block');
          $timeout(function(){
            $location.path('/spontane/confirmation-defi');
            $("#loading-overlay").css('display','none');
          },2000)
        }
        }
    ])
    .controller('ConfirmationDefiController', ['$scope', '$timeout',
        function($scope, $timeout) {
          console.log('url : /confirmation-defi');

          $scope.popup = function(){
          $timeout(function(){

            $("#loading-overlay").css('display','block');
            $("#popup").css('display','block');
          },2000)
        }
        }
    ])
    .controller('AttenteDefiConfirmeeController', ['$scope',
        function($scope) {
          console.log('url : /attente-defi-confirmee');
        }
    ]);
