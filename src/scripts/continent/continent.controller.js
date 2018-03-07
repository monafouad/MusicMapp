var ContinentController = function ($rootScope, $scope, $http, $state, $stateParams, Settings) {
  this.$scope = $scope;
  this.$rootScope = $rootScope;
  this.$http = $http;
  this.$state = $state;
  this.$stateParams = $stateParams;
  this.Settings = Settings;

  /**
   * Initialize variables.
   */
  $scope.countries = [];
  $scope.mapCountries = [['Country']];

  /**
   * Continents mapping.
   */
  $scope.continents = [];
  $scope.continents.europe = {code: 'EU', name: 'Europe'};
  $scope.continents.africa = {code: 'AF', name: 'Africa'};
  $scope.continents.antarctica = {code: 'AN', name: 'Antarctica'};
  $scope.continents.asia = {code: 'AS', name: 'Asia'};
  $scope.continents.oceania = {code: 'OC', name: 'Oceania'};
  $scope.continents['north-america'] = {code: 'NA', name: 'North America'};
  $scope.continents['south-america'] = {code: 'SA', name: 'South America'};

  /**
   * Toggle full playlist.
   */
  $scope.fullPlaylist = false;
  $scope.toggleFullPlaylist = function () {
    $scope.fullPlaylist = !$scope.fullPlaylist;
  };

  /**
   * Articles history variables.
   */
  $scope.articlesHistory = false;
  $scope.historyCategoryId = null;
  $scope.history = {
    'enabled': false,
    'categoryId': null,
    'articles': [],
    'pagination': {
      'total': 0,
      'per_page': 20,
      'page': 0,
      'pages': 0, // calculated when fetching
      'more': false
    }
  };

  /**
   * Open articles history for a category.
   */
  $scope.openArticlesHistory = function (id) {
    $scope.history.enabled = true;
    $scope.history.categoryId = id;

    // Get articles on first load or if category changed
    if (!$scope.history.articles.length || id !== $scope.history.categoryId) {
      $scope.getArticlesHistory(0);
    }
  };

  /**
   * Close articles history.
   */
  $scope.closeArticlesHistory = function () {
    $scope.history.enabled = false;
    $scope.history.categoryId = null;
    $scope.history.articles = [];
  };

  /**
   * Get articles history for current category and page.
   */
  $scope.getArticlesHistory = function(page) {
    if (typeof page === 'undefined') {
      page = 0;
    }

    var perPage = $scope.history.pagination.per_page;
    var categoryId = $scope.history.categoryId;

    $http({
      url: Settings.backendHost + '/articles.php?continent=' + $scope.continent.code + '&category=' + categoryId + '&per_page=' + perPage + '&pagination=' + page,
      method: 'GET'
    }).then(function (response) {
      var total = response.data.count;
      var pages = Math.ceil(total / perPage) - 1;

      $scope.history.pagination.total = total;
      $scope.history.pagination.pages = pages;
      $scope.history.pagination.page = page;
      $scope.history.pagination.more = page < pages;

      // Grab all articles and push to history
      angular.forEach(response.data.articles, function (article) {
        $scope.history.articles.push(article);
      });
    }, function (error) {
      console.log('Error while fetching articles history');
    });
  };
};

ContinentController.prototype = {
  /**
   * Initialize.
   */
  init: function () {
    // Get current continent
    this.$scope.continent = this.$scope.continents[this.$stateParams.name];
    if (typeof this.$scope.continent === 'undefined') {
      this.$state.go('musicmap.homepage');
    }

    // Set meta
    this.$rootScope.meta = {
      title: 'MusicMap - ' + this.$scope.continent.name,
      image: null,
      description: null
    };

    // Get continent countries
    this.getCountries();

    // Get continent highlighted articles
    this.getHighlightedArticles();

    // Get continent playlist
    this.getPlaylist();
  },

  /**
   * Get countries of current continent.
   */
  getCountries: function () {
    var that = this;

    this.$http({
      url: this.Settings.backendHost + '/countries.php?continent=' + this.$scope.continent.code,
      method: 'GET'
    }).then(function (response) {
      that.$scope.countries = response.data;
    }, function (error) {
      console.log('error', error);
    });
  },

  /**
   * Get continent highlighted articles.
   */
  getHighlightedArticles: function () {
    var that = this;

    this.$http({
      url: this.Settings.backendHost + '/articles.php?continent=' + this.$scope.continent.code + '&highlighted=1&per_page=20',
      method: 'GET'
    }).then(function (response) {
      // Reset category articles
      angular.forEach(that.$scope.categories, function (categoryName, categoryId) {
        that.$scope.categories[categoryId].articles = [];
      });

      // Grab all articles and assign them to categories
      angular.forEach(response.data.articles, function (article) {
        var categories = article.categories;

        angular.forEach(categories, function (categoryName, categoryId) {
          that.$scope.categories[categoryId].articles.push(article);
        });
      });
    }, function (error) {
      console.log('Error while fetching page articles');
    });
  },

  /**
   * Get playlist for continent.
   */
  getPlaylist: function () {
    var that = this;

    this.$http({
      url: this.Settings.backendHost + '/playlist.php?continent=' + this.$scope.continent.code,
      method: 'GET'
    }).then(function (response) {
      var tracks = [];

      if (response.data !== null) {
        tracks = response.data.tracks;
      }

      that.$scope.playlist = tracks;
    }, function (error) {
      console.log('error', error);
    });
  }
};

ContinentController.$inject = ['$rootScope', '$scope', '$http', '$state', '$stateParams', 'Settings'];

export default ContinentController;
