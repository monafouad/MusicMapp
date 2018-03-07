import angular from 'angular';

import CountryController from './country.controller';

var countryModule = angular
  .module('app.country', ['ngCookies'])

  .controller('CountryController', CountryController);

export default countryModule;
