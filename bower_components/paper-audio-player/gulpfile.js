var gulp=require("gulp"),autoprefixer=require("gulp-autoprefixer"),sass=require("gulp-sass");gulp.task("sass",function(){gulp.src("demo/*.scss").pipe(sass().on("error",sass.logError)).pipe(gulp.dest("demo"))}),gulp.task("autoprefixer",function(){return gulp.src("demo/demo.css").pipe(autoprefixer({browsers:["> 1%"],cascade:!1})).pipe(gulp.dest("demo"))}),gulp.task("default",["sass","autoprefixer"]);