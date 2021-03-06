// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
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

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })

          .state('app.login', {
            url: '/login',
            views: {
              'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
              }
            }
          })

          .state('app.home', {
            url: '/home',
            views: {
              'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
              }
            }
          })

          .state('app.noticias', {
            url: '/noticias',
            views: {
              'menuContent': {
                templateUrl: 'templates/noticias.html',
                controller: 'NoticiasController'
              }
            }
          })
          .state('app.beneficios', {
            url: '/beneficios',
            views: {
              'menuContent': {
                templateUrl: 'templates/beneficios_categorias.html',
                controller: 'BeneficiosController'
              }
            }
          })
          .state('app.beneficioslista', {
            url: '/beneficioslista',
            views: {
              'menuContent': {
                templateUrl: 'templates/beneficios_lista.html',
                controller: 'BeneficiosListaController'
              }
            }
          })
          .state('app.contenidoDetalle', {
            url: '/contenidoDetalle',
            views: {
              'menuContent': {
                templateUrl: 'templates/contenido_detalle.html',
                controller: 'ContenidoController'
              }
            }
          })

          .state('app.perfil', {
            url: '/perfil',
            views: {
              'menuContent': {
                templateUrl: 'templates/perfil.html',
                controller: 'PerfilController'
              }
            }
          })

      ;
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/login');
    });
