module.exports = {
    parser: "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6
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
        //"max-len": [1, 70, 2, { ignoreComments: true }],
        strict: ["error", "global"],
        "no-console": ["error", { allow: ["warn", "error", "log", "assert"] }]

    },
    "globals": {
        "jQuery": true,
        "SP": true,
        "CodeMirror": true,// TODO: shouldn't have to be global
        "module": true,
        "ExecuteOrDelayUntilScriptLoaded": true,
        "spexplorerjs": true
    }
};