 var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    stylish = require('jshint-stylish'),
    clean = require('gulp-clean');

gulp.task('init', shell.task([
  'path=$(pwd); \
   cp $path/config/application-sample.php $path/config/application.php;'
]));

gulp.task('vendors', function() {

  gulp.src([
        ''
      ])
      .pipe(concat('vendors.min.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('build/css'));

  gulp.src([
      ''
    ])
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function() {
  return gulp.src('assets/sass/chat-with-yago.scss')
    .pipe(sass())
      .on('error', gutil.beep)
      .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function() {
  gulp.src('assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});


gulp.task('default', ['vendors', 'styles', 'scripts']);

gulp.task('serve', function () {
  browserSync.init(['build/css/*.css', '*.html', 'build/js/*.js'], {
    server: {
      baseDir: ['./']
    },
    notify: false
  });

  gulp.watch('assets/sass/**/*.scss', ['styles']);
  gulp.watch('assets/js/*.js', ['scripts']);
});

