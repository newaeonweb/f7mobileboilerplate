/*!
* F7Boilerplate - MIT LICENSE
* @author Fernando Monteiro @newaeonweb
*/

// Import Gulp Plugins
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var opn = require('opn');

// Set localhost port for connect and opn
var hostPort = 8000;

// Sources for SASS files:
var sourceSASS = ['scss/**/*.scss'];
// Destiny CSS files:
var distCSS = 'www/css'

// Sass Task
gulp.task('sass', function (){
    gulp.src( sourceSASS )
   .pipe(sass())
   .pipe(gulp.dest( distCSS ))
   .pipe(connect.reload());
});

// Webserver Task
gulp.task('server', function() {
    connect.server({
      livereload: true,
      port: hostPort,
      root: 'www'
    });
});

// Watch Task
gulp.task('watch', function() {
    gulp.watch(sourceSASS, ['sass']);
});

gulp.task('open', function(){
  opn('http://localhost:' + hostPort);
});

gulp.task('default', ['server', 'open', 'watch']);
