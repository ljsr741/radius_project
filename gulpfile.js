//首先引入gulp模块
var gulp=require('gulp');

//引入gulp-stylus插件
var stylus=require('gulp-stylus');

var minifycss=require('gulp-minify-css');

var uglify=require('gulp-uglify');

var browserSync=require('browser-sync').create();
var reload=browserSync.reload;
var nodemon=require('gulp-nodemon');
gulp.task('nodemon',function(ab){
	var ft=false;
	return nodemon({
		script:'./app.js'
	} ).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:9999'
		},
		files:['*' ],
		port:9888,
		open:false
	})
})


//创建一个编译stylus的任务
gulp.task('stylus',function(){
	/*//指定一个文件
	gulp.src('./stylus/index.styl');*/

	//指定多个文件
//	gulp.src(['./stylus/index.styl','./stylus/css.styl']);

	//指定一个目录下所有的，不包含子目录
	//gulp.src('./stylus/*.styl');

	//指定一个目录下及所有子目录下的文件
	//gulp.src('./stylus/**/*.styl');

	gulp.src('./stylus/**/*.styl')
	//执行stylus编译
		.pipe(stylus())
		.pipe(gulp.dest('./public/css'))
})

gulp.task('logs',function(){
	console.log('this is log')
});
gulp.task('es6',function(){
	console.log('this is es6');
});

gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/minicss/'))
});

gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))
});

gulp.task('watcher',['browserSync','stylus','uglify','nodemon'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/**/*.js',['uglify']);
	gulp.watch(['./public/css/**/*.css',
				'./public/minjs/**/*.js'] ).on('change',function(){
		reload();
	})

})


gulp.task('css',function(){
	console.log('this is css');
});

//创建执行其他任务的任务
gulp.task('all',['logs','es6','css'],function(){console.log('this is all')})

gulp.task('minijs',function(){
	console.log('this is minijs')
});

//先执行es6,执行完后在执行minijs
gulp.task('minijs',['es6'],function(){
	console.log('this is minijs')
})

//创建一个default任务
gulp.task('default',function(){
	console.log('this default')
})
