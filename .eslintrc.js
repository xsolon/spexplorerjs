module.exports = {
    "env": {
        "browser": true,
        "es6": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
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
        ],
        strict: ["error", "global"],
        "no-console": ["error", { allow: ["warn", "error", "log"] }]

    }, "globals": {
        "jQuery": true,
        "SP": true,
        "CodeMirror": true,// TODO: shouldn't have to be global
        "module": true,
        "ExecuteOrDelayUntilScriptLoaded": true,
        "spexplorerjs": true
    }
};