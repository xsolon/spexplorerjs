//npm install --save-dev through2 cheerio gulp-util
var through = require('through2');
var j$ = require('cheerio');
var util = require('gulp-util');

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}

module.exports = function (opts) {
    
    function modifyFile(file, enc, cb) {
        if (file.isNull()) return cb(null, file); // pass along
        if (file.isStream()) return cb(new Error('gulp-beautify: Streaming not supported'));
        
        if (opts.transform) {
            log('Transforming' + file.path);
            
            var str = file.contents.toString('utf8');
            
            if (opts.textTransform) {
                str = opts.textTransform(str, file.path);
            }

            var $ = j$.load(str);
            
            var result = opts.transform($,file.path);
            
            if (result) {
                str = result;
            }else if (opts.xmlMode) {
                str = $.xml();
            } else
                str = $.html();
            
            var buffer = Buffer.from(str);
            file.contents = buffer;

        }
        cb(null, file);
    };
    
    
    return through.obj(modifyFile);
};