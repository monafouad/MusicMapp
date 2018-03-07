import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-cookies';
import 'angular-local-storage';

import coreRun from './core.run';
import coreConfig from './core.config';
import SettingsConstants from './settings.constants';

var coreModule = angular
  .module('app.core', [
    'ui.router',
    'ngResource',
    'ngCookies',
    'LocalStorageModule'
  ])
  /**
   * Body controller.
   */
  .controller('body',
    ['$scope', '$rootScope', '$http', '$cookies', '$httpParamSerializer', 'Settings',
      function ($scope, $rootScope, $http, $cookies, $httpParamSerializer, Settings) {
        'use strict';

        /**
         * Initialize global variables.
         */
        $scope.categories = {};
        $scope.continents = {};
        $scope.featuredCategoryId = 1;

        $scope.cookieFavorites = [];
        $scope.favoriteArticles = [];

        /**
         * Default meta
         */
        $rootScope.meta = {
          'title': 'MusicMap',
          'image': null,
          'description': 'MusicMap'
        };

        /**
         * Fetch article categories.
         */
        $scope.getCategories = function () {
          $http({
            url: Settings.backendHost + '/article_categories.php',
            method: 'GET'
          }).then(function (response) {
            $scope.categories = response.data;
          }, function (error) {
            console.log('Error while fetching categories');
          });
        };

        /**
         * Fetch continents.
         */
        $scope.getContinents = function () {
          $http({
            url: Settings.backendHost + '/continents.php',
            method: 'GET'
          }).then(function (response) {
            $scope.continents = response.data;
          }, function (error) {
            console.log('Error while fetching continents');
          });
        };

        /**
         * Get articles IDs which are favorites from cookies.
         */
        $scope.getFavoritesFromCookies = function () {
          var favorites = $cookies.getObject('favorites');

          // Initialize favorites if none set yet
          if (typeof favorites === 'undefined') {
            favorites = [];
          }

          $scope.cookieFavorites = favorites;
        };

        /**
         * Check if an article is in favorites.
         *
         * @param articleId
         */
        $scope.isFavorite = function (articleId) {
          articleId = parseInt(articleId);

          return $scope.cookieFavorites.indexOf(articleId) >= 0
        };

        /**
         * Toggle an article to or from favorites.
         *
         * @param articleId
         */
        $scope.toggleFavorite = function (articleId) {
          articleId = parseInt(articleId);

          var index = $scope.cookieFavorites.indexOf(articleId);

          // Add to favorites
          if (index < 0) {
            $scope.cookieFavorites.push(articleId);
          }
          // or remove from favorites
          else {
            $scope.cookieFavorites.splice(index, 1);
          }

          $cookies.putObject('favorites', $scope.cookieFavorites);

          // If the last favorite is removed while on favorite view, switch back to featured
          if (!$scope.cookieFavorites.length && $scope.homepageArticlesMode === 'favorites') {
            $scope.homepageArticlesMode = 'featured';
          }

          $scope.getFavoriteArticles();
        };

        /**
         * Get favorited articles.
         */
        $scope.getFavoriteArticles = function() {
          // No favorites :(
          if (!$scope.cookieFavorites.length) {
            $scope.favoriteArticles = [];

            return;
          }

          $http({
            url: Settings.backendHost + '/articles.php?id=' + $scope.cookieFavorites.join(','),
            method: 'GET'
          }).then(function (response) {
            $scope.favoriteArticles = response.data.articles;
          }, function (error) {
            console.log('Error while fetching favorite articles');
          });
        };

        /**
         * Initialize project.
         */
        $scope.getFavoritesFromCookies();
        $scope.getFavoriteArticles();
        $scope.getCategories();
        $scope.getContinents();
      }
    ])

  .filter('removeHTMLTags', function() {
    return function(text) {
      return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  })

  .filter('maxLength', function() {
    return function(string, length) {
      if (string.length <= length) {
        return string;
      }

      return string.substring(0, length) + '...';
    };
  })

  .run(coreRun)
  .config(coreConfig)
  .constant('Settings', SettingsConstants);

export default coreModule;
