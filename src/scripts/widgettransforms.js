var path = require("path");
console.log("gulp...");
var fs = require("fs");
var gulp = require("gulp");
var inline = require("gulp-inline");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var cheerio = require("cheerio");
var $ = require("gulp-load-plugins")({
    lazy: true
});
var mytranform = require("./mytransforms.js");
var inlinesource = require("gulp-inline-source");

var createWidget = function (widgetPath) {

    var dir = path.dirname(widgetPath);
    return gulp.src(widgetPath)
        .pipe(inline({
            base: dir,
            css: [minifyCss, autoprefixer({ browsers: ["last 2 versions"] })],
            disabledTypes: ["svg", "img", "js"], // Only inline css files 
            ignore: ["./css/do-not-inline-me.css"]
        }))
        .pipe(mytranform({
            transform: function (jDoc, filePath) {
                var j$ = jDoc;

                var all =  `<div id='widget'>${j$("body").html()}</div>`;
                j$("body").html(all);

                var scripts = j$('script[type^="text/javascript"]');

                scripts.last().each(function() {
                    console.log("moving last script");
                    var script = j$(this);
                    script.prependTo("#widget");
                });

                if(true)
                scripts.each(function () {
                    var script = j$(this);
                    var src = script.prop("src");
                    if (src) {
                        var fullPath = path.resolve(path.dirname(filePath), src);
                        var localPath = path.resolve("public/components/sp", script.prop("src"));
                        console.log(fullPath);
                        var fileContent = fs.readFileSync(localPath, "utf8");

                        fileContent = `//<![CDATA[\n\r${fileContent} //]]>`;
                        script.text(fileContent).removeAttr("src");
                    }
                    //j$("#widget").append(script);
                });

                return j$("body").html()
                    .replace("</script|<style|<link></use></tag></number></object></script>", "")
                    .replace('"<form></form><form></form>"',
                        'decodeURIComponent("%3Cform%3E%3C%2Fform%3E%3Cform%3E%3C%2Fform%3E")')
                    ;
            },
            xmlMode: true
        }))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            path.basename = path.basename += ".widget";
            console.log(path.basename);
            //path.extname = ".md"
        })).pipe(gulp.dest(dir));

};

module.exports = { createWidget: createWidget };