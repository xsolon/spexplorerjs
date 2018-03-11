console.log("gulp...");
var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var inline = require("gulp-inline");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var $ = require("gulp-load-plugins")({
    lazy: true
});
var mytranform = require("./src/scripts/mytransforms.js");
var inlinesource = require("gulp-inline-source");

gulp.task("default", function () {
    console.log("default");
});

var test = function () {

    return (gulp.src("src/pages/app1/app1.js")
        .pipe(uglify())
        .pipe(gulp.dest("public/")) &&
        gulp.src("src/pages/app1/app1.html")
            //.pipe($.print())
            .pipe(inline({
                base: "src/pages/app1/",
                //js: function () {
                //    return uglify({
                //        mangle: false
                //    });
                //},
                css: [minifyCss, autoprefixer({ browsers: ["last 2 versions"] })],
                disabledTypes: ["svg", "img", "js"], // Only inline css files 
                ignore: ["./css/do-not-inline-me.css"]
            }))
            .pipe(mytranform({
                transform: function (jDoc, filePath) {
                    var j$ = jDoc;

                    var scripts = j$('script[type^="text/javascript"]');
                    console.log("scripts #" + scripts.length);
                    scripts.each(function () {
                        var script = j$(this);
                        var fullPath = path.resolve(path.dirname(filePath), script.prop("src"));
                        var localPath = path.resolve("public", script.prop("src"));
                        console.log(fullPath);
                        var fileContent = fs.readFileSync(localPath, "utf8");

                        script.html(fileContent).removeAttr("src");

                        j$("#widget").append(script);
                    });

                },
                xmlMode: true
            }))
            .pipe(gulp.dest("public/")));


};
var less = require('gulp-less');
var sass = require('gulp-sass');
gulp.task("sass", function () {
    return gulp.src("public/vendor/bootstrap/css/spexpjs.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            //path.basename = path.basename += ".widget";
            console.log(path.basename);
            path.extname = ".css";
        }))
        .pipe(gulp.dest('public/vendor/bootstrap/css'));

});

gulp.task("less", function () {
    return gulp.src("public/vendor/bootstrap/css/spexpbootstrap.less")
        .pipe(less({}))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            //path.basename = path.basename += ".widget";
            console.log(path.basename);
            path.extname = ".css";
        }))
        .pipe(gulp.dest('public/vendor/bootstrap/css'));

});

gulp.task("fixwidgets",
    function () {
        //log("public version");

        return gulp.src("public/components/sp/sp.web.html")
            .pipe(inline({
                base: "public/components/sp/",
                css: [minifyCss, autoprefixer({ browsers: ["last 2 versions"] })],
                disabledTypes: ["svg", "img", "js"], // Only inline css files 
                ignore: ["./css/do-not-inline-me.css"]
            }))
            .pipe(mytranform({
                transform: function (jDoc, filePath) {
                    var j$ = jDoc;

                    var scripts = j$('script[type^="text/javascript"][src]');
                    console.log("scripts #" + scripts.length);
                    j$('body').prepend("<div id='widget'></div>");
                    scripts.each(function () {
                        var script = j$(this);
                        var fullPath = path.resolve(path.dirname(filePath), script.prop("src"));
                        var localPath = path.resolve("public/components/sp", script.prop("src"));
                        console.log(fullPath);
                        var fileContent = fs.readFileSync(localPath, "utf8");

                        script.html(fileContent).removeAttr("src");

                        j$("#widget").append(script);
                    });

                },
                xmlMode: true
            }))
            .pipe($.rename(function (path) {

                //path.dirname += "/ciao";
                path.basename = path.basename += ".widget";
                console.log(path.basename);
                //path.extname = ".md"
            })).pipe(gulp.dest("public/components/sp"));
    });

gulp.task("mytest",
    function () {
        //log("public version");

        return test();
    });

//test();