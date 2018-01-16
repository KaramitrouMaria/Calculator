// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'calculator' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'calculator.controllers' is found in controllers.js
(function () {
  'use strict';

  var calculator = angular.module('calculator', ['ionic', 'calculator.configuration', 'calculator.services','calculator.controllers']);

  calculator.configuration = angular.module('calculator.configuration', []);
  calculator.services = angular.module('calculator.services', []);
  calculator.controllers = angular.module('calculator.controllers', []);

  calculator.config(function($stateProvider, $urlRouterProvider) {
    
    // States setup
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.calculator', {
        url: '/calculator',
        views: {
          'menuContent': {
            templateUrl: 'templates/calculator.html',
            controller: 'CalculatorController'
          }
        }
      })

      .state('app.converter', {
        url: '/converter',
        params:{ baseExchangeId: 'EUR' },
        views: {
          'menuContent': {
            templateUrl: 'templates/converter.html',
            controller: 'ConverterController'
          }
        },
        resolve : {
            initializeExchangeRates: ['ConverterDataService', '$stateParams', 'ConverterService',
                function (ConverterDataService, $stateParams, ConverterService) {
                    return ConverterDataService.initializeExchangeRates($stateParams.baseExchangeId)
                      .then(function(){
                          ConverterService.constructExchangeRates(ConverterDataService.getExchangeRates());
                      });
                }
            ]
        }
      });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/calculator');
  });

  calculator.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

}() );

