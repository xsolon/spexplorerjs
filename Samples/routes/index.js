"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', version: 'a1' });
});
router.get('/spsearch', function (req, res) {
    res.render('spsearch', { title: 'Express', version: 'a1' });
});
router.get('/jstree', function (req, res) {
    res.render('jstree', { title: 'Express', version: 'a1' });
});
exports.default = router;
//# sourceMappingURL=index.js.map