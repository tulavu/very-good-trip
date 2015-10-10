'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            /**
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to home
             * */
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'modules/core/views/login.html',
                    controller: 'LoginController'
                })
                .state('choixMode', {
                    url: '/choix-mode',
                    templateUrl: 'modules/core/views/choixMode.html',
                    controller: 'ChoixModeController'
                })

                // spontané
                .state('spontane', {
                    abstract: true,
                    url: '/spontane',
                    template: '<ui-view/>',
                    controller: 'SpontaneController'
                })
                .state('spontane.choixHumeur', {
                    parent: 'spontane',
                    url: '/choix-humeur',
                    templateUrl: 'modules/core/views/choixHumeur.html',
                    controller: 'ChoixHumeurController'
                })
                .state('spontane.choixDefi', {
                    parent: 'spontane',
                    url: '/choix-defi',
                    templateUrl: 'modules/core/views/choixDefi.html',
                    controller: 'ChoixDefiController'
                });
        }
    ]);
