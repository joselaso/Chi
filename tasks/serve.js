import gulp from 'gulp';

export let server;

const plugins = require('gulp-load-plugins')();

gulp.task('serve', ['test-build'], () => {
  server = plugins.connect.server({
      name: 'CenturyLink Human Interface',
      root: ['public'],
      port: 8000,
      livereload: true
  });

  return server;
});
