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

// run gulp transformations on module
// @widgetPath: path of .js file
// @destFolder: public folder
// @execPath: root path
var prepareModule = function (widgetPath, destFolder, execPath) {

    var sourceDir = path.dirname(widgetPath);


};
var getAbsoluteCdnPath = function (src, localHost, cdnHost) {
    return src.replace(localHost, cdnHost);
};
var getLocalPath = function (src, baseDir, appDir) {

    var localPath = "";

    if (src.indexOf('.') === 0) { // relative & local
        var fullPath = path.resolve(baseDir, src);
        localPath = path.resolve(filePath, script.prop("src"));
    }
    else if (src.indexOf('https://localhost:8443') == 0) { // absolute path & local file

        // TODO: all files should be served from public, do not expose node_modules
        var fileSrc = src.replace('https://localhost:8443', (src.indexOf('node_module') > 0) ? '' : '/public');
        localPath = appDir + fileSrc;

    }
    else if (src.indexOf('/') === 0) {// relative to root & local path
        // TODO: all files should be served from public, do not expose node_modules
        localPath = execPath + ((src.indexOf('node_module') > 0) ? '/' : '/public') + src;
    }
    else {
        // local file ref  (eg: script.js) 
        var fullPath = path.resolve(baseDir, src);
        if (fs.existsSync(fullPath)) {
            localPath = fullPath;
        }
    }
    return localPath;
};
var inlineScripts = function (widgetPath, execPath) {
    var sourceDir = path.dirname(widgetPath);
    return gulp.src(widgetPath)
        .pipe(mytranform({
            transform: function (jDoc, filePath) {
                var j$ = jDoc;

                var scripts = j$('script[type="text/javascript"]');

                scripts.each(function () {
                    var script = j$(this);
                    var src = script.prop("src");
                    if (src) {

                        var localPath = getLocalPath(src, sourceDir, execPath);

                        if (localPath.length > 0) {
                            var fileContent = fs.readFileSync(localPath, "utf8");

                            fileContent = `//<![CDATA[\n\r${fileContent} //]]>`;
                            script.text(fileContent).removeAttr("src");
                        }
                    }
                });

                var html = sanitizeHtml(j$("body").html())
                    .replace("</script|<style|<link></use></tag></number></object></script>", "")
                    .trim()
                    ;

                return html;
            },
            xmlMode: true
        }))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            path.basename = path.basename += ".widget.inline";
            //path.extname = ".md"
        }))
        .pipe(gulp.dest(sourceDir));

};
var absolutizeLinks = function (j$, baseDir, appDir, localHost, cdnHost) {

    var scripts = j$('script[type="text/javascript"]');

    scripts.each(function () {
        var script = j$(this);
        var src = script.prop("src");
        if (src) {
            var localPath = getLocalPath(src, baseDir, appDir);

            if (localPath) {

                localPath = localPath.replace(appDir, localHost).replace(/\\/g, "/").replace('/public/', '/');
                script.attr('src', localPath);
            }
        }
    });
};

var sanitizeHtml = function (html) {
    html = html.replace('"<form></form><form></form>"', // jquery has this string which breaks if code is inline in html
        'decodeURIComponent("%3Cform%3E%3C%2Fform%3E%3Cform%3E%3C%2Fform%3E")')
        .replace('<a id="&quot; + expando + &quot;"></a>', '<a id=\'" + expando + "\'></a>')
        .trim();

    return html;
};
var sanitizeJsinHtml = function (j$) {

    j$('script[type="text/javascript"]').each(function () {
        var elem = j$(this);
        var src = elem.attr('src');
        if (src) {

        } else {
            var html = sanitizeHtml(elem.html());
            elem.html(html);
        }
    });

};
var cdnScripts = function (widgetPath, execPath) {

    var sourceDir = path.dirname(widgetPath);

    return gulp.src(widgetPath)
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

                var localHost = "https://localhost:8443";
                var cdn = "https://spexplorerjs.azurewebsites.net"; // "prod" url

                absolutizeLinks(j$, sourceDir, execPath, localHost, cdn);

                var replaceScriptContent = function (col, lookFor, replaceWith) {
                    col.each(function () {
                        var elem = j$(this);
                        var html = elem.html().replace(lookFor, replaceWith);
                        elem.html(html);
                    });
                };

                replaceAttr(j$('link[href^="https://localhost:8443"]'), 'href', "https://localhost:8443", cdn);
                replaceAttr(j$('iframe[src^="https://localhost:8443"]'), 'src', "https://localhost:8443", cdn);
                replaceAttr(j$('script[src^="https://localhost:8443"]'), 'src', "https://localhost:8443", cdn);
                replaceAttr(j$('script[data-widget^="https://localhost:8443"]'), 'data-widget', "https://localhost:8443", cdn);
                replaceScriptContent(j$('script[type="text/html"]'), "https://localhost:8443", cdn);


                return j$('body').html().trim();
            },
            xmlMode: true
        }))
        .pipe($.rename(function (path) {

            //path.dirname += "/ciao";
            path.basename = path.basename += ".widget.cdn";
            //path.extname = ".md"
        })).pipe(gulp.dest(sourceDir));

};
var positionScriptInsideModule = function (widgetPath) {

    return gulp.src(widgetPath)
        .pipe(inline({
            base: sourceDir,
            css: [minifyCss, autoprefixer({ browsers: ["last 2 versions"] })],
            disabledTypes: ["svg", "img", "js"], // Only inline css files 
            ignore: ["./css/do-not-inline-me.css"]
        }))
        .pipe(mytranform({
            transform: function (jDoc, filePath) {
                var j$ = jDoc;

                var scripts = j$('script[type^="text/javascript"]');

                scripts.last().each(function () {
                    var script = j$(this);
                    var module = j$('.modules');
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
            //path.extname = ".md"
        }))
        .pipe(gulp.dest(sourceDir))
        .on('end', function () {
        });
};
var createWidget = function (widgetPath, execPath) {

    var sourceDir = path.dirname(widgetPath);

    inlineScripts(widgetPath, execPath)
        .on('end', function () {
            console.log('widget.inline.done');

        });

    cdnScripts(widgetPath, execPath)
        .on('end', function () {
            console.log('widget.cdn.done');

        });

};

var log = function (msg) {
    console.log(msg);
};
var createSpPage = function (module, inline) {

    log('createSpPage:' + JSON.stringify(module));

    var srcPath = path.dirname(module.localTemplatePath);
    var srcPageTemplate = path.resolve(srcPath, module.spPage);

    var widgetPath = module.filePath.replace("src", "public");

    log('widgetPath:' + widgetPath);
    var fileContent = fs.readFileSync(widgetPath, "utf8");
    var pageTemplate = fs.readFileSync(srcPageTemplate, "utf8");

    fileContent = "//<![CDATA[" + sanitizeHtml(fileContent) + "\r\n//]]>";
    fileContent = encodeURIComponent(fileContent);
    fileContent = "eval()"; decodeURIComponent()
    var fileName = path.basename(widgetPath);
    var sourceDir = path.dirname(widgetPath);

    (function inline() {
        var page = pageTemplate
            .replace('[[[Title]]]', fileName)
            .replace('[[[WidgetPublicName]]]', module.publicName)
            .replace('[[[Content]]]', fileContent)
            .replace('[[[Src]]]', "");

        var outputPage = path.join(sourceDir, fileName.replace(".js", ".aspx"));
        log(outputPage);
        fs.writeFileSync(outputPage, page);

    })();

    var scriptBlockTemplate = '<SharePoint:ScriptBlock runat="server">[[[Content]]]</SharePoint:ScriptBlock>';
    /// TODO: uploader to use scriptlink
    var scriptLinkTempalte = '<ScriptLink language="javascript" name="MyJS.js" Defer="true" runat="server"/>';
    scriptLinkTempalte = '<script type="text/javascript" src="[[[Src]]]"></script>';

    var cdn = function (url, environment) {

        var page = pageTemplate
            .replace('[[[Title]]]', fileName)
            .replace('[[[WidgetPublicName]]]', module.publicName)
            .replace('[[[Script]]]', scriptLinkTempalte)
            .replace('[[[Content]]]', "")
            .replace('[[[Src]]]', url + "components/sp/" + fileName);

        var outputPage = path.join(sourceDir, fileName.replace(".js", environment + ".aspx"));
        log(outputPage);
        fs.writeFileSync(outputPage, page);
    }

    cdn('https://spexplorerjs.azurewebsites.net/', '');
    cdn('https://spexplorerjsdev.azurewebsites.net/', '.dev');
    cdn('https://localhost:8443/', '.local');

};

module.exports = { createWidget: createWidget, createSpPage: createSpPage };