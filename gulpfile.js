var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');  //处理管道崩溃问题
var notify = require('gulp-notify');  //报错与不中断当前任务

//less编译
gulp.task('less',function(){
    return gulp.src('source/css/Graffiti.less')  //找到需要编译的less文件
        .pipe(plumber({errorHandler: notify.onError('Error:<%= error.message %>;')}))  //如果less文件中有语法错误，用notify插件报错，用plumber保证任务不会停止
        .pipe(less())  //如果没错误，就编译less
        .pipe(gulp.dest('../../public/css/'))  //把css文件放到hexo引用的css文件夹下
});


gulp.task('watchLess',function(){
//监听所有less文件，如果有变化，则执行less编译方法
    gulp.watch(['source/css/Graffiti.less'],['less']);
});


//新建一个任务列表，把监听任务与服务器任务都放在列表中

gulp.task('taskList', ['watchLess']);

//修改默认任务
gulp.task('default', function() {
    gulp.start('taskList');  //执行任务列表
});
