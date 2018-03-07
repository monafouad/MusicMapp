import angular from 'angular';

import ArticleController from './article.controller';

var articleModule = angular
  .module('app.article', ['ngCookies'])

  .controller('ArticleController', ArticleController)

  .filter('unsafe', function ($sce) {
    return $sce.trustAsHtml;
  });

export default articleModule;
