import angular from 'angular';

import CategoryController from './category.controller';

var categoryModule = angular
  .module('app.category', ['ngCookies'])

  .controller('CategoryController', CategoryController);

export default categoryModule;
