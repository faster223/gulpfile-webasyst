var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");


gulp.task('html', function() {
  gulp.src('wa-data/public/site/themes/minimo/index.html')    
    .pipe(livereload()),    
        gulp.src('wa-data/public/site/themes/minimo/main.html')    
        .pipe(livereload()),       
          gulp.src('wa-data/public/shop/themes/minimo/main.html')    
          .pipe(livereload()),         
              gulp.src('wa-data/public/shop/themes/minimo/home.html')    
    .pipe(livereload())
    // .pipe(notify({ message: 'HTML complete' }));
    
});

gulp.task('style', function () {
    gulp.src('build/build_site.scss')
         .pipe(sass())
         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
         .pipe(concat('minimo.css')) 
        .pipe(gulp.dest('wa-data/public/site/themes/minimo/'))
        // .pipe(notify({ message: 'Styles task complete' }))
        .pipe(livereload()),
        gulp.src('build/build_shop.scss')
         .pipe(sass())
         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
         .pipe(concat('minimo.shop.css')) 
        .pipe(gulp.dest('wa-data/public/shop/themes/minimo/'))
        // .pipe(notify({ message: 'Styles task complete' }))
        .pipe(livereload());


});

gulp.task('default', function() {
  livereload.listen();
  gulp.watch('wa-data/public/site/themes/minimo/*.html', ['html']);
  gulp.watch('wa-data/public/shop/themes/minimo/*.html', ['html']);
  gulp.watch('build/*.scss', ['style']);
});