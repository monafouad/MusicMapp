const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build:int', gulp.series('replace-templates:integration', 'partials', gulp.parallel('systemjs', 'systemjs:html', 'styles', 'other'), 'build'));
gulp.task('build:prod', gulp.series('replace-templates:production', 'partials', gulp.parallel('systemjs', 'systemjs:html', 'styles', 'other'), 'build'));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('replace-templates:development', gulp.parallel('scripts', 'styles'), 'watch', 'browsersync'));
gulp.task('serve:int', gulp.series('replace-templates:integration', gulp.parallel('scripts', 'styles'), 'watch', 'browsersync'));
gulp.task('serve:prod', gulp.series('replace-templates:production', gulp.parallel('scripts', 'styles'), 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.src('**/*.html'), reloadBrowserSync);
  gulp.watch([
    conf.path.src('**/*.less'),
    conf.path.src('**/*.css')
  ], gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('scripts'));
  done();
}
