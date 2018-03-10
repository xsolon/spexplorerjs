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
//var streamify = require("gulp-streamify");
var mytranform = require("./mytransforms.js");
var inlinesource = require("gulp-inline-source");

var createWidget = function (widgetPath) {

    var dir = path.dirname(widgetPath);
    gulp.src(widgetPath)
        .pipe(inline({
            base: dir,
            css: [minifyCss, autoprefixer({ browsers: ["last 2 versions"] })],
            disabledTypes: ["svg", "img", "js"], // Only inline css files 
            ignore: ["./css/do-not-inline-me.css"]
        }))
        .pipe(mytranform({
            transform: function (jDoc, filePath) {
                var j$ = jDoc;

                //var all = `<div id='widget'>${j$("body").html()}</div>`;
                //j$("body").html(all);

                var scripts = j$('script[type^="text/javascript"]');

                scripts.last().each(function () {
                    console.log("moving last script");
                    var script = j$(this);
                    var module = j$('.modules');
                    console.log(module.length);
                    script.appendTo(".modules");
                });

                var postHtml =
                    j$("body").html()
                        .replace("</script|<style|<link></use></tag></number></object></script>", "")
                        .replace('"<form></form><form></form>"', // jquery has this string which breaks if code is inline in html
                        'decodeURIComponent("%3Cform%3E%3C%2Fform%3E%3Cform%3E%3C%2Fform%3E")')
                    ;

                j$("body").html(postHtml);

            },
            xmlMode: true
        }))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            //path.basename = path.basename += ".widget";
            console.log(path.basename);
            //path.extname = ".md"
        }))
        .pipe(gulp.dest(dir))
        //.pipe(gulp.src(widgetPath))
        .pipe(mytranform({
            transform: function (jDoc, filePath) {
                var j$ = jDoc;

                var scripts = j$('script[type^="text/javascript"]');

                scripts.each(function () {
                    var script = j$(this);
                    var src = script.prop("src");
                    if (src && src.indexOf('http:' == 0)) {
                        var fullPath = path.resolve(path.dirname(filePath), src);
                        var localPath = path.resolve(dir, script.prop("src"));
                        console.log(fullPath);
                        var fileContent = fs.readFileSync(localPath, "utf8");

                        fileContent = `//<![CDATA[\n\r${fileContent} //]]>`;
                        script.text(fileContent).removeAttr("src");
                    }
                });

                return j$("body").html()
                    .replace("</script|<style|<link></use></tag></number></object></script>", "")
                    .replace('"<form></form><form></form>"', // jquery has this string which breaks if code is inline in html
                    'decodeURIComponent("%3Cform%3E%3C%2Fform%3E%3Cform%3E%3C%2Fform%3E")')
                    .trim()
                    ;
            },
            xmlMode: true
        }))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            path.basename = path.basename += ".widget";
            console.log(path.basename);
            //path.extname = ".md"
        })).pipe(gulp.dest(dir))
        .pipe(mytranform({
            transform: function (jDoc, filePath) {
                var j$ = jDoc;

                var replaceAttr = function (col, attr, lookFor, replaceWith) {
                    col.each(function () {
                        var elem = j$(this);
                        var val = elem.attr(attr).replace(lookFor, replaceWith);
                        elem.attr(attr, val);
                    });
                };

                var replaceScriptContent = function (col, lookFor, replaceWith) {
                    col.each(function () {
                        var elem = j$(this);
                        var html = elem.html().replace(lookFor, replaceWith);
                        elem.html(html);
                    });
                };
                var cdn = "url";
                replaceAttr(j$('link[href^="https://localhost:8443"]'), 'href', "https://localhost:8443", cdn);
                replaceAttr(j$('iframe[src^="https://localhost:8443"]'), 'src', "https://localhost:8443", cdn);
                replaceAttr(j$('script[src^="https://localhost:8443"]'), 'src', "https://localhost:8443", cdn);
                replaceAttr(j$('script[data-widget^="https://localhost:8443"]'), 'data-widget', "https://localhost:8443", cdn);
                replaceScriptContent(j$('script[type="text/html"]'), "https://localhost:8443", cdn);

            },
            xmlMode: true
        }))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            path.basename = path.basename += ".cdn";
            console.log(path.basename);
            //path.extname = ".md"
        })).pipe(gulp.dest(dir));


};

module.exports = { createWidget: createWidget };