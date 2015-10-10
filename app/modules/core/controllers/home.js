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
          console.log("url : /login");
          $location.path('/choix-mode');
        }
    ])
    .controller('ChoixModeController', ['$scope',
        function($scope) {
          console.log("url : /choix-mode");

        }
    ])
    .controller('ChoixHumeurController', ['$scope',
        function($scope) {
          console.log("url : /choix-humeur");

        }
    ]);
