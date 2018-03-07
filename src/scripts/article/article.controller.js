var ArticleController = function ($rootScope, $scope, $http, $state, $stateParams, Settings) {
  this.$scope = $scope;
  this.$rootScope = $rootScope;
  this.$http = $http;
  this.$state = $state;
  this.$stateParams = $stateParams;
  this.Settings = Settings;
};

ArticleController.prototype = {
  /**
   * Initialize.
   */
  init: function () {
    var that = this;

    this.$http({
      url: this.Settings.backendHost + '/articles.php?id=' + this.$stateParams.id,
      method: 'GET'
    }).then(function (response) {
      // Article is not valid
      if (response.data.articles.length !== 1) {
        that.$state.go('musicmap.homepage');

        return;
      }

      // Set current article
      that.$scope.article = response.data.articles[0];

      // Get related articles
      that.getRelatedArticles();

      // Set meta
      that.$rootScope.meta = {
        title: 'MusicMap - ' + that.$scope.article.title,
        image: that.$scope.article.images.thb,
        description: that.$scope.article.shortDescription
      };
    }, function (error) {
      console.log('error', error);
    });
  },

  /**
   * Get related articles
   */
  getRelatedArticles: function () {
    var that = this;

    // No related articles
    if (!that.$scope.article.related.length) {
      that.$scope.related = [];
    }

    this.$http({
      url: this.Settings.backendHost + '/articles.php?id=' + that.$scope.article.related.join(','),
      method: 'GET'
    }).then(function (response) {
      that.$scope.related = response.data.articles;
    }, function (error) {
      console.log('Error while fetching related articles');
    });
  },
};

ArticleController.$inject = ['$rootScope', '$scope', '$http', '$state', '$stateParams', 'Settings'];

export default ArticleController;
