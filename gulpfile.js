var gulp   = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  webfont  = require('gulp-webfont');

var webfont_config = {
    types:'eot,woff2,woff,ttf,svg',
    ligatures: true
};

// TODO: After writing file, rename them to .min
gulp.task('minify-css', function() {
  return gulp.src(['./style.css', 'clir-font/stylesheet.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('webfonts', function() {
  return gulp.src('./specimens/*.svg')
    .pipe(webfont(webfont_config))
    .pipe(gulp.dest('fonts'));
});

gulp.task('default', ['minify-css']);
