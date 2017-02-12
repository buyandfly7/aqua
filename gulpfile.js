'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'), //сборка нескольких файлов в один, по принципу шаблонов
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    bower = require('gulp-bower'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    es = require('event-stream'),
    concat = require("gulp-concat");

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/assets/js/',
        css: 'build/assets/css/',
        img: 'build/assets/img/',
        fonts: 'dist/assets/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'html/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'assets/js/main.js', //В и скриптах нам понадобятся только main файлы
        style: 'assets/scss/*.scss',
        img: 'assets/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'assets/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'html/*.html',
        js: 'assets/js/*.js',
        style: 'assets/scss/*.scss',
        img: 'assets/img/**/*.*',
        fonts: 'assets/fonts/**/*.*'
    },
    clean: './build',
    clean2: './assets/plugins'
};
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 4000,
    logPrefix: "Creancy-logs"
};
gulp.task('html:build', function() {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку dist
        .pipe(reload({
            stream: true
        })); //И перезагрузим наш сервер для обновлений
});
gulp.task('js:build', function() {
    gulp.src(path.src.js) //Найдем наш ds-scripts файл
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в dist
        .pipe(reload({
            stream: true
        })); //И перезагрузим сервер
});
gulp.task('style:build', function() {
    gulp.src(path.src.style) //Выберем наш template.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(gulp.dest('./assets/css/'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('image:build', function() {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({
            stream: true
        }));
});
gulp.task('bower:prepare', function() {
    return bower()
        .pipe(gulp.dest('./assets/plugins/'));
});

gulp.task('bower:dest', ['bower:prepare'], function() {
    return bower()
        .pipe(gulp.dest('./build/assets/plugins'));
});
gulp.task('bower:build', ['style:build'], function() {
    gulp.src('./html/*.html')
        .pipe(inject(gulp.src(bowerFiles({
            paths: {
                bowerDirectory: 'assets/plugins/'
            }
        }), {
            read: false
        }), {
            name: 'bower',
            relative: true
        }))
        .pipe(inject(gulp.src('assets/js/*.js', {
            read: false
        }), {
            relative: true
        }))
        .pipe(inject(gulp.src('assets/css/*.css', {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest('./build/'));
});
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});
gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start(['html:build', 'bower:build']);
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});
gulp.task('webserver', function() {
    browserSync(config);
});
gulp.task('clean', function(cb) {
    rimraf(path.clean, cb);
    rimraf(path.clean2, cb);
});
gulp.task('build', [
    'html:build',
    'js:build',
    'bower:dest',
    'bower:build',
    'fonts:build',
    'image:build'
]);
gulp.task('default', ['build', 'webserver', 'watch']);
