import angular from 'angular';

import HomepageController from './homepage.controller';

var homepageModule = angular
  .module('app.homepage', ['ngCookies'])

  .controller('HomepageController', HomepageController);

export default homepageModule;
