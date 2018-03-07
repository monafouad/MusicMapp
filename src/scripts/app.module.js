import angular from 'angular';
import coreModule from './core/core.module';
import routesModule from './routes/routes.module';
import homepageModule from './homepage/homepage.module';
import categoryModule from './category/category.module';
import continentModule from './continent/continent.module';
import countryModule from './country/country.module';
import articleModule from './article/article.module';
import playerModule from './player/player.module';

var app = 'app';

angular
  .module(app, [
    coreModule.name,
    routesModule.name,
    homepageModule.name,
    categoryModule.name,
    continentModule.name,
    countryModule.name,
    articleModule.name,
    playerModule.name
  ]);
