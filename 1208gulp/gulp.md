gulp  用自动化工具增强你的工作流程

	易于使用
	通过代码优于配置的策略，Gulp让简单的任务简单，复杂的任务可管理

	构建快速
		利用Node.js流的威力，你可以快速构建项目并减少频繁的IO操作

	插件高质
		Gulp严格的插件指南确保插件如你期望的那样简洁高质得工作
	易于学习
		通过最少的API，掌握Gulp毫不费力，构建工作尽在掌握，如同一系列流管道


	gulp安装

		npm install gulp -g  全局安装
		npm install gulp --save-dev   作为项目的开发依赖安装

	接口说明
		gulp提供4个基础的API，通过这4个API




gulp基本操作
		gulp基本命令
		gulp.task   创建一个任务
		gulp.src    获取要处理的文件或目录(特定匹配模式)
		gulp.dest   处理后的文件输出
		gulp.watch  动态的监听文件更改

		gulpfile.js gulp的配置文件



		安装gulp

		npm install gulp -g           先全局安装
		npm install gulp --save-dev   安装到项目开发依赖

		执行gulp

			gulp <taskname>   taskname代表用户名


		编译stylus文件

			//先安装插件

			npm install gulp-stylus --save-dev  编译stylus的插件
			npm install gulp-minify-css --save-dev   压缩css插件

gulp基本流程
	在项目根目录下创建gulpfile.js文件
	安装gulp
	安装插件stylus

	在gulpfile.js编写
	先引入gulp和gulp-stylus (或其他插件)
	var gulp=require('gulp')
	var stylus=require('gulp-stylus')
	var minifycss=require('gulp-minify-css')

	创建编译stylus的任务
	gulp.task('stylus',function(){
	return gulp.src('./stylus/**/*.styl')   //需要编译的文件
			.pipe(stylus())					//执行编译方法
			.pipe(gulp.dest('./public/css/')) //编译后输出的目录
	})


	压缩css文件
	gulp.task('minify',function(){
		return gulp.src('./public/css/**/*.css')  //需要压缩的文件
		.pipe(minifycss())					  //执行压缩操作
		.pipe(gulp.dest('./public/minicss/')) //输出
	})


	压缩js文件

	添加前置任务
	gulp.task('minify',['stylus'],function(){})

	监听文件变更

	gulp.task('watcher'function(){
	glup.watch('./stylus/**/*.styl')})


	通过gulp 启动node，并在文件变更后刷新浏览器

	 npm install browser-sync --save-dev

