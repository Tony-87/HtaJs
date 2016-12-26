/**
 * Created by admin on 2016/9/22.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('watch',function(){
    gulp.watch('*.html',['html']);
    gulp.watch('**/*.html',['html']);
    gulp.watch('css/*.css',['css']);
    gulp.watch('js/*.js',['js']);
})

gulp.task('connect',function(){
    connect.server({
        root:'./',
        ip:'192.168.31.110',
        livereload:true
    })
})

gulp.task('html', function(){
    gulp.src('*.html').pipe(connect.reload());
    gulp.src('*/*.html').pipe(connect.reload());
    gulp.src('search/*.html').pipe(connect.reload());
    gulp.src('login/*.html').pipe(connect.reload());
    gulp.src('write/*.html').pipe(connect.reload());
});

gulp.task('css', function(){
    gulp.src('css/*.css').pipe(connect.reload());
});


gulp.task('js', function(){
    gulp.src('js/*.js').pipe(connect.reload());
});

gulp.task('default',['connect','watch'])