export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('musicmap', {
      views: {
        'player': {
          templateUrl: 'views/player.html'
        },
        'content': {
          template: '<div ui-view></div>'
        }
      }
    })
    .state('musicmap.homepage', {
      url: '/',
      templateUrl: 'views/homepage.html'
    })
    .state('musicmap.continent', {
      url: '/continent/:name',
      templateUrl: 'views/continent.html'
    })
    .state('musicmap.country', {
      url: '/country/:alpha2',
      templateUrl: 'views/country.html'
    })
    .state('musicmap.article', {
      url: '/article/:path/:id',
      templateUrl: 'views/article.html'
    })
    .state('musicmap.category', {
      url: '/category/:name/:id',
      templateUrl: 'views/category.html'
    });
}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
