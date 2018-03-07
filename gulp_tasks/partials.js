const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const angularTemplatecache = require('gulp-angular-templatecache');
const insert = require('gulp-insert');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.views('**/*.html'))
    .pipe(htmlmin(conf.htmlmin))
    .pipe(angularTemplatecache('templateCacheHtml.js', {
      module: conf.ngModule,
      root: `${conf.paths.templateViews}`
    }))
    .pipe(insert.prepend(`var angular = require('angular');`))
    .pipe(gulp.dest(conf.path.tmp()));
}
