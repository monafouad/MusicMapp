const gulp = require('gulp');
const replace = require('gulp-replace-task');

const conf = require('../conf/gulp.conf');

gulp.task('replace-templates:development', replaceTemplatesDev);
gulp.task('replace-templates:integration', replaceTemplatesInt);
gulp.task('replace-templates:production', replaceTemplatesProd);

console.log('replaceTemplates');

function replaceTemplatesDev() {
  return gulp.src(conf.path.templates('settings.constants.js'))
    .pipe(replace({
      patterns: [{
        match: 'backendHost',
        replacement: 'https://dev.musicmap.global/json'
      }]
    }))
    .pipe(gulp.dest(conf.path.scripts('core')));
}

function replaceTemplatesInt() {
  return gulp.src(conf.path.templates('settings.constants.js'))
    .pipe(replace({
      patterns: [{
        match: 'backendHost',
        replacement: 'https://dev.musicmap.global/json'
      }]
    }))
    .pipe(gulp.dest(conf.path.scripts('core')));
}

function replaceTemplatesProd() {
  return gulp.src(conf.path.templates('settings.constants.js'))
    .pipe(replace({
      patterns: [{
        match: 'backendHost',
        replacement: 'https://dev.musicmap.global/json'
      }]
    }))
    .pipe(gulp.dest(conf.path.scripts('core')));
}
