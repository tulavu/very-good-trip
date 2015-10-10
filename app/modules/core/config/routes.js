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
                    templateUrl: 'modules/core/views/0-home.html',
                    controller: 'HomeController'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'modules/core/views/1-login.html',
                    controller: 'LoginController'
                })
                .state('choixMode', {
                    url: '/choix-mode',
                    templateUrl: 'modules/core/views/2-choixMode.html',
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
                    templateUrl: 'modules/core/views/3-choixHumeur.html',
                    controller: 'ChoixHumeurController'
                })
                .state('spontane.choixDefi', {
                    parent: 'spontane',
                    url: '/choix-defi',
                    templateUrl: 'modules/core/views/4-choixDefi.html',
                    controller: 'ChoixDefiController'
                })
                .state('spontane.detailsDefi', {
                    parent: 'spontane',
                    url: '/details-defi',
                    templateUrl: 'modules/core/views/5-detailsDefi.html',
                    controller: 'DetailsDefiController'
                })
                .state('spontane.confirmationDefi', {
                    parent: 'spontane',
                    url: '/confirmation-defi',
                    templateUrl: 'modules/core/views/6-confirmationDefi.html',
                    controller: 'ConfirmationDefiController'
                })
                .state('spontane.attenteDefiConfirmee', {
                    parent: 'spontane',
                    url: '/attente-defi-confirmee',
                    templateUrl: 'modules/core/views/7-attenteDefiConfirmee.html',
                    controller: 'AttenteDefiConfirmeeController'
                });
        }
    ]);
