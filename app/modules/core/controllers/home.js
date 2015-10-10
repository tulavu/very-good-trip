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
          console.log("url : /login");
        }
    ]);
