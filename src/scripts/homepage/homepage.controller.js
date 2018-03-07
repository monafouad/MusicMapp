var HomepageController = function ($rootScope, $scope, $http, $state, Settings) {
  /**
   * Initialize variables.
   */
  $scope.featuredArticles = [];
  $scope.homepageArticlesMode = 'featured';

  /**
   * Default meta
   */
  $rootScope.meta = {
    'title': 'MusicMap',
    'image': null,
    'description': 'MusicMap'
  };

  /**
   * Toggle homepage articles between favorites and featured.
   */
  $scope.toggleHomepageArticles = function () {
    if ($scope.homepageArticlesMode === 'featured' && $scope.cookieFavorites.length) {
      $scope.homepageArticlesMode = 'favorites';
    } else if ($scope.homepageArticlesMode === 'favorites') {
      $scope.homepageArticlesMode = 'featured';
    }
  };

  /**
   * Get featured articles.
   */
  $scope.getFeaturedArticles = function () {
    $http({
      url: Settings.backendHost + '/articles.php?category' + $scope.featuredCategoryId + '&per_page=10',
      method: 'GET'
    }).then(function (response) {
      $scope.featuredArticles = response.data.articles;
    }, function (error) {
      console.log('Error while fetching featured articles');
    });
  };

  /**
   * Initialize world map with continents.
   */
  $scope.initMap = function () {
    $http({
      url: '/scripts/map/data/continents.json',
      method: 'GET'
    }).then(function (response) {
      var data = response.data;

      // Update pixels data
      angular.forEach(data.dataProvider.images, function (point, key) {
        data.dataProvider.images[key].width = 8;
        data.dataProvider.images[key].height = 8;
      });

      // Set click handler
      data.listeners = [{
        event: 'clickMapObject',
        method: function (e) {
          var continent = e.mapObject.title;

          continent = angular.lowercase(continent);
          continent = continent.replace(/ /g, '-');

          $state.go('musicmap.continent', {'name': continent});
        }
      }];

      // Instantiate map
      AmCharts.makeChart('map', data);
    }, function (error) {
      console.log('error', error);
    });
  };

  // Initialize
  $scope.getFeaturedArticles();
  $scope.initMap();
};

HomepageController.prototype = {
  init: function () {
  }
};

HomepageController.$inject = ['$rootScope', '$scope', '$http', '$state', 'Settings'];

export default HomepageController;
