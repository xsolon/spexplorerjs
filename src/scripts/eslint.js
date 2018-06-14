var fs = require("fs");
var path = require("path");
var Linter = require("eslint").Linter;
var linter = new Linter();
var rules = {
    "env": {
        "browser": true,
        "es6": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "script"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ], "no-mixed-spaces-and-tabs": ["ignore", "smart-tabs"],
        strict: ["error", "global"],
        "no-console": ["error", { allow: ["warn", "error", "log"] }]

    }
};

var verify = function (src) {
    console.log(src);
    var source = fs.readFileSync(src, "utf8");
    console.log(source);
    var fileName = path.basename(src);
    var messages = linter.verify(source, {
        rules: rules
    }, { filename: fileName });

    console.log(messages);

};

verify("public/components/logger/logger.js");
verify("public/components/loader/loader.js");
