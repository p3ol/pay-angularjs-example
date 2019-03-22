angular
  .module('poool-example', [
    'ngRoute',
  ])
  .config(($routeProvider, $locationProvider) => {
    'ngInject';

    $routeProvider
      .when('/', { template: '<home></home>' })
      .when('/article/:id', { template: '<article></article>' })
      .otherwise({ redirectTo: '/' });

    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }
  });
