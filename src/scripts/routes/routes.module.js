import angular from 'angular';

import routesConfig from './routes.config';

var routesModule = angular
  .module('app.routes', [])
  .config(routesConfig);

export default routesModule;
