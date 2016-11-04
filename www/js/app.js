angular.module('JUTC', ['ionic', 'JUTC.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
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
    controller: 'jutcCtrl'
  })
    .state('app.origin', {
      url: '/origin',
      views: {
        'menuContent': {
          templateUrl: 'templates/origin.html',
          controller: 'jutcCtrl'
        }
      }
    })

  .state('app.destination', {
    url: '/destination/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination.html',
        controller: 'jutcCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/origin');
});
