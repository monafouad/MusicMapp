import angular from 'angular';

import ContinentController from './continent.controller';

var continentModule = angular
  .module('app.continent', ['ngCookies'])

  .controller('ContinentController', ContinentController);

export default continentModule;
