/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/css-loader/index.js!../../../public/vendor/bootstrap/3.3.7/css/spexp.css":
/*!*********************************************************************************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/css-loader!F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/css/spexp.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "../../../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spexp {\r\n  /*!\r\n * Bootstrap v3.3.7 (http://getbootstrap.com)\r\n * Copyright 2011-2016 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n  /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\r\n  /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\r\n  /*# sourceMappingURL=bootstrap.css.map */\r\n  /*!\r\n * Bootstrap v3.3.7 (http://getbootstrap.com)\r\n * Copyright 2011-2016 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n  /*# sourceMappingURL=bootstrap-theme.css.map */\r\n}\r\n.spexp html {\r\n  font-family: sans-serif;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n}\r\n.spexp body {\r\n  margin: 0;\r\n}\r\n.spexp article,\r\n.spexp aside,\r\n.spexp details,\r\n.spexp figcaption,\r\n.spexp figure,\r\n.spexp footer,\r\n.spexp header,\r\n.spexp hgroup,\r\n.spexp main,\r\n.spexp menu,\r\n.spexp nav,\r\n.spexp section,\r\n.spexp summary {\r\n  display: block;\r\n}\r\n.spexp audio,\r\n.spexp canvas,\r\n.spexp progress,\r\n.spexp video {\r\n  display: inline-block;\r\n  vertical-align: baseline;\r\n}\r\n.spexp audio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n.spexp [hidden],\r\n.spexp template {\r\n  display: none;\r\n}\r\n.spexp a {\r\n  background-color: transparent;\r\n}\r\n.spexp a:active,\r\n.spexp a:hover {\r\n  outline: 0;\r\n}\r\n.spexp abbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n.spexp b,\r\n.spexp strong {\r\n  font-weight: bold;\r\n}\r\n.spexp dfn {\r\n  font-style: italic;\r\n}\r\n.spexp h1 {\r\n  margin: .67em 0;\r\n  font-size: 2em;\r\n}\r\n.spexp mark {\r\n  color: #000;\r\n  background: #ff0;\r\n}\r\n.spexp small {\r\n  font-size: 80%;\r\n}\r\n.spexp sub,\r\n.spexp sup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n.spexp sup {\r\n  top: -0.5em;\r\n}\r\n.spexp sub {\r\n  bottom: -0.25em;\r\n}\r\n.spexp img {\r\n  border: 0;\r\n}\r\n.spexp svg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n.spexp figure {\r\n  margin: 1em 40px;\r\n}\r\n.spexp hr {\r\n  height: 0;\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n}\r\n.spexp pre {\r\n  overflow: auto;\r\n}\r\n.spexp code,\r\n.spexp kbd,\r\n.spexp pre,\r\n.spexp samp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n.spexp button,\r\n.spexp input,\r\n.spexp optgroup,\r\n.spexp select,\r\n.spexp textarea {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n.spexp button {\r\n  overflow: visible;\r\n}\r\n.spexp button,\r\n.spexp select {\r\n  text-transform: none;\r\n}\r\n.spexp button,\r\n.spexp html input[type=\"button\"],\r\n.spexp input[type=\"reset\"],\r\n.spexp input[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n  cursor: pointer;\r\n}\r\n.spexp button[disabled],\r\n.spexp html input[disabled] {\r\n  cursor: default;\r\n}\r\n.spexp button::-moz-focus-inner,\r\n.spexp input::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n.spexp input {\r\n  line-height: normal;\r\n}\r\n.spexp input[type=\"checkbox\"],\r\n.spexp input[type=\"radio\"] {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n.spexp input[type=\"number\"]::-webkit-inner-spin-button,\r\n.spexp input[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n.spexp input[type=\"search\"] {\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  -webkit-appearance: textfield;\r\n}\r\n.spexp input[type=\"search\"]::-webkit-search-cancel-button,\r\n.spexp input[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n.spexp fieldset {\r\n  padding: .35em .625em .75em;\r\n  margin: 0 2px;\r\n  border: 1px solid #c0c0c0;\r\n}\r\n.spexp legend {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n.spexp textarea {\r\n  overflow: auto;\r\n}\r\n.spexp optgroup {\r\n  font-weight: bold;\r\n}\r\n.spexp table {\r\n  border-spacing: 0;\r\n  border-collapse: collapse;\r\n}\r\n.spexp td,\r\n.spexp th {\r\n  padding: 0;\r\n}\r\n@media print {\r\n  .spexp *,\r\n  .spexp *:before,\r\n  .spexp *:after {\r\n    color: #000 !important;\r\n    text-shadow: none !important;\r\n    background: transparent !important;\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n  .spexp a,\r\n  .spexp a:visited {\r\n    text-decoration: underline;\r\n  }\r\n  .spexp a[href]:after {\r\n    content: \" (\" attr(href) \")\";\r\n  }\r\n  .spexp abbr[title]:after {\r\n    content: \" (\" attr(title) \")\";\r\n  }\r\n  .spexp a[href^=\"#\"]:after,\r\n  .spexp a[href^=\"javascript:\"]:after {\r\n    content: \"\";\r\n  }\r\n  .spexp pre,\r\n  .spexp blockquote {\r\n    border: 1px solid #999;\r\n    page-break-inside: avoid;\r\n  }\r\n  .spexp thead {\r\n    display: table-header-group;\r\n  }\r\n  .spexp tr,\r\n  .spexp img {\r\n    page-break-inside: avoid;\r\n  }\r\n  .spexp img {\r\n    max-width: 100% !important;\r\n  }\r\n  .spexp p,\r\n  .spexp h2,\r\n  .spexp h3 {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  .spexp h2,\r\n  .spexp h3 {\r\n    page-break-after: avoid;\r\n  }\r\n  .spexp .navbar {\r\n    display: none;\r\n  }\r\n  .spexp .btn > .caret,\r\n  .spexp .dropup > .btn > .caret {\r\n    border-top-color: #000 !important;\r\n  }\r\n  .spexp .label {\r\n    border: 1px solid #000;\r\n  }\r\n  .spexp .table {\r\n    border-collapse: collapse !important;\r\n  }\r\n  .spexp .table td,\r\n  .spexp .table th {\r\n    background-color: #fff !important;\r\n  }\r\n  .spexp .table-bordered th,\r\n  .spexp .table-bordered td {\r\n    border: 1px solid #ddd !important;\r\n  }\r\n}\r\n@font-face {\r\n  font-family: 'Glyphicons Halflings';\r\n  src: url(" + escape(__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.eot */ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot")) + ");\r\n  src: url(" + escape(__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.eot */ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.woff2 */ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2")) + ") format('woff2'), url(" + escape(__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.woff */ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.ttf */ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.svg */ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg")) + "#glyphicons_halflingsregular) format('svg');\r\n}\r\n.spexp .glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.spexp .glyphicon-asterisk:before {\r\n  content: \"*\";\r\n}\r\n.spexp .glyphicon-plus:before {\r\n  content: \"+\";\r\n}\r\n.spexp .glyphicon-euro:before,\r\n.spexp .glyphicon-eur:before {\r\n  content: \"\\20AC\";\r\n}\r\n.spexp .glyphicon-minus:before {\r\n  content: \"\\2212\";\r\n}\r\n.spexp .glyphicon-cloud:before {\r\n  content: \"\\2601\";\r\n}\r\n.spexp .glyphicon-envelope:before {\r\n  content: \"\\2709\";\r\n}\r\n.spexp .glyphicon-pencil:before {\r\n  content: \"\\270F\";\r\n}\r\n.spexp .glyphicon-glass:before {\r\n  content: \"\\E001\";\r\n}\r\n.spexp .glyphicon-music:before {\r\n  content: \"\\E002\";\r\n}\r\n.spexp .glyphicon-search:before {\r\n  content: \"\\E003\";\r\n}\r\n.spexp .glyphicon-heart:before {\r\n  content: \"\\E005\";\r\n}\r\n.spexp .glyphicon-star:before {\r\n  content: \"\\E006\";\r\n}\r\n.spexp .glyphicon-star-empty:before {\r\n  content: \"\\E007\";\r\n}\r\n.spexp .glyphicon-user:before {\r\n  content: \"\\E008\";\r\n}\r\n.spexp .glyphicon-film:before {\r\n  content: \"\\E009\";\r\n}\r\n.spexp .glyphicon-th-large:before {\r\n  content: \"\\E010\";\r\n}\r\n.spexp .glyphicon-th:before {\r\n  content: \"\\E011\";\r\n}\r\n.spexp .glyphicon-th-list:before {\r\n  content: \"\\E012\";\r\n}\r\n.spexp .glyphicon-ok:before {\r\n  content: \"\\E013\";\r\n}\r\n.spexp .glyphicon-remove:before {\r\n  content: \"\\E014\";\r\n}\r\n.spexp .glyphicon-zoom-in:before {\r\n  content: \"\\E015\";\r\n}\r\n.spexp .glyphicon-zoom-out:before {\r\n  content: \"\\E016\";\r\n}\r\n.spexp .glyphicon-off:before {\r\n  content: \"\\E017\";\r\n}\r\n.spexp .glyphicon-signal:before {\r\n  content: \"\\E018\";\r\n}\r\n.spexp .glyphicon-cog:before {\r\n  content: \"\\E019\";\r\n}\r\n.spexp .glyphicon-trash:before {\r\n  content: \"\\E020\";\r\n}\r\n.spexp .glyphicon-home:before {\r\n  content: \"\\E021\";\r\n}\r\n.spexp .glyphicon-file:before {\r\n  content: \"\\E022\";\r\n}\r\n.spexp .glyphicon-time:before {\r\n  content: \"\\E023\";\r\n}\r\n.spexp .glyphicon-road:before {\r\n  content: \"\\E024\";\r\n}\r\n.spexp .glyphicon-download-alt:before {\r\n  content: \"\\E025\";\r\n}\r\n.spexp .glyphicon-download:before {\r\n  content: \"\\E026\";\r\n}\r\n.spexp .glyphicon-upload:before {\r\n  content: \"\\E027\";\r\n}\r\n.spexp .glyphicon-inbox:before {\r\n  content: \"\\E028\";\r\n}\r\n.spexp .glyphicon-play-circle:before {\r\n  content: \"\\E029\";\r\n}\r\n.spexp .glyphicon-repeat:before {\r\n  content: \"\\E030\";\r\n}\r\n.spexp .glyphicon-refresh:before {\r\n  content: \"\\E031\";\r\n}\r\n.spexp .glyphicon-list-alt:before {\r\n  content: \"\\E032\";\r\n}\r\n.spexp .glyphicon-lock:before {\r\n  content: \"\\E033\";\r\n}\r\n.spexp .glyphicon-flag:before {\r\n  content: \"\\E034\";\r\n}\r\n.spexp .glyphicon-headphones:before {\r\n  content: \"\\E035\";\r\n}\r\n.spexp .glyphicon-volume-off:before {\r\n  content: \"\\E036\";\r\n}\r\n.spexp .glyphicon-volume-down:before {\r\n  content: \"\\E037\";\r\n}\r\n.spexp .glyphicon-volume-up:before {\r\n  content: \"\\E038\";\r\n}\r\n.spexp .glyphicon-qrcode:before {\r\n  content: \"\\E039\";\r\n}\r\n.spexp .glyphicon-barcode:before {\r\n  content: \"\\E040\";\r\n}\r\n.spexp .glyphicon-tag:before {\r\n  content: \"\\E041\";\r\n}\r\n.spexp .glyphicon-tags:before {\r\n  content: \"\\E042\";\r\n}\r\n.spexp .glyphicon-book:before {\r\n  content: \"\\E043\";\r\n}\r\n.spexp .glyphicon-bookmark:before {\r\n  content: \"\\E044\";\r\n}\r\n.spexp .glyphicon-print:before {\r\n  content: \"\\E045\";\r\n}\r\n.spexp .glyphicon-camera:before {\r\n  content: \"\\E046\";\r\n}\r\n.spexp .glyphicon-font:before {\r\n  content: \"\\E047\";\r\n}\r\n.spexp .glyphicon-bold:before {\r\n  content: \"\\E048\";\r\n}\r\n.spexp .glyphicon-italic:before {\r\n  content: \"\\E049\";\r\n}\r\n.spexp .glyphicon-text-height:before {\r\n  content: \"\\E050\";\r\n}\r\n.spexp .glyphicon-text-width:before {\r\n  content: \"\\E051\";\r\n}\r\n.spexp .glyphicon-align-left:before {\r\n  content: \"\\E052\";\r\n}\r\n.spexp .glyphicon-align-center:before {\r\n  content: \"\\E053\";\r\n}\r\n.spexp .glyphicon-align-right:before {\r\n  content: \"\\E054\";\r\n}\r\n.spexp .glyphicon-align-justify:before {\r\n  content: \"\\E055\";\r\n}\r\n.spexp .glyphicon-list:before {\r\n  content: \"\\E056\";\r\n}\r\n.spexp .glyphicon-indent-left:before {\r\n  content: \"\\E057\";\r\n}\r\n.spexp .glyphicon-indent-right:before {\r\n  content: \"\\E058\";\r\n}\r\n.spexp .glyphicon-facetime-video:before {\r\n  content: \"\\E059\";\r\n}\r\n.spexp .glyphicon-picture:before {\r\n  content: \"\\E060\";\r\n}\r\n.spexp .glyphicon-map-marker:before {\r\n  content: \"\\E062\";\r\n}\r\n.spexp .glyphicon-adjust:before {\r\n  content: \"\\E063\";\r\n}\r\n.spexp .glyphicon-tint:before {\r\n  content: \"\\E064\";\r\n}\r\n.spexp .glyphicon-edit:before {\r\n  content: \"\\E065\";\r\n}\r\n.spexp .glyphicon-share:before {\r\n  content: \"\\E066\";\r\n}\r\n.spexp .glyphicon-check:before {\r\n  content: \"\\E067\";\r\n}\r\n.spexp .glyphicon-move:before {\r\n  content: \"\\E068\";\r\n}\r\n.spexp .glyphicon-step-backward:before {\r\n  content: \"\\E069\";\r\n}\r\n.spexp .glyphicon-fast-backward:before {\r\n  content: \"\\E070\";\r\n}\r\n.spexp .glyphicon-backward:before {\r\n  content: \"\\E071\";\r\n}\r\n.spexp .glyphicon-play:before {\r\n  content: \"\\E072\";\r\n}\r\n.spexp .glyphicon-pause:before {\r\n  content: \"\\E073\";\r\n}\r\n.spexp .glyphicon-stop:before {\r\n  content: \"\\E074\";\r\n}\r\n.spexp .glyphicon-forward:before {\r\n  content: \"\\E075\";\r\n}\r\n.spexp .glyphicon-fast-forward:before {\r\n  content: \"\\E076\";\r\n}\r\n.spexp .glyphicon-step-forward:before {\r\n  content: \"\\E077\";\r\n}\r\n.spexp .glyphicon-eject:before {\r\n  content: \"\\E078\";\r\n}\r\n.spexp .glyphicon-chevron-left:before {\r\n  content: \"\\E079\";\r\n}\r\n.spexp .glyphicon-chevron-right:before {\r\n  content: \"\\E080\";\r\n}\r\n.spexp .glyphicon-plus-sign:before {\r\n  content: \"\\E081\";\r\n}\r\n.spexp .glyphicon-minus-sign:before {\r\n  content: \"\\E082\";\r\n}\r\n.spexp .glyphicon-remove-sign:before {\r\n  content: \"\\E083\";\r\n}\r\n.spexp .glyphicon-ok-sign:before {\r\n  content: \"\\E084\";\r\n}\r\n.spexp .glyphicon-question-sign:before {\r\n  content: \"\\E085\";\r\n}\r\n.spexp .glyphicon-info-sign:before {\r\n  content: \"\\E086\";\r\n}\r\n.spexp .glyphicon-screenshot:before {\r\n  content: \"\\E087\";\r\n}\r\n.spexp .glyphicon-remove-circle:before {\r\n  content: \"\\E088\";\r\n}\r\n.spexp .glyphicon-ok-circle:before {\r\n  content: \"\\E089\";\r\n}\r\n.spexp .glyphicon-ban-circle:before {\r\n  content: \"\\E090\";\r\n}\r\n.spexp .glyphicon-arrow-left:before {\r\n  content: \"\\E091\";\r\n}\r\n.spexp .glyphicon-arrow-right:before {\r\n  content: \"\\E092\";\r\n}\r\n.spexp .glyphicon-arrow-up:before {\r\n  content: \"\\E093\";\r\n}\r\n.spexp .glyphicon-arrow-down:before {\r\n  content: \"\\E094\";\r\n}\r\n.spexp .glyphicon-share-alt:before {\r\n  content: \"\\E095\";\r\n}\r\n.spexp .glyphicon-resize-full:before {\r\n  content: \"\\E096\";\r\n}\r\n.spexp .glyphicon-resize-small:before {\r\n  content: \"\\E097\";\r\n}\r\n.spexp .glyphicon-exclamation-sign:before {\r\n  content: \"\\E101\";\r\n}\r\n.spexp .glyphicon-gift:before {\r\n  content: \"\\E102\";\r\n}\r\n.spexp .glyphicon-leaf:before {\r\n  content: \"\\E103\";\r\n}\r\n.spexp .glyphicon-fire:before {\r\n  content: \"\\E104\";\r\n}\r\n.spexp .glyphicon-eye-open:before {\r\n  content: \"\\E105\";\r\n}\r\n.spexp .glyphicon-eye-close:before {\r\n  content: \"\\E106\";\r\n}\r\n.spexp .glyphicon-warning-sign:before {\r\n  content: \"\\E107\";\r\n}\r\n.spexp .glyphicon-plane:before {\r\n  content: \"\\E108\";\r\n}\r\n.spexp .glyphicon-calendar:before {\r\n  content: \"\\E109\";\r\n}\r\n.spexp .glyphicon-random:before {\r\n  content: \"\\E110\";\r\n}\r\n.spexp .glyphicon-comment:before {\r\n  content: \"\\E111\";\r\n}\r\n.spexp .glyphicon-magnet:before {\r\n  content: \"\\E112\";\r\n}\r\n.spexp .glyphicon-chevron-up:before {\r\n  content: \"\\E113\";\r\n}\r\n.spexp .glyphicon-chevron-down:before {\r\n  content: \"\\E114\";\r\n}\r\n.spexp .glyphicon-retweet:before {\r\n  content: \"\\E115\";\r\n}\r\n.spexp .glyphicon-shopping-cart:before {\r\n  content: \"\\E116\";\r\n}\r\n.spexp .glyphicon-folder-close:before {\r\n  content: \"\\E117\";\r\n}\r\n.spexp .glyphicon-folder-open:before {\r\n  content: \"\\E118\";\r\n}\r\n.spexp .glyphicon-resize-vertical:before {\r\n  content: \"\\E119\";\r\n}\r\n.spexp .glyphicon-resize-horizontal:before {\r\n  content: \"\\E120\";\r\n}\r\n.spexp .glyphicon-hdd:before {\r\n  content: \"\\E121\";\r\n}\r\n.spexp .glyphicon-bullhorn:before {\r\n  content: \"\\E122\";\r\n}\r\n.spexp .glyphicon-bell:before {\r\n  content: \"\\E123\";\r\n}\r\n.spexp .glyphicon-certificate:before {\r\n  content: \"\\E124\";\r\n}\r\n.spexp .glyphicon-thumbs-up:before {\r\n  content: \"\\E125\";\r\n}\r\n.spexp .glyphicon-thumbs-down:before {\r\n  content: \"\\E126\";\r\n}\r\n.spexp .glyphicon-hand-right:before {\r\n  content: \"\\E127\";\r\n}\r\n.spexp .glyphicon-hand-left:before {\r\n  content: \"\\E128\";\r\n}\r\n.spexp .glyphicon-hand-up:before {\r\n  content: \"\\E129\";\r\n}\r\n.spexp .glyphicon-hand-down:before {\r\n  content: \"\\E130\";\r\n}\r\n.spexp .glyphicon-circle-arrow-right:before {\r\n  content: \"\\E131\";\r\n}\r\n.spexp .glyphicon-circle-arrow-left:before {\r\n  content: \"\\E132\";\r\n}\r\n.spexp .glyphicon-circle-arrow-up:before {\r\n  content: \"\\E133\";\r\n}\r\n.spexp .glyphicon-circle-arrow-down:before {\r\n  content: \"\\E134\";\r\n}\r\n.spexp .glyphicon-globe:before {\r\n  content: \"\\E135\";\r\n}\r\n.spexp .glyphicon-wrench:before {\r\n  content: \"\\E136\";\r\n}\r\n.spexp .glyphicon-tasks:before {\r\n  content: \"\\E137\";\r\n}\r\n.spexp .glyphicon-filter:before {\r\n  content: \"\\E138\";\r\n}\r\n.spexp .glyphicon-briefcase:before {\r\n  content: \"\\E139\";\r\n}\r\n.spexp .glyphicon-fullscreen:before {\r\n  content: \"\\E140\";\r\n}\r\n.spexp .glyphicon-dashboard:before {\r\n  content: \"\\E141\";\r\n}\r\n.spexp .glyphicon-paperclip:before {\r\n  content: \"\\E142\";\r\n}\r\n.spexp .glyphicon-heart-empty:before {\r\n  content: \"\\E143\";\r\n}\r\n.spexp .glyphicon-link:before {\r\n  content: \"\\E144\";\r\n}\r\n.spexp .glyphicon-phone:before {\r\n  content: \"\\E145\";\r\n}\r\n.spexp .glyphicon-pushpin:before {\r\n  content: \"\\E146\";\r\n}\r\n.spexp .glyphicon-usd:before {\r\n  content: \"\\E148\";\r\n}\r\n.spexp .glyphicon-gbp:before {\r\n  content: \"\\E149\";\r\n}\r\n.spexp .glyphicon-sort:before {\r\n  content: \"\\E150\";\r\n}\r\n.spexp .glyphicon-sort-by-alphabet:before {\r\n  content: \"\\E151\";\r\n}\r\n.spexp .glyphicon-sort-by-alphabet-alt:before {\r\n  content: \"\\E152\";\r\n}\r\n.spexp .glyphicon-sort-by-order:before {\r\n  content: \"\\E153\";\r\n}\r\n.spexp .glyphicon-sort-by-order-alt:before {\r\n  content: \"\\E154\";\r\n}\r\n.spexp .glyphicon-sort-by-attributes:before {\r\n  content: \"\\E155\";\r\n}\r\n.spexp .glyphicon-sort-by-attributes-alt:before {\r\n  content: \"\\E156\";\r\n}\r\n.spexp .glyphicon-unchecked:before {\r\n  content: \"\\E157\";\r\n}\r\n.spexp .glyphicon-expand:before {\r\n  content: \"\\E158\";\r\n}\r\n.spexp .glyphicon-collapse-down:before {\r\n  content: \"\\E159\";\r\n}\r\n.spexp .glyphicon-collapse-up:before {\r\n  content: \"\\E160\";\r\n}\r\n.spexp .glyphicon-log-in:before {\r\n  content: \"\\E161\";\r\n}\r\n.spexp .glyphicon-flash:before {\r\n  content: \"\\E162\";\r\n}\r\n.spexp .glyphicon-log-out:before {\r\n  content: \"\\E163\";\r\n}\r\n.spexp .glyphicon-new-window:before {\r\n  content: \"\\E164\";\r\n}\r\n.spexp .glyphicon-record:before {\r\n  content: \"\\E165\";\r\n}\r\n.spexp .glyphicon-save:before {\r\n  content: \"\\E166\";\r\n}\r\n.spexp .glyphicon-open:before {\r\n  content: \"\\E167\";\r\n}\r\n.spexp .glyphicon-saved:before {\r\n  content: \"\\E168\";\r\n}\r\n.spexp .glyphicon-import:before {\r\n  content: \"\\E169\";\r\n}\r\n.spexp .glyphicon-export:before {\r\n  content: \"\\E170\";\r\n}\r\n.spexp .glyphicon-send:before {\r\n  content: \"\\E171\";\r\n}\r\n.spexp .glyphicon-floppy-disk:before {\r\n  content: \"\\E172\";\r\n}\r\n.spexp .glyphicon-floppy-saved:before {\r\n  content: \"\\E173\";\r\n}\r\n.spexp .glyphicon-floppy-remove:before {\r\n  content: \"\\E174\";\r\n}\r\n.spexp .glyphicon-floppy-save:before {\r\n  content: \"\\E175\";\r\n}\r\n.spexp .glyphicon-floppy-open:before {\r\n  content: \"\\E176\";\r\n}\r\n.spexp .glyphicon-credit-card:before {\r\n  content: \"\\E177\";\r\n}\r\n.spexp .glyphicon-transfer:before {\r\n  content: \"\\E178\";\r\n}\r\n.spexp .glyphicon-cutlery:before {\r\n  content: \"\\E179\";\r\n}\r\n.spexp .glyphicon-header:before {\r\n  content: \"\\E180\";\r\n}\r\n.spexp .glyphicon-compressed:before {\r\n  content: \"\\E181\";\r\n}\r\n.spexp .glyphicon-earphone:before {\r\n  content: \"\\E182\";\r\n}\r\n.spexp .glyphicon-phone-alt:before {\r\n  content: \"\\E183\";\r\n}\r\n.spexp .glyphicon-tower:before {\r\n  content: \"\\E184\";\r\n}\r\n.spexp .glyphicon-stats:before {\r\n  content: \"\\E185\";\r\n}\r\n.spexp .glyphicon-sd-video:before {\r\n  content: \"\\E186\";\r\n}\r\n.spexp .glyphicon-hd-video:before {\r\n  content: \"\\E187\";\r\n}\r\n.spexp .glyphicon-subtitles:before {\r\n  content: \"\\E188\";\r\n}\r\n.spexp .glyphicon-sound-stereo:before {\r\n  content: \"\\E189\";\r\n}\r\n.spexp .glyphicon-sound-dolby:before {\r\n  content: \"\\E190\";\r\n}\r\n.spexp .glyphicon-sound-5-1:before {\r\n  content: \"\\E191\";\r\n}\r\n.spexp .glyphicon-sound-6-1:before {\r\n  content: \"\\E192\";\r\n}\r\n.spexp .glyphicon-sound-7-1:before {\r\n  content: \"\\E193\";\r\n}\r\n.spexp .glyphicon-copyright-mark:before {\r\n  content: \"\\E194\";\r\n}\r\n.spexp .glyphicon-registration-mark:before {\r\n  content: \"\\E195\";\r\n}\r\n.spexp .glyphicon-cloud-download:before {\r\n  content: \"\\E197\";\r\n}\r\n.spexp .glyphicon-cloud-upload:before {\r\n  content: \"\\E198\";\r\n}\r\n.spexp .glyphicon-tree-conifer:before {\r\n  content: \"\\E199\";\r\n}\r\n.spexp .glyphicon-tree-deciduous:before {\r\n  content: \"\\E200\";\r\n}\r\n.spexp .glyphicon-cd:before {\r\n  content: \"\\E201\";\r\n}\r\n.spexp .glyphicon-save-file:before {\r\n  content: \"\\E202\";\r\n}\r\n.spexp .glyphicon-open-file:before {\r\n  content: \"\\E203\";\r\n}\r\n.spexp .glyphicon-level-up:before {\r\n  content: \"\\E204\";\r\n}\r\n.spexp .glyphicon-copy:before {\r\n  content: \"\\E205\";\r\n}\r\n.spexp .glyphicon-paste:before {\r\n  content: \"\\E206\";\r\n}\r\n.spexp .glyphicon-alert:before {\r\n  content: \"\\E209\";\r\n}\r\n.spexp .glyphicon-equalizer:before {\r\n  content: \"\\E210\";\r\n}\r\n.spexp .glyphicon-king:before {\r\n  content: \"\\E211\";\r\n}\r\n.spexp .glyphicon-queen:before {\r\n  content: \"\\E212\";\r\n}\r\n.spexp .glyphicon-pawn:before {\r\n  content: \"\\E213\";\r\n}\r\n.spexp .glyphicon-bishop:before {\r\n  content: \"\\E214\";\r\n}\r\n.spexp .glyphicon-knight:before {\r\n  content: \"\\E215\";\r\n}\r\n.spexp .glyphicon-baby-formula:before {\r\n  content: \"\\E216\";\r\n}\r\n.spexp .glyphicon-tent:before {\r\n  content: \"\\26FA\";\r\n}\r\n.spexp .glyphicon-blackboard:before {\r\n  content: \"\\E218\";\r\n}\r\n.spexp .glyphicon-bed:before {\r\n  content: \"\\E219\";\r\n}\r\n.spexp .glyphicon-apple:before {\r\n  content: \"\\F8FF\";\r\n}\r\n.spexp .glyphicon-erase:before {\r\n  content: \"\\E221\";\r\n}\r\n.spexp .glyphicon-hourglass:before {\r\n  content: \"\\231B\";\r\n}\r\n.spexp .glyphicon-lamp:before {\r\n  content: \"\\E223\";\r\n}\r\n.spexp .glyphicon-duplicate:before {\r\n  content: \"\\E224\";\r\n}\r\n.spexp .glyphicon-piggy-bank:before {\r\n  content: \"\\E225\";\r\n}\r\n.spexp .glyphicon-scissors:before {\r\n  content: \"\\E226\";\r\n}\r\n.spexp .glyphicon-bitcoin:before {\r\n  content: \"\\E227\";\r\n}\r\n.spexp .glyphicon-btc:before {\r\n  content: \"\\E227\";\r\n}\r\n.spexp .glyphicon-xbt:before {\r\n  content: \"\\E227\";\r\n}\r\n.spexp .glyphicon-yen:before {\r\n  content: \"\\A5\";\r\n}\r\n.spexp .glyphicon-jpy:before {\r\n  content: \"\\A5\";\r\n}\r\n.spexp .glyphicon-ruble:before {\r\n  content: \"\\20BD\";\r\n}\r\n.spexp .glyphicon-rub:before {\r\n  content: \"\\20BD\";\r\n}\r\n.spexp .glyphicon-scale:before {\r\n  content: \"\\E230\";\r\n}\r\n.spexp .glyphicon-ice-lolly:before {\r\n  content: \"\\E231\";\r\n}\r\n.spexp .glyphicon-ice-lolly-tasted:before {\r\n  content: \"\\E232\";\r\n}\r\n.spexp .glyphicon-education:before {\r\n  content: \"\\E233\";\r\n}\r\n.spexp .glyphicon-option-horizontal:before {\r\n  content: \"\\E234\";\r\n}\r\n.spexp .glyphicon-option-vertical:before {\r\n  content: \"\\E235\";\r\n}\r\n.spexp .glyphicon-menu-hamburger:before {\r\n  content: \"\\E236\";\r\n}\r\n.spexp .glyphicon-modal-window:before {\r\n  content: \"\\E237\";\r\n}\r\n.spexp .glyphicon-oil:before {\r\n  content: \"\\E238\";\r\n}\r\n.spexp .glyphicon-grain:before {\r\n  content: \"\\E239\";\r\n}\r\n.spexp .glyphicon-sunglasses:before {\r\n  content: \"\\E240\";\r\n}\r\n.spexp .glyphicon-text-size:before {\r\n  content: \"\\E241\";\r\n}\r\n.spexp .glyphicon-text-color:before {\r\n  content: \"\\E242\";\r\n}\r\n.spexp .glyphicon-text-background:before {\r\n  content: \"\\E243\";\r\n}\r\n.spexp .glyphicon-object-align-top:before {\r\n  content: \"\\E244\";\r\n}\r\n.spexp .glyphicon-object-align-bottom:before {\r\n  content: \"\\E245\";\r\n}\r\n.spexp .glyphicon-object-align-horizontal:before {\r\n  content: \"\\E246\";\r\n}\r\n.spexp .glyphicon-object-align-left:before {\r\n  content: \"\\E247\";\r\n}\r\n.spexp .glyphicon-object-align-vertical:before {\r\n  content: \"\\E248\";\r\n}\r\n.spexp .glyphicon-object-align-right:before {\r\n  content: \"\\E249\";\r\n}\r\n.spexp .glyphicon-triangle-right:before {\r\n  content: \"\\E250\";\r\n}\r\n.spexp .glyphicon-triangle-left:before {\r\n  content: \"\\E251\";\r\n}\r\n.spexp .glyphicon-triangle-bottom:before {\r\n  content: \"\\E252\";\r\n}\r\n.spexp .glyphicon-triangle-top:before {\r\n  content: \"\\E253\";\r\n}\r\n.spexp .glyphicon-console:before {\r\n  content: \"\\E254\";\r\n}\r\n.spexp .glyphicon-superscript:before {\r\n  content: \"\\E255\";\r\n}\r\n.spexp .glyphicon-subscript:before {\r\n  content: \"\\E256\";\r\n}\r\n.spexp .glyphicon-menu-left:before {\r\n  content: \"\\E257\";\r\n}\r\n.spexp .glyphicon-menu-right:before {\r\n  content: \"\\E258\";\r\n}\r\n.spexp .glyphicon-menu-down:before {\r\n  content: \"\\E259\";\r\n}\r\n.spexp .glyphicon-menu-up:before {\r\n  content: \"\\E260\";\r\n}\r\n.spexp * {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.spexp *:before,\r\n.spexp *:after {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.spexp html {\r\n  font-size: 10px;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n.spexp body {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.spexp input,\r\n.spexp button,\r\n.spexp select,\r\n.spexp textarea {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n.spexp a {\r\n  color: #337ab7;\r\n  text-decoration: none;\r\n}\r\n.spexp a:hover,\r\n.spexp a:focus {\r\n  color: #23527c;\r\n  text-decoration: underline;\r\n}\r\n.spexp a:focus {\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.spexp figure {\r\n  margin: 0;\r\n}\r\n.spexp img {\r\n  vertical-align: middle;\r\n}\r\n.spexp .img-responsive,\r\n.spexp .thumbnail > img,\r\n.spexp .thumbnail a > img,\r\n.spexp .carousel-inner > .item > img,\r\n.spexp .carousel-inner > .item > a > img {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.spexp .img-rounded {\r\n  border-radius: 6px;\r\n}\r\n.spexp .img-thumbnail {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  padding: 4px;\r\n  line-height: 1.42857143;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  -o-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.spexp .img-circle {\r\n  border-radius: 50%;\r\n}\r\n.spexp hr {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  border: 0;\r\n  border-top: 1px solid #eee;\r\n}\r\n.spexp .sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.spexp .sr-only-focusable:active,\r\n.spexp .sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n.spexp [role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n.spexp h1,\r\n.spexp h2,\r\n.spexp h3,\r\n.spexp h4,\r\n.spexp h5,\r\n.spexp h6,\r\n.spexp .h1,\r\n.spexp .h2,\r\n.spexp .h3,\r\n.spexp .h4,\r\n.spexp .h5,\r\n.spexp .h6 {\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 1.1;\r\n  color: inherit;\r\n}\r\n.spexp h1 small,\r\n.spexp h2 small,\r\n.spexp h3 small,\r\n.spexp h4 small,\r\n.spexp h5 small,\r\n.spexp h6 small,\r\n.spexp .h1 small,\r\n.spexp .h2 small,\r\n.spexp .h3 small,\r\n.spexp .h4 small,\r\n.spexp .h5 small,\r\n.spexp .h6 small,\r\n.spexp h1 .small,\r\n.spexp h2 .small,\r\n.spexp h3 .small,\r\n.spexp h4 .small,\r\n.spexp h5 .small,\r\n.spexp h6 .small,\r\n.spexp .h1 .small,\r\n.spexp .h2 .small,\r\n.spexp .h3 .small,\r\n.spexp .h4 .small,\r\n.spexp .h5 .small,\r\n.spexp .h6 .small {\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #777;\r\n}\r\n.spexp h1,\r\n.spexp .h1,\r\n.spexp h2,\r\n.spexp .h2,\r\n.spexp h3,\r\n.spexp .h3 {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n.spexp h1 small,\r\n.spexp .h1 small,\r\n.spexp h2 small,\r\n.spexp .h2 small,\r\n.spexp h3 small,\r\n.spexp .h3 small,\r\n.spexp h1 .small,\r\n.spexp .h1 .small,\r\n.spexp h2 .small,\r\n.spexp .h2 .small,\r\n.spexp h3 .small,\r\n.spexp .h3 .small {\r\n  font-size: 65%;\r\n}\r\n.spexp h4,\r\n.spexp .h4,\r\n.spexp h5,\r\n.spexp .h5,\r\n.spexp h6,\r\n.spexp .h6 {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.spexp h4 small,\r\n.spexp .h4 small,\r\n.spexp h5 small,\r\n.spexp .h5 small,\r\n.spexp h6 small,\r\n.spexp .h6 small,\r\n.spexp h4 .small,\r\n.spexp .h4 .small,\r\n.spexp h5 .small,\r\n.spexp .h5 .small,\r\n.spexp h6 .small,\r\n.spexp .h6 .small {\r\n  font-size: 75%;\r\n}\r\n.spexp h1,\r\n.spexp .h1 {\r\n  font-size: 36px;\r\n}\r\n.spexp h2,\r\n.spexp .h2 {\r\n  font-size: 30px;\r\n}\r\n.spexp h3,\r\n.spexp .h3 {\r\n  font-size: 24px;\r\n}\r\n.spexp h4,\r\n.spexp .h4 {\r\n  font-size: 18px;\r\n}\r\n.spexp h5,\r\n.spexp .h5 {\r\n  font-size: 14px;\r\n}\r\n.spexp h6,\r\n.spexp .h6 {\r\n  font-size: 12px;\r\n}\r\n.spexp p {\r\n  margin: 0 0 10px;\r\n}\r\n.spexp .lead {\r\n  margin-bottom: 20px;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  line-height: 1.4;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .lead {\r\n    font-size: 21px;\r\n  }\r\n}\r\n.spexp small,\r\n.spexp .small {\r\n  font-size: 85%;\r\n}\r\n.spexp mark,\r\n.spexp .mark {\r\n  padding: .2em;\r\n  background-color: #fcf8e3;\r\n}\r\n.spexp .text-left {\r\n  text-align: left;\r\n}\r\n.spexp .text-right {\r\n  text-align: right;\r\n}\r\n.spexp .text-center {\r\n  text-align: center;\r\n}\r\n.spexp .text-justify {\r\n  text-align: justify;\r\n}\r\n.spexp .text-nowrap {\r\n  white-space: nowrap;\r\n}\r\n.spexp .text-lowercase {\r\n  text-transform: lowercase;\r\n}\r\n.spexp .text-uppercase {\r\n  text-transform: uppercase;\r\n}\r\n.spexp .text-capitalize {\r\n  text-transform: capitalize;\r\n}\r\n.spexp .text-muted {\r\n  color: #777;\r\n}\r\n.spexp .text-primary {\r\n  color: #337ab7;\r\n}\r\n.spexp a.text-primary:hover,\r\n.spexp a.text-primary:focus {\r\n  color: #286090;\r\n}\r\n.spexp .text-success {\r\n  color: #3c763d;\r\n}\r\n.spexp a.text-success:hover,\r\n.spexp a.text-success:focus {\r\n  color: #2b542c;\r\n}\r\n.spexp .text-info {\r\n  color: #31708f;\r\n}\r\n.spexp a.text-info:hover,\r\n.spexp a.text-info:focus {\r\n  color: #245269;\r\n}\r\n.spexp .text-warning {\r\n  color: #8a6d3b;\r\n}\r\n.spexp a.text-warning:hover,\r\n.spexp a.text-warning:focus {\r\n  color: #66512c;\r\n}\r\n.spexp .text-danger {\r\n  color: #a94442;\r\n}\r\n.spexp a.text-danger:hover,\r\n.spexp a.text-danger:focus {\r\n  color: #843534;\r\n}\r\n.spexp .bg-primary {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n}\r\n.spexp a.bg-primary:hover,\r\n.spexp a.bg-primary:focus {\r\n  background-color: #286090;\r\n}\r\n.spexp .bg-success {\r\n  background-color: #dff0d8;\r\n}\r\n.spexp a.bg-success:hover,\r\n.spexp a.bg-success:focus {\r\n  background-color: #c1e2b3;\r\n}\r\n.spexp .bg-info {\r\n  background-color: #d9edf7;\r\n}\r\n.spexp a.bg-info:hover,\r\n.spexp a.bg-info:focus {\r\n  background-color: #afd9ee;\r\n}\r\n.spexp .bg-warning {\r\n  background-color: #fcf8e3;\r\n}\r\n.spexp a.bg-warning:hover,\r\n.spexp a.bg-warning:focus {\r\n  background-color: #f7ecb5;\r\n}\r\n.spexp .bg-danger {\r\n  background-color: #f2dede;\r\n}\r\n.spexp a.bg-danger:hover,\r\n.spexp a.bg-danger:focus {\r\n  background-color: #e4b9b9;\r\n}\r\n.spexp .page-header {\r\n  padding-bottom: 9px;\r\n  margin: 40px 0 20px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.spexp ul,\r\n.spexp ol {\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n}\r\n.spexp ul ul,\r\n.spexp ol ul,\r\n.spexp ul ol,\r\n.spexp ol ol {\r\n  margin-bottom: 0;\r\n}\r\n.spexp .list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.spexp .list-inline {\r\n  padding-left: 0;\r\n  margin-left: -5px;\r\n  list-style: none;\r\n}\r\n.spexp .list-inline > li {\r\n  display: inline-block;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n}\r\n.spexp dl {\r\n  margin-top: 0;\r\n  margin-bottom: 20px;\r\n}\r\n.spexp dt,\r\n.spexp dd {\r\n  line-height: 1.42857143;\r\n}\r\n.spexp dt {\r\n  font-weight: bold;\r\n}\r\n.spexp dd {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .dl-horizontal dt {\r\n    float: left;\r\n    width: 160px;\r\n    overflow: hidden;\r\n    clear: left;\r\n    text-align: right;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n  }\r\n  .spexp .dl-horizontal dd {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n.spexp abbr[title],\r\n.spexp abbr[data-original-title] {\r\n  cursor: help;\r\n  border-bottom: 1px dotted #777;\r\n}\r\n.spexp .initialism {\r\n  font-size: 90%;\r\n  text-transform: uppercase;\r\n}\r\n.spexp blockquote {\r\n  padding: 10px 20px;\r\n  margin: 0 0 20px;\r\n  font-size: 17.5px;\r\n  border-left: 5px solid #eee;\r\n}\r\n.spexp blockquote p:last-child,\r\n.spexp blockquote ul:last-child,\r\n.spexp blockquote ol:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.spexp blockquote footer,\r\n.spexp blockquote small,\r\n.spexp blockquote .small {\r\n  display: block;\r\n  font-size: 80%;\r\n  line-height: 1.42857143;\r\n  color: #777;\r\n}\r\n.spexp blockquote footer:before,\r\n.spexp blockquote small:before,\r\n.spexp blockquote .small:before {\r\n  content: '\\2014   \\A0';\r\n}\r\n.spexp .blockquote-reverse,\r\n.spexp blockquote.pull-right {\r\n  padding-right: 15px;\r\n  padding-left: 0;\r\n  text-align: right;\r\n  border-right: 5px solid #eee;\r\n  border-left: 0;\r\n}\r\n.spexp .blockquote-reverse footer:before,\r\n.spexp blockquote.pull-right footer:before,\r\n.spexp .blockquote-reverse small:before,\r\n.spexp blockquote.pull-right small:before,\r\n.spexp .blockquote-reverse .small:before,\r\n.spexp blockquote.pull-right .small:before {\r\n  content: '';\r\n}\r\n.spexp .blockquote-reverse footer:after,\r\n.spexp blockquote.pull-right footer:after,\r\n.spexp .blockquote-reverse small:after,\r\n.spexp blockquote.pull-right small:after,\r\n.spexp .blockquote-reverse .small:after,\r\n.spexp blockquote.pull-right .small:after {\r\n  content: '\\A0   \\2014';\r\n}\r\n.spexp address {\r\n  margin-bottom: 20px;\r\n  font-style: normal;\r\n  line-height: 1.42857143;\r\n}\r\n.spexp code,\r\n.spexp kbd,\r\n.spexp pre,\r\n.spexp samp {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n}\r\n.spexp code {\r\n  padding: 2px 4px;\r\n  font-size: 90%;\r\n  color: #c7254e;\r\n  background-color: #f9f2f4;\r\n  border-radius: 4px;\r\n}\r\n.spexp kbd {\r\n  padding: 2px 4px;\r\n  font-size: 90%;\r\n  color: #fff;\r\n  background-color: #333;\r\n  border-radius: 3px;\r\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.spexp kbd kbd {\r\n  padding: 0;\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.spexp pre {\r\n  display: block;\r\n  padding: 9.5px;\r\n  margin: 0 0 10px;\r\n  font-size: 13px;\r\n  line-height: 1.42857143;\r\n  color: #333;\r\n  word-break: break-all;\r\n  word-wrap: break-word;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n.spexp pre code {\r\n  padding: 0;\r\n  font-size: inherit;\r\n  color: inherit;\r\n  white-space: pre-wrap;\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\n.spexp .pre-scrollable {\r\n  max-height: 340px;\r\n  overflow-y: scroll;\r\n}\r\n.spexp .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .container {\r\n    width: 750px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .spexp .container {\r\n    width: 970px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .container {\r\n    width: 1170px;\r\n  }\r\n}\r\n.spexp .container-fluid {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.spexp .row {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.spexp .col-xs-1,\r\n.spexp .col-sm-1,\r\n.spexp .col-md-1,\r\n.spexp .col-lg-1,\r\n.spexp .col-xs-2,\r\n.spexp .col-sm-2,\r\n.spexp .col-md-2,\r\n.spexp .col-lg-2,\r\n.spexp .col-xs-3,\r\n.spexp .col-sm-3,\r\n.spexp .col-md-3,\r\n.spexp .col-lg-3,\r\n.spexp .col-xs-4,\r\n.spexp .col-sm-4,\r\n.spexp .col-md-4,\r\n.spexp .col-lg-4,\r\n.spexp .col-xs-5,\r\n.spexp .col-sm-5,\r\n.spexp .col-md-5,\r\n.spexp .col-lg-5,\r\n.spexp .col-xs-6,\r\n.spexp .col-sm-6,\r\n.spexp .col-md-6,\r\n.spexp .col-lg-6,\r\n.spexp .col-xs-7,\r\n.spexp .col-sm-7,\r\n.spexp .col-md-7,\r\n.spexp .col-lg-7,\r\n.spexp .col-xs-8,\r\n.spexp .col-sm-8,\r\n.spexp .col-md-8,\r\n.spexp .col-lg-8,\r\n.spexp .col-xs-9,\r\n.spexp .col-sm-9,\r\n.spexp .col-md-9,\r\n.spexp .col-lg-9,\r\n.spexp .col-xs-10,\r\n.spexp .col-sm-10,\r\n.spexp .col-md-10,\r\n.spexp .col-lg-10,\r\n.spexp .col-xs-11,\r\n.spexp .col-sm-11,\r\n.spexp .col-md-11,\r\n.spexp .col-lg-11,\r\n.spexp .col-xs-12,\r\n.spexp .col-sm-12,\r\n.spexp .col-md-12,\r\n.spexp .col-lg-12 {\r\n  position: relative;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n.spexp .col-xs-1,\r\n.spexp .col-xs-2,\r\n.spexp .col-xs-3,\r\n.spexp .col-xs-4,\r\n.spexp .col-xs-5,\r\n.spexp .col-xs-6,\r\n.spexp .col-xs-7,\r\n.spexp .col-xs-8,\r\n.spexp .col-xs-9,\r\n.spexp .col-xs-10,\r\n.spexp .col-xs-11,\r\n.spexp .col-xs-12 {\r\n  float: left;\r\n}\r\n.spexp .col-xs-12 {\r\n  width: 100%;\r\n}\r\n.spexp .col-xs-11 {\r\n  width: 91.66666667%;\r\n}\r\n.spexp .col-xs-10 {\r\n  width: 83.33333333%;\r\n}\r\n.spexp .col-xs-9 {\r\n  width: 75%;\r\n}\r\n.spexp .col-xs-8 {\r\n  width: 66.66666667%;\r\n}\r\n.spexp .col-xs-7 {\r\n  width: 58.33333333%;\r\n}\r\n.spexp .col-xs-6 {\r\n  width: 50%;\r\n}\r\n.spexp .col-xs-5 {\r\n  width: 41.66666667%;\r\n}\r\n.spexp .col-xs-4 {\r\n  width: 33.33333333%;\r\n}\r\n.spexp .col-xs-3 {\r\n  width: 25%;\r\n}\r\n.spexp .col-xs-2 {\r\n  width: 16.66666667%;\r\n}\r\n.spexp .col-xs-1 {\r\n  width: 8.33333333%;\r\n}\r\n.spexp .col-xs-pull-12 {\r\n  right: 100%;\r\n}\r\n.spexp .col-xs-pull-11 {\r\n  right: 91.66666667%;\r\n}\r\n.spexp .col-xs-pull-10 {\r\n  right: 83.33333333%;\r\n}\r\n.spexp .col-xs-pull-9 {\r\n  right: 75%;\r\n}\r\n.spexp .col-xs-pull-8 {\r\n  right: 66.66666667%;\r\n}\r\n.spexp .col-xs-pull-7 {\r\n  right: 58.33333333%;\r\n}\r\n.spexp .col-xs-pull-6 {\r\n  right: 50%;\r\n}\r\n.spexp .col-xs-pull-5 {\r\n  right: 41.66666667%;\r\n}\r\n.spexp .col-xs-pull-4 {\r\n  right: 33.33333333%;\r\n}\r\n.spexp .col-xs-pull-3 {\r\n  right: 25%;\r\n}\r\n.spexp .col-xs-pull-2 {\r\n  right: 16.66666667%;\r\n}\r\n.spexp .col-xs-pull-1 {\r\n  right: 8.33333333%;\r\n}\r\n.spexp .col-xs-pull-0 {\r\n  right: auto;\r\n}\r\n.spexp .col-xs-push-12 {\r\n  left: 100%;\r\n}\r\n.spexp .col-xs-push-11 {\r\n  left: 91.66666667%;\r\n}\r\n.spexp .col-xs-push-10 {\r\n  left: 83.33333333%;\r\n}\r\n.spexp .col-xs-push-9 {\r\n  left: 75%;\r\n}\r\n.spexp .col-xs-push-8 {\r\n  left: 66.66666667%;\r\n}\r\n.spexp .col-xs-push-7 {\r\n  left: 58.33333333%;\r\n}\r\n.spexp .col-xs-push-6 {\r\n  left: 50%;\r\n}\r\n.spexp .col-xs-push-5 {\r\n  left: 41.66666667%;\r\n}\r\n.spexp .col-xs-push-4 {\r\n  left: 33.33333333%;\r\n}\r\n.spexp .col-xs-push-3 {\r\n  left: 25%;\r\n}\r\n.spexp .col-xs-push-2 {\r\n  left: 16.66666667%;\r\n}\r\n.spexp .col-xs-push-1 {\r\n  left: 8.33333333%;\r\n}\r\n.spexp .col-xs-push-0 {\r\n  left: auto;\r\n}\r\n.spexp .col-xs-offset-12 {\r\n  margin-left: 100%;\r\n}\r\n.spexp .col-xs-offset-11 {\r\n  margin-left: 91.66666667%;\r\n}\r\n.spexp .col-xs-offset-10 {\r\n  margin-left: 83.33333333%;\r\n}\r\n.spexp .col-xs-offset-9 {\r\n  margin-left: 75%;\r\n}\r\n.spexp .col-xs-offset-8 {\r\n  margin-left: 66.66666667%;\r\n}\r\n.spexp .col-xs-offset-7 {\r\n  margin-left: 58.33333333%;\r\n}\r\n.spexp .col-xs-offset-6 {\r\n  margin-left: 50%;\r\n}\r\n.spexp .col-xs-offset-5 {\r\n  margin-left: 41.66666667%;\r\n}\r\n.spexp .col-xs-offset-4 {\r\n  margin-left: 33.33333333%;\r\n}\r\n.spexp .col-xs-offset-3 {\r\n  margin-left: 25%;\r\n}\r\n.spexp .col-xs-offset-2 {\r\n  margin-left: 16.66666667%;\r\n}\r\n.spexp .col-xs-offset-1 {\r\n  margin-left: 8.33333333%;\r\n}\r\n.spexp .col-xs-offset-0 {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .col-sm-1,\r\n  .spexp .col-sm-2,\r\n  .spexp .col-sm-3,\r\n  .spexp .col-sm-4,\r\n  .spexp .col-sm-5,\r\n  .spexp .col-sm-6,\r\n  .spexp .col-sm-7,\r\n  .spexp .col-sm-8,\r\n  .spexp .col-sm-9,\r\n  .spexp .col-sm-10,\r\n  .spexp .col-sm-11,\r\n  .spexp .col-sm-12 {\r\n    float: left;\r\n  }\r\n  .spexp .col-sm-12 {\r\n    width: 100%;\r\n  }\r\n  .spexp .col-sm-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .spexp .col-sm-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .spexp .col-sm-9 {\r\n    width: 75%;\r\n  }\r\n  .spexp .col-sm-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .spexp .col-sm-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .spexp .col-sm-6 {\r\n    width: 50%;\r\n  }\r\n  .spexp .col-sm-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .spexp .col-sm-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .spexp .col-sm-3 {\r\n    width: 25%;\r\n  }\r\n  .spexp .col-sm-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .spexp .col-sm-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .spexp .col-sm-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .spexp .col-sm-pull-11 {\r\n    right: 91.66666667%;\r\n  }\r\n  .spexp .col-sm-pull-10 {\r\n    right: 83.33333333%;\r\n  }\r\n  .spexp .col-sm-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .spexp .col-sm-pull-8 {\r\n    right: 66.66666667%;\r\n  }\r\n  .spexp .col-sm-pull-7 {\r\n    right: 58.33333333%;\r\n  }\r\n  .spexp .col-sm-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .spexp .col-sm-pull-5 {\r\n    right: 41.66666667%;\r\n  }\r\n  .spexp .col-sm-pull-4 {\r\n    right: 33.33333333%;\r\n  }\r\n  .spexp .col-sm-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .spexp .col-sm-pull-2 {\r\n    right: 16.66666667%;\r\n  }\r\n  .spexp .col-sm-pull-1 {\r\n    right: 8.33333333%;\r\n  }\r\n  .spexp .col-sm-pull-0 {\r\n    right: auto;\r\n  }\r\n  .spexp .col-sm-push-12 {\r\n    left: 100%;\r\n  }\r\n  .spexp .col-sm-push-11 {\r\n    left: 91.66666667%;\r\n  }\r\n  .spexp .col-sm-push-10 {\r\n    left: 83.33333333%;\r\n  }\r\n  .spexp .col-sm-push-9 {\r\n    left: 75%;\r\n  }\r\n  .spexp .col-sm-push-8 {\r\n    left: 66.66666667%;\r\n  }\r\n  .spexp .col-sm-push-7 {\r\n    left: 58.33333333%;\r\n  }\r\n  .spexp .col-sm-push-6 {\r\n    left: 50%;\r\n  }\r\n  .spexp .col-sm-push-5 {\r\n    left: 41.66666667%;\r\n  }\r\n  .spexp .col-sm-push-4 {\r\n    left: 33.33333333%;\r\n  }\r\n  .spexp .col-sm-push-3 {\r\n    left: 25%;\r\n  }\r\n  .spexp .col-sm-push-2 {\r\n    left: 16.66666667%;\r\n  }\r\n  .spexp .col-sm-push-1 {\r\n    left: 8.33333333%;\r\n  }\r\n  .spexp .col-sm-push-0 {\r\n    left: auto;\r\n  }\r\n  .spexp .col-sm-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .spexp .col-sm-offset-11 {\r\n    margin-left: 91.66666667%;\r\n  }\r\n  .spexp .col-sm-offset-10 {\r\n    margin-left: 83.33333333%;\r\n  }\r\n  .spexp .col-sm-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .spexp .col-sm-offset-8 {\r\n    margin-left: 66.66666667%;\r\n  }\r\n  .spexp .col-sm-offset-7 {\r\n    margin-left: 58.33333333%;\r\n  }\r\n  .spexp .col-sm-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .spexp .col-sm-offset-5 {\r\n    margin-left: 41.66666667%;\r\n  }\r\n  .spexp .col-sm-offset-4 {\r\n    margin-left: 33.33333333%;\r\n  }\r\n  .spexp .col-sm-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .spexp .col-sm-offset-2 {\r\n    margin-left: 16.66666667%;\r\n  }\r\n  .spexp .col-sm-offset-1 {\r\n    margin-left: 8.33333333%;\r\n  }\r\n  .spexp .col-sm-offset-0 {\r\n    margin-left: 0;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .spexp .col-md-1,\r\n  .spexp .col-md-2,\r\n  .spexp .col-md-3,\r\n  .spexp .col-md-4,\r\n  .spexp .col-md-5,\r\n  .spexp .col-md-6,\r\n  .spexp .col-md-7,\r\n  .spexp .col-md-8,\r\n  .spexp .col-md-9,\r\n  .spexp .col-md-10,\r\n  .spexp .col-md-11,\r\n  .spexp .col-md-12 {\r\n    float: left;\r\n  }\r\n  .spexp .col-md-12 {\r\n    width: 100%;\r\n  }\r\n  .spexp .col-md-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .spexp .col-md-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .spexp .col-md-9 {\r\n    width: 75%;\r\n  }\r\n  .spexp .col-md-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .spexp .col-md-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .spexp .col-md-6 {\r\n    width: 50%;\r\n  }\r\n  .spexp .col-md-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .spexp .col-md-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .spexp .col-md-3 {\r\n    width: 25%;\r\n  }\r\n  .spexp .col-md-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .spexp .col-md-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .spexp .col-md-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .spexp .col-md-pull-11 {\r\n    right: 91.66666667%;\r\n  }\r\n  .spexp .col-md-pull-10 {\r\n    right: 83.33333333%;\r\n  }\r\n  .spexp .col-md-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .spexp .col-md-pull-8 {\r\n    right: 66.66666667%;\r\n  }\r\n  .spexp .col-md-pull-7 {\r\n    right: 58.33333333%;\r\n  }\r\n  .spexp .col-md-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .spexp .col-md-pull-5 {\r\n    right: 41.66666667%;\r\n  }\r\n  .spexp .col-md-pull-4 {\r\n    right: 33.33333333%;\r\n  }\r\n  .spexp .col-md-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .spexp .col-md-pull-2 {\r\n    right: 16.66666667%;\r\n  }\r\n  .spexp .col-md-pull-1 {\r\n    right: 8.33333333%;\r\n  }\r\n  .spexp .col-md-pull-0 {\r\n    right: auto;\r\n  }\r\n  .spexp .col-md-push-12 {\r\n    left: 100%;\r\n  }\r\n  .spexp .col-md-push-11 {\r\n    left: 91.66666667%;\r\n  }\r\n  .spexp .col-md-push-10 {\r\n    left: 83.33333333%;\r\n  }\r\n  .spexp .col-md-push-9 {\r\n    left: 75%;\r\n  }\r\n  .spexp .col-md-push-8 {\r\n    left: 66.66666667%;\r\n  }\r\n  .spexp .col-md-push-7 {\r\n    left: 58.33333333%;\r\n  }\r\n  .spexp .col-md-push-6 {\r\n    left: 50%;\r\n  }\r\n  .spexp .col-md-push-5 {\r\n    left: 41.66666667%;\r\n  }\r\n  .spexp .col-md-push-4 {\r\n    left: 33.33333333%;\r\n  }\r\n  .spexp .col-md-push-3 {\r\n    left: 25%;\r\n  }\r\n  .spexp .col-md-push-2 {\r\n    left: 16.66666667%;\r\n  }\r\n  .spexp .col-md-push-1 {\r\n    left: 8.33333333%;\r\n  }\r\n  .spexp .col-md-push-0 {\r\n    left: auto;\r\n  }\r\n  .spexp .col-md-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .spexp .col-md-offset-11 {\r\n    margin-left: 91.66666667%;\r\n  }\r\n  .spexp .col-md-offset-10 {\r\n    margin-left: 83.33333333%;\r\n  }\r\n  .spexp .col-md-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .spexp .col-md-offset-8 {\r\n    margin-left: 66.66666667%;\r\n  }\r\n  .spexp .col-md-offset-7 {\r\n    margin-left: 58.33333333%;\r\n  }\r\n  .spexp .col-md-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .spexp .col-md-offset-5 {\r\n    margin-left: 41.66666667%;\r\n  }\r\n  .spexp .col-md-offset-4 {\r\n    margin-left: 33.33333333%;\r\n  }\r\n  .spexp .col-md-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .spexp .col-md-offset-2 {\r\n    margin-left: 16.66666667%;\r\n  }\r\n  .spexp .col-md-offset-1 {\r\n    margin-left: 8.33333333%;\r\n  }\r\n  .spexp .col-md-offset-0 {\r\n    margin-left: 0;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .col-lg-1,\r\n  .spexp .col-lg-2,\r\n  .spexp .col-lg-3,\r\n  .spexp .col-lg-4,\r\n  .spexp .col-lg-5,\r\n  .spexp .col-lg-6,\r\n  .spexp .col-lg-7,\r\n  .spexp .col-lg-8,\r\n  .spexp .col-lg-9,\r\n  .spexp .col-lg-10,\r\n  .spexp .col-lg-11,\r\n  .spexp .col-lg-12 {\r\n    float: left;\r\n  }\r\n  .spexp .col-lg-12 {\r\n    width: 100%;\r\n  }\r\n  .spexp .col-lg-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .spexp .col-lg-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .spexp .col-lg-9 {\r\n    width: 75%;\r\n  }\r\n  .spexp .col-lg-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .spexp .col-lg-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .spexp .col-lg-6 {\r\n    width: 50%;\r\n  }\r\n  .spexp .col-lg-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .spexp .col-lg-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .spexp .col-lg-3 {\r\n    width: 25%;\r\n  }\r\n  .spexp .col-lg-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .spexp .col-lg-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .spexp .col-lg-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .spexp .col-lg-pull-11 {\r\n    right: 91.66666667%;\r\n  }\r\n  .spexp .col-lg-pull-10 {\r\n    right: 83.33333333%;\r\n  }\r\n  .spexp .col-lg-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .spexp .col-lg-pull-8 {\r\n    right: 66.66666667%;\r\n  }\r\n  .spexp .col-lg-pull-7 {\r\n    right: 58.33333333%;\r\n  }\r\n  .spexp .col-lg-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .spexp .col-lg-pull-5 {\r\n    right: 41.66666667%;\r\n  }\r\n  .spexp .col-lg-pull-4 {\r\n    right: 33.33333333%;\r\n  }\r\n  .spexp .col-lg-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .spexp .col-lg-pull-2 {\r\n    right: 16.66666667%;\r\n  }\r\n  .spexp .col-lg-pull-1 {\r\n    right: 8.33333333%;\r\n  }\r\n  .spexp .col-lg-pull-0 {\r\n    right: auto;\r\n  }\r\n  .spexp .col-lg-push-12 {\r\n    left: 100%;\r\n  }\r\n  .spexp .col-lg-push-11 {\r\n    left: 91.66666667%;\r\n  }\r\n  .spexp .col-lg-push-10 {\r\n    left: 83.33333333%;\r\n  }\r\n  .spexp .col-lg-push-9 {\r\n    left: 75%;\r\n  }\r\n  .spexp .col-lg-push-8 {\r\n    left: 66.66666667%;\r\n  }\r\n  .spexp .col-lg-push-7 {\r\n    left: 58.33333333%;\r\n  }\r\n  .spexp .col-lg-push-6 {\r\n    left: 50%;\r\n  }\r\n  .spexp .col-lg-push-5 {\r\n    left: 41.66666667%;\r\n  }\r\n  .spexp .col-lg-push-4 {\r\n    left: 33.33333333%;\r\n  }\r\n  .spexp .col-lg-push-3 {\r\n    left: 25%;\r\n  }\r\n  .spexp .col-lg-push-2 {\r\n    left: 16.66666667%;\r\n  }\r\n  .spexp .col-lg-push-1 {\r\n    left: 8.33333333%;\r\n  }\r\n  .spexp .col-lg-push-0 {\r\n    left: auto;\r\n  }\r\n  .spexp .col-lg-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .spexp .col-lg-offset-11 {\r\n    margin-left: 91.66666667%;\r\n  }\r\n  .spexp .col-lg-offset-10 {\r\n    margin-left: 83.33333333%;\r\n  }\r\n  .spexp .col-lg-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .spexp .col-lg-offset-8 {\r\n    margin-left: 66.66666667%;\r\n  }\r\n  .spexp .col-lg-offset-7 {\r\n    margin-left: 58.33333333%;\r\n  }\r\n  .spexp .col-lg-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .spexp .col-lg-offset-5 {\r\n    margin-left: 41.66666667%;\r\n  }\r\n  .spexp .col-lg-offset-4 {\r\n    margin-left: 33.33333333%;\r\n  }\r\n  .spexp .col-lg-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .spexp .col-lg-offset-2 {\r\n    margin-left: 16.66666667%;\r\n  }\r\n  .spexp .col-lg-offset-1 {\r\n    margin-left: 8.33333333%;\r\n  }\r\n  .spexp .col-lg-offset-0 {\r\n    margin-left: 0;\r\n  }\r\n}\r\n.spexp table {\r\n  background-color: transparent;\r\n}\r\n.spexp caption {\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  color: #777;\r\n  text-align: left;\r\n}\r\n.spexp th {\r\n  text-align: left;\r\n}\r\n.spexp .table {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n.spexp .table > thead > tr > th,\r\n.spexp .table > tbody > tr > th,\r\n.spexp .table > tfoot > tr > th,\r\n.spexp .table > thead > tr > td,\r\n.spexp .table > tbody > tr > td,\r\n.spexp .table > tfoot > tr > td {\r\n  padding: 8px;\r\n  line-height: 1.42857143;\r\n  vertical-align: top;\r\n  border-top: 1px solid #ddd;\r\n}\r\n.spexp .table > thead > tr > th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid #ddd;\r\n}\r\n.spexp .table > caption + thead > tr:first-child > th,\r\n.spexp .table > colgroup + thead > tr:first-child > th,\r\n.spexp .table > thead:first-child > tr:first-child > th,\r\n.spexp .table > caption + thead > tr:first-child > td,\r\n.spexp .table > colgroup + thead > tr:first-child > td,\r\n.spexp .table > thead:first-child > tr:first-child > td {\r\n  border-top: 0;\r\n}\r\n.spexp .table > tbody + tbody {\r\n  border-top: 2px solid #ddd;\r\n}\r\n.spexp .table .table {\r\n  background-color: #fff;\r\n}\r\n.spexp .table-condensed > thead > tr > th,\r\n.spexp .table-condensed > tbody > tr > th,\r\n.spexp .table-condensed > tfoot > tr > th,\r\n.spexp .table-condensed > thead > tr > td,\r\n.spexp .table-condensed > tbody > tr > td,\r\n.spexp .table-condensed > tfoot > tr > td {\r\n  padding: 5px;\r\n}\r\n.spexp .table-bordered {\r\n  border: 1px solid #ddd;\r\n}\r\n.spexp .table-bordered > thead > tr > th,\r\n.spexp .table-bordered > tbody > tr > th,\r\n.spexp .table-bordered > tfoot > tr > th,\r\n.spexp .table-bordered > thead > tr > td,\r\n.spexp .table-bordered > tbody > tr > td,\r\n.spexp .table-bordered > tfoot > tr > td {\r\n  border: 1px solid #ddd;\r\n}\r\n.spexp .table-bordered > thead > tr > th,\r\n.spexp .table-bordered > thead > tr > td {\r\n  border-bottom-width: 2px;\r\n}\r\n.spexp .table-striped > tbody > tr:nth-of-type(odd) {\r\n  background-color: #f9f9f9;\r\n}\r\n.spexp .table-hover > tbody > tr:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n.spexp table col[class*=\"col-\"] {\r\n  position: static;\r\n  display: table-column;\r\n  float: none;\r\n}\r\n.spexp table td[class*=\"col-\"],\r\n.spexp table th[class*=\"col-\"] {\r\n  position: static;\r\n  display: table-cell;\r\n  float: none;\r\n}\r\n.spexp .table > thead > tr > td.active,\r\n.spexp .table > tbody > tr > td.active,\r\n.spexp .table > tfoot > tr > td.active,\r\n.spexp .table > thead > tr > th.active,\r\n.spexp .table > tbody > tr > th.active,\r\n.spexp .table > tfoot > tr > th.active,\r\n.spexp .table > thead > tr.active > td,\r\n.spexp .table > tbody > tr.active > td,\r\n.spexp .table > tfoot > tr.active > td,\r\n.spexp .table > thead > tr.active > th,\r\n.spexp .table > tbody > tr.active > th,\r\n.spexp .table > tfoot > tr.active > th {\r\n  background-color: #f5f5f5;\r\n}\r\n.spexp .table-hover > tbody > tr > td.active:hover,\r\n.spexp .table-hover > tbody > tr > th.active:hover,\r\n.spexp .table-hover > tbody > tr.active:hover > td,\r\n.spexp .table-hover > tbody > tr:hover > .active,\r\n.spexp .table-hover > tbody > tr.active:hover > th {\r\n  background-color: #e8e8e8;\r\n}\r\n.spexp .table > thead > tr > td.success,\r\n.spexp .table > tbody > tr > td.success,\r\n.spexp .table > tfoot > tr > td.success,\r\n.spexp .table > thead > tr > th.success,\r\n.spexp .table > tbody > tr > th.success,\r\n.spexp .table > tfoot > tr > th.success,\r\n.spexp .table > thead > tr.success > td,\r\n.spexp .table > tbody > tr.success > td,\r\n.spexp .table > tfoot > tr.success > td,\r\n.spexp .table > thead > tr.success > th,\r\n.spexp .table > tbody > tr.success > th,\r\n.spexp .table > tfoot > tr.success > th {\r\n  background-color: #dff0d8;\r\n}\r\n.spexp .table-hover > tbody > tr > td.success:hover,\r\n.spexp .table-hover > tbody > tr > th.success:hover,\r\n.spexp .table-hover > tbody > tr.success:hover > td,\r\n.spexp .table-hover > tbody > tr:hover > .success,\r\n.spexp .table-hover > tbody > tr.success:hover > th {\r\n  background-color: #d0e9c6;\r\n}\r\n.spexp .table > thead > tr > td.info,\r\n.spexp .table > tbody > tr > td.info,\r\n.spexp .table > tfoot > tr > td.info,\r\n.spexp .table > thead > tr > th.info,\r\n.spexp .table > tbody > tr > th.info,\r\n.spexp .table > tfoot > tr > th.info,\r\n.spexp .table > thead > tr.info > td,\r\n.spexp .table > tbody > tr.info > td,\r\n.spexp .table > tfoot > tr.info > td,\r\n.spexp .table > thead > tr.info > th,\r\n.spexp .table > tbody > tr.info > th,\r\n.spexp .table > tfoot > tr.info > th {\r\n  background-color: #d9edf7;\r\n}\r\n.spexp .table-hover > tbody > tr > td.info:hover,\r\n.spexp .table-hover > tbody > tr > th.info:hover,\r\n.spexp .table-hover > tbody > tr.info:hover > td,\r\n.spexp .table-hover > tbody > tr:hover > .info,\r\n.spexp .table-hover > tbody > tr.info:hover > th {\r\n  background-color: #c4e3f3;\r\n}\r\n.spexp .table > thead > tr > td.warning,\r\n.spexp .table > tbody > tr > td.warning,\r\n.spexp .table > tfoot > tr > td.warning,\r\n.spexp .table > thead > tr > th.warning,\r\n.spexp .table > tbody > tr > th.warning,\r\n.spexp .table > tfoot > tr > th.warning,\r\n.spexp .table > thead > tr.warning > td,\r\n.spexp .table > tbody > tr.warning > td,\r\n.spexp .table > tfoot > tr.warning > td,\r\n.spexp .table > thead > tr.warning > th,\r\n.spexp .table > tbody > tr.warning > th,\r\n.spexp .table > tfoot > tr.warning > th {\r\n  background-color: #fcf8e3;\r\n}\r\n.spexp .table-hover > tbody > tr > td.warning:hover,\r\n.spexp .table-hover > tbody > tr > th.warning:hover,\r\n.spexp .table-hover > tbody > tr.warning:hover > td,\r\n.spexp .table-hover > tbody > tr:hover > .warning,\r\n.spexp .table-hover > tbody > tr.warning:hover > th {\r\n  background-color: #faf2cc;\r\n}\r\n.spexp .table > thead > tr > td.danger,\r\n.spexp .table > tbody > tr > td.danger,\r\n.spexp .table > tfoot > tr > td.danger,\r\n.spexp .table > thead > tr > th.danger,\r\n.spexp .table > tbody > tr > th.danger,\r\n.spexp .table > tfoot > tr > th.danger,\r\n.spexp .table > thead > tr.danger > td,\r\n.spexp .table > tbody > tr.danger > td,\r\n.spexp .table > tfoot > tr.danger > td,\r\n.spexp .table > thead > tr.danger > th,\r\n.spexp .table > tbody > tr.danger > th,\r\n.spexp .table > tfoot > tr.danger > th {\r\n  background-color: #f2dede;\r\n}\r\n.spexp .table-hover > tbody > tr > td.danger:hover,\r\n.spexp .table-hover > tbody > tr > th.danger:hover,\r\n.spexp .table-hover > tbody > tr.danger:hover > td,\r\n.spexp .table-hover > tbody > tr:hover > .danger,\r\n.spexp .table-hover > tbody > tr.danger:hover > th {\r\n  background-color: #ebcccc;\r\n}\r\n.spexp .table-responsive {\r\n  min-height: .01%;\r\n  overflow-x: auto;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .spexp .table-responsive {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    overflow-y: hidden;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    border: 1px solid #ddd;\r\n  }\r\n  .spexp .table-responsive > .table {\r\n    margin-bottom: 0;\r\n  }\r\n  .spexp .table-responsive > .table > thead > tr > th,\r\n  .spexp .table-responsive > .table > tbody > tr > th,\r\n  .spexp .table-responsive > .table > tfoot > tr > th,\r\n  .spexp .table-responsive > .table > thead > tr > td,\r\n  .spexp .table-responsive > .table > tbody > tr > td,\r\n  .spexp .table-responsive > .table > tfoot > tr > td {\r\n    white-space: nowrap;\r\n  }\r\n  .spexp .table-responsive > .table-bordered {\r\n    border: 0;\r\n  }\r\n  .spexp .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .spexp .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .spexp .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .spexp .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .spexp .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .spexp .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n    border-left: 0;\r\n  }\r\n  .spexp .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .spexp .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .spexp .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .spexp .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .spexp .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .spexp .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n    border-right: 0;\r\n  }\r\n  .spexp .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .spexp .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .spexp .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .spexp .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n    border-bottom: 0;\r\n  }\r\n}\r\n.spexp fieldset {\r\n  min-width: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n.spexp legend {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin-bottom: 20px;\r\n  font-size: 21px;\r\n  line-height: inherit;\r\n  color: #333;\r\n  border: 0;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.spexp label {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}\r\n.spexp input[type=\"search\"] {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.spexp input[type=\"radio\"],\r\n.spexp input[type=\"checkbox\"] {\r\n  margin: 4px 0 0;\r\n  margin-top: 1px \\9;\r\n  line-height: normal;\r\n}\r\n.spexp input[type=\"file\"] {\r\n  display: block;\r\n}\r\n.spexp input[type=\"range\"] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.spexp select[multiple],\r\n.spexp select[size] {\r\n  height: auto;\r\n}\r\n.spexp input[type=\"file\"]:focus,\r\n.spexp input[type=\"radio\"]:focus,\r\n.spexp input[type=\"checkbox\"]:focus {\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.spexp output {\r\n  display: block;\r\n  padding-top: 7px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #555;\r\n}\r\n.spexp .form-control {\r\n  display: block;\r\n  width: 100%;\r\n  height: 34px;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #555;\r\n  background-color: #fff;\r\n  background-image: none;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n}\r\n.spexp .form-control:focus {\r\n  border-color: #66afe9;\r\n  outline: 0;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n.spexp .form-control::-moz-placeholder {\r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n.spexp .form-control:-ms-input-placeholder {\r\n  color: #999;\r\n}\r\n.spexp .form-control::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\n.spexp .form-control::-ms-expand {\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.spexp .form-control[disabled],\r\n.spexp .form-control[readonly],\r\n.spexp fieldset[disabled] .form-control {\r\n  background-color: #eee;\r\n  opacity: 1;\r\n}\r\n.spexp .form-control[disabled],\r\n.spexp fieldset[disabled] .form-control {\r\n  cursor: not-allowed;\r\n}\r\n.spexp textarea.form-control {\r\n  height: auto;\r\n}\r\n.spexp input[type=\"search\"] {\r\n  -webkit-appearance: none;\r\n}\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  .spexp input[type=\"date\"].form-control,\r\n  .spexp input[type=\"time\"].form-control,\r\n  .spexp input[type=\"datetime-local\"].form-control,\r\n  .spexp input[type=\"month\"].form-control {\r\n    line-height: 34px;\r\n  }\r\n  .spexp input[type=\"date\"].input-sm,\r\n  .spexp input[type=\"time\"].input-sm,\r\n  .spexp input[type=\"datetime-local\"].input-sm,\r\n  .spexp input[type=\"month\"].input-sm,\r\n  .spexp .input-group-sm input[type=\"date\"],\r\n  .spexp .input-group-sm input[type=\"time\"],\r\n  .spexp .input-group-sm input[type=\"datetime-local\"],\r\n  .spexp .input-group-sm input[type=\"month\"] {\r\n    line-height: 30px;\r\n  }\r\n  .spexp input[type=\"date\"].input-lg,\r\n  .spexp input[type=\"time\"].input-lg,\r\n  .spexp input[type=\"datetime-local\"].input-lg,\r\n  .spexp input[type=\"month\"].input-lg,\r\n  .spexp .input-group-lg input[type=\"date\"],\r\n  .spexp .input-group-lg input[type=\"time\"],\r\n  .spexp .input-group-lg input[type=\"datetime-local\"],\r\n  .spexp .input-group-lg input[type=\"month\"] {\r\n    line-height: 46px;\r\n  }\r\n}\r\n.spexp .form-group {\r\n  margin-bottom: 15px;\r\n}\r\n.spexp .radio,\r\n.spexp .checkbox {\r\n  position: relative;\r\n  display: block;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.spexp .radio label,\r\n.spexp .checkbox label {\r\n  min-height: 20px;\r\n  padding-left: 20px;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  cursor: pointer;\r\n}\r\n.spexp .radio input[type=\"radio\"],\r\n.spexp .radio-inline input[type=\"radio\"],\r\n.spexp .checkbox input[type=\"checkbox\"],\r\n.spexp .checkbox-inline input[type=\"checkbox\"] {\r\n  position: absolute;\r\n  margin-top: 4px \\9;\r\n  margin-left: -20px;\r\n}\r\n.spexp .radio + .radio,\r\n.spexp .checkbox + .checkbox {\r\n  margin-top: -5px;\r\n}\r\n.spexp .radio-inline,\r\n.spexp .checkbox-inline {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding-left: 20px;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n.spexp .radio-inline + .radio-inline,\r\n.spexp .checkbox-inline + .checkbox-inline {\r\n  margin-top: 0;\r\n  margin-left: 10px;\r\n}\r\n.spexp input[type=\"radio\"][disabled],\r\n.spexp input[type=\"checkbox\"][disabled],\r\n.spexp input[type=\"radio\"].disabled,\r\n.spexp input[type=\"checkbox\"].disabled,\r\n.spexp fieldset[disabled] input[type=\"radio\"],\r\n.spexp fieldset[disabled] input[type=\"checkbox\"] {\r\n  cursor: not-allowed;\r\n}\r\n.spexp .radio-inline.disabled,\r\n.spexp .checkbox-inline.disabled,\r\n.spexp fieldset[disabled] .radio-inline,\r\n.spexp fieldset[disabled] .checkbox-inline {\r\n  cursor: not-allowed;\r\n}\r\n.spexp .radio.disabled label,\r\n.spexp .checkbox.disabled label,\r\n.spexp fieldset[disabled] .radio label,\r\n.spexp fieldset[disabled] .checkbox label {\r\n  cursor: not-allowed;\r\n}\r\n.spexp .form-control-static {\r\n  min-height: 34px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n  margin-bottom: 0;\r\n}\r\n.spexp .form-control-static.input-lg,\r\n.spexp .form-control-static.input-sm {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n.spexp .input-sm {\r\n  height: 30px;\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.spexp select.input-sm {\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\n.spexp textarea.input-sm,\r\n.spexp select[multiple].input-sm {\r\n  height: auto;\r\n}\r\n.spexp .form-group-sm .form-control {\r\n  height: 30px;\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.spexp .form-group-sm select.form-control {\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\n.spexp .form-group-sm textarea.form-control,\r\n.spexp .form-group-sm select[multiple].form-control {\r\n  height: auto;\r\n}\r\n.spexp .form-group-sm .form-control-static {\r\n  height: 30px;\r\n  min-height: 32px;\r\n  padding: 6px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n}\r\n.spexp .input-lg {\r\n  height: 46px;\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\n.spexp select.input-lg {\r\n  height: 46px;\r\n  line-height: 46px;\r\n}\r\n.spexp textarea.input-lg,\r\n.spexp select[multiple].input-lg {\r\n  height: auto;\r\n}\r\n.spexp .form-group-lg .form-control {\r\n  height: 46px;\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\n.spexp .form-group-lg select.form-control {\r\n  height: 46px;\r\n  line-height: 46px;\r\n}\r\n.spexp .form-group-lg textarea.form-control,\r\n.spexp .form-group-lg select[multiple].form-control {\r\n  height: auto;\r\n}\r\n.spexp .form-group-lg .form-control-static {\r\n  height: 46px;\r\n  min-height: 38px;\r\n  padding: 11px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n}\r\n.spexp .has-feedback {\r\n  position: relative;\r\n}\r\n.spexp .has-feedback .form-control {\r\n  padding-right: 42.5px;\r\n}\r\n.spexp .form-control-feedback {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n  pointer-events: none;\r\n}\r\n.spexp .input-lg + .form-control-feedback,\r\n.spexp .input-group-lg + .form-control-feedback,\r\n.spexp .form-group-lg .form-control + .form-control-feedback {\r\n  width: 46px;\r\n  height: 46px;\r\n  line-height: 46px;\r\n}\r\n.spexp .input-sm + .form-control-feedback,\r\n.spexp .input-group-sm + .form-control-feedback,\r\n.spexp .form-group-sm .form-control + .form-control-feedback {\r\n  width: 30px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\n.spexp .has-success .help-block,\r\n.spexp .has-success .control-label,\r\n.spexp .has-success .radio,\r\n.spexp .has-success .checkbox,\r\n.spexp .has-success .radio-inline,\r\n.spexp .has-success .checkbox-inline,\r\n.spexp .has-success.radio label,\r\n.spexp .has-success.checkbox label,\r\n.spexp .has-success.radio-inline label,\r\n.spexp .has-success.checkbox-inline label {\r\n  color: #3c763d;\r\n}\r\n.spexp .has-success .form-control {\r\n  border-color: #3c763d;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .has-success .form-control:focus {\r\n  border-color: #2b542c;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\r\n}\r\n.spexp .has-success .input-group-addon {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  border-color: #3c763d;\r\n}\r\n.spexp .has-success .form-control-feedback {\r\n  color: #3c763d;\r\n}\r\n.spexp .has-warning .help-block,\r\n.spexp .has-warning .control-label,\r\n.spexp .has-warning .radio,\r\n.spexp .has-warning .checkbox,\r\n.spexp .has-warning .radio-inline,\r\n.spexp .has-warning .checkbox-inline,\r\n.spexp .has-warning.radio label,\r\n.spexp .has-warning.checkbox label,\r\n.spexp .has-warning.radio-inline label,\r\n.spexp .has-warning.checkbox-inline label {\r\n  color: #8a6d3b;\r\n}\r\n.spexp .has-warning .form-control {\r\n  border-color: #8a6d3b;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .has-warning .form-control:focus {\r\n  border-color: #66512c;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\r\n}\r\n.spexp .has-warning .input-group-addon {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n  border-color: #8a6d3b;\r\n}\r\n.spexp .has-warning .form-control-feedback {\r\n  color: #8a6d3b;\r\n}\r\n.spexp .has-error .help-block,\r\n.spexp .has-error .control-label,\r\n.spexp .has-error .radio,\r\n.spexp .has-error .checkbox,\r\n.spexp .has-error .radio-inline,\r\n.spexp .has-error .checkbox-inline,\r\n.spexp .has-error.radio label,\r\n.spexp .has-error.checkbox label,\r\n.spexp .has-error.radio-inline label,\r\n.spexp .has-error.checkbox-inline label {\r\n  color: #a94442;\r\n}\r\n.spexp .has-error .form-control {\r\n  border-color: #a94442;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .has-error .form-control:focus {\r\n  border-color: #843534;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\r\n}\r\n.spexp .has-error .input-group-addon {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n  border-color: #a94442;\r\n}\r\n.spexp .has-error .form-control-feedback {\r\n  color: #a94442;\r\n}\r\n.spexp .has-feedback label ~ .form-control-feedback {\r\n  top: 25px;\r\n}\r\n.spexp .has-feedback label.sr-only ~ .form-control-feedback {\r\n  top: 0;\r\n}\r\n.spexp .help-block {\r\n  display: block;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  color: #737373;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .form-inline .form-group {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .form-inline .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .form-inline .form-control-static {\r\n    display: inline-block;\r\n  }\r\n  .spexp .form-inline .input-group {\r\n    display: inline-table;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .form-inline .input-group .input-group-addon,\r\n  .spexp .form-inline .input-group .input-group-btn,\r\n  .spexp .form-inline .input-group .form-control {\r\n    width: auto;\r\n  }\r\n  .spexp .form-inline .input-group > .form-control {\r\n    width: 100%;\r\n  }\r\n  .spexp .form-inline .control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .form-inline .radio,\r\n  .spexp .form-inline .checkbox {\r\n    display: inline-block;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .form-inline .radio label,\r\n  .spexp .form-inline .checkbox label {\r\n    padding-left: 0;\r\n  }\r\n  .spexp .form-inline .radio input[type=\"radio\"],\r\n  .spexp .form-inline .checkbox input[type=\"checkbox\"] {\r\n    position: relative;\r\n    margin-left: 0;\r\n  }\r\n  .spexp .form-inline .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n.spexp .form-horizontal .radio,\r\n.spexp .form-horizontal .checkbox,\r\n.spexp .form-horizontal .radio-inline,\r\n.spexp .form-horizontal .checkbox-inline {\r\n  padding-top: 7px;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.spexp .form-horizontal .radio,\r\n.spexp .form-horizontal .checkbox {\r\n  min-height: 27px;\r\n}\r\n.spexp .form-horizontal .form-group {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .form-horizontal .control-label {\r\n    padding-top: 7px;\r\n    margin-bottom: 0;\r\n    text-align: right;\r\n  }\r\n}\r\n.spexp .form-horizontal .has-feedback .form-control-feedback {\r\n  right: 15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .form-horizontal .form-group-lg .control-label {\r\n    padding-top: 11px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .form-horizontal .form-group-sm .control-label {\r\n    padding-top: 6px;\r\n    font-size: 12px;\r\n  }\r\n}\r\n.spexp .btn {\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 1.42857143;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.spexp .btn:focus,\r\n.spexp .btn:active:focus,\r\n.spexp .btn.active:focus,\r\n.spexp .btn.focus,\r\n.spexp .btn:active.focus,\r\n.spexp .btn.active.focus {\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.spexp .btn:hover,\r\n.spexp .btn:focus,\r\n.spexp .btn.focus {\r\n  color: #333;\r\n  text-decoration: none;\r\n}\r\n.spexp .btn:active,\r\n.spexp .btn.active {\r\n  background-image: none;\r\n  outline: 0;\r\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n.spexp .btn.disabled,\r\n.spexp .btn[disabled],\r\n.spexp fieldset[disabled] .btn {\r\n  cursor: not-allowed;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\n.spexp a.btn.disabled,\r\n.spexp fieldset[disabled] a.btn {\r\n  pointer-events: none;\r\n}\r\n.spexp .btn-default {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n.spexp .btn-default:focus,\r\n.spexp .btn-default.focus {\r\n  color: #333;\r\n  background-color: #e6e6e6;\r\n  border-color: #8c8c8c;\r\n}\r\n.spexp .btn-default:hover {\r\n  color: #333;\r\n  background-color: #e6e6e6;\r\n  border-color: #adadad;\r\n}\r\n.spexp .btn-default:active,\r\n.spexp .btn-default.active,\r\n.spexp .open > .dropdown-toggle.btn-default {\r\n  color: #333;\r\n  background-color: #e6e6e6;\r\n  border-color: #adadad;\r\n}\r\n.spexp .btn-default:active:hover,\r\n.spexp .btn-default.active:hover,\r\n.spexp .open > .dropdown-toggle.btn-default:hover,\r\n.spexp .btn-default:active:focus,\r\n.spexp .btn-default.active:focus,\r\n.spexp .open > .dropdown-toggle.btn-default:focus,\r\n.spexp .btn-default:active.focus,\r\n.spexp .btn-default.active.focus,\r\n.spexp .open > .dropdown-toggle.btn-default.focus {\r\n  color: #333;\r\n  background-color: #d4d4d4;\r\n  border-color: #8c8c8c;\r\n}\r\n.spexp .btn-default:active,\r\n.spexp .btn-default.active,\r\n.spexp .open > .dropdown-toggle.btn-default {\r\n  background-image: none;\r\n}\r\n.spexp .btn-default.disabled:hover,\r\n.spexp .btn-default[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-default:hover,\r\n.spexp .btn-default.disabled:focus,\r\n.spexp .btn-default[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-default:focus,\r\n.spexp .btn-default.disabled.focus,\r\n.spexp .btn-default[disabled].focus,\r\n.spexp fieldset[disabled] .btn-default.focus {\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n.spexp .btn-default .badge {\r\n  color: #fff;\r\n  background-color: #333;\r\n}\r\n.spexp .btn-primary {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n}\r\n.spexp .btn-primary:focus,\r\n.spexp .btn-primary.focus {\r\n  color: #fff;\r\n  background-color: #286090;\r\n  border-color: #122b40;\r\n}\r\n.spexp .btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #286090;\r\n  border-color: #204d74;\r\n}\r\n.spexp .btn-primary:active,\r\n.spexp .btn-primary.active,\r\n.spexp .open > .dropdown-toggle.btn-primary {\r\n  color: #fff;\r\n  background-color: #286090;\r\n  border-color: #204d74;\r\n}\r\n.spexp .btn-primary:active:hover,\r\n.spexp .btn-primary.active:hover,\r\n.spexp .open > .dropdown-toggle.btn-primary:hover,\r\n.spexp .btn-primary:active:focus,\r\n.spexp .btn-primary.active:focus,\r\n.spexp .open > .dropdown-toggle.btn-primary:focus,\r\n.spexp .btn-primary:active.focus,\r\n.spexp .btn-primary.active.focus,\r\n.spexp .open > .dropdown-toggle.btn-primary.focus {\r\n  color: #fff;\r\n  background-color: #204d74;\r\n  border-color: #122b40;\r\n}\r\n.spexp .btn-primary:active,\r\n.spexp .btn-primary.active,\r\n.spexp .open > .dropdown-toggle.btn-primary {\r\n  background-image: none;\r\n}\r\n.spexp .btn-primary.disabled:hover,\r\n.spexp .btn-primary[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-primary:hover,\r\n.spexp .btn-primary.disabled:focus,\r\n.spexp .btn-primary[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-primary:focus,\r\n.spexp .btn-primary.disabled.focus,\r\n.spexp .btn-primary[disabled].focus,\r\n.spexp fieldset[disabled] .btn-primary.focus {\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n}\r\n.spexp .btn-primary .badge {\r\n  color: #337ab7;\r\n  background-color: #fff;\r\n}\r\n.spexp .btn-success {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #4cae4c;\r\n}\r\n.spexp .btn-success:focus,\r\n.spexp .btn-success.focus {\r\n  color: #fff;\r\n  background-color: #449d44;\r\n  border-color: #255625;\r\n}\r\n.spexp .btn-success:hover {\r\n  color: #fff;\r\n  background-color: #449d44;\r\n  border-color: #398439;\r\n}\r\n.spexp .btn-success:active,\r\n.spexp .btn-success.active,\r\n.spexp .open > .dropdown-toggle.btn-success {\r\n  color: #fff;\r\n  background-color: #449d44;\r\n  border-color: #398439;\r\n}\r\n.spexp .btn-success:active:hover,\r\n.spexp .btn-success.active:hover,\r\n.spexp .open > .dropdown-toggle.btn-success:hover,\r\n.spexp .btn-success:active:focus,\r\n.spexp .btn-success.active:focus,\r\n.spexp .open > .dropdown-toggle.btn-success:focus,\r\n.spexp .btn-success:active.focus,\r\n.spexp .btn-success.active.focus,\r\n.spexp .open > .dropdown-toggle.btn-success.focus {\r\n  color: #fff;\r\n  background-color: #398439;\r\n  border-color: #255625;\r\n}\r\n.spexp .btn-success:active,\r\n.spexp .btn-success.active,\r\n.spexp .open > .dropdown-toggle.btn-success {\r\n  background-image: none;\r\n}\r\n.spexp .btn-success.disabled:hover,\r\n.spexp .btn-success[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-success:hover,\r\n.spexp .btn-success.disabled:focus,\r\n.spexp .btn-success[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-success:focus,\r\n.spexp .btn-success.disabled.focus,\r\n.spexp .btn-success[disabled].focus,\r\n.spexp fieldset[disabled] .btn-success.focus {\r\n  background-color: #5cb85c;\r\n  border-color: #4cae4c;\r\n}\r\n.spexp .btn-success .badge {\r\n  color: #5cb85c;\r\n  background-color: #fff;\r\n}\r\n.spexp .btn-info {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n  border-color: #46b8da;\r\n}\r\n.spexp .btn-info:focus,\r\n.spexp .btn-info.focus {\r\n  color: #fff;\r\n  background-color: #31b0d5;\r\n  border-color: #1b6d85;\r\n}\r\n.spexp .btn-info:hover {\r\n  color: #fff;\r\n  background-color: #31b0d5;\r\n  border-color: #269abc;\r\n}\r\n.spexp .btn-info:active,\r\n.spexp .btn-info.active,\r\n.spexp .open > .dropdown-toggle.btn-info {\r\n  color: #fff;\r\n  background-color: #31b0d5;\r\n  border-color: #269abc;\r\n}\r\n.spexp .btn-info:active:hover,\r\n.spexp .btn-info.active:hover,\r\n.spexp .open > .dropdown-toggle.btn-info:hover,\r\n.spexp .btn-info:active:focus,\r\n.spexp .btn-info.active:focus,\r\n.spexp .open > .dropdown-toggle.btn-info:focus,\r\n.spexp .btn-info:active.focus,\r\n.spexp .btn-info.active.focus,\r\n.spexp .open > .dropdown-toggle.btn-info.focus {\r\n  color: #fff;\r\n  background-color: #269abc;\r\n  border-color: #1b6d85;\r\n}\r\n.spexp .btn-info:active,\r\n.spexp .btn-info.active,\r\n.spexp .open > .dropdown-toggle.btn-info {\r\n  background-image: none;\r\n}\r\n.spexp .btn-info.disabled:hover,\r\n.spexp .btn-info[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-info:hover,\r\n.spexp .btn-info.disabled:focus,\r\n.spexp .btn-info[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-info:focus,\r\n.spexp .btn-info.disabled.focus,\r\n.spexp .btn-info[disabled].focus,\r\n.spexp fieldset[disabled] .btn-info.focus {\r\n  background-color: #5bc0de;\r\n  border-color: #46b8da;\r\n}\r\n.spexp .btn-info .badge {\r\n  color: #5bc0de;\r\n  background-color: #fff;\r\n}\r\n.spexp .btn-warning {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n  border-color: #eea236;\r\n}\r\n.spexp .btn-warning:focus,\r\n.spexp .btn-warning.focus {\r\n  color: #fff;\r\n  background-color: #ec971f;\r\n  border-color: #985f0d;\r\n}\r\n.spexp .btn-warning:hover {\r\n  color: #fff;\r\n  background-color: #ec971f;\r\n  border-color: #d58512;\r\n}\r\n.spexp .btn-warning:active,\r\n.spexp .btn-warning.active,\r\n.spexp .open > .dropdown-toggle.btn-warning {\r\n  color: #fff;\r\n  background-color: #ec971f;\r\n  border-color: #d58512;\r\n}\r\n.spexp .btn-warning:active:hover,\r\n.spexp .btn-warning.active:hover,\r\n.spexp .open > .dropdown-toggle.btn-warning:hover,\r\n.spexp .btn-warning:active:focus,\r\n.spexp .btn-warning.active:focus,\r\n.spexp .open > .dropdown-toggle.btn-warning:focus,\r\n.spexp .btn-warning:active.focus,\r\n.spexp .btn-warning.active.focus,\r\n.spexp .open > .dropdown-toggle.btn-warning.focus {\r\n  color: #fff;\r\n  background-color: #d58512;\r\n  border-color: #985f0d;\r\n}\r\n.spexp .btn-warning:active,\r\n.spexp .btn-warning.active,\r\n.spexp .open > .dropdown-toggle.btn-warning {\r\n  background-image: none;\r\n}\r\n.spexp .btn-warning.disabled:hover,\r\n.spexp .btn-warning[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-warning:hover,\r\n.spexp .btn-warning.disabled:focus,\r\n.spexp .btn-warning[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-warning:focus,\r\n.spexp .btn-warning.disabled.focus,\r\n.spexp .btn-warning[disabled].focus,\r\n.spexp fieldset[disabled] .btn-warning.focus {\r\n  background-color: #f0ad4e;\r\n  border-color: #eea236;\r\n}\r\n.spexp .btn-warning .badge {\r\n  color: #f0ad4e;\r\n  background-color: #fff;\r\n}\r\n.spexp .btn-danger {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n}\r\n.spexp .btn-danger:focus,\r\n.spexp .btn-danger.focus {\r\n  color: #fff;\r\n  background-color: #c9302c;\r\n  border-color: #761c19;\r\n}\r\n.spexp .btn-danger:hover {\r\n  color: #fff;\r\n  background-color: #c9302c;\r\n  border-color: #ac2925;\r\n}\r\n.spexp .btn-danger:active,\r\n.spexp .btn-danger.active,\r\n.spexp .open > .dropdown-toggle.btn-danger {\r\n  color: #fff;\r\n  background-color: #c9302c;\r\n  border-color: #ac2925;\r\n}\r\n.spexp .btn-danger:active:hover,\r\n.spexp .btn-danger.active:hover,\r\n.spexp .open > .dropdown-toggle.btn-danger:hover,\r\n.spexp .btn-danger:active:focus,\r\n.spexp .btn-danger.active:focus,\r\n.spexp .open > .dropdown-toggle.btn-danger:focus,\r\n.spexp .btn-danger:active.focus,\r\n.spexp .btn-danger.active.focus,\r\n.spexp .open > .dropdown-toggle.btn-danger.focus {\r\n  color: #fff;\r\n  background-color: #ac2925;\r\n  border-color: #761c19;\r\n}\r\n.spexp .btn-danger:active,\r\n.spexp .btn-danger.active,\r\n.spexp .open > .dropdown-toggle.btn-danger {\r\n  background-image: none;\r\n}\r\n.spexp .btn-danger.disabled:hover,\r\n.spexp .btn-danger[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-danger:hover,\r\n.spexp .btn-danger.disabled:focus,\r\n.spexp .btn-danger[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-danger:focus,\r\n.spexp .btn-danger.disabled.focus,\r\n.spexp .btn-danger[disabled].focus,\r\n.spexp fieldset[disabled] .btn-danger.focus {\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n}\r\n.spexp .btn-danger .badge {\r\n  color: #d9534f;\r\n  background-color: #fff;\r\n}\r\n.spexp .btn-link {\r\n  font-weight: normal;\r\n  color: #337ab7;\r\n  border-radius: 0;\r\n}\r\n.spexp .btn-link,\r\n.spexp .btn-link:active,\r\n.spexp .btn-link.active,\r\n.spexp .btn-link[disabled],\r\n.spexp fieldset[disabled] .btn-link {\r\n  background-color: transparent;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.spexp .btn-link,\r\n.spexp .btn-link:hover,\r\n.spexp .btn-link:focus,\r\n.spexp .btn-link:active {\r\n  border-color: transparent;\r\n}\r\n.spexp .btn-link:hover,\r\n.spexp .btn-link:focus {\r\n  color: #23527c;\r\n  text-decoration: underline;\r\n  background-color: transparent;\r\n}\r\n.spexp .btn-link[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-link:hover,\r\n.spexp .btn-link[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-link:focus {\r\n  color: #777;\r\n  text-decoration: none;\r\n}\r\n.spexp .btn-lg,\r\n.spexp .btn-group-lg > .btn {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\n.spexp .btn-sm,\r\n.spexp .btn-group-sm > .btn {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.spexp .btn-xs,\r\n.spexp .btn-group-xs > .btn {\r\n  padding: 1px 5px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.spexp .btn-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.spexp .btn-block + .btn-block {\r\n  margin-top: 5px;\r\n}\r\n.spexp input[type=\"submit\"].btn-block,\r\n.spexp input[type=\"reset\"].btn-block,\r\n.spexp input[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n.spexp .fade {\r\n  opacity: 0;\r\n  -webkit-transition: opacity .15s linear;\r\n  -o-transition: opacity .15s linear;\r\n  transition: opacity .15s linear;\r\n}\r\n.spexp .fade.in {\r\n  opacity: 1;\r\n}\r\n.spexp .collapse {\r\n  display: none;\r\n}\r\n.spexp .collapse.in {\r\n  display: block;\r\n}\r\n.spexp tr.collapse.in {\r\n  display: table-row;\r\n}\r\n.spexp tbody.collapse.in {\r\n  display: table-row-group;\r\n}\r\n.spexp .collapsing {\r\n  position: relative;\r\n  height: 0;\r\n  overflow: hidden;\r\n  -webkit-transition-timing-function: ease;\r\n  -o-transition-timing-function: ease;\r\n  transition-timing-function: ease;\r\n  -webkit-transition-duration: .35s;\r\n  -o-transition-duration: .35s;\r\n  transition-duration: .35s;\r\n  -webkit-transition-property: height, visibility;\r\n  -o-transition-property: height, visibility;\r\n  transition-property: height, visibility;\r\n}\r\n.spexp .caret {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 2px;\r\n  vertical-align: middle;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.spexp .dropup,\r\n.spexp .dropdown {\r\n  position: relative;\r\n}\r\n.spexp .dropdown-toggle:focus {\r\n  outline: 0;\r\n}\r\n.spexp .dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 160px;\r\n  padding: 5px 0;\r\n  margin: 2px 0 0;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n}\r\n.spexp .dropdown-menu.pull-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.spexp .dropdown-menu .divider {\r\n  height: 1px;\r\n  margin: 9px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n}\r\n.spexp .dropdown-menu > li > a {\r\n  display: block;\r\n  padding: 3px 20px;\r\n  clear: both;\r\n  font-weight: normal;\r\n  line-height: 1.42857143;\r\n  color: #333;\r\n  white-space: nowrap;\r\n}\r\n.spexp .dropdown-menu > li > a:hover,\r\n.spexp .dropdown-menu > li > a:focus {\r\n  color: #262626;\r\n  text-decoration: none;\r\n  background-color: #f5f5f5;\r\n}\r\n.spexp .dropdown-menu > .active > a,\r\n.spexp .dropdown-menu > .active > a:hover,\r\n.spexp .dropdown-menu > .active > a:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #337ab7;\r\n  outline: 0;\r\n}\r\n.spexp .dropdown-menu > .disabled > a,\r\n.spexp .dropdown-menu > .disabled > a:hover,\r\n.spexp .dropdown-menu > .disabled > a:focus {\r\n  color: #777;\r\n}\r\n.spexp .dropdown-menu > .disabled > a:hover,\r\n.spexp .dropdown-menu > .disabled > a:focus {\r\n  text-decoration: none;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n}\r\n.spexp .open > .dropdown-menu {\r\n  display: block;\r\n}\r\n.spexp .open > a {\r\n  outline: 0;\r\n}\r\n.spexp .dropdown-menu-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.spexp .dropdown-menu-left {\r\n  right: auto;\r\n  left: 0;\r\n}\r\n.spexp .dropdown-header {\r\n  display: block;\r\n  padding: 3px 20px;\r\n  font-size: 12px;\r\n  line-height: 1.42857143;\r\n  color: #777;\r\n  white-space: nowrap;\r\n}\r\n.spexp .dropdown-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 990;\r\n}\r\n.spexp .pull-right > .dropdown-menu {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.spexp .dropup .caret,\r\n.spexp .navbar-fixed-bottom .dropdown .caret {\r\n  content: \"\";\r\n  border-top: 0;\r\n  border-bottom: 4px dashed;\r\n  border-bottom: 4px solid \\9;\r\n}\r\n.spexp .dropup .dropdown-menu,\r\n.spexp .navbar-fixed-bottom .dropdown .dropdown-menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  margin-bottom: 2px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-right .dropdown-menu {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  .spexp .navbar-right .dropdown-menu-left {\r\n    right: auto;\r\n    left: 0;\r\n  }\r\n}\r\n.spexp .btn-group,\r\n.spexp .btn-group-vertical {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.spexp .btn-group > .btn,\r\n.spexp .btn-group-vertical > .btn {\r\n  position: relative;\r\n  float: left;\r\n}\r\n.spexp .btn-group > .btn:hover,\r\n.spexp .btn-group-vertical > .btn:hover,\r\n.spexp .btn-group > .btn:focus,\r\n.spexp .btn-group-vertical > .btn:focus,\r\n.spexp .btn-group > .btn:active,\r\n.spexp .btn-group-vertical > .btn:active,\r\n.spexp .btn-group > .btn.active,\r\n.spexp .btn-group-vertical > .btn.active {\r\n  z-index: 2;\r\n}\r\n.spexp .btn-group .btn + .btn,\r\n.spexp .btn-group .btn + .btn-group,\r\n.spexp .btn-group .btn-group + .btn,\r\n.spexp .btn-group .btn-group + .btn-group {\r\n  margin-left: -1px;\r\n}\r\n.spexp .btn-toolbar {\r\n  margin-left: -5px;\r\n}\r\n.spexp .btn-toolbar .btn,\r\n.spexp .btn-toolbar .btn-group,\r\n.spexp .btn-toolbar .input-group {\r\n  float: left;\r\n}\r\n.spexp .btn-toolbar > .btn,\r\n.spexp .btn-toolbar > .btn-group,\r\n.spexp .btn-toolbar > .input-group {\r\n  margin-left: 5px;\r\n}\r\n.spexp .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n  border-radius: 0;\r\n}\r\n.spexp .btn-group > .btn:first-child {\r\n  margin-left: 0;\r\n}\r\n.spexp .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.spexp .btn-group > .btn:last-child:not(:first-child),\r\n.spexp .btn-group > .dropdown-toggle:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.spexp .btn-group > .btn-group {\r\n  float: left;\r\n}\r\n.spexp .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n.spexp .btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.spexp .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.spexp .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.spexp .btn-group .dropdown-toggle:active,\r\n.spexp .btn-group.open .dropdown-toggle {\r\n  outline: 0;\r\n}\r\n.spexp .btn-group > .btn + .dropdown-toggle {\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n}\r\n.spexp .btn-group > .btn-lg + .dropdown-toggle {\r\n  padding-right: 12px;\r\n  padding-left: 12px;\r\n}\r\n.spexp .btn-group.open .dropdown-toggle {\r\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n.spexp .btn-group.open .dropdown-toggle.btn-link {\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.spexp .btn .caret {\r\n  margin-left: 0;\r\n}\r\n.spexp .btn-lg .caret {\r\n  border-width: 5px 5px 0;\r\n  border-bottom-width: 0;\r\n}\r\n.spexp .dropup .btn-lg .caret {\r\n  border-width: 0 5px 5px;\r\n}\r\n.spexp .btn-group-vertical > .btn,\r\n.spexp .btn-group-vertical > .btn-group,\r\n.spexp .btn-group-vertical > .btn-group > .btn {\r\n  display: block;\r\n  float: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n.spexp .btn-group-vertical > .btn-group > .btn {\r\n  float: none;\r\n}\r\n.spexp .btn-group-vertical > .btn + .btn,\r\n.spexp .btn-group-vertical > .btn + .btn-group,\r\n.spexp .btn-group-vertical > .btn-group + .btn,\r\n.spexp .btn-group-vertical > .btn-group + .btn-group {\r\n  margin-top: -1px;\r\n  margin-left: 0;\r\n}\r\n.spexp .btn-group-vertical > .btn:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.spexp .btn-group-vertical > .btn:first-child:not(:last-child) {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.spexp .btn-group-vertical > .btn:last-child:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.spexp .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n.spexp .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.spexp .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.spexp .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.spexp .btn-group-justified {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  border-collapse: separate;\r\n}\r\n.spexp .btn-group-justified > .btn,\r\n.spexp .btn-group-justified > .btn-group {\r\n  display: table-cell;\r\n  float: none;\r\n  width: 1%;\r\n}\r\n.spexp .btn-group-justified > .btn-group .btn {\r\n  width: 100%;\r\n}\r\n.spexp .btn-group-justified > .btn-group .dropdown-menu {\r\n  left: auto;\r\n}\r\n.spexp [data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\r\n.spexp [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\r\n.spexp [data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\r\n.spexp [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\r\n  position: absolute;\r\n  clip: rect(0, 0, 0, 0);\r\n  pointer-events: none;\r\n}\r\n.spexp .input-group {\r\n  position: relative;\r\n  display: table;\r\n  border-collapse: separate;\r\n}\r\n.spexp .input-group[class*=\"col-\"] {\r\n  float: none;\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n.spexp .input-group .form-control {\r\n  position: relative;\r\n  z-index: 2;\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n.spexp .input-group .form-control:focus {\r\n  z-index: 3;\r\n}\r\n.spexp .input-group-lg > .form-control,\r\n.spexp .input-group-lg > .input-group-addon,\r\n.spexp .input-group-lg > .input-group-btn > .btn {\r\n  height: 46px;\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\n.spexp select.input-group-lg > .form-control,\r\n.spexp select.input-group-lg > .input-group-addon,\r\n.spexp select.input-group-lg > .input-group-btn > .btn {\r\n  height: 46px;\r\n  line-height: 46px;\r\n}\r\n.spexp textarea.input-group-lg > .form-control,\r\n.spexp textarea.input-group-lg > .input-group-addon,\r\n.spexp textarea.input-group-lg > .input-group-btn > .btn,\r\n.spexp select[multiple].input-group-lg > .form-control,\r\n.spexp select[multiple].input-group-lg > .input-group-addon,\r\n.spexp select[multiple].input-group-lg > .input-group-btn > .btn {\r\n  height: auto;\r\n}\r\n.spexp .input-group-sm > .form-control,\r\n.spexp .input-group-sm > .input-group-addon,\r\n.spexp .input-group-sm > .input-group-btn > .btn {\r\n  height: 30px;\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.spexp select.input-group-sm > .form-control,\r\n.spexp select.input-group-sm > .input-group-addon,\r\n.spexp select.input-group-sm > .input-group-btn > .btn {\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\n.spexp textarea.input-group-sm > .form-control,\r\n.spexp textarea.input-group-sm > .input-group-addon,\r\n.spexp textarea.input-group-sm > .input-group-btn > .btn,\r\n.spexp select[multiple].input-group-sm > .form-control,\r\n.spexp select[multiple].input-group-sm > .input-group-addon,\r\n.spexp select[multiple].input-group-sm > .input-group-btn > .btn {\r\n  height: auto;\r\n}\r\n.spexp .input-group-addon,\r\n.spexp .input-group-btn,\r\n.spexp .input-group .form-control {\r\n  display: table-cell;\r\n}\r\n.spexp .input-group-addon:not(:first-child):not(:last-child),\r\n.spexp .input-group-btn:not(:first-child):not(:last-child),\r\n.spexp .input-group .form-control:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.spexp .input-group-addon,\r\n.spexp .input-group-btn {\r\n  width: 1%;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n}\r\n.spexp .input-group-addon {\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #555;\r\n  text-align: center;\r\n  background-color: #eee;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n.spexp .input-group-addon.input-sm {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  border-radius: 3px;\r\n}\r\n.spexp .input-group-addon.input-lg {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  border-radius: 6px;\r\n}\r\n.spexp .input-group-addon input[type=\"radio\"],\r\n.spexp .input-group-addon input[type=\"checkbox\"] {\r\n  margin-top: 0;\r\n}\r\n.spexp .input-group .form-control:first-child,\r\n.spexp .input-group-addon:first-child,\r\n.spexp .input-group-btn:first-child > .btn,\r\n.spexp .input-group-btn:first-child > .btn-group > .btn,\r\n.spexp .input-group-btn:first-child > .dropdown-toggle,\r\n.spexp .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\r\n.spexp .input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.spexp .input-group-addon:first-child {\r\n  border-right: 0;\r\n}\r\n.spexp .input-group .form-control:last-child,\r\n.spexp .input-group-addon:last-child,\r\n.spexp .input-group-btn:last-child > .btn,\r\n.spexp .input-group-btn:last-child > .btn-group > .btn,\r\n.spexp .input-group-btn:last-child > .dropdown-toggle,\r\n.spexp .input-group-btn:first-child > .btn:not(:first-child),\r\n.spexp .input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.spexp .input-group-addon:last-child {\r\n  border-left: 0;\r\n}\r\n.spexp .input-group-btn {\r\n  position: relative;\r\n  font-size: 0;\r\n  white-space: nowrap;\r\n}\r\n.spexp .input-group-btn > .btn {\r\n  position: relative;\r\n}\r\n.spexp .input-group-btn > .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n.spexp .input-group-btn > .btn:hover,\r\n.spexp .input-group-btn > .btn:focus,\r\n.spexp .input-group-btn > .btn:active {\r\n  z-index: 2;\r\n}\r\n.spexp .input-group-btn:first-child > .btn,\r\n.spexp .input-group-btn:first-child > .btn-group {\r\n  margin-right: -1px;\r\n}\r\n.spexp .input-group-btn:last-child > .btn,\r\n.spexp .input-group-btn:last-child > .btn-group {\r\n  z-index: 2;\r\n  margin-left: -1px;\r\n}\r\n.spexp .nav {\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.spexp .nav > li {\r\n  position: relative;\r\n  display: block;\r\n}\r\n.spexp .nav > li > a {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px 15px;\r\n}\r\n.spexp .nav > li > a:hover,\r\n.spexp .nav > li > a:focus {\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n.spexp .nav > li.disabled > a {\r\n  color: #777;\r\n}\r\n.spexp .nav > li.disabled > a:hover,\r\n.spexp .nav > li.disabled > a:focus {\r\n  color: #777;\r\n  text-decoration: none;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n.spexp .nav .open > a,\r\n.spexp .nav .open > a:hover,\r\n.spexp .nav .open > a:focus {\r\n  background-color: #eee;\r\n  border-color: #337ab7;\r\n}\r\n.spexp .nav .nav-divider {\r\n  height: 1px;\r\n  margin: 9px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n}\r\n.spexp .nav > li > a > img {\r\n  max-width: none;\r\n}\r\n.spexp .nav-tabs {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.spexp .nav-tabs > li {\r\n  float: left;\r\n  margin-bottom: -1px;\r\n}\r\n.spexp .nav-tabs > li > a {\r\n  margin-right: 2px;\r\n  line-height: 1.42857143;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n.spexp .nav-tabs > li > a:hover {\r\n  border-color: #eee #eee #ddd;\r\n}\r\n.spexp .nav-tabs > li.active > a,\r\n.spexp .nav-tabs > li.active > a:hover,\r\n.spexp .nav-tabs > li.active > a:focus {\r\n  color: #555;\r\n  cursor: default;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-bottom-color: transparent;\r\n}\r\n.spexp .nav-tabs.nav-justified {\r\n  width: 100%;\r\n  border-bottom: 0;\r\n}\r\n.spexp .nav-tabs.nav-justified > li {\r\n  float: none;\r\n}\r\n.spexp .nav-tabs.nav-justified > li > a {\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n.spexp .nav-tabs.nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .nav-tabs.nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .spexp .nav-tabs.nav-justified > li > a {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n.spexp .nav-tabs.nav-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\r\n}\r\n.spexp .nav-tabs.nav-justified > .active > a,\r\n.spexp .nav-tabs.nav-justified > .active > a:hover,\r\n.spexp .nav-tabs.nav-justified > .active > a:focus {\r\n  border: 1px solid #ddd;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .nav-tabs.nav-justified > li > a {\r\n    border-bottom: 1px solid #ddd;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .spexp .nav-tabs.nav-justified > .active > a,\r\n  .spexp .nav-tabs.nav-justified > .active > a:hover,\r\n  .spexp .nav-tabs.nav-justified > .active > a:focus {\r\n    border-bottom-color: #fff;\r\n  }\r\n}\r\n.spexp .nav-pills > li {\r\n  float: left;\r\n}\r\n.spexp .nav-pills > li > a {\r\n  border-radius: 4px;\r\n}\r\n.spexp .nav-pills > li + li {\r\n  margin-left: 2px;\r\n}\r\n.spexp .nav-pills > li.active > a,\r\n.spexp .nav-pills > li.active > a:hover,\r\n.spexp .nav-pills > li.active > a:focus {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n}\r\n.spexp .nav-stacked > li {\r\n  float: none;\r\n}\r\n.spexp .nav-stacked > li + li {\r\n  margin-top: 2px;\r\n  margin-left: 0;\r\n}\r\n.spexp .nav-justified {\r\n  width: 100%;\r\n}\r\n.spexp .nav-justified > li {\r\n  float: none;\r\n}\r\n.spexp .nav-justified > li > a {\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n.spexp .nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .spexp .nav-justified > li > a {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n.spexp .nav-tabs-justified {\r\n  border-bottom: 0;\r\n}\r\n.spexp .nav-tabs-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\r\n}\r\n.spexp .nav-tabs-justified > .active > a,\r\n.spexp .nav-tabs-justified > .active > a:hover,\r\n.spexp .nav-tabs-justified > .active > a:focus {\r\n  border: 1px solid #ddd;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .nav-tabs-justified > li > a {\r\n    border-bottom: 1px solid #ddd;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .spexp .nav-tabs-justified > .active > a,\r\n  .spexp .nav-tabs-justified > .active > a:hover,\r\n  .spexp .nav-tabs-justified > .active > a:focus {\r\n    border-bottom-color: #fff;\r\n  }\r\n}\r\n.spexp .tab-content > .tab-pane {\r\n  display: none;\r\n}\r\n.spexp .tab-content > .active {\r\n  display: block;\r\n}\r\n.spexp .nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.spexp .navbar {\r\n  position: relative;\r\n  min-height: 50px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid transparent;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar {\r\n    border-radius: 4px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-header {\r\n    float: left;\r\n  }\r\n}\r\n.spexp .navbar-collapse {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  overflow-x: visible;\r\n  -webkit-overflow-scrolling: touch;\r\n  border-top: 1px solid transparent;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n}\r\n.spexp .navbar-collapse.in {\r\n  overflow-y: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-collapse {\r\n    width: auto;\r\n    border-top: 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n  }\r\n  .spexp .navbar-collapse.collapse {\r\n    display: block !important;\r\n    height: auto !important;\r\n    padding-bottom: 0;\r\n    overflow: visible !important;\r\n  }\r\n  .spexp .navbar-collapse.in {\r\n    overflow-y: visible;\r\n  }\r\n  .spexp .navbar-fixed-top .navbar-collapse,\r\n  .spexp .navbar-static-top .navbar-collapse,\r\n  .spexp .navbar-fixed-bottom .navbar-collapse {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n.spexp .navbar-fixed-top .navbar-collapse,\r\n.spexp .navbar-fixed-bottom .navbar-collapse {\r\n  max-height: 340px;\r\n}\r\n@media (max-device-width: 480px) and (orientation: landscape) {\r\n  .spexp .navbar-fixed-top .navbar-collapse,\r\n  .spexp .navbar-fixed-bottom .navbar-collapse {\r\n    max-height: 200px;\r\n  }\r\n}\r\n.spexp .container > .navbar-header,\r\n.spexp .container-fluid > .navbar-header,\r\n.spexp .container > .navbar-collapse,\r\n.spexp .container-fluid > .navbar-collapse {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .container > .navbar-header,\r\n  .spexp .container-fluid > .navbar-header,\r\n  .spexp .container > .navbar-collapse,\r\n  .spexp .container-fluid > .navbar-collapse {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n}\r\n.spexp .navbar-static-top {\r\n  z-index: 1000;\r\n  border-width: 0 0 1px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-static-top {\r\n    border-radius: 0;\r\n  }\r\n}\r\n.spexp .navbar-fixed-top,\r\n.spexp .navbar-fixed-bottom {\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-fixed-top,\r\n  .spexp .navbar-fixed-bottom {\r\n    border-radius: 0;\r\n  }\r\n}\r\n.spexp .navbar-fixed-top {\r\n  top: 0;\r\n  border-width: 0 0 1px;\r\n}\r\n.spexp .navbar-fixed-bottom {\r\n  bottom: 0;\r\n  margin-bottom: 0;\r\n  border-width: 1px 0 0;\r\n}\r\n.spexp .navbar-brand {\r\n  float: left;\r\n  height: 50px;\r\n  padding: 15px 15px;\r\n  font-size: 18px;\r\n  line-height: 20px;\r\n}\r\n.spexp .navbar-brand:hover,\r\n.spexp .navbar-brand:focus {\r\n  text-decoration: none;\r\n}\r\n.spexp .navbar-brand > img {\r\n  display: block;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar > .container .navbar-brand,\r\n  .spexp .navbar > .container-fluid .navbar-brand {\r\n    margin-left: -15px;\r\n  }\r\n}\r\n.spexp .navbar-toggle {\r\n  position: relative;\r\n  float: right;\r\n  padding: 9px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 15px;\r\n  margin-bottom: 8px;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.spexp .navbar-toggle:focus {\r\n  outline: 0;\r\n}\r\n.spexp .navbar-toggle .icon-bar {\r\n  display: block;\r\n  width: 22px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n}\r\n.spexp .navbar-toggle .icon-bar + .icon-bar {\r\n  margin-top: 4px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-toggle {\r\n    display: none;\r\n  }\r\n}\r\n.spexp .navbar-nav {\r\n  margin: 7.5px -15px;\r\n}\r\n.spexp .navbar-nav > li > a {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  line-height: 20px;\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n  }\r\n  .spexp .navbar-nav .open .dropdown-menu > li > a,\r\n  .spexp .navbar-nav .open .dropdown-menu .dropdown-header {\r\n    padding: 5px 15px 5px 25px;\r\n  }\r\n  .spexp .navbar-nav .open .dropdown-menu > li > a {\r\n    line-height: 20px;\r\n  }\r\n  .spexp .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .spexp .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    background-image: none;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-nav {\r\n    float: left;\r\n    margin: 0;\r\n  }\r\n  .spexp .navbar-nav > li {\r\n    float: left;\r\n  }\r\n  .spexp .navbar-nav > li > a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n  }\r\n}\r\n.spexp .navbar-form {\r\n  padding: 10px 15px;\r\n  margin-top: 8px;\r\n  margin-right: -15px;\r\n  margin-bottom: 8px;\r\n  margin-left: -15px;\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-form .form-group {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .navbar-form .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .navbar-form .form-control-static {\r\n    display: inline-block;\r\n  }\r\n  .spexp .navbar-form .input-group {\r\n    display: inline-table;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .navbar-form .input-group .input-group-addon,\r\n  .spexp .navbar-form .input-group .input-group-btn,\r\n  .spexp .navbar-form .input-group .form-control {\r\n    width: auto;\r\n  }\r\n  .spexp .navbar-form .input-group > .form-control {\r\n    width: 100%;\r\n  }\r\n  .spexp .navbar-form .control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .navbar-form .radio,\r\n  .spexp .navbar-form .checkbox {\r\n    display: inline-block;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .spexp .navbar-form .radio label,\r\n  .spexp .navbar-form .checkbox label {\r\n    padding-left: 0;\r\n  }\r\n  .spexp .navbar-form .radio input[type=\"radio\"],\r\n  .spexp .navbar-form .checkbox input[type=\"checkbox\"] {\r\n    position: relative;\r\n    margin-left: 0;\r\n  }\r\n  .spexp .navbar-form .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .navbar-form .form-group {\r\n    margin-bottom: 5px;\r\n  }\r\n  .spexp .navbar-form .form-group:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-form {\r\n    width: auto;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border: 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n  }\r\n}\r\n.spexp .navbar-nav > li > .dropdown-menu {\r\n  margin-top: 0;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.spexp .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\r\n  margin-bottom: 0;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.spexp .navbar-btn {\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n.spexp .navbar-btn.btn-sm {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.spexp .navbar-btn.btn-xs {\r\n  margin-top: 14px;\r\n  margin-bottom: 14px;\r\n}\r\n.spexp .navbar-text {\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-text {\r\n    float: left;\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .navbar-left {\r\n    float: left !important;\r\n  }\r\n  .spexp .navbar-right {\r\n    float: right !important;\r\n    margin-right: -15px;\r\n  }\r\n  .spexp .navbar-right ~ .navbar-right {\r\n    margin-right: 0;\r\n  }\r\n}\r\n.spexp .navbar-default {\r\n  background-color: #f8f8f8;\r\n  border-color: #e7e7e7;\r\n}\r\n.spexp .navbar-default .navbar-brand {\r\n  color: #777;\r\n}\r\n.spexp .navbar-default .navbar-brand:hover,\r\n.spexp .navbar-default .navbar-brand:focus {\r\n  color: #5e5e5e;\r\n  background-color: transparent;\r\n}\r\n.spexp .navbar-default .navbar-text {\r\n  color: #777;\r\n}\r\n.spexp .navbar-default .navbar-nav > li > a {\r\n  color: #777;\r\n}\r\n.spexp .navbar-default .navbar-nav > li > a:hover,\r\n.spexp .navbar-default .navbar-nav > li > a:focus {\r\n  color: #333;\r\n  background-color: transparent;\r\n}\r\n.spexp .navbar-default .navbar-nav > .active > a,\r\n.spexp .navbar-default .navbar-nav > .active > a:hover,\r\n.spexp .navbar-default .navbar-nav > .active > a:focus {\r\n  color: #555;\r\n  background-color: #e7e7e7;\r\n}\r\n.spexp .navbar-default .navbar-nav > .disabled > a,\r\n.spexp .navbar-default .navbar-nav > .disabled > a:hover,\r\n.spexp .navbar-default .navbar-nav > .disabled > a:focus {\r\n  color: #ccc;\r\n  background-color: transparent;\r\n}\r\n.spexp .navbar-default .navbar-toggle {\r\n  border-color: #ddd;\r\n}\r\n.spexp .navbar-default .navbar-toggle:hover,\r\n.spexp .navbar-default .navbar-toggle:focus {\r\n  background-color: #ddd;\r\n}\r\n.spexp .navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #888;\r\n}\r\n.spexp .navbar-default .navbar-collapse,\r\n.spexp .navbar-default .navbar-form {\r\n  border-color: #e7e7e7;\r\n}\r\n.spexp .navbar-default .navbar-nav > .open > a,\r\n.spexp .navbar-default .navbar-nav > .open > a:hover,\r\n.spexp .navbar-default .navbar-nav > .open > a:focus {\r\n  color: #555;\r\n  background-color: #e7e7e7;\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #777;\r\n  }\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #333;\r\n    background-color: transparent;\r\n  }\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #555;\r\n    background-color: #e7e7e7;\r\n  }\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\r\n  .spexp .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: #ccc;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.spexp .navbar-default .navbar-link {\r\n  color: #777;\r\n}\r\n.spexp .navbar-default .navbar-link:hover {\r\n  color: #333;\r\n}\r\n.spexp .navbar-default .btn-link {\r\n  color: #777;\r\n}\r\n.spexp .navbar-default .btn-link:hover,\r\n.spexp .navbar-default .btn-link:focus {\r\n  color: #333;\r\n}\r\n.spexp .navbar-default .btn-link[disabled]:hover,\r\n.spexp fieldset[disabled] .navbar-default .btn-link:hover,\r\n.spexp .navbar-default .btn-link[disabled]:focus,\r\n.spexp fieldset[disabled] .navbar-default .btn-link:focus {\r\n  color: #ccc;\r\n}\r\n.spexp .navbar-inverse {\r\n  background-color: #222;\r\n  border-color: #080808;\r\n}\r\n.spexp .navbar-inverse .navbar-brand {\r\n  color: #9d9d9d;\r\n}\r\n.spexp .navbar-inverse .navbar-brand:hover,\r\n.spexp .navbar-inverse .navbar-brand:focus {\r\n  color: #fff;\r\n  background-color: transparent;\r\n}\r\n.spexp .navbar-inverse .navbar-text {\r\n  color: #9d9d9d;\r\n}\r\n.spexp .navbar-inverse .navbar-nav > li > a {\r\n  color: #9d9d9d;\r\n}\r\n.spexp .navbar-inverse .navbar-nav > li > a:hover,\r\n.spexp .navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #fff;\r\n  background-color: transparent;\r\n}\r\n.spexp .navbar-inverse .navbar-nav > .active > a,\r\n.spexp .navbar-inverse .navbar-nav > .active > a:hover,\r\n.spexp .navbar-inverse .navbar-nav > .active > a:focus {\r\n  color: #fff;\r\n  background-color: #080808;\r\n}\r\n.spexp .navbar-inverse .navbar-nav > .disabled > a,\r\n.spexp .navbar-inverse .navbar-nav > .disabled > a:hover,\r\n.spexp .navbar-inverse .navbar-nav > .disabled > a:focus {\r\n  color: #444;\r\n  background-color: transparent;\r\n}\r\n.spexp .navbar-inverse .navbar-toggle {\r\n  border-color: #333;\r\n}\r\n.spexp .navbar-inverse .navbar-toggle:hover,\r\n.spexp .navbar-inverse .navbar-toggle:focus {\r\n  background-color: #333;\r\n}\r\n.spexp .navbar-inverse .navbar-toggle .icon-bar {\r\n  background-color: #fff;\r\n}\r\n.spexp .navbar-inverse .navbar-collapse,\r\n.spexp .navbar-inverse .navbar-form {\r\n  border-color: #101010;\r\n}\r\n.spexp .navbar-inverse .navbar-nav > .open > a,\r\n.spexp .navbar-inverse .navbar-nav > .open > a:hover,\r\n.spexp .navbar-inverse .navbar-nav > .open > a:focus {\r\n  color: #fff;\r\n  background-color: #080808;\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\r\n    border-color: #080808;\r\n  }\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\r\n    background-color: #080808;\r\n  }\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #9d9d9d;\r\n  }\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #fff;\r\n    background-color: transparent;\r\n  }\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-color: #080808;\r\n  }\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\r\n  .spexp .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: #444;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.spexp .navbar-inverse .navbar-link {\r\n  color: #9d9d9d;\r\n}\r\n.spexp .navbar-inverse .navbar-link:hover {\r\n  color: #fff;\r\n}\r\n.spexp .navbar-inverse .btn-link {\r\n  color: #9d9d9d;\r\n}\r\n.spexp .navbar-inverse .btn-link:hover,\r\n.spexp .navbar-inverse .btn-link:focus {\r\n  color: #fff;\r\n}\r\n.spexp .navbar-inverse .btn-link[disabled]:hover,\r\n.spexp fieldset[disabled] .navbar-inverse .btn-link:hover,\r\n.spexp .navbar-inverse .btn-link[disabled]:focus,\r\n.spexp fieldset[disabled] .navbar-inverse .btn-link:focus {\r\n  color: #444;\r\n}\r\n.spexp .breadcrumb {\r\n  padding: 8px 15px;\r\n  margin-bottom: 20px;\r\n  list-style: none;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n}\r\n.spexp .breadcrumb > li {\r\n  display: inline-block;\r\n}\r\n.spexp .breadcrumb > li + li:before {\r\n  padding: 0 5px;\r\n  color: #ccc;\r\n  content: \"/\\A0\";\r\n}\r\n.spexp .breadcrumb > .active {\r\n  color: #777;\r\n}\r\n.spexp .pagination {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin: 20px 0;\r\n  border-radius: 4px;\r\n}\r\n.spexp .pagination > li {\r\n  display: inline;\r\n}\r\n.spexp .pagination > li > a,\r\n.spexp .pagination > li > span {\r\n  position: relative;\r\n  float: left;\r\n  padding: 6px 12px;\r\n  margin-left: -1px;\r\n  line-height: 1.42857143;\r\n  color: #337ab7;\r\n  text-decoration: none;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n}\r\n.spexp .pagination > li:first-child > a,\r\n.spexp .pagination > li:first-child > span {\r\n  margin-left: 0;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.spexp .pagination > li:last-child > a,\r\n.spexp .pagination > li:last-child > span {\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n.spexp .pagination > li > a:hover,\r\n.spexp .pagination > li > span:hover,\r\n.spexp .pagination > li > a:focus,\r\n.spexp .pagination > li > span:focus {\r\n  z-index: 2;\r\n  color: #23527c;\r\n  background-color: #eee;\r\n  border-color: #ddd;\r\n}\r\n.spexp .pagination > .active > a,\r\n.spexp .pagination > .active > span,\r\n.spexp .pagination > .active > a:hover,\r\n.spexp .pagination > .active > span:hover,\r\n.spexp .pagination > .active > a:focus,\r\n.spexp .pagination > .active > span:focus {\r\n  z-index: 3;\r\n  color: #fff;\r\n  cursor: default;\r\n  background-color: #337ab7;\r\n  border-color: #337ab7;\r\n}\r\n.spexp .pagination > .disabled > span,\r\n.spexp .pagination > .disabled > span:hover,\r\n.spexp .pagination > .disabled > span:focus,\r\n.spexp .pagination > .disabled > a,\r\n.spexp .pagination > .disabled > a:hover,\r\n.spexp .pagination > .disabled > a:focus {\r\n  color: #777;\r\n  cursor: not-allowed;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.spexp .pagination-lg > li > a,\r\n.spexp .pagination-lg > li > span {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n}\r\n.spexp .pagination-lg > li:first-child > a,\r\n.spexp .pagination-lg > li:first-child > span {\r\n  border-top-left-radius: 6px;\r\n  border-bottom-left-radius: 6px;\r\n}\r\n.spexp .pagination-lg > li:last-child > a,\r\n.spexp .pagination-lg > li:last-child > span {\r\n  border-top-right-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n}\r\n.spexp .pagination-sm > li > a,\r\n.spexp .pagination-sm > li > span {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n}\r\n.spexp .pagination-sm > li:first-child > a,\r\n.spexp .pagination-sm > li:first-child > span {\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.spexp .pagination-sm > li:last-child > a,\r\n.spexp .pagination-sm > li:last-child > span {\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.spexp .pager {\r\n  padding-left: 0;\r\n  margin: 20px 0;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n.spexp .pager li {\r\n  display: inline;\r\n}\r\n.spexp .pager li > a,\r\n.spexp .pager li > span {\r\n  display: inline-block;\r\n  padding: 5px 14px;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n}\r\n.spexp .pager li > a:hover,\r\n.spexp .pager li > a:focus {\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n.spexp .pager .next > a,\r\n.spexp .pager .next > span {\r\n  float: right;\r\n}\r\n.spexp .pager .previous > a,\r\n.spexp .pager .previous > span {\r\n  float: left;\r\n}\r\n.spexp .pager .disabled > a,\r\n.spexp .pager .disabled > a:hover,\r\n.spexp .pager .disabled > a:focus,\r\n.spexp .pager .disabled > span {\r\n  color: #777;\r\n  cursor: not-allowed;\r\n  background-color: #fff;\r\n}\r\n.spexp .label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-size: 75%;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\n.spexp a.label:hover,\r\n.spexp a.label:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.spexp .label:empty {\r\n  display: none;\r\n}\r\n.spexp .btn .label {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.spexp .label-default {\r\n  background-color: #777;\r\n}\r\n.spexp .label-default[href]:hover,\r\n.spexp .label-default[href]:focus {\r\n  background-color: #5e5e5e;\r\n}\r\n.spexp .label-primary {\r\n  background-color: #337ab7;\r\n}\r\n.spexp .label-primary[href]:hover,\r\n.spexp .label-primary[href]:focus {\r\n  background-color: #286090;\r\n}\r\n.spexp .label-success {\r\n  background-color: #5cb85c;\r\n}\r\n.spexp .label-success[href]:hover,\r\n.spexp .label-success[href]:focus {\r\n  background-color: #449d44;\r\n}\r\n.spexp .label-info {\r\n  background-color: #5bc0de;\r\n}\r\n.spexp .label-info[href]:hover,\r\n.spexp .label-info[href]:focus {\r\n  background-color: #31b0d5;\r\n}\r\n.spexp .label-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.spexp .label-warning[href]:hover,\r\n.spexp .label-warning[href]:focus {\r\n  background-color: #ec971f;\r\n}\r\n.spexp .label-danger {\r\n  background-color: #d9534f;\r\n}\r\n.spexp .label-danger[href]:hover,\r\n.spexp .label-danger[href]:focus {\r\n  background-color: #c9302c;\r\n}\r\n.spexp .badge {\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  background-color: #777;\r\n  border-radius: 10px;\r\n}\r\n.spexp .badge:empty {\r\n  display: none;\r\n}\r\n.spexp .btn .badge {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.spexp .btn-xs .badge,\r\n.spexp .btn-group-xs > .btn .badge {\r\n  top: 0;\r\n  padding: 1px 5px;\r\n}\r\n.spexp a.badge:hover,\r\n.spexp a.badge:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.spexp .list-group-item.active > .badge,\r\n.spexp .nav-pills > .active > a > .badge {\r\n  color: #337ab7;\r\n  background-color: #fff;\r\n}\r\n.spexp .list-group-item > .badge {\r\n  float: right;\r\n}\r\n.spexp .list-group-item > .badge + .badge {\r\n  margin-right: 5px;\r\n}\r\n.spexp .nav-pills > li > a > .badge {\r\n  margin-left: 3px;\r\n}\r\n.spexp .jumbotron {\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n  margin-bottom: 30px;\r\n  color: inherit;\r\n  background-color: #eee;\r\n}\r\n.spexp .jumbotron h1,\r\n.spexp .jumbotron .h1 {\r\n  color: inherit;\r\n}\r\n.spexp .jumbotron p {\r\n  margin-bottom: 15px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n}\r\n.spexp .jumbotron > hr {\r\n  border-top-color: #d5d5d5;\r\n}\r\n.spexp .container .jumbotron,\r\n.spexp .container-fluid .jumbotron {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  border-radius: 6px;\r\n}\r\n.spexp .jumbotron .container {\r\n  max-width: 100%;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .spexp .jumbotron {\r\n    padding-top: 48px;\r\n    padding-bottom: 48px;\r\n  }\r\n  .spexp .container .jumbotron,\r\n  .spexp .container-fluid .jumbotron {\r\n    padding-right: 60px;\r\n    padding-left: 60px;\r\n  }\r\n  .spexp .jumbotron h1,\r\n  .spexp .jumbotron .h1 {\r\n    font-size: 63px;\r\n  }\r\n}\r\n.spexp .thumbnail {\r\n  display: block;\r\n  padding: 4px;\r\n  margin-bottom: 20px;\r\n  line-height: 1.42857143;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  -webkit-transition: border 0.2s ease-in-out;\r\n  -o-transition: border 0.2s ease-in-out;\r\n  transition: border 0.2s ease-in-out;\r\n}\r\n.spexp .thumbnail > img,\r\n.spexp .thumbnail a > img {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.spexp a.thumbnail:hover,\r\n.spexp a.thumbnail:focus,\r\n.spexp a.thumbnail.active {\r\n  border-color: #337ab7;\r\n}\r\n.spexp .thumbnail .caption {\r\n  padding: 9px;\r\n  color: #333;\r\n}\r\n.spexp .alert {\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.spexp .alert h4 {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n.spexp .alert .alert-link {\r\n  font-weight: bold;\r\n}\r\n.spexp .alert > p,\r\n.spexp .alert > ul {\r\n  margin-bottom: 0;\r\n}\r\n.spexp .alert > p + p {\r\n  margin-top: 5px;\r\n}\r\n.spexp .alert-dismissable,\r\n.spexp .alert-dismissible {\r\n  padding-right: 35px;\r\n}\r\n.spexp .alert-dismissable .close,\r\n.spexp .alert-dismissible .close {\r\n  position: relative;\r\n  top: -2px;\r\n  right: -21px;\r\n  color: inherit;\r\n}\r\n.spexp .alert-success {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  border-color: #d6e9c6;\r\n}\r\n.spexp .alert-success hr {\r\n  border-top-color: #c9e2b3;\r\n}\r\n.spexp .alert-success .alert-link {\r\n  color: #2b542c;\r\n}\r\n.spexp .alert-info {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n  border-color: #bce8f1;\r\n}\r\n.spexp .alert-info hr {\r\n  border-top-color: #a6e1ec;\r\n}\r\n.spexp .alert-info .alert-link {\r\n  color: #245269;\r\n}\r\n.spexp .alert-warning {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n  border-color: #faebcc;\r\n}\r\n.spexp .alert-warning hr {\r\n  border-top-color: #f7e1b5;\r\n}\r\n.spexp .alert-warning .alert-link {\r\n  color: #66512c;\r\n}\r\n.spexp .alert-danger {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n  border-color: #ebccd1;\r\n}\r\n.spexp .alert-danger hr {\r\n  border-top-color: #e4b9c0;\r\n}\r\n.spexp .alert-danger .alert-link {\r\n  color: #843534;\r\n}\r\n@-webkit-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 40px 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n@-o-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 40px 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 40px 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n.spexp .progress {\r\n  height: 20px;\r\n  margin-bottom: 20px;\r\n  overflow: hidden;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.spexp .progress-bar {\r\n  float: left;\r\n  width: 0;\r\n  height: 100%;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #337ab7;\r\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n  -webkit-transition: width .6s ease;\r\n  -o-transition: width .6s ease;\r\n  transition: width .6s ease;\r\n}\r\n.spexp .progress-striped .progress-bar,\r\n.spexp .progress-bar-striped {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  -webkit-background-size: 40px 40px;\r\n  background-size: 40px 40px;\r\n}\r\n.spexp .progress.active .progress-bar,\r\n.spexp .progress-bar.active {\r\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\r\n  -o-animation: progress-bar-stripes 2s linear infinite;\r\n  animation: progress-bar-stripes 2s linear infinite;\r\n}\r\n.spexp .progress-bar-success {\r\n  background-color: #5cb85c;\r\n}\r\n.spexp .progress-striped .progress-bar-success {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.spexp .progress-bar-info {\r\n  background-color: #5bc0de;\r\n}\r\n.spexp .progress-striped .progress-bar-info {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.spexp .progress-bar-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.spexp .progress-striped .progress-bar-warning {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.spexp .progress-bar-danger {\r\n  background-color: #d9534f;\r\n}\r\n.spexp .progress-striped .progress-bar-danger {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.spexp .media {\r\n  margin-top: 15px;\r\n}\r\n.spexp .media:first-child {\r\n  margin-top: 0;\r\n}\r\n.spexp .media,\r\n.spexp .media-body {\r\n  overflow: hidden;\r\n  zoom: 1;\r\n}\r\n.spexp .media-body {\r\n  width: 10000px;\r\n}\r\n.spexp .media-object {\r\n  display: block;\r\n}\r\n.spexp .media-object.img-thumbnail {\r\n  max-width: none;\r\n}\r\n.spexp .media-right,\r\n.spexp .media > .pull-right {\r\n  padding-left: 10px;\r\n}\r\n.spexp .media-left,\r\n.spexp .media > .pull-left {\r\n  padding-right: 10px;\r\n}\r\n.spexp .media-left,\r\n.spexp .media-right,\r\n.spexp .media-body {\r\n  display: table-cell;\r\n  vertical-align: top;\r\n}\r\n.spexp .media-middle {\r\n  vertical-align: middle;\r\n}\r\n.spexp .media-bottom {\r\n  vertical-align: bottom;\r\n}\r\n.spexp .media-heading {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.spexp .media-list {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.spexp .list-group {\r\n  padding-left: 0;\r\n  margin-bottom: 20px;\r\n}\r\n.spexp .list-group-item {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  margin-bottom: -1px;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n}\r\n.spexp .list-group-item:first-child {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n}\r\n.spexp .list-group-item:last-child {\r\n  margin-bottom: 0;\r\n  border-bottom-right-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.spexp a.list-group-item,\r\n.spexp button.list-group-item {\r\n  color: #555;\r\n}\r\n.spexp a.list-group-item .list-group-item-heading,\r\n.spexp button.list-group-item .list-group-item-heading {\r\n  color: #333;\r\n}\r\n.spexp a.list-group-item:hover,\r\n.spexp button.list-group-item:hover,\r\n.spexp a.list-group-item:focus,\r\n.spexp button.list-group-item:focus {\r\n  color: #555;\r\n  text-decoration: none;\r\n  background-color: #f5f5f5;\r\n}\r\n.spexp button.list-group-item {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.spexp .list-group-item.disabled,\r\n.spexp .list-group-item.disabled:hover,\r\n.spexp .list-group-item.disabled:focus {\r\n  color: #777;\r\n  cursor: not-allowed;\r\n  background-color: #eee;\r\n}\r\n.spexp .list-group-item.disabled .list-group-item-heading,\r\n.spexp .list-group-item.disabled:hover .list-group-item-heading,\r\n.spexp .list-group-item.disabled:focus .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n.spexp .list-group-item.disabled .list-group-item-text,\r\n.spexp .list-group-item.disabled:hover .list-group-item-text,\r\n.spexp .list-group-item.disabled:focus .list-group-item-text {\r\n  color: #777;\r\n}\r\n.spexp .list-group-item.active,\r\n.spexp .list-group-item.active:hover,\r\n.spexp .list-group-item.active:focus {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #337ab7;\r\n}\r\n.spexp .list-group-item.active .list-group-item-heading,\r\n.spexp .list-group-item.active:hover .list-group-item-heading,\r\n.spexp .list-group-item.active:focus .list-group-item-heading,\r\n.spexp .list-group-item.active .list-group-item-heading > small,\r\n.spexp .list-group-item.active:hover .list-group-item-heading > small,\r\n.spexp .list-group-item.active:focus .list-group-item-heading > small,\r\n.spexp .list-group-item.active .list-group-item-heading > .small,\r\n.spexp .list-group-item.active:hover .list-group-item-heading > .small,\r\n.spexp .list-group-item.active:focus .list-group-item-heading > .small {\r\n  color: inherit;\r\n}\r\n.spexp .list-group-item.active .list-group-item-text,\r\n.spexp .list-group-item.active:hover .list-group-item-text,\r\n.spexp .list-group-item.active:focus .list-group-item-text {\r\n  color: #c7ddef;\r\n}\r\n.spexp .list-group-item-success {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n}\r\n.spexp a.list-group-item-success,\r\n.spexp button.list-group-item-success {\r\n  color: #3c763d;\r\n}\r\n.spexp a.list-group-item-success .list-group-item-heading,\r\n.spexp button.list-group-item-success .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n.spexp a.list-group-item-success:hover,\r\n.spexp button.list-group-item-success:hover,\r\n.spexp a.list-group-item-success:focus,\r\n.spexp button.list-group-item-success:focus {\r\n  color: #3c763d;\r\n  background-color: #d0e9c6;\r\n}\r\n.spexp a.list-group-item-success.active,\r\n.spexp button.list-group-item-success.active,\r\n.spexp a.list-group-item-success.active:hover,\r\n.spexp button.list-group-item-success.active:hover,\r\n.spexp a.list-group-item-success.active:focus,\r\n.spexp button.list-group-item-success.active:focus {\r\n  color: #fff;\r\n  background-color: #3c763d;\r\n  border-color: #3c763d;\r\n}\r\n.spexp .list-group-item-info {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n}\r\n.spexp a.list-group-item-info,\r\n.spexp button.list-group-item-info {\r\n  color: #31708f;\r\n}\r\n.spexp a.list-group-item-info .list-group-item-heading,\r\n.spexp button.list-group-item-info .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n.spexp a.list-group-item-info:hover,\r\n.spexp button.list-group-item-info:hover,\r\n.spexp a.list-group-item-info:focus,\r\n.spexp button.list-group-item-info:focus {\r\n  color: #31708f;\r\n  background-color: #c4e3f3;\r\n}\r\n.spexp a.list-group-item-info.active,\r\n.spexp button.list-group-item-info.active,\r\n.spexp a.list-group-item-info.active:hover,\r\n.spexp button.list-group-item-info.active:hover,\r\n.spexp a.list-group-item-info.active:focus,\r\n.spexp button.list-group-item-info.active:focus {\r\n  color: #fff;\r\n  background-color: #31708f;\r\n  border-color: #31708f;\r\n}\r\n.spexp .list-group-item-warning {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n}\r\n.spexp a.list-group-item-warning,\r\n.spexp button.list-group-item-warning {\r\n  color: #8a6d3b;\r\n}\r\n.spexp a.list-group-item-warning .list-group-item-heading,\r\n.spexp button.list-group-item-warning .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n.spexp a.list-group-item-warning:hover,\r\n.spexp button.list-group-item-warning:hover,\r\n.spexp a.list-group-item-warning:focus,\r\n.spexp button.list-group-item-warning:focus {\r\n  color: #8a6d3b;\r\n  background-color: #faf2cc;\r\n}\r\n.spexp a.list-group-item-warning.active,\r\n.spexp button.list-group-item-warning.active,\r\n.spexp a.list-group-item-warning.active:hover,\r\n.spexp button.list-group-item-warning.active:hover,\r\n.spexp a.list-group-item-warning.active:focus,\r\n.spexp button.list-group-item-warning.active:focus {\r\n  color: #fff;\r\n  background-color: #8a6d3b;\r\n  border-color: #8a6d3b;\r\n}\r\n.spexp .list-group-item-danger {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n}\r\n.spexp a.list-group-item-danger,\r\n.spexp button.list-group-item-danger {\r\n  color: #a94442;\r\n}\r\n.spexp a.list-group-item-danger .list-group-item-heading,\r\n.spexp button.list-group-item-danger .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n.spexp a.list-group-item-danger:hover,\r\n.spexp button.list-group-item-danger:hover,\r\n.spexp a.list-group-item-danger:focus,\r\n.spexp button.list-group-item-danger:focus {\r\n  color: #a94442;\r\n  background-color: #ebcccc;\r\n}\r\n.spexp a.list-group-item-danger.active,\r\n.spexp button.list-group-item-danger.active,\r\n.spexp a.list-group-item-danger.active:hover,\r\n.spexp button.list-group-item-danger.active:hover,\r\n.spexp a.list-group-item-danger.active:focus,\r\n.spexp button.list-group-item-danger.active:focus {\r\n  color: #fff;\r\n  background-color: #a94442;\r\n  border-color: #a94442;\r\n}\r\n.spexp .list-group-item-heading {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.spexp .list-group-item-text {\r\n  margin-bottom: 0;\r\n  line-height: 1.3;\r\n}\r\n.spexp .panel {\r\n  margin-bottom: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.spexp .panel-body {\r\n  padding: 15px;\r\n}\r\n.spexp .panel-heading {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.spexp .panel-heading > .dropdown .dropdown-toggle {\r\n  color: inherit;\r\n}\r\n.spexp .panel-title {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  color: inherit;\r\n}\r\n.spexp .panel-title > a,\r\n.spexp .panel-title > small,\r\n.spexp .panel-title > .small,\r\n.spexp .panel-title > small > a,\r\n.spexp .panel-title > .small > a {\r\n  color: inherit;\r\n}\r\n.spexp .panel-footer {\r\n  padding: 10px 15px;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.spexp .panel > .list-group,\r\n.spexp .panel > .panel-collapse > .list-group {\r\n  margin-bottom: 0;\r\n}\r\n.spexp .panel > .list-group .list-group-item,\r\n.spexp .panel > .panel-collapse > .list-group .list-group-item {\r\n  border-width: 1px 0;\r\n  border-radius: 0;\r\n}\r\n.spexp .panel > .list-group:first-child .list-group-item:first-child,\r\n.spexp .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\r\n  border-top: 0;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.spexp .panel > .list-group:last-child .list-group-item:last-child,\r\n.spexp .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\r\n  border-bottom: 0;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.spexp .panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.spexp .panel-heading + .list-group .list-group-item:first-child {\r\n  border-top-width: 0;\r\n}\r\n.spexp .list-group + .panel-footer {\r\n  border-top-width: 0;\r\n}\r\n.spexp .panel > .table,\r\n.spexp .panel > .table-responsive > .table,\r\n.spexp .panel > .panel-collapse > .table {\r\n  margin-bottom: 0;\r\n}\r\n.spexp .panel > .table caption,\r\n.spexp .panel > .table-responsive > .table caption,\r\n.spexp .panel > .panel-collapse > .table caption {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n.spexp .panel > .table:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child {\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.spexp .panel > .table:first-child > thead:first-child > tr:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\r\n.spexp .panel > .table:first-child > tbody:first-child > tr:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.spexp .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\r\n.spexp .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\r\n.spexp .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\r\n.spexp .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\r\n  border-top-left-radius: 3px;\r\n}\r\n.spexp .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\r\n.spexp .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\r\n.spexp .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\r\n.spexp .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\r\n.spexp .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\r\n  border-top-right-radius: 3px;\r\n}\r\n.spexp .panel > .table:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child {\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.spexp .panel > .table:last-child > tbody:last-child > tr:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\r\n.spexp .panel > .table:last-child > tfoot:last-child > tr:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.spexp .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\r\n.spexp .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\r\n.spexp .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\r\n.spexp .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.spexp .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\r\n.spexp .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\r\n.spexp .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\r\n.spexp .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\r\n.spexp .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.spexp .panel > .panel-body + .table,\r\n.spexp .panel > .panel-body + .table-responsive,\r\n.spexp .panel > .table + .panel-body,\r\n.spexp .panel > .table-responsive + .panel-body {\r\n  border-top: 1px solid #ddd;\r\n}\r\n.spexp .panel > .table > tbody:first-child > tr:first-child th,\r\n.spexp .panel > .table > tbody:first-child > tr:first-child td {\r\n  border-top: 0;\r\n}\r\n.spexp .panel > .table-bordered,\r\n.spexp .panel > .table-responsive > .table-bordered {\r\n  border: 0;\r\n}\r\n.spexp .panel > .table-bordered > thead > tr > th:first-child,\r\n.spexp .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n.spexp .panel > .table-bordered > tbody > tr > th:first-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n.spexp .panel > .table-bordered > tfoot > tr > th:first-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n.spexp .panel > .table-bordered > thead > tr > td:first-child,\r\n.spexp .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n.spexp .panel > .table-bordered > tbody > tr > td:first-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n.spexp .panel > .table-bordered > tfoot > tr > td:first-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n  border-left: 0;\r\n}\r\n.spexp .panel > .table-bordered > thead > tr > th:last-child,\r\n.spexp .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n.spexp .panel > .table-bordered > tbody > tr > th:last-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n.spexp .panel > .table-bordered > tfoot > tr > th:last-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n.spexp .panel > .table-bordered > thead > tr > td:last-child,\r\n.spexp .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n.spexp .panel > .table-bordered > tbody > tr > td:last-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n.spexp .panel > .table-bordered > tfoot > tr > td:last-child,\r\n.spexp .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n  border-right: 0;\r\n}\r\n.spexp .panel > .table-bordered > thead > tr:first-child > td,\r\n.spexp .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\r\n.spexp .panel > .table-bordered > tbody > tr:first-child > td,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\r\n.spexp .panel > .table-bordered > thead > tr:first-child > th,\r\n.spexp .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\r\n.spexp .panel > .table-bordered > tbody > tr:first-child > th,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\r\n  border-bottom: 0;\r\n}\r\n.spexp .panel > .table-bordered > tbody > tr:last-child > td,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n.spexp .panel > .table-bordered > tfoot > tr:last-child > td,\r\n.spexp .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\r\n.spexp .panel > .table-bordered > tbody > tr:last-child > th,\r\n.spexp .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n.spexp .panel > .table-bordered > tfoot > tr:last-child > th,\r\n.spexp .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\r\n  border-bottom: 0;\r\n}\r\n.spexp .panel > .table-responsive {\r\n  margin-bottom: 0;\r\n  border: 0;\r\n}\r\n.spexp .panel-group {\r\n  margin-bottom: 20px;\r\n}\r\n.spexp .panel-group .panel {\r\n  margin-bottom: 0;\r\n  border-radius: 4px;\r\n}\r\n.spexp .panel-group .panel + .panel {\r\n  margin-top: 5px;\r\n}\r\n.spexp .panel-group .panel-heading {\r\n  border-bottom: 0;\r\n}\r\n.spexp .panel-group .panel-heading + .panel-collapse > .panel-body,\r\n.spexp .panel-group .panel-heading + .panel-collapse > .list-group {\r\n  border-top: 1px solid #ddd;\r\n}\r\n.spexp .panel-group .panel-footer {\r\n  border-top: 0;\r\n}\r\n.spexp .panel-group .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.spexp .panel-default {\r\n  border-color: #ddd;\r\n}\r\n.spexp .panel-default > .panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n.spexp .panel-default > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #ddd;\r\n}\r\n.spexp .panel-default > .panel-heading .badge {\r\n  color: #f5f5f5;\r\n  background-color: #333;\r\n}\r\n.spexp .panel-default > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #ddd;\r\n}\r\n.spexp .panel-primary {\r\n  border-color: #337ab7;\r\n}\r\n.spexp .panel-primary > .panel-heading {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #337ab7;\r\n}\r\n.spexp .panel-primary > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #337ab7;\r\n}\r\n.spexp .panel-primary > .panel-heading .badge {\r\n  color: #337ab7;\r\n  background-color: #fff;\r\n}\r\n.spexp .panel-primary > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #337ab7;\r\n}\r\n.spexp .panel-success {\r\n  border-color: #d6e9c6;\r\n}\r\n.spexp .panel-success > .panel-heading {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  border-color: #d6e9c6;\r\n}\r\n.spexp .panel-success > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #d6e9c6;\r\n}\r\n.spexp .panel-success > .panel-heading .badge {\r\n  color: #dff0d8;\r\n  background-color: #3c763d;\r\n}\r\n.spexp .panel-success > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #d6e9c6;\r\n}\r\n.spexp .panel-info {\r\n  border-color: #bce8f1;\r\n}\r\n.spexp .panel-info > .panel-heading {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n  border-color: #bce8f1;\r\n}\r\n.spexp .panel-info > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #bce8f1;\r\n}\r\n.spexp .panel-info > .panel-heading .badge {\r\n  color: #d9edf7;\r\n  background-color: #31708f;\r\n}\r\n.spexp .panel-info > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #bce8f1;\r\n}\r\n.spexp .panel-warning {\r\n  border-color: #faebcc;\r\n}\r\n.spexp .panel-warning > .panel-heading {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n  border-color: #faebcc;\r\n}\r\n.spexp .panel-warning > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #faebcc;\r\n}\r\n.spexp .panel-warning > .panel-heading .badge {\r\n  color: #fcf8e3;\r\n  background-color: #8a6d3b;\r\n}\r\n.spexp .panel-warning > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #faebcc;\r\n}\r\n.spexp .panel-danger {\r\n  border-color: #ebccd1;\r\n}\r\n.spexp .panel-danger > .panel-heading {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n  border-color: #ebccd1;\r\n}\r\n.spexp .panel-danger > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #ebccd1;\r\n}\r\n.spexp .panel-danger > .panel-heading .badge {\r\n  color: #f2dede;\r\n  background-color: #a94442;\r\n}\r\n.spexp .panel-danger > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #ebccd1;\r\n}\r\n.spexp .embed-responsive {\r\n  position: relative;\r\n  display: block;\r\n  height: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n.spexp .embed-responsive .embed-responsive-item,\r\n.spexp .embed-responsive iframe,\r\n.spexp .embed-responsive embed,\r\n.spexp .embed-responsive object,\r\n.spexp .embed-responsive video {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 0;\r\n}\r\n.spexp .embed-responsive-16by9 {\r\n  padding-bottom: 56.25%;\r\n}\r\n.spexp .embed-responsive-4by3 {\r\n  padding-bottom: 75%;\r\n}\r\n.spexp .well {\r\n  min-height: 20px;\r\n  padding: 19px;\r\n  margin-bottom: 20px;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.spexp .well blockquote {\r\n  border-color: #ddd;\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n}\r\n.spexp .well-lg {\r\n  padding: 24px;\r\n  border-radius: 6px;\r\n}\r\n.spexp .well-sm {\r\n  padding: 9px;\r\n  border-radius: 3px;\r\n}\r\n.spexp .close {\r\n  float: right;\r\n  font-size: 21px;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #000;\r\n  text-shadow: 0 1px 0 #fff;\r\n  filter: alpha(opacity=20);\r\n  opacity: .2;\r\n}\r\n.spexp .close:hover,\r\n.spexp .close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\n.spexp button.close {\r\n  -webkit-appearance: none;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n}\r\n.spexp .modal-open {\r\n  overflow: hidden;\r\n}\r\n.spexp .modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  overflow: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  outline: 0;\r\n}\r\n.spexp .modal.fade .modal-dialog {\r\n  -webkit-transition: -webkit-transform 0.3s ease-out;\r\n  -o-transition: -o-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  -webkit-transform: translate(0, -25%);\r\n  -ms-transform: translate(0, -25%);\r\n  -o-transform: translate(0, -25%);\r\n  transform: translate(0, -25%);\r\n}\r\n.spexp .modal.in .modal-dialog {\r\n  -webkit-transform: translate(0, 0);\r\n  -ms-transform: translate(0, 0);\r\n  -o-transform: translate(0, 0);\r\n  transform: translate(0, 0);\r\n}\r\n.spexp .modal-open .modal {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.spexp .modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 10px;\r\n}\r\n.spexp .modal-content {\r\n  position: relative;\r\n  background-color: #fff;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 6px;\r\n  outline: 0;\r\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\r\n}\r\n.spexp .modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000;\r\n}\r\n.spexp .modal-backdrop.fade {\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.spexp .modal-backdrop.in {\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\n.spexp .modal-header {\r\n  padding: 15px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.spexp .modal-header .close {\r\n  margin-top: -2px;\r\n}\r\n.spexp .modal-title {\r\n  margin: 0;\r\n  line-height: 1.42857143;\r\n}\r\n.spexp .modal-body {\r\n  position: relative;\r\n  padding: 15px;\r\n}\r\n.spexp .modal-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.spexp .modal-footer .btn + .btn {\r\n  margin-bottom: 0;\r\n  margin-left: 5px;\r\n}\r\n.spexp .modal-footer .btn-group .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n.spexp .modal-footer .btn-block + .btn-block {\r\n  margin-left: 0;\r\n}\r\n.spexp .modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\r\n}\r\n@media (min-width: 768px) {\r\n  .spexp .modal-dialog {\r\n    width: 600px;\r\n    margin: 30px auto;\r\n  }\r\n  .spexp .modal-content {\r\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\r\n  }\r\n  .spexp .modal-sm {\r\n    width: 300px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .spexp .modal-lg {\r\n    width: 900px;\r\n  }\r\n}\r\n.spexp .tooltip {\r\n  position: absolute;\r\n  z-index: 1070;\r\n  display: block;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 12px;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: 1.42857143;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: normal;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n  line-break: auto;\r\n}\r\n.spexp .tooltip.in {\r\n  filter: alpha(opacity=90);\r\n  opacity: .9;\r\n}\r\n.spexp .tooltip.top {\r\n  padding: 5px 0;\r\n  margin-top: -3px;\r\n}\r\n.spexp .tooltip.right {\r\n  padding: 0 5px;\r\n  margin-left: 3px;\r\n}\r\n.spexp .tooltip.bottom {\r\n  padding: 5px 0;\r\n  margin-top: 3px;\r\n}\r\n.spexp .tooltip.left {\r\n  padding: 0 5px;\r\n  margin-left: -3px;\r\n}\r\n.spexp .tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 3px 8px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #000;\r\n  border-radius: 4px;\r\n}\r\n.spexp .tooltip-arrow {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n.spexp .tooltip.top .tooltip-arrow {\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n.spexp .tooltip.top-left .tooltip-arrow {\r\n  right: 5px;\r\n  bottom: 0;\r\n  margin-bottom: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n.spexp .tooltip.top-right .tooltip-arrow {\r\n  bottom: 0;\r\n  left: 5px;\r\n  margin-bottom: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n.spexp .tooltip.right .tooltip-arrow {\r\n  top: 50%;\r\n  left: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 5px 5px 0;\r\n  border-right-color: #000;\r\n}\r\n.spexp .tooltip.left .tooltip-arrow {\r\n  top: 50%;\r\n  right: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #000;\r\n}\r\n.spexp .tooltip.bottom .tooltip-arrow {\r\n  top: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n.spexp .tooltip.bottom-left .tooltip-arrow {\r\n  top: 0;\r\n  right: 5px;\r\n  margin-top: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n.spexp .tooltip.bottom-right .tooltip-arrow {\r\n  top: 0;\r\n  left: 5px;\r\n  margin-top: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n.spexp .popover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1060;\r\n  display: none;\r\n  max-width: 276px;\r\n  padding: 1px;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: 1.42857143;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: normal;\r\n  background-color: #fff;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  line-break: auto;\r\n}\r\n.spexp .popover.top {\r\n  margin-top: -10px;\r\n}\r\n.spexp .popover.right {\r\n  margin-left: 10px;\r\n}\r\n.spexp .popover.bottom {\r\n  margin-top: 10px;\r\n}\r\n.spexp .popover.left {\r\n  margin-left: -10px;\r\n}\r\n.spexp .popover-title {\r\n  padding: 8px 14px;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  background-color: #f7f7f7;\r\n  border-bottom: 1px solid #ebebeb;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n.spexp .popover-content {\r\n  padding: 9px 14px;\r\n}\r\n.spexp .popover > .arrow,\r\n.spexp .popover > .arrow:after {\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n.spexp .popover > .arrow {\r\n  border-width: 11px;\r\n}\r\n.spexp .popover > .arrow:after {\r\n  content: \"\";\r\n  border-width: 10px;\r\n}\r\n.spexp .popover.top > .arrow {\r\n  bottom: -11px;\r\n  left: 50%;\r\n  margin-left: -11px;\r\n  border-top-color: #999;\r\n  border-top-color: rgba(0, 0, 0, 0.25);\r\n  border-bottom-width: 0;\r\n}\r\n.spexp .popover.top > .arrow:after {\r\n  bottom: 1px;\r\n  margin-left: -10px;\r\n  content: \" \";\r\n  border-top-color: #fff;\r\n  border-bottom-width: 0;\r\n}\r\n.spexp .popover.right > .arrow {\r\n  top: 50%;\r\n  left: -11px;\r\n  margin-top: -11px;\r\n  border-right-color: #999;\r\n  border-right-color: rgba(0, 0, 0, 0.25);\r\n  border-left-width: 0;\r\n}\r\n.spexp .popover.right > .arrow:after {\r\n  bottom: -10px;\r\n  left: 1px;\r\n  content: \" \";\r\n  border-right-color: #fff;\r\n  border-left-width: 0;\r\n}\r\n.spexp .popover.bottom > .arrow {\r\n  top: -11px;\r\n  left: 50%;\r\n  margin-left: -11px;\r\n  border-top-width: 0;\r\n  border-bottom-color: #999;\r\n  border-bottom-color: rgba(0, 0, 0, 0.25);\r\n}\r\n.spexp .popover.bottom > .arrow:after {\r\n  top: 1px;\r\n  margin-left: -10px;\r\n  content: \" \";\r\n  border-top-width: 0;\r\n  border-bottom-color: #fff;\r\n}\r\n.spexp .popover.left > .arrow {\r\n  top: 50%;\r\n  right: -11px;\r\n  margin-top: -11px;\r\n  border-right-width: 0;\r\n  border-left-color: #999;\r\n  border-left-color: rgba(0, 0, 0, 0.25);\r\n}\r\n.spexp .popover.left > .arrow:after {\r\n  right: 1px;\r\n  bottom: -10px;\r\n  content: \" \";\r\n  border-right-width: 0;\r\n  border-left-color: #fff;\r\n}\r\n.spexp .carousel {\r\n  position: relative;\r\n}\r\n.spexp .carousel-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.spexp .carousel-inner > .item {\r\n  position: relative;\r\n  display: none;\r\n  -webkit-transition: 0.6s ease-in-out left;\r\n  -o-transition: 0.6s ease-in-out left;\r\n  transition: 0.6s ease-in-out left;\r\n}\r\n.spexp .carousel-inner > .item > img,\r\n.spexp .carousel-inner > .item > a > img {\r\n  line-height: 1;\r\n}\r\n@media all and (transform-3d), (-webkit-transform-3d) {\r\n  .spexp .carousel-inner > .item {\r\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\r\n    -o-transition: -o-transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n  }\r\n  .spexp .carousel-inner > .item.next,\r\n  .spexp .carousel-inner > .item.active.right {\r\n    left: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n  .spexp .carousel-inner > .item.prev,\r\n  .spexp .carousel-inner > .item.active.left {\r\n    left: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n  .spexp .carousel-inner > .item.next.left,\r\n  .spexp .carousel-inner > .item.prev.right,\r\n  .spexp .carousel-inner > .item.active {\r\n    left: 0;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n.spexp .carousel-inner > .active,\r\n.spexp .carousel-inner > .next,\r\n.spexp .carousel-inner > .prev {\r\n  display: block;\r\n}\r\n.spexp .carousel-inner > .active {\r\n  left: 0;\r\n}\r\n.spexp .carousel-inner > .next,\r\n.spexp .carousel-inner > .prev {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.spexp .carousel-inner > .next {\r\n  left: 100%;\r\n}\r\n.spexp .carousel-inner > .prev {\r\n  left: -100%;\r\n}\r\n.spexp .carousel-inner > .next.left,\r\n.spexp .carousel-inner > .prev.right {\r\n  left: 0;\r\n}\r\n.spexp .carousel-inner > .active.left {\r\n  left: -100%;\r\n}\r\n.spexp .carousel-inner > .active.right {\r\n  left: 100%;\r\n}\r\n.spexp .carousel-control {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 15%;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\r\n  background-color: rgba(0, 0, 0, 0);\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\n.spexp .carousel-control.left {\r\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\r\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\r\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .carousel-control.right {\r\n  right: 0;\r\n  left: auto;\r\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\r\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\r\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .carousel-control:hover,\r\n.spexp .carousel-control:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  filter: alpha(opacity=90);\r\n  outline: 0;\r\n  opacity: .9;\r\n}\r\n.spexp .carousel-control .icon-prev,\r\n.spexp .carousel-control .icon-next,\r\n.spexp .carousel-control .glyphicon-chevron-left,\r\n.spexp .carousel-control .glyphicon-chevron-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  z-index: 5;\r\n  display: inline-block;\r\n  margin-top: -10px;\r\n}\r\n.spexp .carousel-control .icon-prev,\r\n.spexp .carousel-control .glyphicon-chevron-left {\r\n  left: 50%;\r\n  margin-left: -10px;\r\n}\r\n.spexp .carousel-control .icon-next,\r\n.spexp .carousel-control .glyphicon-chevron-right {\r\n  right: 50%;\r\n  margin-right: -10px;\r\n}\r\n.spexp .carousel-control .icon-prev,\r\n.spexp .carousel-control .icon-next {\r\n  width: 20px;\r\n  height: 20px;\r\n  font-family: serif;\r\n  line-height: 1;\r\n}\r\n.spexp .carousel-control .icon-prev:before {\r\n  content: '\\2039';\r\n}\r\n.spexp .carousel-control .icon-next:before {\r\n  content: '\\203A';\r\n}\r\n.spexp .carousel-indicators {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  z-index: 15;\r\n  width: 60%;\r\n  padding-left: 0;\r\n  margin-left: -30%;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n.spexp .carousel-indicators li {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 1px;\r\n  text-indent: -999px;\r\n  cursor: pointer;\r\n  background-color: #000 \\9;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: 1px solid #fff;\r\n  border-radius: 10px;\r\n}\r\n.spexp .carousel-indicators .active {\r\n  width: 12px;\r\n  height: 12px;\r\n  margin: 0;\r\n  background-color: #fff;\r\n}\r\n.spexp .carousel-caption {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 20px;\r\n  left: 15%;\r\n  z-index: 10;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\r\n}\r\n.spexp .carousel-caption .btn {\r\n  text-shadow: none;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .spexp .carousel-control .glyphicon-chevron-left,\r\n  .spexp .carousel-control .glyphicon-chevron-right,\r\n  .spexp .carousel-control .icon-prev,\r\n  .spexp .carousel-control .icon-next {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-top: -10px;\r\n    font-size: 30px;\r\n  }\r\n  .spexp .carousel-control .glyphicon-chevron-left,\r\n  .spexp .carousel-control .icon-prev {\r\n    margin-left: -10px;\r\n  }\r\n  .spexp .carousel-control .glyphicon-chevron-right,\r\n  .spexp .carousel-control .icon-next {\r\n    margin-right: -10px;\r\n  }\r\n  .spexp .carousel-caption {\r\n    right: 20%;\r\n    left: 20%;\r\n    padding-bottom: 30px;\r\n  }\r\n  .spexp .carousel-indicators {\r\n    bottom: 20px;\r\n  }\r\n}\r\n.spexp .clearfix:before,\r\n.spexp .clearfix:after,\r\n.spexp .dl-horizontal dd:before,\r\n.spexp .dl-horizontal dd:after,\r\n.spexp .container:before,\r\n.spexp .container:after,\r\n.spexp .container-fluid:before,\r\n.spexp .container-fluid:after,\r\n.spexp .row:before,\r\n.spexp .row:after,\r\n.spexp .form-horizontal .form-group:before,\r\n.spexp .form-horizontal .form-group:after,\r\n.spexp .btn-toolbar:before,\r\n.spexp .btn-toolbar:after,\r\n.spexp .btn-group-vertical > .btn-group:before,\r\n.spexp .btn-group-vertical > .btn-group:after,\r\n.spexp .nav:before,\r\n.spexp .nav:after,\r\n.spexp .navbar:before,\r\n.spexp .navbar:after,\r\n.spexp .navbar-header:before,\r\n.spexp .navbar-header:after,\r\n.spexp .navbar-collapse:before,\r\n.spexp .navbar-collapse:after,\r\n.spexp .pager:before,\r\n.spexp .pager:after,\r\n.spexp .panel-body:before,\r\n.spexp .panel-body:after,\r\n.spexp .modal-header:before,\r\n.spexp .modal-header:after,\r\n.spexp .modal-footer:before,\r\n.spexp .modal-footer:after {\r\n  display: table;\r\n  content: \" \";\r\n}\r\n.spexp .clearfix:after,\r\n.spexp .dl-horizontal dd:after,\r\n.spexp .container:after,\r\n.spexp .container-fluid:after,\r\n.spexp .row:after,\r\n.spexp .form-horizontal .form-group:after,\r\n.spexp .btn-toolbar:after,\r\n.spexp .btn-group-vertical > .btn-group:after,\r\n.spexp .nav:after,\r\n.spexp .navbar:after,\r\n.spexp .navbar-header:after,\r\n.spexp .navbar-collapse:after,\r\n.spexp .pager:after,\r\n.spexp .panel-body:after,\r\n.spexp .modal-header:after,\r\n.spexp .modal-footer:after {\r\n  clear: both;\r\n}\r\n.spexp .center-block {\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.spexp .pull-right {\r\n  float: right !important;\r\n}\r\n.spexp .pull-left {\r\n  float: left !important;\r\n}\r\n.spexp .hide {\r\n  display: none !important;\r\n}\r\n.spexp .show {\r\n  display: block !important;\r\n}\r\n.spexp .invisible {\r\n  visibility: hidden;\r\n}\r\n.spexp .text-hide {\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.spexp .hidden {\r\n  display: none !important;\r\n}\r\n.spexp .affix {\r\n  position: fixed;\r\n}\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\n.spexp .visible-xs,\r\n.spexp .visible-sm,\r\n.spexp .visible-md,\r\n.spexp .visible-lg {\r\n  display: none !important;\r\n}\r\n.spexp .visible-xs-block,\r\n.spexp .visible-xs-inline,\r\n.spexp .visible-xs-inline-block,\r\n.spexp .visible-sm-block,\r\n.spexp .visible-sm-inline,\r\n.spexp .visible-sm-inline-block,\r\n.spexp .visible-md-block,\r\n.spexp .visible-md-inline,\r\n.spexp .visible-md-inline-block,\r\n.spexp .visible-lg-block,\r\n.spexp .visible-lg-inline,\r\n.spexp .visible-lg-inline-block {\r\n  display: none !important;\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .visible-xs {\r\n    display: block !important;\r\n  }\r\n  .spexp table.visible-xs {\r\n    display: table !important;\r\n  }\r\n  .spexp tr.visible-xs {\r\n    display: table-row !important;\r\n  }\r\n  .spexp th.visible-xs,\r\n  .spexp td.visible-xs {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .visible-xs-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .visible-xs-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .visible-xs-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .spexp .visible-sm {\r\n    display: block !important;\r\n  }\r\n  .spexp table.visible-sm {\r\n    display: table !important;\r\n  }\r\n  .spexp tr.visible-sm {\r\n    display: table-row !important;\r\n  }\r\n  .spexp th.visible-sm,\r\n  .spexp td.visible-sm {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .spexp .visible-sm-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .spexp .visible-sm-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .spexp .visible-sm-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .spexp .visible-md {\r\n    display: block !important;\r\n  }\r\n  .spexp table.visible-md {\r\n    display: table !important;\r\n  }\r\n  .spexp tr.visible-md {\r\n    display: table-row !important;\r\n  }\r\n  .spexp th.visible-md,\r\n  .spexp td.visible-md {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .spexp .visible-md-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .spexp .visible-md-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .spexp .visible-md-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .visible-lg {\r\n    display: block !important;\r\n  }\r\n  .spexp table.visible-lg {\r\n    display: table !important;\r\n  }\r\n  .spexp tr.visible-lg {\r\n    display: table-row !important;\r\n  }\r\n  .spexp th.visible-lg,\r\n  .spexp td.visible-lg {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .visible-lg-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .visible-lg-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .visible-lg-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .hidden-xs {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .spexp .hidden-sm {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .spexp .hidden-md {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .spexp .hidden-lg {\r\n    display: none !important;\r\n  }\r\n}\r\n.spexp .visible-print {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .spexp .visible-print {\r\n    display: block !important;\r\n  }\r\n  .spexp table.visible-print {\r\n    display: table !important;\r\n  }\r\n  .spexp tr.visible-print {\r\n    display: table-row !important;\r\n  }\r\n  .spexp th.visible-print,\r\n  .spexp td.visible-print {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n.spexp .visible-print-block {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .spexp .visible-print-block {\r\n    display: block !important;\r\n  }\r\n}\r\n.spexp .visible-print-inline {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .spexp .visible-print-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n.spexp .visible-print-inline-block {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .spexp .visible-print-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media print {\r\n  .spexp .hidden-print {\r\n    display: none !important;\r\n  }\r\n}\r\n.spexp .btn-default,\r\n.spexp .btn-primary,\r\n.spexp .btn-success,\r\n.spexp .btn-info,\r\n.spexp .btn-warning,\r\n.spexp .btn-danger {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .btn-default:active,\r\n.spexp .btn-primary:active,\r\n.spexp .btn-success:active,\r\n.spexp .btn-info:active,\r\n.spexp .btn-warning:active,\r\n.spexp .btn-danger:active,\r\n.spexp .btn-default.active,\r\n.spexp .btn-primary.active,\r\n.spexp .btn-success.active,\r\n.spexp .btn-info.active,\r\n.spexp .btn-warning.active,\r\n.spexp .btn-danger.active {\r\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n.spexp .btn-default.disabled,\r\n.spexp .btn-primary.disabled,\r\n.spexp .btn-success.disabled,\r\n.spexp .btn-info.disabled,\r\n.spexp .btn-warning.disabled,\r\n.spexp .btn-danger.disabled,\r\n.spexp .btn-default[disabled],\r\n.spexp .btn-primary[disabled],\r\n.spexp .btn-success[disabled],\r\n.spexp .btn-info[disabled],\r\n.spexp .btn-warning[disabled],\r\n.spexp .btn-danger[disabled],\r\n.spexp fieldset[disabled] .btn-default,\r\n.spexp fieldset[disabled] .btn-primary,\r\n.spexp fieldset[disabled] .btn-success,\r\n.spexp fieldset[disabled] .btn-info,\r\n.spexp fieldset[disabled] .btn-warning,\r\n.spexp fieldset[disabled] .btn-danger {\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.spexp .btn-default .badge,\r\n.spexp .btn-primary .badge,\r\n.spexp .btn-success .badge,\r\n.spexp .btn-info .badge,\r\n.spexp .btn-warning .badge,\r\n.spexp .btn-danger .badge {\r\n  text-shadow: none;\r\n}\r\n.spexp .btn:active,\r\n.spexp .btn.active {\r\n  background-image: none;\r\n}\r\n.spexp .btn-default {\r\n  text-shadow: 0 1px 0 #fff;\r\n  background-image: -webkit-linear-gradient(top, #fff 0%, #e0e0e0 100%);\r\n  background-image: -o-linear-gradient(top, #fff 0%, #e0e0e0 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#e0e0e0));\r\n  background-image: linear-gradient(to bottom, #fff 0%, #e0e0e0 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe0e0e0', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-color: #dbdbdb;\r\n  border-color: #ccc;\r\n}\r\n.spexp .btn-default:hover,\r\n.spexp .btn-default:focus {\r\n  background-color: #e0e0e0;\r\n  background-position: 0 -15px;\r\n}\r\n.spexp .btn-default:active,\r\n.spexp .btn-default.active {\r\n  background-color: #e0e0e0;\r\n  border-color: #dbdbdb;\r\n}\r\n.spexp .btn-default.disabled,\r\n.spexp .btn-default[disabled],\r\n.spexp fieldset[disabled] .btn-default,\r\n.spexp .btn-default.disabled:hover,\r\n.spexp .btn-default[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-default:hover,\r\n.spexp .btn-default.disabled:focus,\r\n.spexp .btn-default[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-default:focus,\r\n.spexp .btn-default.disabled.focus,\r\n.spexp .btn-default[disabled].focus,\r\n.spexp fieldset[disabled] .btn-default.focus,\r\n.spexp .btn-default.disabled:active,\r\n.spexp .btn-default[disabled]:active,\r\n.spexp fieldset[disabled] .btn-default:active,\r\n.spexp .btn-default.disabled.active,\r\n.spexp .btn-default[disabled].active,\r\n.spexp fieldset[disabled] .btn-default.active {\r\n  background-color: #e0e0e0;\r\n  background-image: none;\r\n}\r\n.spexp .btn-primary {\r\n  background-image: -webkit-linear-gradient(top, #337ab7 0%, #265a88 100%);\r\n  background-image: -o-linear-gradient(top, #337ab7 0%, #265a88 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#265a88));\r\n  background-image: linear-gradient(to bottom, #337ab7 0%, #265a88 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-color: #245580;\r\n}\r\n.spexp .btn-primary:hover,\r\n.spexp .btn-primary:focus {\r\n  background-color: #265a88;\r\n  background-position: 0 -15px;\r\n}\r\n.spexp .btn-primary:active,\r\n.spexp .btn-primary.active {\r\n  background-color: #265a88;\r\n  border-color: #245580;\r\n}\r\n.spexp .btn-primary.disabled,\r\n.spexp .btn-primary[disabled],\r\n.spexp fieldset[disabled] .btn-primary,\r\n.spexp .btn-primary.disabled:hover,\r\n.spexp .btn-primary[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-primary:hover,\r\n.spexp .btn-primary.disabled:focus,\r\n.spexp .btn-primary[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-primary:focus,\r\n.spexp .btn-primary.disabled.focus,\r\n.spexp .btn-primary[disabled].focus,\r\n.spexp fieldset[disabled] .btn-primary.focus,\r\n.spexp .btn-primary.disabled:active,\r\n.spexp .btn-primary[disabled]:active,\r\n.spexp fieldset[disabled] .btn-primary:active,\r\n.spexp .btn-primary.disabled.active,\r\n.spexp .btn-primary[disabled].active,\r\n.spexp fieldset[disabled] .btn-primary.active {\r\n  background-color: #265a88;\r\n  background-image: none;\r\n}\r\n.spexp .btn-success {\r\n  background-image: -webkit-linear-gradient(top, #5cb85c 0%, #419641 100%);\r\n  background-image: -o-linear-gradient(top, #5cb85c 0%, #419641 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#419641));\r\n  background-image: linear-gradient(to bottom, #5cb85c 0%, #419641 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-color: #3e8f3e;\r\n}\r\n.spexp .btn-success:hover,\r\n.spexp .btn-success:focus {\r\n  background-color: #419641;\r\n  background-position: 0 -15px;\r\n}\r\n.spexp .btn-success:active,\r\n.spexp .btn-success.active {\r\n  background-color: #419641;\r\n  border-color: #3e8f3e;\r\n}\r\n.spexp .btn-success.disabled,\r\n.spexp .btn-success[disabled],\r\n.spexp fieldset[disabled] .btn-success,\r\n.spexp .btn-success.disabled:hover,\r\n.spexp .btn-success[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-success:hover,\r\n.spexp .btn-success.disabled:focus,\r\n.spexp .btn-success[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-success:focus,\r\n.spexp .btn-success.disabled.focus,\r\n.spexp .btn-success[disabled].focus,\r\n.spexp fieldset[disabled] .btn-success.focus,\r\n.spexp .btn-success.disabled:active,\r\n.spexp .btn-success[disabled]:active,\r\n.spexp fieldset[disabled] .btn-success:active,\r\n.spexp .btn-success.disabled.active,\r\n.spexp .btn-success[disabled].active,\r\n.spexp fieldset[disabled] .btn-success.active {\r\n  background-color: #419641;\r\n  background-image: none;\r\n}\r\n.spexp .btn-info {\r\n  background-image: -webkit-linear-gradient(top, #5bc0de 0%, #2aabd2 100%);\r\n  background-image: -o-linear-gradient(top, #5bc0de 0%, #2aabd2 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5bc0de), to(#2aabd2));\r\n  background-image: linear-gradient(to bottom, #5bc0de 0%, #2aabd2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff2aabd2', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-color: #28a4c9;\r\n}\r\n.spexp .btn-info:hover,\r\n.spexp .btn-info:focus {\r\n  background-color: #2aabd2;\r\n  background-position: 0 -15px;\r\n}\r\n.spexp .btn-info:active,\r\n.spexp .btn-info.active {\r\n  background-color: #2aabd2;\r\n  border-color: #28a4c9;\r\n}\r\n.spexp .btn-info.disabled,\r\n.spexp .btn-info[disabled],\r\n.spexp fieldset[disabled] .btn-info,\r\n.spexp .btn-info.disabled:hover,\r\n.spexp .btn-info[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-info:hover,\r\n.spexp .btn-info.disabled:focus,\r\n.spexp .btn-info[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-info:focus,\r\n.spexp .btn-info.disabled.focus,\r\n.spexp .btn-info[disabled].focus,\r\n.spexp fieldset[disabled] .btn-info.focus,\r\n.spexp .btn-info.disabled:active,\r\n.spexp .btn-info[disabled]:active,\r\n.spexp fieldset[disabled] .btn-info:active,\r\n.spexp .btn-info.disabled.active,\r\n.spexp .btn-info[disabled].active,\r\n.spexp fieldset[disabled] .btn-info.active {\r\n  background-color: #2aabd2;\r\n  background-image: none;\r\n}\r\n.spexp .btn-warning {\r\n  background-image: -webkit-linear-gradient(top, #f0ad4e 0%, #eb9316 100%);\r\n  background-image: -o-linear-gradient(top, #f0ad4e 0%, #eb9316 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0ad4e), to(#eb9316));\r\n  background-image: linear-gradient(to bottom, #f0ad4e 0%, #eb9316 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffeb9316', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-color: #e38d13;\r\n}\r\n.spexp .btn-warning:hover,\r\n.spexp .btn-warning:focus {\r\n  background-color: #eb9316;\r\n  background-position: 0 -15px;\r\n}\r\n.spexp .btn-warning:active,\r\n.spexp .btn-warning.active {\r\n  background-color: #eb9316;\r\n  border-color: #e38d13;\r\n}\r\n.spexp .btn-warning.disabled,\r\n.spexp .btn-warning[disabled],\r\n.spexp fieldset[disabled] .btn-warning,\r\n.spexp .btn-warning.disabled:hover,\r\n.spexp .btn-warning[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-warning:hover,\r\n.spexp .btn-warning.disabled:focus,\r\n.spexp .btn-warning[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-warning:focus,\r\n.spexp .btn-warning.disabled.focus,\r\n.spexp .btn-warning[disabled].focus,\r\n.spexp fieldset[disabled] .btn-warning.focus,\r\n.spexp .btn-warning.disabled:active,\r\n.spexp .btn-warning[disabled]:active,\r\n.spexp fieldset[disabled] .btn-warning:active,\r\n.spexp .btn-warning.disabled.active,\r\n.spexp .btn-warning[disabled].active,\r\n.spexp fieldset[disabled] .btn-warning.active {\r\n  background-color: #eb9316;\r\n  background-image: none;\r\n}\r\n.spexp .btn-danger {\r\n  background-image: -webkit-linear-gradient(top, #d9534f 0%, #c12e2a 100%);\r\n  background-image: -o-linear-gradient(top, #d9534f 0%, #c12e2a 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c12e2a));\r\n  background-image: linear-gradient(to bottom, #d9534f 0%, #c12e2a 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc12e2a', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-color: #b92c28;\r\n}\r\n.spexp .btn-danger:hover,\r\n.spexp .btn-danger:focus {\r\n  background-color: #c12e2a;\r\n  background-position: 0 -15px;\r\n}\r\n.spexp .btn-danger:active,\r\n.spexp .btn-danger.active {\r\n  background-color: #c12e2a;\r\n  border-color: #b92c28;\r\n}\r\n.spexp .btn-danger.disabled,\r\n.spexp .btn-danger[disabled],\r\n.spexp fieldset[disabled] .btn-danger,\r\n.spexp .btn-danger.disabled:hover,\r\n.spexp .btn-danger[disabled]:hover,\r\n.spexp fieldset[disabled] .btn-danger:hover,\r\n.spexp .btn-danger.disabled:focus,\r\n.spexp .btn-danger[disabled]:focus,\r\n.spexp fieldset[disabled] .btn-danger:focus,\r\n.spexp .btn-danger.disabled.focus,\r\n.spexp .btn-danger[disabled].focus,\r\n.spexp fieldset[disabled] .btn-danger.focus,\r\n.spexp .btn-danger.disabled:active,\r\n.spexp .btn-danger[disabled]:active,\r\n.spexp fieldset[disabled] .btn-danger:active,\r\n.spexp .btn-danger.disabled.active,\r\n.spexp .btn-danger[disabled].active,\r\n.spexp fieldset[disabled] .btn-danger.active {\r\n  background-color: #c12e2a;\r\n  background-image: none;\r\n}\r\n.spexp .thumbnail,\r\n.spexp .img-thumbnail {\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .dropdown-menu > li > a:hover,\r\n.spexp .dropdown-menu > li > a:focus {\r\n  background-color: #e8e8e8;\r\n  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);\r\n  background-image: -o-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e8e8e8));\r\n  background-image: linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .dropdown-menu > .active > a,\r\n.spexp .dropdown-menu > .active > a:hover,\r\n.spexp .dropdown-menu > .active > a:focus {\r\n  background-color: #2e6da4;\r\n  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);\r\n  background-image: -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));\r\n  background-image: linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .navbar-default {\r\n  background-image: -webkit-linear-gradient(top, #fff 0%, #f8f8f8 100%);\r\n  background-image: -o-linear-gradient(top, #fff 0%, #f8f8f8 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f8f8f8));\r\n  background-image: linear-gradient(to bottom, #fff 0%, #f8f8f8 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff8f8f8', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 5px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 5px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .navbar-default .navbar-nav > .open > a,\r\n.spexp .navbar-default .navbar-nav > .active > a {\r\n  background-image: -webkit-linear-gradient(top, #dbdbdb 0%, #e2e2e2 100%);\r\n  background-image: -o-linear-gradient(top, #dbdbdb 0%, #e2e2e2 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#dbdbdb), to(#e2e2e2));\r\n  background-image: linear-gradient(to bottom, #dbdbdb 0%, #e2e2e2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdbdbdb', endColorstr='#ffe2e2e2', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 3px 9px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .navbar-brand,\r\n.spexp .navbar-nav > li > a {\r\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);\r\n}\r\n.spexp .navbar-inverse {\r\n  background-image: -webkit-linear-gradient(top, #3c3c3c 0%, #222 100%);\r\n  background-image: -o-linear-gradient(top, #3c3c3c 0%, #222 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#3c3c3c), to(#222));\r\n  background-image: linear-gradient(to bottom, #3c3c3c 0%, #222 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c3c3c', endColorstr='#ff222222', GradientType=0);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n  background-repeat: repeat-x;\r\n  border-radius: 4px;\r\n}\r\n.spexp .navbar-inverse .navbar-nav > .open > a,\r\n.spexp .navbar-inverse .navbar-nav > .active > a {\r\n  background-image: -webkit-linear-gradient(top, #080808 0%, #0f0f0f 100%);\r\n  background-image: -o-linear-gradient(top, #080808 0%, #0f0f0f 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#080808), to(#0f0f0f));\r\n  background-image: linear-gradient(to bottom, #080808 0%, #0f0f0f 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff080808', endColorstr='#ff0f0f0f', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, 0.25);\r\n  box-shadow: inset 0 3px 9px rgba(0, 0, 0, 0.25);\r\n}\r\n.spexp .navbar-inverse .navbar-brand,\r\n.spexp .navbar-inverse .navbar-nav > li > a {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.spexp .navbar-static-top,\r\n.spexp .navbar-fixed-top,\r\n.spexp .navbar-fixed-bottom {\r\n  border-radius: 0;\r\n}\r\n@media (max-width: 767px) {\r\n  .spexp .navbar .navbar-nav .open .dropdown-menu > .active > a,\r\n  .spexp .navbar .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .spexp .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);\r\n    background-image: -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));\r\n    background-image: linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);\r\n    background-repeat: repeat-x;\r\n  }\r\n}\r\n.spexp .alert {\r\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n.spexp .alert-success {\r\n  background-image: -webkit-linear-gradient(top, #dff0d8 0%, #c8e5bc 100%);\r\n  background-image: -o-linear-gradient(top, #dff0d8 0%, #c8e5bc 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#dff0d8), to(#c8e5bc));\r\n  background-image: linear-gradient(to bottom, #dff0d8 0%, #c8e5bc 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffc8e5bc', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  border-color: #b2dba1;\r\n}\r\n.spexp .alert-info {\r\n  background-image: -webkit-linear-gradient(top, #d9edf7 0%, #b9def0 100%);\r\n  background-image: -o-linear-gradient(top, #d9edf7 0%, #b9def0 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9edf7), to(#b9def0));\r\n  background-image: linear-gradient(to bottom, #d9edf7 0%, #b9def0 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffb9def0', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  border-color: #9acfea;\r\n}\r\n.spexp .alert-warning {\r\n  background-image: -webkit-linear-gradient(top, #fcf8e3 0%, #f8efc0 100%);\r\n  background-image: -o-linear-gradient(top, #fcf8e3 0%, #f8efc0 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fcf8e3), to(#f8efc0));\r\n  background-image: linear-gradient(to bottom, #fcf8e3 0%, #f8efc0 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fff8efc0', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  border-color: #f5e79e;\r\n}\r\n.spexp .alert-danger {\r\n  background-image: -webkit-linear-gradient(top, #f2dede 0%, #e7c3c3 100%);\r\n  background-image: -o-linear-gradient(top, #f2dede 0%, #e7c3c3 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f2dede), to(#e7c3c3));\r\n  background-image: linear-gradient(to bottom, #f2dede 0%, #e7c3c3 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffe7c3c3', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  border-color: #dca7a7;\r\n}\r\n.spexp .progress {\r\n  background-image: -webkit-linear-gradient(top, #ebebeb 0%, #f5f5f5 100%);\r\n  background-image: -o-linear-gradient(top, #ebebeb 0%, #f5f5f5 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ebebeb), to(#f5f5f5));\r\n  background-image: linear-gradient(to bottom, #ebebeb 0%, #f5f5f5 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffebebeb', endColorstr='#fff5f5f5', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .progress-bar {\r\n  background-image: -webkit-linear-gradient(top, #337ab7 0%, #286090 100%);\r\n  background-image: -o-linear-gradient(top, #337ab7 0%, #286090 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#286090));\r\n  background-image: linear-gradient(to bottom, #337ab7 0%, #286090 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff286090', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .progress-bar-success {\r\n  background-image: -webkit-linear-gradient(top, #5cb85c 0%, #449d44 100%);\r\n  background-image: -o-linear-gradient(top, #5cb85c 0%, #449d44 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#449d44));\r\n  background-image: linear-gradient(to bottom, #5cb85c 0%, #449d44 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff449d44', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .progress-bar-info {\r\n  background-image: -webkit-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);\r\n  background-image: -o-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5bc0de), to(#31b0d5));\r\n  background-image: linear-gradient(to bottom, #5bc0de 0%, #31b0d5 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff31b0d5', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .progress-bar-warning {\r\n  background-image: -webkit-linear-gradient(top, #f0ad4e 0%, #ec971f 100%);\r\n  background-image: -o-linear-gradient(top, #f0ad4e 0%, #ec971f 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0ad4e), to(#ec971f));\r\n  background-image: linear-gradient(to bottom, #f0ad4e 0%, #ec971f 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffec971f', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .progress-bar-danger {\r\n  background-image: -webkit-linear-gradient(top, #d9534f 0%, #c9302c 100%);\r\n  background-image: -o-linear-gradient(top, #d9534f 0%, #c9302c 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c9302c));\r\n  background-image: linear-gradient(to bottom, #d9534f 0%, #c9302c 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc9302c', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .progress-bar-striped {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.spexp .list-group {\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\r\n}\r\n.spexp .list-group-item.active,\r\n.spexp .list-group-item.active:hover,\r\n.spexp .list-group-item.active:focus {\r\n  text-shadow: 0 -1px 0 #286090;\r\n  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2b669a 100%);\r\n  background-image: -o-linear-gradient(top, #337ab7 0%, #2b669a 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2b669a));\r\n  background-image: linear-gradient(to bottom, #337ab7 0%, #2b669a 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2b669a', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  border-color: #2b669a;\r\n}\r\n.spexp .list-group-item.active .badge,\r\n.spexp .list-group-item.active:hover .badge,\r\n.spexp .list-group-item.active:focus .badge {\r\n  text-shadow: none;\r\n}\r\n.spexp .panel {\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n.spexp .panel-default > .panel-heading {\r\n  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);\r\n  background-image: -o-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e8e8e8));\r\n  background-image: linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .panel-primary > .panel-heading {\r\n  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);\r\n  background-image: -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));\r\n  background-image: linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .panel-success > .panel-heading {\r\n  background-image: -webkit-linear-gradient(top, #dff0d8 0%, #d0e9c6 100%);\r\n  background-image: -o-linear-gradient(top, #dff0d8 0%, #d0e9c6 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#dff0d8), to(#d0e9c6));\r\n  background-image: linear-gradient(to bottom, #dff0d8 0%, #d0e9c6 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffd0e9c6', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .panel-info > .panel-heading {\r\n  background-image: -webkit-linear-gradient(top, #d9edf7 0%, #c4e3f3 100%);\r\n  background-image: -o-linear-gradient(top, #d9edf7 0%, #c4e3f3 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9edf7), to(#c4e3f3));\r\n  background-image: linear-gradient(to bottom, #d9edf7 0%, #c4e3f3 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffc4e3f3', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .panel-warning > .panel-heading {\r\n  background-image: -webkit-linear-gradient(top, #fcf8e3 0%, #faf2cc 100%);\r\n  background-image: -o-linear-gradient(top, #fcf8e3 0%, #faf2cc 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fcf8e3), to(#faf2cc));\r\n  background-image: linear-gradient(to bottom, #fcf8e3 0%, #faf2cc 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fffaf2cc', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .panel-danger > .panel-heading {\r\n  background-image: -webkit-linear-gradient(top, #f2dede 0%, #ebcccc 100%);\r\n  background-image: -o-linear-gradient(top, #f2dede 0%, #ebcccc 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f2dede), to(#ebcccc));\r\n  background-image: linear-gradient(to bottom, #f2dede 0%, #ebcccc 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffebcccc', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n.spexp .well {\r\n  background-image: -webkit-linear-gradient(top, #e8e8e8 0%, #f5f5f5 100%);\r\n  background-image: -o-linear-gradient(top, #e8e8e8 0%, #f5f5f5 100%);\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#e8e8e8), to(#f5f5f5));\r\n  background-image: linear-gradient(to bottom, #e8e8e8 0%, #f5f5f5 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);\r\n  background-repeat: repeat-x;\r\n  border-color: #dcdcdc;\r\n  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1);\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../node_modules/css-loader/index.js!./app1.css":
/*!*********************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/css-loader!./app1.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    color: aliceblue;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../node_modules/css-loader/lib/css-base.js":
/*!**************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/css-loader/lib/css-base.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../node_modules/css-loader/lib/url/escape.js":
/*!****************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/css-loader/lib/url/escape.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../node_modules/jquery/dist/jquery.js":
/*!*********************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/jquery/dist/jquery.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "../../../node_modules/jquery/dist/jquery.js-exposed":
/*!*****************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/jquery/dist/jquery.js-exposed ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(/*! -!./jquery.js */ "../../../node_modules/jquery/dist/jquery.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../../node_modules/style-loader/lib/urls.js":
/*!************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/node_modules/style-loader/lib/urls.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/css/spexp.css":
/*!******************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/css/spexp.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./spexp.css */ "../../../node_modules/css-loader/index.js!../../../public/vendor/bootstrap/3.3.7/css/spexp.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot":
/*!*******************************************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg":
/*!*******************************************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJ6ZEdGdVpHRnNiMjVsUFNKdWJ5SS9QZzBLUENGRVQwTlVXVkJGSUhOMlp5QlFWVUpNU1VNZ0lpMHZMMWN6UXk4dlJGUkVJRk5XUnlBeExqRXZMMFZPSWlBaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlIzSmhjR2hwWTNNdlUxWkhMekV1TVM5RVZFUXZjM1puTVRFdVpIUmtJaUErRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84YldWMFlXUmhkR0UrUEM5dFpYUmhaR0YwWVQ0TkNqeGtaV1p6UGcwS1BHWnZiblFnYVdROUltZHNlWEJvYVdOdmJuTmZhR0ZzWm14cGJtZHpjbVZuZFd4aGNpSWdhRzl5YVhvdFlXUjJMWGc5SWpFeU1EQWlJRDROQ2p4bWIyNTBMV1poWTJVZ2RXNXBkSE10Y0dWeUxXVnRQU0l4TWpBd0lpQmhjMk5sYm5ROUlqazJNQ0lnWkdWelkyVnVkRDBpTFRJME1DSWdMejROQ2p4dGFYTnphVzVuTFdkc2VYQm9JR2h2Y21sNkxXRmtkaTE0UFNJMU1EQWlJQzgrRFFvOFoyeDVjR2dnYUc5eWFYb3RZV1IyTFhnOUlqQWlJQzgrRFFvOFoyeDVjR2dnYUc5eWFYb3RZV1IyTFhnOUlqUXdNQ0lnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJZ0lpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaW9pSUdROUlrMDJNREFnTVRFd01IRXhOU0F3SURNMElDMHhMalYwTXpBZ0xUTXVOV3d4TVNBdE1YRXhNQ0F0TWlBeE55NDFJQzB4TUM0MWREY3VOU0F0TVRndU5YWXRNakkwYkRFMU9DQXhOVGh4TnlBM0lERTRJRGgwTVRrZ0xUWnNNVEEySUMweE1EWnhOeUF0T0NBMklDMHhPWFF0T0NBdE1UaHNMVEUxT0NBdE1UVTRhREl5TkhFeE1DQXdJREU0TGpVZ0xUY3VOWFF4TUM0MUlDMHhOeTQxY1RZZ0xUUXhJRFlnTFRjMWNUQWdMVEUxSUMweExqVWdMVE0wZEMwekxqVWdMVE13YkMweElDMHhNWEV0TWlBdE1UQWdMVEV3TGpVZ0xURTNMalYwTFRFNExqVWdMVGN1TldndE1qSTBiREUxT0NBdE1UVTRJSEUzSUMwM0lEZ2dMVEU0ZEMwMklDMHhPV3d0TVRBMklDMHhNRFp4TFRnZ0xUY2dMVEU1SUMwMmRDMHhPQ0E0YkMweE5UZ2dNVFU0ZGkweU1qUnhNQ0F0TVRBZ0xUY3VOU0F0TVRndU5YUXRNVGN1TlNBdE1UQXVOWEV0TkRFZ0xUWWdMVGMxSUMwMmNTMHhOU0F3SUMwek5DQXhMalYwTFRNd0lETXVOV3d0TVRFZ01YRXRNVEFnTWlBdE1UY3VOU0F4TUM0MWRDMDNMalVnTVRndU5YWXlNalJzTFRFMU9DQXRNVFU0Y1MwM0lDMDNJQzB4T0NBdE9IUXRNVGtnTm13dE1UQTJJREV3Tm5FdE55QTRJQzAySURFNWREZ2dNVGhzTVRVNElERTFPR2d0TWpJMGNTMHhNQ0F3SUMweE9DNDFJRGN1TlNCMExURXdMalVnTVRjdU5YRXROaUEwTVNBdE5pQTNOWEV3SURFMUlERXVOU0F6TkhRekxqVWdNekJzTVNBeE1YRXlJREV3SURFd0xqVWdNVGN1TlhReE9DNDFJRGN1TldneU1qUnNMVEUxT0NBeE5UaHhMVGNnTnlBdE9DQXhPSFEySURFNWJERXdOaUF4TURaeE9DQTNJREU1SURaME1UZ2dMVGhzTVRVNElDMHhOVGgyTWpJMGNUQWdNVEFnTnk0MUlERTRMalYwTVRjdU5TQXhNQzQxY1RReElEWWdOelVnTm5vaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlLeUlnWkQwaVRUUTFNQ0F4TVRBd2FESXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TXpVd2FETTFNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TWpBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB6TlRCMkxUTTFNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1qQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl6TlRCb0xUTTFNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTWpBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlNCb016VXdkak0xTUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR0V3T3lJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hoTlRzaUlHUTlJazA0TWpVZ01URXdNR2d5TlRCeE1UQWdNQ0F4TWk0MUlDMDFkQzAxTGpVZ0xURXpiQzB6TmpRZ0xUTTJOSEV0TmlBdE5pQXRNVEVnTFRFNGFESTJPSEV4TUNBd0lERXpJQzAyZEMweklDMHhOR3d0TVRJd0lDMHhOakJ4TFRZZ0xUZ2dMVEU0SUMweE5IUXRNaklnTFRab0xURXlOWFl0TVRBd2FESTNOWEV4TUNBd0lERXpJQzAyZEMweklDMHhOR3d0TVRJd0lDMHhOakJ4TFRZZ0xUZ2dMVEU0SUMweE5IUXRNaklnTFRab0xURXlOWFl0TVRjMGNUQWdMVEV4SUMwM0xqVWdMVEU0TGpWMExURTRMalVnTFRjdU5XZ3RNVFE0Y1MweE1TQXdJQzB4T0M0MUlEY3VOWFF0Tnk0MUlERTRMalYyTVRjMElHZ3RNamMxY1MweE1DQXdJQzB4TXlBMmRETWdNVFJzTVRJd0lERTJNSEUySURnZ01UZ2dNVFIwTWpJZ05tZ3hNalYyTVRBd2FDMHlOelZ4TFRFd0lEQWdMVEV6SURaME15QXhOR3d4TWpBZ01UWXdjVFlnT0NBeE9DQXhOSFF5TWlBMmFERXhPSEV0TlNBeE1pQXRNVEVnTVRoc0xUTTJOQ0F6TmpSeExUZ2dPQ0F0TlM0MUlERXpkREV5TGpVZ05XZ3lOVEJ4TWpVZ01DQTBNeUF0TVRoc01UWTBJQzB4TmpSeE9DQXRPQ0F4T0NBdE9IUXhPQ0E0YkRFMk5DQXhOalJ4TVRnZ01UZ2dORE1nTVRoNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZURJd01EQTdJaUJvYjNKcGVpMWhaSFl0ZUQwaU5qVXdJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVESXdNREU3SWlCb2IzSnBlaTFoWkhZdGVEMGlNVE13TUNJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2d5TURBeU95SWdhRzl5YVhvdFlXUjJMWGc5SWpZMU1DSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNneU1EQXpPeUlnYUc5eWFYb3RZV1IyTFhnOUlqRXpNREFpSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRNakF3TkRzaUlHaHZjbWw2TFdGa2RpMTRQU0kwTXpNaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40TWpBd05Uc2lJR2h2Y21sNkxXRmtkaTE0UFNJek1qVWlJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONE1qQXdOanNpSUdodmNtbDZMV0ZrZGkxNFBTSXlNVFlpSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRNakF3TnpzaUlHaHZjbWw2TFdGa2RpMTRQU0l5TVRZaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40TWpBd09Ec2lJR2h2Y21sNkxXRmtkaTE0UFNJeE5qSWlJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONE1qQXdPVHNpSUdodmNtbDZMV0ZrZGkxNFBTSXlOakFpSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRNakF3WVRzaUlHaHZjbWw2TFdGa2RpMTRQU0kzTWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2d5TURKbU95SWdhRzl5YVhvdFlXUjJMWGc5SWpJMk1DSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNneU1EVm1PeUlnYUc5eWFYb3RZV1IyTFhnOUlqTXlOU0lnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzZ3lNR0ZqT3lJZ1pEMGlUVGMwTkNBeE1UazRjVEkwTWlBd0lETTFOQ0F0TVRnNWNUWXdJQzB4TURRZ05qWWdMVEl3T1dndE1UZ3hjVEFnTkRVZ0xURTNMalVnT0RJdU5YUXRORE11TlNBMk1TNDFkQzAxT0NBME1DNDFkQzAyTUM0MUlESTBkQzAxTVM0MUlEY3VOWEV0TVRrZ01DQXROREF1TlNBdE5TNDFkQzAwT1M0MUlDMHlNQzQxZEMwMU15QXRNemgwTFRRNUlDMDJNaTQxZEMwek9TQXRPRGt1Tldnek56bHNMVEV3TUNBdE1UQXdhQzB6TURCeExUWWdMVFV3SUMwMklDMHhNREJvTkRBMmJDMHhNREFnTFRFd01HZ3RNekF3Y1RrZ0xUYzBJRE16SUMweE16SjBOVEl1TlNBdE9URjBOakV1TlNBdE5UUXVOWFExT1NBdE1qa2dkRFEzSUMwM0xqVnhNaklnTUNBMU1DNDFJRGN1TlhRMk1DNDFJREkwTGpWME5UZ2dOREYwTkRNdU5TQTJNWFF4Tnk0MUlEZ3dhREUzTkhFdE16QWdMVEUzTVNBdE1USTRJQzB5TnpoeExURXdOeUF0TVRFM0lDMHlOelFnTFRFeE4zRXRNakEySURBZ0xUTXlOQ0F4TlRoeExUTTJJRFE0SUMwMk9TQXhNek4wTFRRMUlESXdOR2d0TWpFM2JERXdNQ0F4TURCb01URXljVEVnTkRjZ05pQXhNREJvTFRJeE9Hd3hNREFnTVRBd2FERXpOSEV5TUNBNE55QTFNU0F4TlRNdU5YUTJNaUF4TURNdU5YRXhNVGNnTVRReElESTVOeUF4TkRGNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZURJd1ltUTdJaUJrUFNKTk5ESTRJREV5TURCb016VXdjVFkzSURBZ01USXdJQzB4TTNRNE5pQXRNekYwTlRjZ0xUUTVMalYwTXpVZ0xUVTJMalYwTVRjZ0xUWTBMalYwTmk0MUlDMDJNQzQxZERBdU5TQXROVGQyTFRFMkxqVjJMVEUyTGpWeE1DQXRNellnTFRBdU5TQXROVGQwTFRZdU5TQXROakYwTFRFM0lDMDJOWFF0TXpVZ0xUVTNkQzAxTnlBdE5UQXVOWFF0T0RZZ0xUTXhMalYwTFRFeU1DQXRNVE5vTFRFM09Hd3RNaUF0TVRBd2FESTRPSEV4TUNBd0lERXpJQzAyZEMweklDMHhOR3d0TVRJd0lDMHhOakJ4TFRZZ0xUZ2dMVEU0SUMweE5IUXRNaklnTFRab0xURXpPSFl0TVRjMWNUQWdMVEV4SUMwMUxqVWdMVEU0SUhRdE1UVXVOU0F0TjJndE1UUTVjUzB4TUNBd0lDMHhOeTQxSURjdU5YUXROeTQxSURFM0xqVjJNVGMxYUMweU5qZHhMVEV3SURBZ0xURXpJRFowTXlBeE5Hd3hNakFnTVRZd2NUWWdPQ0F4T0NBeE5IUXlNaUEyYURFeE4zWXhNREJvTFRJMk4zRXRNVEFnTUNBdE1UTWdOblF6SURFMGJERXlNQ0F4TmpCeE5pQTRJREU0SURFMGRESXlJRFpvTVRFM2RqUTNOWEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWVrMDJNREFnTVRBd01IWXRNekF3YURJd00zRTJOQ0F3SURnMkxqVWdNek4wTWpJdU5TQXhNVGx4TUNBNE5DQXRNakl1TlNBeE1UWjBMVGcyTGpVZ016Sm9MVEl3TTNvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40TWpJeE1qc2lJR1E5SWsweU5UQWdOekF3YURnd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNakF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMDRNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpJd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZURJek1XSTdJaUJrUFNKTk1UQXdNQ0F4TWpBd2RpMHhOVEJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUVXdkaTB4TURCeE1DQXRPVEVnTFRRNUxqVWdMVEUyTlM0MWRDMHhNekF1TlNBdE1UQTVMalZ4T0RFZ0xUTTFJREV6TUM0MUlDMHhNRGt1TlhRME9TNDFJQzB4TmpVdU5YWXRNVFV3YURVd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHhOVEJvTFRnd01IWXhOVEJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFhRFV3ZGpFMU1IRXdJRGt4SURRNUxqVWdNVFkxTGpWME1UTXdMalVnTVRBNUxqVnhMVGd4SURNMUlDMHhNekF1TlNBeE1Ea3VOU0IwTFRRNUxqVWdNVFkxTGpWMk1UQXdhQzAxTUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UVXdhRGd3TUhwTk5EQXdJREV3TURCMkxURXdNSEV3SUMwMk1DQXpNaTQxSUMweE1Ea3VOWFE0Tnk0MUlDMDNNeTQxY1RJNElDMHhNaUEwTkNBdE16ZDBNVFlnTFRVMWRDMHhOaUF0TlRWMExUUTBJQzB6TjNFdE5UVWdMVEkwSUMwNE55NDFJQzAzTXk0MWRDMHpNaTQxSUMweE1Ea3VOWFl0TVRVd2FEUXdNSFl4TlRCeE1DQTJNQ0F0TXpJdU5TQXhNRGt1TlhRdE9EY3VOU0EzTXk0MWNTMHlPQ0F4TWlBdE5EUWdNemQwTFRFMklEVTFkREUySURVMWREUTBJRE0zSUhFMU5TQXlOQ0E0Tnk0MUlEY3pMalYwTXpJdU5TQXhNRGt1TlhZeE1EQm9MVFF3TUhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40TWpWbVl6c2lJR2h2Y21sNkxXRmtkaTE0UFNJMU1EQWlJR1E5SWswd0lEQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVESTJNREU3SWlCa1BTSk5OVEF6SURFd09EbHhNVEV3SURBZ01qQXdMalVnTFRVNUxqVjBNVE0wTGpVZ0xURTFOaTQxY1RRMElERTBJRGt3SURFMGNURXlNQ0F3SURJd05TQXRPRFl1TlhRNE5TQXRNakEyTGpWeE1DQXRNVEl4SUMwNE5TQXRNakEzTGpWMExUSXdOU0F0T0RZdU5XZ3ROelV3Y1MwM09TQXdJQzB4TXpVdU5TQTFOM1F0TlRZdU5TQXhNemR4TUNBMk9TQTBNaTQxSURFeU1pNDFkREV3T0M0MUlEWTNMalZ4TFRJZ01USWdMVElnTXpkeE1DQXhOVE1nTVRBNElESTJNQzQxZERJMk1DQXhNRGN1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40TWpabVlUc2lJR1E5SWswM056UWdNVEU1TXk0MWNURTJJQzA1TGpVZ01qQXVOU0F0TWpkMExUVXVOU0F0TXpNdU5Xd3RNVE0ySUMweE9EZHNORFkzSUMwM05EWm9NekJ4TWpBZ01DQXpOU0F0TVRndU5YUXhOU0F0TXprdU5YWXROREpvTFRFeU1EQjJOREp4TUNBeU1TQXhOU0F6T1M0MWRETTFJREU0TGpWb016QnNORFk0SURjME5td3RNVE0xSURFNE0zRXRNVEFnTVRZZ0xUVXVOU0F6TkhReU1DNDFJREk0ZERNMElEVXVOWFF5T0NBdE1qQXVOV3d4TVRFZ0xURTBPR3d4TVRJZ01UVXdjVGtnTVRZZ01qY2dNakF1TlhRek5DQXROWHBOTmpBd0lESXdNR2d6Tnpkc0xURTRNaUF4TVRKc0xURTVOU0ExTXpSMkxUWTBObm9nSWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplREkzTURrN0lpQmtQU0pOTWpVZ01URXdNR2d4TVRVd2NURXdJREFnTVRJdU5TQXROWFF0TlM0MUlDMHhNMnd0TlRZMElDMDFOamR4TFRnZ0xUZ2dMVEU0SUMwNGRDMHhPQ0E0YkMwMU5qUWdOVFkzY1MwNElEZ2dMVFV1TlNBeE0zUXhNaTQxSURWNlRURTRJRGc0TW13eU5qUWdMVEkyTkhFNElDMDRJRGdnTFRFNGRDMDRJQzB4T0d3dE1qWTBJQzB5TmpSeExUZ2dMVGdnTFRFeklDMDFMalYwTFRVZ01USXVOWFkxTlRCeE1DQXhNQ0ExSURFeUxqVjBNVE1nTFRVdU5YcE5PVEU0SURZeE9Hd3lOalFnTWpZMGNUZ2dPQ0F4TXlBMUxqVjBOU0F0TVRJdU5YWXROVFV3Y1RBZ0xURXdJQzAxSUMweE1pNDFkQzB4TXlBMUxqVWdiQzB5TmpRZ01qWTBjUzA0SURnZ0xUZ2dNVGgwT0NBeE9IcE5PREU0SURRNE1td3pOalFnTFRNMk5IRTRJQzA0SURVdU5TQXRNVE4wTFRFeUxqVWdMVFZvTFRFeE5UQnhMVEV3SURBZ0xURXlMalVnTlhRMUxqVWdNVE5zTXpZMElETTJOSEU0SURnZ01UZ2dPSFF4T0NBdE9Hd3hOalFnTFRFMk5IRTRJQzA0SURFNElDMDRkREU0SURoc01UWTBJREUyTkhFNElEZ2dNVGdnT0hReE9DQXRPSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRNamN3WmpzaUlHUTlJazB4TURFeElERXlNVEJ4TVRrZ01DQXpNeUF0TVROc01UVXpJQzB4TlROeE1UTWdMVEUwSURFeklDMHpNM1F0TVRNZ0xUTXpiQzA1T1NBdE9USnNMVEl4TkNBeU1UUnNPVFVnT1RaeE1UTWdNVFFnTXpJZ01UUjZUVEV3TVRNZ09EQXdiQzAyTVRVZ0xUWXhOR3d0TWpFMElESXhOR3cyTVRRZ05qRTBlazB6TVRjZ09UWnNMVE16TXlBdE1URXliREV4TUNBek16VjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdNREU3SWlCa1BTSk5OekF3SURZMU1IWXROVFV3YURJMU1IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXROVEJvTFRnd01IWTFNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVm9NalV3ZGpVMU1Hd3ROVEF3SURVMU1HZ3hNakF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTURBeU95SWdaRDBpVFRNMk9DQXhNREUzYkRZME5TQXhOak54TXprZ01UVWdOak1nTUhReU5DQXRORGwyTFRnek1YRXdJQzAxTlNBdE5ERXVOU0F0T1RVdU5YUXRNVEV4TGpVZ0xUWXpMalZ4TFRjNUlDMHlOU0F0TVRRM0lDMDBMalYwTFRnMklEYzFkREkxTGpVZ01URXhMalYwTVRJeUxqVWdPREp4TnpJZ01qUWdNVE00SURoMk5USXhiQzAyTURBZ0xURTFOWFl0TmpBMmNUQWdMVFF5SUMwME5DQXRPVEIwTFRFd09TQXROamx4TFRjNUlDMHlOaUF0TVRRM0lDMDFMalYwTFRnMklEYzFMalYwTWpVdU5TQXhNVEV1TlhReE1qSXVOU0E0TWk0MWNUY3lJREkwSURFek9DQTNkall6T1hFd0lETTRJREUwTGpVZ05Ua2dkRFV6TGpVZ016UjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdNRE03SWlCa1BTSk5OVEF3SURFeE9URnhNVEF3SURBZ01Ua3hJQzB6T1hReE5UWXVOU0F0TVRBMExqVjBNVEEwTGpVZ0xURTFOaTQxZERNNUlDMHhPVEZzTFRFZ0xUSnNNU0F0TlhFd0lDMHhOREVnTFRjNElDMHlOakpzTWpjMUlDMHlOelJ4TWpNZ0xUSTJJREl5TGpVZ0xUUTBMalYwTFRJeUxqVWdMVFF5TGpWc0xUVTVJQzAxT0hFdE1qWWdMVEl3SUMwME5pNDFJQzB5TUhRdE16a3VOU0F5TUd3dE1qYzFJREkzTkhFdE1URTVJQzAzTnlBdE1qWXhJQzAzTjJ3dE5TQXhiQzB5SUMweGNTMHhNREFnTUNBdE1Ua3hJRE01ZEMweE5UWXVOU0F4TURRdU5YUXRNVEEwTGpVZ01UVTJMalYwTFRNNUlERTVNU0IwTXprZ01Ua3hkREV3TkM0MUlERTFOaTQxZERFMU5pNDFJREV3TkM0MWRERTVNU0F6T1hwTk5UQXdJREV3TWpKeExUZzRJREFnTFRFMk1pQXRORE4wTFRFeE55QXRNVEUzZEMwME15QXRNVFl5ZERReklDMHhOakowTVRFM0lDMHhNVGQwTVRZeUlDMDBNM1F4TmpJZ05ETjBNVEUzSURFeE4zUTBNeUF4TmpKMExUUXpJREUyTW5RdE1URTNJREV4TjNRdE1UWXlJRFF6ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTURBMU95SWdaRDBpVFRZME9TQTVORGx4TkRnZ05qZ2dNVEE1TGpVZ01UQTBkREV5TVM0MUlETTRMalYwTVRFNExqVWdMVEl3ZERFd01pNDFJQzAyTkhRM01TQXRNVEF3TGpWME1qY2dMVEV5TTNFd0lDMDFOeUF0TXpNdU5TQXRNVEUzTGpWMExUazBJQzB4TWpRdU5YUXRNVEkyTGpVZ0xURXlOeTQxZEMweE5UQWdMVEUxTWk0MWRDMHhORFlnTFRFM05IRXROaklnT0RVZ0xURTBOUzQxSURFM05IUXRNVFV3SURFMU1pNDFkQzB4TWpZdU5TQXhNamN1TlhRdE9UTXVOU0F4TWpRdU5YUXRNek11TlNBeE1UY3VOWEV3SURZMElESTRJREV5TTNRM015QXhNREF1TlhReE1EUWdOalIwTVRFNUlESXdJSFF4TWpBdU5TQXRNemd1TlhReE1EUXVOU0F0TVRBMGVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EQTJPeUlnWkQwaVRUUXdOeUE0TURCc01UTXhJRE0xTTNFM0lERTVJREUzTGpVZ01UbDBNVGN1TlNBdE1UbHNNVEk1SUMwek5UTm9OREl4Y1RJeElEQWdNalFnTFRndU5YUXRNVFFnTFRJd0xqVnNMVE0wTWlBdE1qUTViREV6TUNBdE5EQXhjVGNnTFRJd0lDMHdMalVnTFRJMUxqVjBMVEkwTGpVZ05pNDFiQzB6TkRNZ01qUTJiQzB6TkRJZ0xUSTBOM0V0TVRjZ0xURXlJQzB5TkM0MUlDMDJMalYwTFRBdU5TQXlOUzQxYkRFek1DQTBNREJzTFRNME55QXlOVEZ4TFRFM0lERXlJQzB4TkNBeU1DNDFkREl6SURndU5XZzBNamw2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TURjN0lpQmtQU0pOTkRBM0lEZ3dNR3d4TXpFZ016VXpjVGNnTVRrZ01UY3VOU0F4T1hReE55NDFJQzB4T1d3eE1qa2dMVE0xTTJnME1qRnhNakVnTUNBeU5DQXRPQzQxZEMweE5DQXRNakF1Tld3dE16UXlJQzB5TkRsc01UTXdJQzAwTURGeE55QXRNakFnTFRBdU5TQXRNalV1TlhRdE1qUXVOU0EyTGpWc0xUTTBNeUF5TkRac0xUTTBNaUF0TWpRM2NTMHhOeUF0TVRJZ0xUSTBMalVnTFRZdU5YUXRNQzQxSURJMUxqVnNNVE13SURRd01Hd3RNelEzSURJMU1YRXRNVGNnTVRJZ0xURTBJREl3TGpWME1qTWdPQzQxYURReU9YcE5ORGMzSURjd01HZ3RNalF3YkRFNU55QXRNVFF5YkMwM05DQXRNakkySUd3eE9UTWdNVE01YkRFNU5TQXRNVFF3YkMwM05DQXlNamxzTVRreUlERTBNR2d0TWpNMGJDMDNPQ0F5TVRGNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd01EZzdJaUJrUFNKTk5qQXdJREV5TURCeE1USTBJREFnTWpFeUlDMDRPSFE0T0NBdE1qRXlkaTB5TlRCeE1DQXRORFlnTFRNeElDMDVPSFF0TmprZ0xUVXlkaTAzTlhFd0lDMHhNQ0EySUMweU1TNDFkREUxSUMweE55NDFiRE0xT0NBdE1qTXdjVGtnTFRVZ01UVWdMVEUyTGpWME5pQXRNakV1TlhZdE9UTnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB4TVRVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk9UTnhNQ0F4TUNBMklESXhMalYwTVRVZ01UWXVOV3d6TlRnZ01qTXdjVGtnTmlBeE5TQXhOeTQxZERZZ01qRXVOWFkzTlhFdE16Z2dNQ0F0TmprZ05USWdkQzB6TVNBNU9IWXlOVEJ4TUNBeE1qUWdPRGdnTWpFeWRESXhNaUE0T0hvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBd09Uc2lJR1E5SWsweU5TQXhNVEF3YURFeE5UQnhNVEFnTUNBeE55NDFJQzAzTGpWME55NDFJQzB4Tnk0MWRpMHhNRFV3Y1RBZ0xURXdJQzAzTGpVZ0xURTNMalYwTFRFM0xqVWdMVGN1TldndE1URTFNSEV0TVRBZ01DQXRNVGN1TlNBM0xqVjBMVGN1TlNBeE55NDFkakV3TlRCeE1DQXhNQ0EzTGpVZ01UY3VOWFF4Tnk0MUlEY3VOWHBOTVRBd0lERXdNREIyTFRFd01HZ3hNREIyTVRBd2FDMHhNREI2VFRnM05TQXhNREF3YUMwMU5UQnhMVEV3SURBZ0xURTNMalVnTFRjdU5YUXROeTQxSUMweE55NDFkaTB6TlRCeE1DQXRNVEFnTnk0MUlDMHhOeTQxZERFM0xqVWdMVGN1TldnMU5UQWdjVEV3SURBZ01UY3VOU0EzTGpWME55NDFJREUzTGpWMk16VXdjVEFnTVRBZ0xUY3VOU0F4Tnk0MWRDMHhOeTQxSURjdU5YcE5NVEF3TUNBeE1EQXdkaTB4TURCb01UQXdkakV3TUdndE1UQXdlazB4TURBZ09EQXdkaTB4TURCb01UQXdkakV3TUdndE1UQXdlazB4TURBd0lEZ3dNSFl0TVRBd2FERXdNSFl4TURCb0xURXdNSHBOTVRBd0lEWXdNSFl0TVRBd2FERXdNSFl4TURCb0xURXdNSHBOTVRBd01DQTJNREIyTFRFd01HZ3hNREIyTVRBd2FDMHhNREI2VFRnM05TQTFNREJvTFRVMU1IRXRNVEFnTUNBdE1UY3VOU0F0Tnk0MWRDMDNMalVnTFRFM0xqVjJMVE0xTUhFd0lDMHhNQ0EzTGpVZ0xURTNMalVnZERFM0xqVWdMVGN1TldnMU5UQnhNVEFnTUNBeE55NDFJRGN1TlhRM0xqVWdNVGN1TlhZek5UQnhNQ0F4TUNBdE55NDFJREUzTGpWMExURTNMalVnTnk0MWVrMHhNREFnTkRBd2RpMHhNREJvTVRBd2RqRXdNR2d0TVRBd2VrMHhNREF3SURRd01IWXRNVEF3YURFd01IWXhNREJvTFRFd01IcE5NVEF3SURJd01IWXRNVEF3YURFd01IWXhNREJvTFRFd01IcE5NVEF3TUNBeU1EQjJMVEV3TUdneE1EQjJNVEF3YUMweE1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdNVEE3SWlCa1BTSk5OVEFnTVRFd01HZzBNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRRd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TkRBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWTBNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAyTlRBZ01URXdNR2cwTURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUUXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE5EQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFkwTURBZ2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk5UQWdOVEF3YURRd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXROREF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMDBNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpRd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUWTFNQ0ExTURCb05EQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAwTURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVFF3TUNCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqUXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdNVEU3SWlCa1BTSk5OVEFnTVRFd01HZ3lNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRJd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TWpBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXlNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAwTlRBZ01URXdNR2d5TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUSXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1qQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl5TURBZ2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk9EVXdJREV4TURCb01qQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTB5TURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVEl3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1qQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5OVEFnTnpBd2FESXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TWpBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB5TURBZ2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXlNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAwTlRBZ056QXdhREl3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1qQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweU1EQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakl3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRnMU1DQTNNREJvTWpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHlNREFnY1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMHlNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpJd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUVXdJRE13TUdneU1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEl3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RNakF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZeU1EQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMDBOVEFnTXpBd2FESXdNQ0J4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRJd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TWpBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXlNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazA0TlRBZ016QXdhREl3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1qQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweU1EQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakl3TUhFd0lESXhJREUwTGpVZ016VXVOU0IwTXpVdU5TQXhOQzQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTURFeU95SWdaRDBpVFRVd0lERXhNREJvTWpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHlNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUSXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTWpBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk5EVXdJREV4TURCb056QXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTB5TURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVGN3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1qQXdJSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZUVFV3SURjd01HZ3lNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRJd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TWpBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXlNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAwTlRBZ056QXdhRGN3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1qQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwM01EQWdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl5TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWswMU1DQXpNREJvTWpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHlNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUSXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTWpBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk5EVXdJRE13TUdnM01EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEl3TUNCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVGN3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1qQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQXhNenNpSUdROUlrMDBOalVnTkRjM2JEVTNNU0ExTnpGeE9DQTRJREU0SURoME1UY2dMVGhzTVRjM0lDMHhOemR4T0NBdE55QTRJQzB4TjNRdE9DQXRNVGhzTFRjNE15QXROemcwY1MwM0lDMDRJQzB4Tnk0MUlDMDRkQzB4Tnk0MUlEaHNMVE00TkNBek9EUnhMVGdnT0NBdE9DQXhPSFE0SURFM2JERTNOeUF4TnpkeE55QTRJREUzSURoME1UZ2dMVGhzTVRjeElDMHhOekZ4TnlBdE55QXhPQ0F0TjNReE9DQTNlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREUwT3lJZ1pEMGlUVGt3TkNBeE1EZ3piREUzT0NBdE1UYzVjVGdnTFRnZ09DQXRNVGd1TlhRdE9DQXRNVGN1Tld3dE1qWTNJQzB5Tmpoc01qWTNJQzB5TmpoeE9DQXROeUE0SUMweE55NDFkQzA0SUMweE9DNDFiQzB4TnpnZ0xURTNPSEV0T0NBdE9DQXRNVGd1TlNBdE9IUXRNVGN1TlNBNGJDMHlOamdnTWpZM2JDMHlOamdnTFRJMk4zRXROeUF0T0NBdE1UY3VOU0F0T0hRdE1UZ3VOU0E0YkMweE56Z2dNVGM0Y1MwNElEZ2dMVGdnTVRndU5YUTRJREUzTGpWc01qWTNJREkyT0d3dE1qWTNJREkyT0hFdE9DQTNJQzA0SURFM0xqVjBPQ0F4T0M0MWJERTNPQ0F4TnpoeE9DQTRJREU0TGpVZ09IUXhOeTQxSUMwNElHd3lOamdnTFRJMk4yd3lOamdnTWpZNGNUY2dOeUF4Tnk0MUlEZDBNVGd1TlNBdE4zb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQXhOVHNpSUdROUlrMDFNRGNnTVRFM04zRTVPQ0F3SURFNE55NDFJQzB6T0M0MWRERTFOQzQxSUMweE1ETXVOWFF4TURNdU5TQXRNVFUwTGpWME16Z3VOU0F0TVRnM0xqVnhNQ0F0TVRReElDMDNPQ0F0TWpZeWJETXdNQ0F0TWprNWNUZ2dMVGdnT0NBdE1UZ3VOWFF0T0NBdE1UZ3VOV3d0TVRBNUlDMHhNRGh4TFRjZ0xUZ2dMVEUzTGpVZ0xUaDBMVEU0TGpVZ09Hd3RNekF3SURJNU9YRXRNVEU1SUMwM055QXRNall4SUMwM04zRXRPVGdnTUNBdE1UZzRJRE00TGpWMExURTFOQzQxSURFd00zUXRNVEF6SURFMU5DNDFkQzB6T0M0MUlERTRPSFF6T0M0MUlERTROeTQxZERFd015QXhOVFF1TlNCME1UVTBMalVnTVRBekxqVjBNVGc0SURNNExqVjZUVFV3Tmk0MUlERXdNak54TFRnNUxqVWdNQ0F0TVRZMUxqVWdMVFEwZEMweE1qQWdMVEV5TUM0MWRDMDBOQ0F0TVRZMmREUTBJQzB4TmpVdU5YUXhNakFnTFRFeU1IUXhOalV1TlNBdE5EUjBNVFkySURRMGRERXlNQzQxSURFeU1IUTBOQ0F4TmpVdU5YUXRORFFnTVRZMmRDMHhNakF1TlNBeE1qQXVOWFF0TVRZMklEUTBlazAwTWpVZ09UQXdhREUxTUhFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRjMWFEYzFjVEV3SURBZ01UY3VOU0F0Tnk0MWREY3VOU0F0TVRjdU5YWXRNVFV3Y1RBZ0xURXdJQzAzTGpVZ0xURTNMalVnZEMweE55NDFJQzAzTGpWb0xUYzFkaTAzTlhFd0lDMHhNQ0F0Tnk0MUlDMHhOeTQxZEMweE55NDFJQzAzTGpWb0xURTFNSEV0TVRBZ01DQXRNVGN1TlNBM0xqVjBMVGN1TlNBeE55NDFkamMxYUMwM05YRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqRTFNSEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWFEYzFkamMxY1RBZ01UQWdOeTQxSURFM0xqVjBNVGN1TlNBM0xqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdNVFk3SWlCa1BTSk5OVEEzSURFeE56ZHhPVGdnTUNBeE9EY3VOU0F0TXpndU5YUXhOVFF1TlNBdE1UQXpMalYwTVRBekxqVWdMVEUxTkM0MWRETTRMalVnTFRFNE55NDFjVEFnTFRFME1TQXROemdnTFRJMk1td3pNREFnTFRJNU9YRTRJQzA0SURnZ0xURTRMalYwTFRnZ0xURTRMalZzTFRFd09TQXRNVEE0Y1MwM0lDMDRJQzB4Tnk0MUlDMDRkQzB4T0M0MUlEaHNMVE13TUNBeU9UbHhMVEV4T1NBdE56Y2dMVEkyTVNBdE56ZHhMVGs0SURBZ0xURTRPQ0F6T0M0MWRDMHhOVFF1TlNBeE1ETjBMVEV3TXlBeE5UUXVOWFF0TXpndU5TQXhPRGgwTXpndU5TQXhPRGN1TlhReE1ETWdNVFUwTGpVZ2RERTFOQzQxSURFd015NDFkREU0T0NBek9DNDFlazAxTURZdU5TQXhNREl6Y1MwNE9TNDFJREFnTFRFMk5TNDFJQzAwTkhRdE1USXdJQzB4TWpBdU5YUXRORFFnTFRFMk5uUTBOQ0F0TVRZMUxqVjBNVEl3SUMweE1qQjBNVFkxTGpVZ0xUUTBkREUyTmlBME5IUXhNakF1TlNBeE1qQjBORFFnTVRZMUxqVjBMVFEwSURFMk5uUXRNVEl3TGpVZ01USXdMalYwTFRFMk5pQTBOSHBOTXpJMUlEZ3dNR2d6TlRCeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkweE5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB6TlRCeExURXdJREFnTFRFM0xqVWdOeTQxSUhRdE55NDFJREUzTGpWMk1UVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd01UYzdJaUJrUFNKTk5UVXdJREV5TURCb01UQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAwTURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVEV3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk5EQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5PREF3SURrM05YWXhOalp4TVRZM0lDMDJNaUF5TnpJZ0xUSXdPUzQxZERFd05TQXRNek14TGpWeE1DQXRNVEUzSUMwME5TNDFJQzB5TWpSMExURXlNeUF0TVRnMExqVjBMVEU0TkM0MUlDMHhNak4wTFRJeU5DQXRORFV1TlhRdE1qSTBJRFExTGpVZ2RDMHhPRFF1TlNBeE1qTjBMVEV5TXlBeE9EUXVOWFF0TkRVdU5TQXlNalJ4TUNBeE9EUWdNVEExSURNek1TNDFkREkzTWlBeU1Ea3VOWFl0TVRZMmNTMHhNRE1nTFRVMUlDMHhOalVnTFRFMU5YUXROaklnTFRJeU1IRXdJQzB4TVRZZ05UY2dMVEl4TkM0MWRERTFOUzQxSUMweE5UVXVOWFF5TVRRdU5TQXROVGQwTWpFMExqVWdOVGQwTVRVMUxqVWdNVFUxTGpWME5UY2dNakUwTGpWeE1DQXhNakFnTFRZeUlESXlNSFF0TVRZMUlERTFOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEF4T0RzaUlHUTlJazB4TURJMUlERXlNREJvTVRVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE1URTFNSEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRFMU1IRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqRXhOVEJ4TUNBeE1DQTNMalVnTVRjdU5YUXhOeTQxSURjdU5YcE5OekkxSURnd01HZ3hOVEJ4TVRBZ01DQXhOeTQxSUMwM0xqVjBOeTQxSUMweE55NDFkaTAzTlRCeE1DQXRNVEFnTFRjdU5TQXRNVGN1TlhRdE1UY3VOU0F0Tnk0MWFDMHhOVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFkQzAzTGpVZ01UY3VOWFkzTlRBZ2NUQWdNVEFnTnk0MUlERTNMalYwTVRjdU5TQTNMalY2VFRReU5TQTFNREJvTVRVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE5EVXdjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TVRVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk5EVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNlRURXlOU0F6TURCb01UVXdjVEV3SURBZ01UY3VOU0F0Tnk0MWREY3VOU0F0TVRjdU5YWXRNalV3Y1RBZ0xURXdJQzAzTGpVZ0xURTNMalYwTFRFM0xqVWdMVGN1TldndE1UVXdjUzB4TUNBd0lDMHhOeTQxSURjdU5YUXROeTQxSURFM0xqVWdkakkxTUhFd0lERXdJRGN1TlNBeE55NDFkREUzTGpVZ055NDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREU1T3lJZ1pEMGlUVFl3TUNBeE1UYzBjVE16SURBZ056UWdMVFZzTXpnZ0xURTFNbXcxSUMweGNUUTVJQzB4TkNBNU5DQXRNemxzTlNBdE1td3hNelFnT0RCeE5qRWdMVFE0SURFd05DQXRNVEExYkMwNE1DQXRNVE0wYkRNZ0xUVnhNalVnTFRRMElETTVJQzA1TTJ3eElDMDJiREUxTWlBdE16aHhOU0F0TkRNZ05TQXROek54TUNBdE16UWdMVFVnTFRjMGJDMHhOVElnTFRNNGJDMHhJQzAyY1MweE5TQXRORGtnTFRNNUlDMDVNMnd0TXlBdE5XdzRNQ0F0TVRNMGNTMDBPQ0F0TmpFZ0xURXdOQ0F0TVRBMWJDMHhNelFnT0RGc0xUVWdMVE54TFRRMElDMHlOU0F0T1RRZ0xUTTViQzAxSUMweWJDMHpPQ0F0TVRVeElIRXRORE1nTFRVZ0xUYzBJQzAxY1Mwek15QXdJQzAzTkNBMWJDMHpPQ0F4TlRGc0xUVWdNbkV0TkRrZ01UUWdMVGswSURNNWJDMDFJRE5zTFRFek5DQXRPREZ4TFRZd0lEUTRJQzB4TURRZ01UQTFiRGd3SURFek5Hd3RNeUExY1MweU5TQTBOU0F0TXpnZ09UTnNMVElnTm13dE1UVXhJRE00Y1MwMklEUXlJQzAySURjMGNUQWdNek1nTmlBM00yd3hOVEVnTXpoc01pQTJjVEV6SURRNElETTRJRGt6YkRNZ05Xd3RPREFnTVRNMGNUUTNJRFl4SURFd05TQXhNRFZzTVRNeklDMDRNR3cxSURKeE5EVWdNalVnT1RRZ016bHNOU0F4YkRNNElERTFNbkUwTXlBMUlEYzBJRFY2VFRZd01DQTRNVFVnY1MwNE9TQXdJQzB4TlRJZ0xUWXpkQzAyTXlBdE1UVXhMalYwTmpNZ0xURTFNUzQxZERFMU1pQXROak4wTVRVeUlEWXpkRFl6SURFMU1TNDFkQzAyTXlBeE5URXVOWFF0TVRVeUlEWXplaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREl3T3lJZ1pEMGlUVFV3TUNBeE16QXdhRE13TUhFME1TQXdJRGN3TGpVZ0xUSTVMalYwTWprdU5TQXROekF1TlhZdE1UQXdhREkzTlhFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRjMWFDMHhNVEF3ZGpjMWNUQWdNVEFnTnk0MUlERTNMalYwTVRjdU5TQTNMalZvTWpjMWRqRXdNSEV3SURReElESTVMalVnTnpBdU5YUTNNQzQxSURJNUxqVjZUVFV3TUNBeE1qQXdkaTB4TURCb016QXdkakV3TUdndE16QXdlazB4TVRBd0lEa3dNSFl0T0RBd2NUQWdMVFF4SUMweU9TNDFJQzAzTUM0MWRDMDNNQzQxSUMweU9TNDFhQzAzTURCeExUUXhJREFnTFRjd0xqVWdNamt1TlhRdE1qa3VOU0EzTUM0MUlIWTRNREJvT1RBd2VrMHpNREFnT0RBd2RpMDNNREJvTVRBd2RqY3dNR2d0TVRBd2VrMDFNREFnT0RBd2RpMDNNREJvTVRBd2RqY3dNR2d0TVRBd2VrMDNNREFnT0RBd2RpMDNNREJvTVRBd2RqY3dNR2d0TVRBd2VrMDVNREFnT0RBd2RpMDNNREJvTVRBd2RqY3dNR2d0TVRBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1ESXhPeUlnWkQwaVRURTRJRFl4T0d3Mk1qQWdOakE0Y1RnZ055QXhPQzQxSURkME1UY3VOU0F0TjJ3Mk1EZ2dMVFl3T0hFNElDMDRJRFV1TlNBdE1UTjBMVEV5TGpVZ0xUVm9MVEUzTlhZdE5UYzFjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TWpVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk16YzFhQzB6TURCMkxUTTNOWEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRJMU1IRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqVTNOV2d0TVRjMWNTMHhNQ0F3SUMweE1pNDFJRFYwTlM0MUlERXplaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREl5T3lJZ1pEMGlUVFl3TUNBeE1qQXdkaTAwTURCeE1DQXROREVnTWprdU5TQXROekF1TlhRM01DNDFJQzB5T1M0MWFETXdNSFl0TmpVd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzA0TURCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqRXhNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFhRFExTUhwTk1UQXdNQ0E0TURCb0xUSTFNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTWpVd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1ESXpPeUlnWkQwaVRUWXdNQ0F4TVRjM2NURXhOeUF3SURJeU5DQXRORFV1TlhReE9EUXVOU0F0TVRJemRERXlNeUF0TVRnMExqVjBORFV1TlNBdE1qSTBkQzAwTlM0MUlDMHlNalIwTFRFeU15QXRNVGcwTGpWMExURTROQzQxSUMweE1qTjBMVEl5TkNBdE5EVXVOWFF0TWpJMElEUTFMalYwTFRFNE5DNDFJREV5TTNRdE1USXpJREU0TkM0MWRDMDBOUzQxSURJeU5IUTBOUzQxSURJeU5IUXhNak1nTVRnMExqVjBNVGcwTGpVZ01USXpkREl5TkNBME5TNDFlazAyTURBZ01UQXlOM0V0TVRFMklEQWdMVEl4TkM0MUlDMDFOM1F0TVRVMUxqVWdMVEUxTlM0MWRDMDFOeUF0TWpFMExqVjBOVGNnTFRJeE5DNDFJSFF4TlRVdU5TQXRNVFUxTGpWME1qRTBMalVnTFRVM2RESXhOQzQxSURVM2RERTFOUzQxSURFMU5TNDFkRFUzSURJeE5DNDFkQzAxTnlBeU1UUXVOWFF0TVRVMUxqVWdNVFUxTGpWMExUSXhOQzQxSURVM2VrMDFNalVnT1RBd2FEVXdjVEV3SURBZ01UY3VOU0F0Tnk0MWREY3VOU0F0TVRjdU5YWXRNamMxYURFM05YRXhNQ0F3SURFM0xqVWdMVGN1TlhRM0xqVWdMVEUzTGpWMkxUVXdjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TWpVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk16VXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd01qUTdJaUJrUFNKTk1UTXdNQ0F3YUMwMU16aHNMVFF4SURRd01HZ3RNalF5YkMwME1TQXROREF3YUMwMU16aHNORE14SURFeU1EQm9NakE1YkMweU1TQXRNekF3YURFMk1td3RNakFnTXpBd2FESXdPSHBOTlRFMUlEZ3dNR3d0TWpjZ0xUTXdNR2d5TWpSc0xUSTNJRE13TUdndE1UY3dlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREkxT3lJZ1pEMGlUVFUxTUNBeE1qQXdhREl3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE5EVXdhREU1TVhFeU1DQXdJREkxTGpVZ0xURXhMalYwTFRjdU5TQXRNamN1Tld3dE16STNJQzAwTURCeExURXpJQzB4TmlBdE16SWdMVEUyZEMwek1pQXhObXd0TXpJM0lEUXdNSEV0TVRNZ01UWWdMVGN1TlNBeU55NDFkREkxTGpVZ01URXVOV2d4T1RGMk5EVXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5NVEV5TlNBME1EQm9OVEJ4TVRBZ01DQXhOeTQxSUMwM0xqVjBOeTQxSUMweE55NDFkaTB6TlRCeE1DQXRNVEFnTFRjdU5TQXRNVGN1TlhRdE1UY3VOU0F0Tnk0MUlHZ3RNVEExTUhFdE1UQWdNQ0F0TVRjdU5TQTNMalYwTFRjdU5TQXhOeTQxZGpNMU1IRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxYURVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE1UYzFhRGt3TUhZeE56VnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBeU5qc2lJR1E5SWswMk1EQWdNVEUzTjNFeE1UY2dNQ0F5TWpRZ0xUUTFMalYwTVRnMExqVWdMVEV5TTNReE1qTWdMVEU0TkM0MWREUTFMalVnTFRJeU5IUXRORFV1TlNBdE1qSTBkQzB4TWpNZ0xURTROQzQxZEMweE9EUXVOU0F0TVRJemRDMHlNalFnTFRRMUxqVjBMVEl5TkNBME5TNDFkQzB4T0RRdU5TQXhNak4wTFRFeU15QXhPRFF1TlhRdE5EVXVOU0F5TWpSME5EVXVOU0F5TWpSME1USXpJREU0TkM0MWRERTROQzQxSURFeU0zUXlNalFnTkRVdU5YcE5OakF3SURFd01qZHhMVEV4TmlBd0lDMHlNVFF1TlNBdE5UZDBMVEUxTlM0MUlDMHhOVFV1TlhRdE5UY2dMVEl4TkM0MWREVTNJQzB5TVRRdU5TQjBNVFUxTGpVZ0xURTFOUzQxZERJeE5DNDFJQzAxTjNReU1UUXVOU0ExTjNReE5UVXVOU0F4TlRVdU5YUTFOeUF5TVRRdU5YUXROVGNnTWpFMExqVjBMVEUxTlM0MUlERTFOUzQxZEMweU1UUXVOU0ExTjNwTk5USTFJRGt3TUdneE5UQnhNVEFnTUNBeE55NDFJQzAzTGpWME55NDFJQzB4Tnk0MWRpMHlOelZvTVRNM2NUSXhJREFnTWpZZ0xURXhMalYwTFRnZ0xUSTNMalZzTFRJeU15QXRNamMxY1MweE15QXRNVFlnTFRNeUlDMHhOblF0TXpJZ01UWnNMVEl5TXlBeU56VnhMVEV6SURFMklDMDRJREkzTGpWME1qWWdNVEV1TldneE16ZDJNamMxY1RBZ01UQWdOeTQxSURFM0xqVjBNVGN1TlNBM0xqVjZJQ0lnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREkzT3lJZ1pEMGlUVFl3TUNBeE1UYzNjVEV4TnlBd0lESXlOQ0F0TkRVdU5YUXhPRFF1TlNBdE1USXpkREV5TXlBdE1UZzBMalYwTkRVdU5TQXRNakkwZEMwME5TNDFJQzB5TWpSMExURXlNeUF0TVRnMExqVjBMVEU0TkM0MUlDMHhNak4wTFRJeU5DQXRORFV1TlhRdE1qSTBJRFExTGpWMExURTROQzQxSURFeU0zUXRNVEl6SURFNE5DNDFkQzAwTlM0MUlESXlOSFEwTlM0MUlESXlOSFF4TWpNZ01UZzBMalYwTVRnMExqVWdNVEl6ZERJeU5DQTBOUzQxZWswMk1EQWdNVEF5TjNFdE1URTJJREFnTFRJeE5DNDFJQzAxTjNRdE1UVTFMalVnTFRFMU5TNDFkQzAxTnlBdE1qRTBMalYwTlRjZ0xUSXhOQzQxSUhReE5UVXVOU0F0TVRVMUxqVjBNakUwTGpVZ0xUVTNkREl4TkM0MUlEVTNkREUxTlM0MUlERTFOUzQxZERVM0lESXhOQzQxZEMwMU55QXlNVFF1TlhRdE1UVTFMalVnTVRVMUxqVjBMVEl4TkM0MUlEVTNlazAyTXpJZ09URTBiREl5TXlBdE1qYzFjVEV6SUMweE5pQTRJQzB5Tnk0MWRDMHlOaUF0TVRFdU5XZ3RNVE0zZGkweU56VnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB4TlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZeU56Vm9MVEV6TjNFdE1qRWdNQ0F0TWpZZ01URXVOWFE0SURJM0xqVnNNakl6SURJM05YRXhNeUF4TmlBek1pQXhOaUIwTXpJZ0xURTJlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNREk0T3lJZ1pEMGlUVEl5TlNBeE1qQXdhRGMxTUhFeE1DQXdJREU1TGpVZ0xUZDBNVEl1TlNBdE1UZHNNVGcySUMwMk5USnhOeUF0TWpRZ055QXRORGwyTFRReU5YRXdJQzB4TWlBdE5DQXRNamQwTFRrZ0xURTNjUzB4TWlBdE5pQXRNemNnTFRab0xURXhNREJ4TFRFeUlEQWdMVEkzSURSMExURTNJRGh4TFRZZ01UTWdMVFlnTXpoc01TQTBNalZ4TUNBeU5TQTNJRFE1YkRFNE5TQTJOVEp4TXlBeE1DQXhNaTQxSURFM2RERTVMalVnTjNwTk9EYzRJREV3TURCb0xUVTFObkV0TVRBZ01DQXRNVGtnTFRkMExURXhJQzB4T0d3dE9EY2dMVFExTUhFdE1pQXRNVEVnTkNBdE1UaDBNVFlnTFRkb01UVXdJSEV4TUNBd0lERTVMalVnTFRkME1URXVOU0F0TVRkc016Z2dMVEUxTW5FeUlDMHhNQ0F4TVM0MUlDMHhOM1F4T1M0MUlDMDNhREkxTUhFeE1DQXdJREU1TGpVZ04zUXhNUzQxSURFM2JETTRJREUxTW5FeUlERXdJREV4TGpVZ01UZDBNVGt1TlNBM2FERTFNSEV4TUNBd0lERTJJRGQwTkNBeE9Hd3RPRGNnTkRVd2NTMHlJREV4SUMweE1TQXhPSFF0TVRrZ04zb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQXlPVHNpSUdROUlrMDJNREFnTVRFM04zRXhNVGNnTUNBeU1qUWdMVFExTGpWME1UZzBMalVnTFRFeU0zUXhNak1nTFRFNE5DNDFkRFExTGpVZ0xUSXlOSFF0TkRVdU5TQXRNakkwZEMweE1qTWdMVEU0TkM0MWRDMHhPRFF1TlNBdE1USXpkQzB5TWpRZ0xUUTFMalYwTFRJeU5DQTBOUzQxZEMweE9EUXVOU0F4TWpOMExURXlNeUF4T0RRdU5YUXRORFV1TlNBeU1qUjBORFV1TlNBeU1qUjBNVEl6SURFNE5DNDFkREU0TkM0MUlERXlNM1F5TWpRZ05EVXVOWHBOTmpBd0lERXdNamR4TFRFeE5pQXdJQzB5TVRRdU5TQXROVGQwTFRFMU5TNDFJQzB4TlRVdU5YUXROVGNnTFRJeE5DNDFkRFUzSUMweU1UUXVOU0IwTVRVMUxqVWdMVEUxTlM0MWRESXhOQzQxSUMwMU4zUXlNVFF1TlNBMU4zUXhOVFV1TlNBeE5UVXVOWFExTnlBeU1UUXVOWFF0TlRjZ01qRTBMalYwTFRFMU5TNDFJREUxTlM0MWRDMHlNVFF1TlNBMU4zcE5OVFF3SURneU1Hd3lOVE1nTFRFNU1IRXhOeUF0TVRJZ01UY2dMVE13ZEMweE55QXRNekJzTFRJMU15QXRNVGt3Y1MweE5pQXRNVElnTFRJNElDMDJMalYwTFRFeUlESTJMalYyTkRBd2NUQWdNakVnTVRJZ01qWXVOWFF5T0NBdE5pNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRE13T3lJZ1pEMGlUVGswTnlBeE1EWXdiREV6TlNBeE16VnhOeUEzSURFeUxqVWdOWFExTGpVZ0xURXpkaTB6TmpKeE1DQXRNVEFnTFRjdU5TQXRNVGN1TlhRdE1UY3VOU0F0Tnk0MWFDMHpOakp4TFRFeElEQWdMVEV6SURVdU5YUTFJREV5TGpWc01UTXpJREV6TTNFdE1UQTVJRGMySUMweU16Z2dOelp4TFRFeE5pQXdJQzB5TVRRdU5TQXROVGQwTFRFMU5TNDFJQzB4TlRVdU5YUXROVGNnTFRJeE5DNDFkRFUzSUMweU1UUXVOWFF4TlRVdU5TQXRNVFUxTGpWME1qRTBMalVnTFRVM2RESXhOQzQxSURVM2RERTFOUzQxSURFMU5TNDFkRFUzSURJeE5DNDFhREUxTUhFd0lDMHhNVGNnTFRRMUxqVWdMVEl5TkNCMExURXlNeUF0TVRnMExqVjBMVEU0TkM0MUlDMHhNak4wTFRJeU5DQXRORFV1TlhRdE1qSTBJRFExTGpWMExURTROQzQxSURFeU0zUXRNVEl6SURFNE5DNDFkQzAwTlM0MUlESXlOSFEwTlM0MUlESXlOSFF4TWpNZ01UZzBMalYwTVRnMExqVWdNVEl6ZERJeU5DQTBOUzQxY1RFNU1pQXdJRE0wTnlBdE1URTNlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRE14T3lJZ1pEMGlUVGswTnlBeE1EWXdiREV6TlNBeE16VnhOeUEzSURFeUxqVWdOWFExTGpVZ0xURXpkaTB6TmpGeE1DQXRNVEVnTFRjdU5TQXRNVGd1TlhRdE1UZ3VOU0F0Tnk0MWFDMHpOakZ4TFRFeElEQWdMVEV6SURVdU5YUTFJREV5TGpWc01UTTBJREV6TkhFdE1URXdJRGMxSUMweU16a2dOelZ4TFRFeE5pQXdJQzB5TVRRdU5TQXROVGQwTFRFMU5TNDFJQzB4TlRVdU5YUXROVGNnTFRJeE5DNDFhQzB4TlRCeE1DQXhNVGNnTkRVdU5TQXlNalIwTVRJeklERTROQzQxZERFNE5DNDFJREV5TTNReU1qUWdORFV1TlhFeE9USWdNQ0F6TkRjZ0xURXhOM3BOTVRBeU55QTJNREJvTVRVd0lIRXdJQzB4TVRjZ0xUUTFMalVnTFRJeU5IUXRNVEl6SUMweE9EUXVOWFF0TVRnMExqVWdMVEV5TTNRdE1qSTBJQzAwTlM0MWNTMHhPVElnTUNBdE16UTRJREV4T0d3dE1UTTBJQzB4TXpSeExUY2dMVGdnTFRFeUxqVWdMVFV1TlhRdE5TNDFJREV5TGpWMk16WXdjVEFnTVRFZ055NDFJREU0TGpWME1UZ3VOU0EzTGpWb016WXdjVEV3SURBZ01USXVOU0F0TlM0MWRDMDFMalVnTFRFeUxqVnNMVEV6TXlBdE1UTXpjVEV4TUNBdE56WWdNalF3SUMwM05uRXhNVFlnTUNBeU1UUXVOU0ExTjNReE5UVXVOU0F4TlRVdU5YUTFOeUF5TVRRdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQXpNanNpSUdROUlrMHhNalVnTVRJd01HZ3hNRFV3Y1RFd0lEQWdNVGN1TlNBdE55NDFkRGN1TlNBdE1UY3VOWFl0TVRFMU1IRXdJQzB4TUNBdE55NDFJQzB4Tnk0MWRDMHhOeTQxSUMwM0xqVm9MVEV3TlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZeE1UVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNlRURXdOelVnTVRBd01HZ3RPRFV3Y1MweE1DQXdJQzB4Tnk0MUlDMDNMalYwTFRjdU5TQXRNVGN1TlhZdE9EVXdjVEFnTFRFd0lEY3VOU0F0TVRjdU5YUXhOeTQxSUMwM0xqVm9PRFV3Y1RFd0lEQWdNVGN1TlNBM0xqVjBOeTQxSURFM0xqVjJPRFV3SUhFd0lERXdJQzAzTGpVZ01UY3VOWFF0TVRjdU5TQTNMalY2VFRNeU5TQTVNREJvTlRCeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkwMU1IRXdJQzB4TUNBdE55NDFJQzB4Tnk0MWRDMHhOeTQxSUMwM0xqVm9MVFV3Y1MweE1DQXdJQzB4Tnk0MUlEY3VOWFF0Tnk0MUlERTNMalYyTlRCeE1DQXhNQ0EzTGpVZ01UY3VOWFF4Tnk0MUlEY3VOWHBOTlRJMUlEa3dNR2cwTlRCeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkwMU1IRXdJQzB4TUNBdE55NDFJQzB4Tnk0MWRDMHhOeTQxSUMwM0xqVm9MVFExTUhFdE1UQWdNQ0F0TVRjdU5TQTNMalYwTFRjdU5TQXhOeTQxZGpVd0lIRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxZWswek1qVWdOekF3YURVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzAxTUhFdE1UQWdNQ0F0TVRjdU5TQTNMalYwTFRjdU5TQXhOeTQxZGpVd2NUQWdNVEFnTnk0MUlERTNMalYwTVRjdU5TQTNMalY2VFRVeU5TQTNNREJvTkRVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzAwTlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZMU1DQnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TlhwTk16STFJRFV3TUdnMU1IRXhNQ0F3SURFM0xqVWdMVGN1TlhRM0xqVWdMVEUzTGpWMkxUVXdjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZMU1IRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxZWswMU1qVWdOVEF3YURRMU1IRXhNQ0F3SURFM0xqVWdMVGN1TlhRM0xqVWdMVEUzTGpWMkxUVXdjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TkRVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk5UQWdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNlRUTXlOU0F6TURCb05UQnhNVEFnTUNBeE55NDFJQzAzTGpWME55NDFJQzB4Tnk0MWRpMDFNSEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk5UQnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TlhwTk5USTFJRE13TUdnME5UQnhNVEFnTUNBeE55NDFJQzAzTGpWME55NDFJQzB4Tnk0MWRpMDFNSEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRRMU1IRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqVXdJSEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1ETXpPeUlnWkQwaVRUa3dNQ0E0TURCMk1qQXdjVEFnT0RNZ0xUVTRMalVnTVRReExqVjBMVEUwTVM0MUlEVTRMalZvTFRNd01IRXRPRElnTUNBdE1UUXhJQzAxT1hRdE5Ua2dMVEUwTVhZdE1qQXdhQzB4TURCeExUUXhJREFnTFRjd0xqVWdMVEk1TGpWMExUSTVMalVnTFRjd0xqVjJMVFl3TUhFd0lDMDBNU0F5T1M0MUlDMDNNQzQxZERjd0xqVWdMVEk1TGpWb09UQXdjVFF4SURBZ056QXVOU0F5T1M0MWRESTVMalVnTnpBdU5YWTJNREJ4TUNBME1TQXRNamt1TlNBM01DNDFkQzAzTUM0MUlESTVMalZvTFRFd01IcE5OREF3SURnd01IWXhOVEJ4TUNBeU1TQXhOU0F6TlM0MWRETTFJREUwTGpWb01qQXdJSEV5TUNBd0lETTFJQzB4TkM0MWRERTFJQzB6TlM0MWRpMHhOVEJvTFRNd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQXpORHNpSUdROUlrMHhNalVnTVRFd01HZzFNSEV4TUNBd0lERTNMalVnTFRjdU5YUTNMalVnTFRFM0xqVjJMVEV3TnpWb0xURXdNSFl4TURjMWNUQWdNVEFnTnk0MUlERTNMalYwTVRjdU5TQTNMalY2VFRFd056VWdNVEExTW5FMElEQWdPU0F0TW5FeE5pQXROaUF4TmlBdE1qTjJMVFF5TVhFd0lDMDJJQzB6SUMweE1uRXRNek1nTFRVNUlDMDJOaTQxSUMwNU9YUXROalV1TlNBdE5UaDBMVFUyTGpVZ0xUSTBMalYwTFRVeUxqVWdMVFl1TlhFdE1qWWdNQ0F0TlRjdU5TQTJMalYwTFRVeUxqVWdNVE11TlhRdE5qQWdNakZ4TFRReElERTFJQzAyTXlBeU1pNDFkQzAxTnk0MUlERTFkQzAyTlM0MUlEY3VOU0J4TFRnMUlEQWdMVEUyTUNBdE5UZHhMVGNnTFRVZ0xURTFJQzAxY1MwMklEQWdMVEV4SUROeExURTBJRGNnTFRFMElESXlkalF6T0hFeU1pQTFOU0E0TWlBNU9DNDFkREV4T1NBME5pNDFjVEl6SURJZ05ETWdNQzQxZERReklDMDNkRE15TGpVZ0xUZ3VOWFF6T0NBdE1UTjBNekl1TlNBdE1URnhOREVnTFRFMElEWXpMalVnTFRJeGREVTNJQzB4TkhRMk15NDFJQzAzY1RFd015QXdJREU0TXlBNE4zRTNJRGdnTVRnZ09Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQXpOVHNpSUdROUlrMDJNREFnTVRFM05YRXhNVFlnTUNBeU1qY2dMVFE1TGpWME1Ua3lMalVnTFRFek1YUXhNekVnTFRFNU1pNDFkRFE1TGpVZ0xUSXlOM1l0TXpBd2NUQWdMVEV3SUMwM0xqVWdMVEUzTGpWMExURTNMalVnTFRjdU5XZ3ROVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFkQzAzTGpVZ01UY3VOWFl6TURCeE1DQXhNamNnTFRjd0xqVWdNak14TGpWMExURTROQzQxSURFMk1TNDFkQzB5TkRVZ05UZDBMVEkwTlNBdE5UZDBMVEU0TkM0MUlDMHhOakV1TlhRdE56QXVOU0F0TWpNeExqVjJMVE13TUhFd0lDMHhNQ0F0Tnk0MUlDMHhOeTQxZEMweE55NDFJQzAzTGpWb0xUVXdJSEV0TVRBZ01DQXRNVGN1TlNBM0xqVjBMVGN1TlNBeE55NDFkak13TUhFd0lERXhOaUEwT1M0MUlESXlOM1F4TXpFZ01Ua3lMalYwTVRreUxqVWdNVE14ZERJeU55QTBPUzQxZWsweU1qQWdOVEF3YURFMk1IRTRJREFnTVRRZ0xUWjBOaUF0TVRSMkxUUTJNSEV3SUMwNElDMDJJQzB4TkhRdE1UUWdMVFpvTFRFMk1IRXRPQ0F3SUMweE5DQTJkQzAySURFMGRqUTJNSEV3SURnZ05pQXhOSFF4TkNBMmVrMDRNakFnTlRBd2FERTJNSEU0SURBZ01UUWdMVFowTmlBdE1UUjJMVFEyTUhFd0lDMDRJQzAySUMweE5IUXRNVFFnTFRab0xURTJNSEV0T0NBd0lDMHhOQ0EyZEMwMklERTBkalEyTUNCeE1DQTRJRFlnTVRSME1UUWdObm9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEF6TmpzaUlHUTlJazB6TWpFZ09ERTBiREkxT0NBeE56SnhPU0EySURFMUlESXVOWFEySUMweE15NDFkaTAzTlRCeE1DQXRNVEFnTFRZZ0xURXpMalYwTFRFMUlESXVOV3d0TWpVNElERTNNbkV0TWpFZ01UUWdMVFEySURFMGFDMHlOVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFkQzAzTGpVZ01UY3VOWFl6TlRCeE1DQXhNQ0EzTGpVZ01UY3VOWFF4Tnk0MUlEY3VOV2d5TlRCeE1qVWdNQ0EwTmlBeE5IcE5PVEF3SURZMk9Hd3hNakFnTVRJd2NUY2dOeUF4TnlBM2RERTNJQzAzYkRNMElDMHpOSEUzSUMwM0lEY2dMVEUzZEMwM0lDMHhOMnd0TVRJd0lDMHhNakJzTVRJd0lDMHhNakJ4TnlBdE55QTNJQzB4TnlCMExUY2dMVEUzYkMwek5DQXRNelJ4TFRjZ0xUY2dMVEUzSUMwM2RDMHhOeUEzYkMweE1qQWdNVEU1YkMweE1qQWdMVEV4T1hFdE55QXROeUF0TVRjZ0xUZDBMVEUzSURkc0xUTTBJRE0wY1MwM0lEY2dMVGNnTVRkME55QXhOMnd4TVRrZ01USXdiQzB4TVRrZ01USXdjUzAzSURjZ0xUY2dNVGQwTnlBeE4yd3pOQ0F6TkhFM0lEZ2dNVGNnT0hReE55QXRPSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEF6TnpzaUlHUTlJazB6TWpFZ09ERTBiREkxT0NBeE56SnhPU0EySURFMUlESXVOWFEySUMweE15NDFkaTAzTlRCeE1DQXRNVEFnTFRZZ0xURXpMalYwTFRFMUlESXVOV3d0TWpVNElERTNNbkV0TWpFZ01UUWdMVFEySURFMGFDMHlOVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFkQzAzTGpVZ01UY3VOWFl6TlRCeE1DQXhNQ0EzTGpVZ01UY3VOWFF4Tnk0MUlEY3VOV2d5TlRCeE1qVWdNQ0EwTmlBeE5IcE5OelkySURrd01HZzBjVEV3SUMweElERTJJQzB4TUhFNU5pQXRNVEk1SURrMklDMHlPVEJ4TUNBdE1UVTBJQzA1TUNBdE1qZ3hjUzAySUMwNUlDMHhOeUF0TVRCc0xUTWdMVEZ4TFRrZ01DQXRNVFlnTmlCc0xUSTVJREl6Y1MwM0lEY2dMVGd1TlNBeE5pNDFkRFF1TlNBeE55NDFjVGN5SURFd015QTNNaUF5TWpseE1DQXhNeklnTFRjNElESXpPSEV0TmlBNElDMDBMalVnTVRoME9TNDFJREUzYkRJNUlESXljVGNnTlNBeE5TQTFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRE00T3lJZ1pEMGlUVGsyTnlBeE1EQTBhRE54TVRFZ0xURWdNVGNnTFRFd2NURXpOU0F0TVRjNUlERXpOU0F0TXprMmNUQWdMVEV3TlNBdE16UWdMVEl3Tmk0MWRDMDVPQ0F0TVRnMUxqVnhMVGNnTFRrZ0xURTNJQzB4TUdndE0zRXRPU0F3SUMweE5pQTJiQzAwTWlBek5IRXRPQ0EySUMwNUlERTJkRFVnTVRoeE1URXhJREUxTUNBeE1URWdNekk0Y1RBZ09UQWdMVEk1TGpVZ01UYzJkQzA0TkM0MUlERTFOM0V0TmlBNUlDMDFJREU1ZERFd0lERTJiRFF5SURNemNUY2dOU0F4TlNBMWVrMHpNakVnT0RFMGJESTFPQ0F4TnpKeE9TQTJJREUxSURJdU5YUTJJQzB4TXk0MWRpMDNOVEJ4TUNBdE1UQWdMVFlnTFRFekxqVWdkQzB4TlNBeUxqVnNMVEkxT0NBeE56SnhMVEl4SURFMElDMDBOaUF4TkdndE1qVXdjUzB4TUNBd0lDMHhOeTQxSURjdU5YUXROeTQxSURFM0xqVjJNelV3Y1RBZ01UQWdOeTQxSURFM0xqVjBNVGN1TlNBM0xqVm9NalV3Y1RJMUlEQWdORFlnTVRSNlRUYzJOaUE1TURCb05IRXhNQ0F0TVNBeE5pQXRNVEJ4T1RZZ0xURXlPU0E1TmlBdE1qa3djVEFnTFRFMU5DQXRPVEFnTFRJNE1YRXROaUF0T1NBdE1UY2dMVEV3YkMweklDMHhjUzA1SURBZ0xURTJJRFpzTFRJNUlESXpjUzAzSURjZ0xUZ3VOU0F4Tmk0MWREUXVOU0F4Tnk0MWNUY3lJREV3TXlBM01pQXlNamx4TUNBeE16SWdMVGM0SURJek9DQnhMVFlnT0NBdE5DNDFJREU0TGpWME9TNDFJREUyTGpWc01qa2dNakp4TnlBMUlERTFJRFY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TXprN0lpQmtQU0pOTlRBd0lEa3dNR2d4TURCMkxURXdNR2d0TVRBd2RpMHhNREJvTFRRd01IWXRNVEF3YUMweE1EQjJOakF3YURVd01IWXRNekF3ZWsweE1qQXdJRGN3TUdndE1qQXdkaTB4TURCb01qQXdkaTB5TURCb0xUTXdNSFl6TURCb0xUSXdNSFl6TURCb0xURXdNSFl5TURCb05qQXdkaTAxTURCNlRURXdNQ0F4TVRBd2RpMHpNREJvTXpBd2RqTXdNR2d0TXpBd2VrMDRNREFnTVRFd01IWXRNekF3YURNd01IWXpNREJvTFRNd01IcE5NekF3SURrd01HZ3RNVEF3ZGpFd01HZ3hNREIyTFRFd01IcE5NVEF3TUNBNU1EQm9MVEV3TUhZeE1EQm9NVEF3ZGkweE1EQjZUVE13TUNBMU1EQm9NakF3ZGkwMU1EQWdhQzAxTURCMk5UQXdhREl3TUhZeE1EQm9NVEF3ZGkweE1EQjZUVGd3TUNBek1EQm9NakF3ZGkweE1EQm9MVEV3TUhZdE1UQXdhQzB5TURCMk1UQXdhQzB4TURCMk1UQXdhREV3TUhZeU1EQm9MVEl3TUhZeE1EQm9NekF3ZGkwek1EQjZUVEV3TUNBME1EQjJMVE13TUdnek1EQjJNekF3YUMwek1EQjZUVE13TUNBeU1EQm9MVEV3TUhZeE1EQm9NVEF3ZGkweE1EQjZUVEV5TURBZ01qQXdhQzB4TURCMk1UQXdhREV3TUhZdE1UQXdlazAzTURBZ01HZ3RNVEF3ZGpFd01HZ3hNREIyTFRFd01IcE5NVEl3TUNBd2FDMHpNREIyTVRBd2FETXdNSFl0TVRBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EUXdPeUlnWkQwaVRURXdNQ0F5TURCb0xURXdNSFl4TURBd2FERXdNSFl0TVRBd01IcE5NekF3SURJd01HZ3RNVEF3ZGpFd01EQm9NVEF3ZGkweE1EQXdlazAzTURBZ01qQXdhQzB5TURCMk1UQXdNR2d5TURCMkxURXdNREI2VFRrd01DQXlNREJvTFRFd01IWXhNREF3YURFd01IWXRNVEF3TUhwTk1USXdNQ0F5TURCb0xUSXdNSFl4TURBd2FESXdNSFl0TVRBd01IcE5OREF3SURCb0xUTXdNSFl4TURCb016QXdkaTB4TURCNlRUWXdNQ0F3YUMweE1EQjJPVEZvTVRBd2RpMDVNWHBOT0RBd0lEQm9MVEV3TUhZNU1XZ3hNREIyTFRreGVrMHhNVEF3SURCb0xUSXdNSFk1TVdneU1EQjJMVGt4ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTURReE95SWdaRDBpVFRVd01DQXhNakF3YkRZNE1pQXROamd5Y1RnZ0xUZ2dPQ0F0TVRoMExUZ2dMVEU0YkMwME5qUWdMVFEyTkhFdE9DQXRPQ0F0TVRnZ0xUaDBMVEU0SURoc0xUWTRNaUEyT0RKc01TQTBOelZ4TUNBeE1DQTNMalVnTVRjdU5YUXhOeTQxSURjdU5XZzBOelI2VFRNeE9TNDFJREV3TWpRdU5YRXRNamt1TlNBeU9TNDFJQzAzTVNBeU9TNDFkQzAzTVNBdE1qa3VOWFF0TWprdU5TQXROekV1TlhReU9TNDFJQzAzTVM0MWREY3hJQzB5T1M0MWREY3hJREk1TGpWME1qa3VOU0EzTVM0MWRDMHlPUzQxSURjeExqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdOREk3SWlCa1BTSk5OVEF3SURFeU1EQnNOamd5SUMwMk9ESnhPQ0F0T0NBNElDMHhPSFF0T0NBdE1UaHNMVFEyTkNBdE5EWTBjUzA0SUMwNElDMHhPQ0F0T0hRdE1UZ2dPR3d0TmpneUlEWTRNbXd4SURRM05YRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxYURRM05IcE5PREF3SURFeU1EQnNOamd5SUMwMk9ESnhPQ0F0T0NBNElDMHhPSFF0T0NBdE1UaHNMVFEyTkNBdE5EWTBjUzA0SUMwNElDMHhPQ0F0T0hRdE1UZ2dPR3d0TlRZZ05UWnNOREkwSURReU5td3ROekF3SURjd01HZ3hOVEI2VFRNeE9TNDFJREV3TWpRdU5YRXRNamt1TlNBeU9TNDFJQzAzTVNBeU9TNDFkQzAzTVNBdE1qa3VOU0IwTFRJNUxqVWdMVGN4TGpWME1qa3VOU0F0TnpFdU5YUTNNU0F0TWprdU5YUTNNU0F5T1M0MWRESTVMalVnTnpFdU5YUXRNamt1TlNBM01TNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRFF6T3lJZ1pEMGlUVE13TUNBeE1qQXdhRGd5TlhFM05TQXdJRGMxSUMwM05YWXRPVEF3Y1RBZ0xUSTFJQzB4T0NBdE5ETnNMVFkwSUMwMk5IRXRPQ0F0T0NBdE1UTWdMVFV1TlhRdE5TQXhNaTQxZGprMU1IRXdJREV3SUMwM0xqVWdNVGN1TlhRdE1UY3VOU0EzTGpWb0xUY3dNSEV0TWpVZ01DQXRORE1nTFRFNGJDMDJOQ0F0TmpSeExUZ2dMVGdnTFRVdU5TQXRNVE4wTVRJdU5TQXROV2czTURCeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkwNU5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzA0TlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZNU56VWdjVEFnTWpVZ01UZ2dORE5zTVRNNUlERXpPWEV4T0NBeE9DQTBNeUF4T0hvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBME5Ec2lJR1E5SWsweU5UQWdNVEl3TUdnNE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV4TlRCc0xUUTFNQ0EwTkRSc0xUUTFNQ0F0TkRRMWRqRXhOVEZ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRFExT3lJZ1pEMGlUVGd5TWlBeE1qQXdhQzAwTkRSeExURXhJREFnTFRFNUlDMDNMalYwTFRrZ0xURTNMalZzTFRjNElDMHpNREZ4TFRjZ0xUSTBJRGNnTFRRMWJEVTNJQzB4TURoeE5pQXRPU0F4Tnk0MUlDMHhOWFF5TVM0MUlDMDJhRFExTUhFeE1DQXdJREl4TGpVZ05uUXhOeTQxSURFMWJEWXlJREV3T0hFeE5DQXlNU0EzSURRMWJDMDRNeUF6TURGeExURWdNVEFnTFRrZ01UY3VOWFF0TVRrZ055NDFlazB4TVRjMUlEZ3dNR2d0TVRVd2NTMHhNQ0F3SUMweU1TQXROaTQxZEMweE5TQXRNVFV1Tld3dE56Z2dMVEUxTm5FdE5DQXRPU0F0TVRVZ0xURTFMalYwTFRJeElDMDJMalZvTFRVMU1DQnhMVEV3SURBZ0xUSXhJRFl1TlhRdE1UVWdNVFV1Tld3dE56Z2dNVFUyY1MwMElEa2dMVEUxSURFMUxqVjBMVEl4SURZdU5XZ3RNVFV3Y1MweE1DQXdJQzB4Tnk0MUlDMDNMalYwTFRjdU5TQXRNVGN1TlhZdE5qVXdjVEFnTFRFd0lEY3VOU0F0TVRjdU5YUXhOeTQxSUMwM0xqVm9NVFV3Y1RFd0lEQWdNVGN1TlNBM0xqVjBOeTQxSURFM0xqVjJNVFV3Y1RBZ01UQWdOeTQxSURFM0xqVjBNVGN1TlNBM0xqVm9OelV3Y1RFd0lEQWdNVGN1TlNBdE55NDFkRGN1TlNBdE1UY3VOWFl0TVRVd2NUQWdMVEV3SURjdU5TQXRNVGN1TlhReE55NDFJQzAzTGpWb01UVXdjVEV3SURBZ01UY3VOU0EzTGpVZ2REY3VOU0F4Tnk0MWRqWTFNSEV3SURFd0lDMDNMalVnTVRjdU5YUXRNVGN1TlNBM0xqVjZUVGcxTUNBeU1EQm9MVFV3TUhFdE1UQWdNQ0F0TVRrdU5TQXROM1F0TVRFdU5TQXRNVGRzTFRNNElDMHhOVEp4TFRJZ0xURXdJRE11TlNBdE1UZDBNVFV1TlNBdE4yZzJNREJ4TVRBZ01DQXhOUzQxSURkME15NDFJREUzYkMwek9DQXhOVEp4TFRJZ01UQWdMVEV4TGpVZ01UZDBMVEU1TGpVZ04zb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQTBOanNpSUdROUlrMDFNREFnTVRFd01HZ3lNREJ4TlRZZ01DQXhNREl1TlNBdE1qQXVOWFEzTWk0MUlDMDFNSFEwTkNBdE5UbDBNalVnTFRVd0xqVnNOaUF0TWpCb01UVXdjVFF4SURBZ056QXVOU0F0TWprdU5YUXlPUzQxSUMwM01DNDFkaTAyTURCeE1DQXROREVnTFRJNUxqVWdMVGN3TGpWMExUY3dMalVnTFRJNUxqVm9MVEV3TURCeExUUXhJREFnTFRjd0xqVWdNamt1TlhRdE1qa3VOU0EzTUM0MWRqWXdNSEV3SURReElESTVMalVnTnpBdU5YUTNNQzQxSURJNUxqVm9NVFV3Y1RJZ09DQTJMalVnTWpFdU5YUXlOQ0EwT0hRME5TQTJNWFEzTWlBME9IUXhNREl1TlNBeU1TNDFlazA1TURBZ09EQXdkaTB4TURBZ2FERXdNSFl4TURCb0xURXdNSHBOTmpBd0lEY3pNSEV0T1RVZ01DQXRNVFl5TGpVZ0xUWTNMalYwTFRZM0xqVWdMVEUyTWk0MWREWTNMalVnTFRFMk1pNDFkREUyTWk0MUlDMDJOeTQxZERFMk1pNDFJRFkzTGpWME5qY3VOU0F4TmpJdU5YUXROamN1TlNBeE5qSXVOWFF0TVRZeUxqVWdOamN1TlhwTk5qQXdJRFl3TTNFME15QXdJRGN6SUMwek1IUXpNQ0F0TnpOMExUTXdJQzAzTTNRdE56TWdMVE13ZEMwM015QXpNSFF0TXpBZ056TjBNekFnTnpOME56TWdNekI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TkRjN0lpQmtQU0pOTmpneElERXhPVGxzTXpnMUlDMDVPVGh4TWpBZ0xUVXdJRFl3SUMwNU1uRXhPQ0F0TVRrZ016WXVOU0F0TWprdU5YUXlOeTQxSUMweE1TNDFiREV3SUMweWRpMDJObWd0TkRFM2RqWTJjVFV6SURBZ056VWdORE11TlhRMUlEZzRMalZzTFRneUlESXlNbWd0TXpreGNTMDFPQ0F0TVRRMUlDMDVNaUF0TWpNMGNTMHhNU0F0TXpRZ0xUWXVOU0F0TlRkME1qVXVOU0F0TXpkME5EWWdMVEl3ZERVMUlDMDJkaTAyTm1ndE16WTFkalkyY1RVMklESTBJRGcwSURVeWNURXlJREV5SURJMUlETXdMalYwTWpBZ016RXVOV3czSURFemJETTVPU0F4TURBMmFEa3plazAwTVRZZ05USXhhRE0wTUNCc0xURTJNaUEwTlRkNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd05EZzdJaUJrUFNKTk56VXpJRFkwTVhFMUlDMHhJREUwTGpVZ0xUUXVOWFF6TmlBdE1UVXVOWFExTUM0MUlDMHlOaTQxZERVekxqVWdMVFF3ZERVd0xqVWdMVFUwTGpWME16VXVOU0F0TnpCME1UUXVOU0F0T0RkeE1DQXROamNnTFRJM0xqVWdMVEV5TlM0MWRDMDNNUzQxSUMwNU55NDFkQzA1T0M0MUlDMDJOaTQxZEMweE1EZ3VOU0F0TkRBdU5YUXRNVEF5SUMweE0yZ3ROVEF3ZGpnNWNUUXhJRGNnTnpBdU5TQXpNaTQxZERJNUxqVWdOalV1TlhZNE1qZHhNQ0F5TkNBdE1DNDFJRE0wZEMwekxqVWdNalIwTFRndU5TQXhPUzQxZEMweE55QXhNeTQxZEMweU9DQXhNaTQxZEMwME1pNDFJREV4TGpWMk56RWdiRFEzTVNBdE1YRTFOeUF3SURFeE5TNDFJQzB5TUM0MWRERXdPQ0F0TlRkME9EQXVOU0F0T1RSME16RWdMVEV5TkM0MWNUQWdMVFV4SUMweE5TNDFJQzA1Tmk0MWRDMHpPQ0F0TnpRdU5YUXRORFVnTFRVd0xqVjBMVE00TGpVZ0xUTXdMalY2VFRRd01DQTNNREJvTVRNNWNUYzRJREFnTVRNd0xqVWdORGd1TlhRMU1pNDFJREV5TWk0MWNUQWdOREVnTFRndU5TQTNNQzQxZEMweU9TNDFJRFUxTGpWMExUWXlMalVnTXprdU5YUXRNVEF6TGpVZ01UTXVOV2d0TVRFNGRpMHpOVEI2VFRRd01DQXlNREJvTWpFMmNUZ3dJREFnTVRJeElEVXdMalYwTkRFZ01UTXdMalZ4TUNBNU1DQXROakl1TlNBeE5UUXVOU0IwTFRFMU5pNDFJRFkwTGpWb0xURTFPWFl0TkRBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EUTVPeUlnWkQwaVRUZzNOeUF4TWpBd2JESWdMVFUzY1MwNE15QXRNVGtnTFRFeE5pQXRORFV1TlhRdE5EQWdMVFkyTGpWc0xURXpNaUF0T0RNNWNTMDVJQzAwT1NBeE15QXROamwwT1RZZ0xUSTJkaTA1TjJndE5UQXdkamszY1RFNE5pQXhOaUF5TURBZ09UaHNNVGN6SURnek1uRXpJREUzSURNZ016QjBMVEV1TlNBeU1pNDFkQzA1SURFM0xqVjBMVEV6TGpVZ01USXVOWFF0TWpFdU5TQXhNSFF0TWpZZ09DNDFkQzB6TXk0MUlERXdjUzB4TXlBeklDMHhPU0ExZGpVM2FEUXlOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEExTURzaUlHUTlJazB4TXpBd0lEa3dNR2d0TlRCeE1DQXlNU0F0TkNBek4zUXRPUzQxSURJMkxqVjBMVEU0SURFM0xqVjBMVEl5SURFeGRDMHlPQzQxSURVdU5YUXRNekVnTW5RdE16Y2dNQzQxYUMweU1EQjJMVGcxTUhFd0lDMHlNaUF5TlNBdE16UXVOWFExTUNBdE1UTXVOV3d5TlNBdE1uWXRNVEF3YUMwME1EQjJNVEF3Y1RRZ01DQXhNU0F3TGpWME1qUWdNM1F6TUNBM2RESTBJREUxZERFeElESTBMalYyT0RVd2FDMHlNREJ4TFRJMUlEQWdMVE0zSUMwd0xqVjBMVE14SUMweWRDMHlPQzQxSUMwMUxqVjBMVEl5SUMweE1YUXRNVGdnTFRFM0xqVjBMVGt1TlNBdE1qWXVOWFF0TkNBdE16ZG9MVFV3ZGpNd01DQm9NVEF3TUhZdE16QXdlazB4TnpVZ01UQXdNR2d0TnpWMkxUZ3dNR2czTld3dE1USTFJQzB4Tmpkc0xURXlOU0F4Tmpkb056VjJPREF3YUMwM05Xd3hNalVnTVRZM2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EVXhPeUlnWkQwaVRURXhNREFnT1RBd2FDMDFNSEV3SURJeElDMDBJRE0zZEMwNUxqVWdNall1TlhRdE1UZ2dNVGN1TlhRdE1qSWdNVEYwTFRJNExqVWdOUzQxZEMwek1TQXlkQzB6TnlBd0xqVm9MVEl3TUhZdE5qVXdjVEFnTFRJeUlESTFJQzB6TkM0MWREVXdJQzB4TXk0MWJESTFJQzB5ZGkweE1EQm9MVFF3TUhZeE1EQnhOQ0F3SURFeElEQXVOWFF5TkNBemRETXdJRGQwTWpRZ01UVjBNVEVnTWpRdU5YWTJOVEJvTFRJd01IRXRNalVnTUNBdE16Y2dMVEF1TlhRdE16RWdMVEowTFRJNExqVWdMVFV1TlhRdE1qSWdMVEV4ZEMweE9DQXRNVGN1TlhRdE9TNDFJQzB5Tmk0MWRDMDBJQzB6TjJndE5UQjJNekF3SUdneE1EQXdkaTB6TURCNlRURXhOamNnTlRCc0xURTJOeUF0TVRJMWRqYzFhQzA0TURCMkxUYzFiQzB4TmpjZ01USTFiREUyTnlBeE1qVjJMVGMxYURnd01IWTNOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEExTWpzaUlHUTlJazAxTUNBeE1UQXdhRFl3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1UQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwMk1EQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRVd0lEZ3dNR2d4TURBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHhNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xURXdNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01DQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMDFNQ0ExTURCb09EQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTB4TURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVGd3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5OVEFnTWpBd2FERXhNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRFd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TVRFd01DQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TlRNN0lpQmtQU0pOTWpVd0lERXhNREJvTnpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHhNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUY3dNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTVRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk5UQWdPREF3YURFeE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RNVEV3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdJSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZUVEkxTUNBMU1EQm9OekF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRjd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJNVEF3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTlRBZ01qQXdhREV4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1URXdNQ0J4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd05UUTdJaUJrUFNKTk5UQXdJRGsxTUhZeE1EQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWFEWXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TVRBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzAyTURCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWVrMHhNREFnTmpVd2RqRXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVm9NVEF3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1UQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweE1EQXdJSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalY2VFRNd01DQXpOVEIyTVRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TldnNE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RPREF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhwTk1DQTFNSFl4TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxYURFeE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV3TUNCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVEV4TURCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EVTFPeUlnWkQwaVRUVXdJREV4TURCb01URXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TVRBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TVRBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXhNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAxTUNBNE1EQm9NVEV3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1UQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweE1UQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl4TURBZ2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk5UQWdOVEF3YURFeE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RNVEV3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5OVEFnTWpBd2FERXhNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRFd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TVRFd01DQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TlRZN0lpQmtQU0pOTlRBZ01URXdNR2d4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1UQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl4TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWswek5UQWdNVEV3TUdnNE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RPREF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZeE1EQWdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5OVEFnT0RBd2FERXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TVRBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TURCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqRXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZUVE0xTUNBNE1EQm9PREF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRnd01DQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRVd0lEVXdNR2d4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1UQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl4TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWswek5UQWdOVEF3YURnd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNVEF3SUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RPREF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZeE1EQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMDFNQ0F5TURCb01UQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTB4TURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVEV3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5NelV3SURJd01HZzRNREFnY1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRnd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJNVEF3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEExTnpzaUlHUTlJazAwTURBZ01HZ3RNVEF3ZGpFeE1EQm9NVEF3ZGkweE1UQXdlazAxTlRBZ01URXdNR2d4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1UQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl4TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWswMU5UQWdPREF3YURVd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNVEF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMDFNREFnY1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZeE1EQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMHlOamNnTlRVd2JDMHhOamNnTFRFeU5YWTNOV2d0TWpBd2RqRXdNR2d5TURCMk56VjZUVFUxTUNBMU1EQm9NekF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRNd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJNVEF3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTlRVd0lESXdNR2cyTURBZ2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHhNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUWXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTVRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBMU9Ec2lJR1E5SWswMU1DQXhNVEF3YURFd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNVEF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMHhNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUa3dNQ0F3YUMweE1EQjJNVEV3TUdneE1EQjJMVEV4TURCNlRUVXdJRGd3TUdnMU1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEV3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3ROVEF3SUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5NVEV3TUNBMk1EQm9NakF3ZGkweE1EQm9MVEl3TUhZdE56VnNMVEUyTnlBeE1qVnNNVFkzSURFeU5YWXROelY2VFRVd0lEVXdNR2d6TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE16QXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl4TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWswMU1DQXlNREJvTmpBd0lIRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNVEF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMDJNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd05UazdJaUJrUFNKTk56VWdNVEF3TUdnM05UQnhNekVnTUNBMU15QXRNakowTWpJZ0xUVXpkaTAyTlRCeE1DQXRNekVnTFRJeUlDMDFNM1F0TlRNZ0xUSXlhQzAzTlRCeExUTXhJREFnTFRVeklESXlkQzB5TWlBMU0zWTJOVEJ4TUNBek1TQXlNaUExTTNRMU15QXlNbnBOTVRJd01DQXpNREJzTFRNd01DQXpNREJzTXpBd0lETXdNSFl0TmpBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EWXdPeUlnWkQwaVRUUTBJREV4TURCb01URXhNbkV4T0NBd0lETXhJQzB4TTNReE15QXRNekYyTFRFd01USnhNQ0F0TVRnZ0xURXpJQzB6TVhRdE16RWdMVEV6YUMweE1URXljUzB4T0NBd0lDMHpNU0F4TTNRdE1UTWdNekYyTVRBeE1uRXdJREU0SURFeklETXhkRE14SURFemVrMHhNREFnTVRBd01IWXROek0zYkRJME55QXhPREpzTWprNElDMHhNekZzTFRjMElERTFObXd5T1RNZ016RTRiREl6TmlBdE1qZzRkalV3TUdndE1UQXdNSHBOTXpReUlEZzROSEUxTmlBd0lEazFJQzB6T1hRek9TQXRPVFF1TlhRdE16a2dMVGsxZEMwNU5TQXRNemt1TlhRdE9UVWdNemt1TlhRdE16a2dPVFYwTXprZ09UUXVOU0IwT1RVZ016bDZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdOakk3SWlCa1BTSk5OalE0SURFeE5qbHhNVEUzSURBZ01qRTJJQzAyTUhReE5UWXVOU0F0TVRZeGREVTNMalVnTFRJeE9IRXdJQzB4TVRVZ0xUY3dJQzB5TlRoeExUWTVJQzB4TURrZ0xURTFPQ0F0TWpJMUxqVjBMVEUwTXlBdE1UYzVMalZzTFRVMElDMDJNbkV0T1NBNElDMHlOUzQxSURJMExqVjBMVFl6TGpVZ05qY3VOWFF0T1RFZ01UQXpkQzA1T0M0MUlERXlPSFF0T1RVdU5TQXhORGh4TFRZd0lERXpNaUF0TmpBZ01qUTVjVEFnT0RnZ016UWdNVFk1TGpWME9URXVOU0F4TkRKME1UTTNJRGsyTGpWME1UWTJMalVnTXpaNlRUWTFNaTQxSURrM05IRXRPVEV1TlNBd0lDMHhOVFl1TlNBdE5qVWdkQzAyTlNBdE1UVTNkRFkxSUMweE5UWXVOWFF4TlRZdU5TQXROalF1TlhReE5UWXVOU0EyTkM0MWREWTFJREUxTmk0MWRDMDJOU0F4TlRkMExURTFOaTQxSURZMWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EWXpPeUlnWkQwaVRUWXdNQ0F4TVRjM2NURXhOeUF3SURJeU5DQXRORFV1TlhReE9EUXVOU0F0TVRJemRERXlNeUF0TVRnMExqVjBORFV1TlNBdE1qSTBkQzAwTlM0MUlDMHlNalIwTFRFeU15QXRNVGcwTGpWMExURTROQzQxSUMweE1qTjBMVEl5TkNBdE5EVXVOWFF0TWpJMElEUTFMalYwTFRFNE5DNDFJREV5TTNRdE1USXpJREU0TkM0MWRDMDBOUzQxSURJeU5IUTBOUzQxSURJeU5IUXhNak1nTVRnMExqVjBNVGcwTGpVZ01USXpkREl5TkNBME5TNDFlazAyTURBZ01UY3pkamcxTkhFdE1URTJJREFnTFRJeE5DNDFJQzAxTjNRdE1UVTFMalVnTFRFMU5TNDFkQzAxTnlBdE1qRTBMalYwTlRjZ0xUSXhOQzQxSUhReE5UVXVOU0F0TVRVMUxqVjBNakUwTGpVZ0xUVTNlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRFkwT3lJZ1pEMGlUVFUxTkNBeE1qazFjVEl4SUMwM01pQTFOeTQxSUMweE5ETXVOWFEzTmlBdE1UTXdkRGd6SUMweE1UaDBPREl1TlNBdE1URTNkRGN3SUMweE1UWjBORGt1TlNBdE1USTJkREU0TGpVZ0xURXpOaTQxY1RBZ0xUY3hJQzB5TlM0MUlDMHhNelYwTFRZNExqVWdMVEV4TVhRdE9Ua2dMVGd5ZEMweE1UZ3VOU0F0TlRSMExURXlOUzQxSUMweU0zRXRPRFFnTlNBdE1UWXhMalVnTXpSMExURXpPUzQxSURjNExqVjBMVGs1SURFeU5YUXRNemNnTVRZMExqVnhNQ0EyT1NBeE9DQXhNell1TlhRME9TNDFJREV5Tmk0MWREWTVMalVnTVRFMkxqVjBPREV1TlNBeE1UY3VOWFE0TXk0MUlERXhPU0IwTnpZdU5TQXhNekYwTlRndU5TQXhORE42VFRNME5DQTNNVEJ4TFRJeklDMHpNeUF0TkRNdU5TQXROekF1TlhRdE5EQXVOU0F0TVRBeUxqVjBMVEUzSUMweE1qTnhNU0F0TXpjZ01UUXVOU0F0TmprdU5YUXpNQ0F0TlRKME5ERWdMVE0zZERNNExqVWdMVEkwTGpWME16TWdMVEUxY1RJeElDMDNJRE15SUMweGRERXpJREl5YkRZZ016UnhNaUF4TUNBdE1pNDFJREl5ZEMweE15NDFJREU1Y1MwMUlEUWdMVEUwSURFeWRDMHlPUzQxSURRd0xqVjBMVE15TGpVZ056TXVOWEV0TWpZZ09Ea2dOaUF5TnpGeE1pQXhNU0F0TmlBeE1YRXRPQ0F4SUMweE5TQXRNVEI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TmpVN0lpQmtQU0pOTVRBd01DQXhNREV6YkRFd09DQXhNVFZ4TWlBeElEVWdNblF4TXlBeWRESXdMalVnTFRGME1qVWdMVGt1TlhReU9DNDFJQzB5TVM0MWNUSXlJQzB5TWlBeU55QXRORE4wTUNBdE16SnNMVFlnTFRFd2JDMHhNRGdnTFRFeE5YcE5NelV3SURFeE1EQm9OREF3Y1RVd0lEQWdNVEExSUMweE0yd3RNVGczSUMweE9EZG9MVE0yT0hFdE5ERWdNQ0F0TnpBdU5TQXRNamt1TlhRdE1qa3VOU0F0TnpBdU5YWXROVEF3Y1RBZ0xUUXhJREk1TGpVZ0xUY3dMalYwTnpBdU5TQXRNamt1TldnMU1EQnhOREVnTUNBM01DNDFJREk1TGpWME1qa3VOU0EzTUM0MWRqRTRNbXd5TURBZ01qQXdkaTB6TXpJZ2NUQWdMVEUyTlNBdE9UTXVOU0F0TWpVM0xqVjBMVEkxTmk0MUlDMDVNaTQxYUMwME1EQnhMVEUyTlNBd0lDMHlOVGN1TlNBNU1pNDFkQzA1TWk0MUlESTFOeTQxZGpRd01IRXdJREUyTlNBNU1pNDFJREkxTnk0MWRESTFOeTQxSURreUxqVjZUVEV3TURrZ09EQXpiQzB6TmpJZ0xUTTJNbXd0TVRZeElDMDFNR3cxTlNBeE56QnNNelUxSURNMU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQTJOanNpSUdROUlrMHpOVEFnTVRFd01HZ3pOakZ4TFRFMk5DQXRNVFEySUMweU1UWWdMVEl3TUdndE1UazFjUzAwTVNBd0lDMDNNQzQxSUMweU9TNDFkQzB5T1M0MUlDMDNNQzQxZGkwMU1EQnhNQ0F0TkRFZ01qa3VOU0F0TnpBdU5YUTNNQzQxSUMweU9TNDFhRFV3TUhFME1TQXdJRGN3TGpVZ01qa3VOWFF5T1M0MUlEY3dMalZzTWpBd0lERTFNM1l0TVRBemNUQWdMVEUyTlNBdE9USXVOU0F0TWpVM0xqVjBMVEkxTnk0MUlDMDVNaTQxYUMwME1EQnhMVEUyTlNBd0lDMHlOVGN1TlNBNU1pNDFkQzA1TWk0MUlESTFOeTQxZGpRd01IRXdJREUyTlNBNU1pNDFJREkxTnk0MWRESTFOeTQxSURreUxqVjZJRTA0TWpRZ01UQTNNMnd6TXprZ0xUTXdNWEU0SUMwM0lEZ2dMVEUzTGpWMExUZ2dMVEUzTGpWc0xUTTBNQ0F0TXpBMmNTMDNJQzAySUMweE1pNDFJQzAwZEMwMkxqVWdNVEYyTWpBemNTMHlOaUF4SUMwMU5DNDFJREIwTFRjNExqVWdMVGN1TlhRdE9USWdMVEUzTGpWMExUZzJJQzB6TlhRdE56QWdMVFUzY1RFd0lEVTVJRE16SURFd09IUTFNUzQxSURneExqVjBOalVnTlRndU5YUTJPQzQxSURRd0xqVjBOamNnTWpRdU5YUTFOaUF4TXk0MWREUXdJRFF1TlhZeU1UQnhNU0F4TUNBMkxqVWdNVEl1TlhReE15NDFJQzAwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd05qYzdJaUJrUFNKTk16VXdJREV4TURCb016VXdjVFl3SURBZ01USTNJQzB5TTJ3dE1UYzRJQzB4Tnpkb0xUTTBPWEV0TkRFZ01DQXROekF1TlNBdE1qa3VOWFF0TWprdU5TQXROekF1TlhZdE5UQXdjVEFnTFRReElESTVMalVnTFRjd0xqVjBOekF1TlNBdE1qa3VOV2cxTURCeE5ERWdNQ0EzTUM0MUlESTVMalYwTWprdU5TQTNNQzQxZGpZNWJESXdNQ0F5TURCMkxUSXhPWEV3SUMweE5qVWdMVGt5TGpVZ0xUSTFOeTQxZEMweU5UY3VOU0F0T1RJdU5XZ3ROREF3Y1MweE5qVWdNQ0F0TWpVM0xqVWdPVEl1TlhRdE9USXVOU0F5TlRjdU5YWTBNREJ4TUNBeE5qVWdPVEl1TlNBeU5UY3VOWFF5TlRjdU5TQTVNaTQxZWlCTk5qUXpJRFl6T1d3ek9UVWdNemsxY1RjZ055QXhOeTQxSURkME1UY3VOU0F0TjJ3eE1ERWdMVEV3TVhFM0lDMDNJRGNnTFRFM0xqVjBMVGNnTFRFM0xqVnNMVFV6TVNBdE5UTXljUzAzSUMwM0lDMHhOeTQxSUMwM2RDMHhOeTQxSURkc0xUSTBPQ0F5TkRoeExUY2dOeUF0TnlBeE55NDFkRGNnTVRjdU5Xd3hNREVnTVRBeGNUY2dOeUF4Tnk0MUlEZDBNVGN1TlNBdE4yd3hNVEVnTFRFeE1YRTRJQzAzSURFNElDMDNkREU0SURkNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd05qZzdJaUJrUFNKTk16RTRJRGt4T0d3eU5qUWdNalkwY1RnZ09DQXhPQ0E0ZERFNElDMDRiREkyTUNBdE1qWTBjVGNnTFRnZ05DNDFJQzB4TTNRdE1USXVOU0F0TldndE1UY3dkaTB5TURCb01qQXdkakUzTTNFd0lERXdJRFVnTVRKME1UTWdMVFZzTWpZMElDMHlOakJ4T0NBdE55QTRJQzB4Tnk0MWRDMDRJQzB4Tnk0MWJDMHlOalFnTFRJMk5YRXRPQ0F0TnlBdE1UTWdMVFYwTFRVZ01USjJNVGN6YUMweU1EQjJMVEl3TUdneE56QnhNVEFnTUNBeE1pNDFJQzAxZEMwMExqVWdMVEV6YkMweU5qQWdMVEkyTkhFdE9DQXRPQ0F0TVRnZ0xUaDBMVEU0SURoc0xUSTJOQ0F5TmpSeExUZ2dPQ0F0TlM0MUlERXpJSFF4TWk0MUlEVm9NVGMxZGpJd01HZ3RNakF3ZGkweE56TnhNQ0F0TVRBZ0xUVWdMVEV5ZEMweE15QTFiQzB5TmpRZ01qWTFjUzA0SURjZ0xUZ2dNVGN1TlhRNElERTNMalZzTWpZMElESTJNSEU0SURjZ01UTWdOWFExSUMweE1uWXRNVGN6YURJd01IWXlNREJvTFRFM05YRXRNVEFnTUNBdE1USXVOU0ExZERVdU5TQXhNM29pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEEyT1RzaUlHUTlJazB5TlRBZ01URXdNR2d4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUUXpPR3cwTmpRZ05EVXpjVEUxSURFMElESTFMalVnTVRCME1UQXVOU0F0TWpWMkxURXdNREJ4TUNBdE1qRWdMVEV3TGpVZ0xUSTFkQzB5TlM0MUlERXdiQzAwTmpRZ05EVXpkaTAwTXpoeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVEV3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdOekE3SWlCa1BTSk5OVEFnTVRFd01HZ3hNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRRek9HdzBOalFnTkRVemNURTFJREUwSURJMUxqVWdNVEIwTVRBdU5TQXRNalYyTFRRek9HdzBOalFnTkRVemNURTFJREUwSURJMUxqVWdNVEIwTVRBdU5TQXRNalYyTFRFd01EQnhNQ0F0TWpFZ0xURXdMalVnTFRJMWRDMHlOUzQxSURFd2JDMDBOalFnTkRVemRpMDBNemh4TUNBdE1qRWdMVEV3TGpVZ0xUSTFkQzB5TlM0MUlERXdiQzAwTmpRZ05EVXpkaTAwTXpoeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVEV3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxSUhRdE1UUXVOU0F6TlM0MWRqRXdNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRGN4T3lJZ1pEMGlUVEV5TURBZ01UQTFNSFl0TVRBd01IRXdJQzB5TVNBdE1UQXVOU0F0TWpWMExUSTFMalVnTVRCc0xUUTJOQ0EwTlROMkxUUXpPSEV3SUMweU1TQXRNVEF1TlNBdE1qVjBMVEkxTGpVZ01UQnNMVFE1TWlBME9EQnhMVEUxSURFMElDMHhOU0F6TlhReE5TQXpOV3cwT1RJZ05EZ3djVEUxSURFMElESTFMalVnTVRCME1UQXVOU0F0TWpWMkxUUXpPR3cwTmpRZ05EVXpjVEUxSURFMElESTFMalVnTVRCME1UQXVOU0F0TWpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd056STdJaUJrUFNKTk1qUXpJREV3TnpSc09ERTBJQzAwT1RoeE1UZ2dMVEV4SURFNElDMHlOblF0TVRnZ0xUSTJiQzA0TVRRZ0xUUTVPSEV0TVRnZ0xURXhJQzB6TUM0MUlDMDBkQzB4TWk0MUlESTRkakV3TURCeE1DQXlNU0F4TWk0MUlESTRkRE13TGpVZ0xUUjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdOek03SWlCa1BTSk5NalV3SURFd01EQm9NakF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkwNE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRJd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJPREF3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTmpVd0lERXdNREJvTWpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDRNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUSXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyT0RBd0lIRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd056UTdJaUJrUFNKTk1URXdNQ0E1TlRCMkxUZ3dNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE9EQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFk0TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxYURnd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQTNOVHNpSUdROUlrMDFNREFnTmpFeWRqUXpPSEV3SURJeElERXdMalVnTWpWME1qVXVOU0F0TVRCc05Ea3lJQzAwT0RCeE1UVWdMVEUwSURFMUlDMHpOWFF0TVRVZ0xUTTFiQzAwT1RJZ0xUUTRNSEV0TVRVZ0xURTBJQzB5TlM0MUlDMHhNSFF0TVRBdU5TQXlOWFkwTXpoc0xUUTJOQ0F0TkRVemNTMHhOU0F0TVRRZ0xUSTFMalVnTFRFd2RDMHhNQzQxSURJMWRqRXdNREJ4TUNBeU1TQXhNQzQxSURJMWRESTFMalVnTFRFd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EYzJPeUlnWkQwaVRURXdORGdnTVRFd01td3hNREFnTVhFeU1DQXdJRE0xSUMweE5DNDFkREUxSUMwek5TNDFiRFVnTFRFd01EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZzTFRFd01DQXRNWEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalZzTFRJZ05ETTNiQzAwTmpNZ0xUUTFOSEV0TVRRZ0xURTFJQzB5TkM0MUlDMHhNQzQxZEMweE1DNDFJREkxTGpWc0xUSWdORE0zYkMwME5qSWdMVFExTlhFdE1UVWdMVEUwSUMweU5TNDFJQzA1TGpWMExURXdMalVnTWpRdU5Xd3ROU0F4TURBd2NUQWdNakVnTVRBdU5TQXlOUzQxZERJMUxqVWdMVEV3TGpWc05EWTJJQzAwTlRBZ2JDMHlJRFF6T0hFd0lESXdJREV3TGpVZ01qUXVOWFF5TlM0MUlDMDVMalZzTkRZMklDMDBOVEZzTFRJZ05ETTRjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUQTNOenNpSUdROUlrMDROVEFnTVRFd01HZ3hNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRFd01EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRFd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJORE00YkMwME5qUWdMVFExTTNFdE1UVWdMVEUwSUMweU5TNDFJQzB4TUhRdE1UQXVOU0F5TlhZeE1EQXdjVEFnTWpFZ01UQXVOU0F5TlhReU5TNDFJQzB4TUd3ME5qUWdMVFExTTNZME16aHhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EYzRPeUlnWkQwaVRUWTROaUF4TURneGJEVXdNU0F0TlRRd2NURTFJQzB4TlNBeE1DNDFJQzB5Tm5RdE1qWXVOU0F0TVRGb0xURXdOREp4TFRJeUlEQWdMVEkyTGpVZ01URjBNVEF1TlNBeU5tdzFNREVnTlRRd2NURTFJREUxSURNMklERTFkRE0ySUMweE5YcE5NVFV3SURRd01HZ3hNREF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRFd01EQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3TnprN0lpQmtQU0pOT0RnMUlEa3dNR3d0TXpVeUlDMHpOVE5zTXpVeUlDMHpOVE5zTFRFNU55QXRNVGs0YkMwMU5USWdOVFV5YkRVMU1pQTFOVEI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3T0RBN0lpQmtQU0pOTVRBMk5DQTFORGRzTFRVMU1TQXROVFV4YkMweE9UZ2dNVGs0YkRNMU15QXpOVE5zTFRNMU15QXpOVE5zTVRrNElERTVPSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEE0TVRzaUlHUTlJazAyTURBZ01URTNOM0V4TVRjZ01DQXlNalFnTFRRMUxqVjBNVGcwTGpVZ0xURXlNM1F4TWpNZ0xURTROQzQxZERRMUxqVWdMVEl5TkhRdE5EVXVOU0F0TWpJMGRDMHhNak1nTFRFNE5DNDFkQzB4T0RRdU5TQXRNVEl6ZEMweU1qUWdMVFExTGpWMExUSXlOQ0EwTlM0MWRDMHhPRFF1TlNBeE1qTjBMVEV5TXlBeE9EUXVOWFF0TkRVdU5TQXlNalIwTkRVdU5TQXlNalIwTVRJeklERTROQzQxZERFNE5DNDFJREV5TTNReU1qUWdORFV1TlhwTk5qVXdJRGt3TUdndE1UQXdjUzB5TVNBd0lDMHpOUzQxSUMweE5DNDFkQzB4TkM0MUlDMHpOUzQxZGkweE5UQm9MVEUxTUNCeExUSXhJREFnTFRNMUxqVWdMVEUwTGpWMExURTBMalVnTFRNMUxqVjJMVEV3TUhFd0lDMHlNU0F4TkM0MUlDMHpOUzQxZERNMUxqVWdMVEUwTGpWb01UVXdkaTB4TlRCeE1DQXRNakVnTVRRdU5TQXRNelV1TlhRek5TNDFJQzB4TkM0MWFERXdNSEV5TVNBd0lETTFMalVnTVRRdU5YUXhOQzQxSURNMUxqVjJNVFV3YURFMU1IRXlNU0F3SURNMUxqVWdNVFF1TlhReE5DNDFJRE0xTGpWMk1UQXdjVEFnTWpFZ0xURTBMalVnTXpVdU5YUXRNelV1TlNBeE5DNDFhQzB4TlRCMk1UVXdjVEFnTWpFZ0xURTBMalVnTXpVdU5YUXRNelV1TlNBeE5DNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRGd5T3lJZ1pEMGlUVFl3TUNBeE1UYzNjVEV4TnlBd0lESXlOQ0F0TkRVdU5YUXhPRFF1TlNBdE1USXpkREV5TXlBdE1UZzBMalYwTkRVdU5TQXRNakkwZEMwME5TNDFJQzB5TWpSMExURXlNeUF0TVRnMExqVjBMVEU0TkM0MUlDMHhNak4wTFRJeU5DQXRORFV1TlhRdE1qSTBJRFExTGpWMExURTROQzQxSURFeU0zUXRNVEl6SURFNE5DNDFkQzAwTlM0MUlESXlOSFEwTlM0MUlESXlOSFF4TWpNZ01UZzBMalYwTVRnMExqVWdNVEl6ZERJeU5DQTBOUzQxZWswNE5UQWdOekF3YUMwMU1EQnhMVEl4SURBZ0xUTTFMalVnTFRFMExqVjBMVEUwTGpVZ0xUTTFMalYyTFRFd01IRXdJQzB5TVNBeE5DNDFJQzB6TlM0MUlIUXpOUzQxSUMweE5DNDFhRFV3TUhFeU1TQXdJRE0xTGpVZ01UUXVOWFF4TkM0MUlETTFMalYyTVRBd2NUQWdNakVnTFRFMExqVWdNelV1TlhRdE16VXVOU0F4TkM0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1EZ3pPeUlnWkQwaVRUWXdNQ0F4TVRjM2NURXhOeUF3SURJeU5DQXRORFV1TlhReE9EUXVOU0F0TVRJemRERXlNeUF0TVRnMExqVjBORFV1TlNBdE1qSTBkQzAwTlM0MUlDMHlNalIwTFRFeU15QXRNVGcwTGpWMExURTROQzQxSUMweE1qTjBMVEl5TkNBdE5EVXVOWFF0TWpJMElEUTFMalYwTFRFNE5DNDFJREV5TTNRdE1USXpJREU0TkM0MWRDMDBOUzQxSURJeU5IUTBOUzQxSURJeU5IUXhNak1nTVRnMExqVjBNVGcwTGpVZ01USXpkREl5TkNBME5TNDFlazAzTkRFdU5TQTVNVE54TFRFeUxqVWdNQ0F0TWpFdU5TQXRPV3d0TVRJd0lDMHhNakJzTFRFeU1DQXhNakJ4TFRrZ09TQXRNakV1TlNBNUlIUXRNakV1TlNBdE9Xd3RNVFF4SUMweE5ERnhMVGtnTFRrZ0xUa2dMVEl4TGpWME9TQXRNakV1Tld3eE1qQWdMVEV5TUd3dE1USXdJQzB4TWpCeExUa2dMVGtnTFRrZ0xUSXhMalYwT1NBdE1qRXVOV3d4TkRFZ0xURTBNWEU1SUMwNUlESXhMalVnTFRsME1qRXVOU0E1YkRFeU1DQXhNakJzTVRJd0lDMHhNakJ4T1NBdE9TQXlNUzQxSUMwNWRESXhMalVnT1d3eE5ERWdNVFF4Y1RrZ09TQTVJREl4TGpWMExUa2dNakV1Tld3dE1USXdJREV5TUd3eE1qQWdNVEl3Y1RrZ09TQTVJREl4TGpWMExUa2dNakV1Tld3dE1UUXhJREUwTVhFdE9TQTVJQzB5TVM0MUlEbDZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdPRFE3SWlCa1BTSk5OakF3SURFeE56ZHhNVEUzSURBZ01qSTBJQzAwTlM0MWRERTROQzQxSUMweE1qTjBNVEl6SUMweE9EUXVOWFEwTlM0MUlDMHlNalIwTFRRMUxqVWdMVEl5TkhRdE1USXpJQzB4T0RRdU5YUXRNVGcwTGpVZ0xURXlNM1F0TWpJMElDMDBOUzQxZEMweU1qUWdORFV1TlhRdE1UZzBMalVnTVRJemRDMHhNak1nTVRnMExqVjBMVFExTGpVZ01qSTBkRFExTGpVZ01qSTBkREV5TXlBeE9EUXVOWFF4T0RRdU5TQXhNak4wTWpJMElEUTFMalY2VFRVME5pQTJNak5zTFRnMElEZzFjUzAzSURjZ0xURTNMalVnTjNRdE1UZ3VOU0F0TjJ3dE1UTTVJQzB4TXpseExUY2dMVGdnTFRjZ0xURTRkRGNnTFRFNElHd3lORElnTFRJME1YRTNJQzA0SURFM0xqVWdMVGgwTVRjdU5TQTRiRE0zTlNBek56VnhOeUEzSURjZ01UY3VOWFF0TnlBeE9DNDFiQzB4TXprZ01UTTVjUzAzSURjZ0xURTNMalVnTjNRdE1UY3VOU0F0TjNvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBNE5Uc2lJR1E5SWswMk1EQWdNVEUzTjNFeE1UY2dNQ0F5TWpRZ0xUUTFMalYwTVRnMExqVWdMVEV5TTNReE1qTWdMVEU0TkM0MWREUTFMalVnTFRJeU5IUXRORFV1TlNBdE1qSTBkQzB4TWpNZ0xURTROQzQxZEMweE9EUXVOU0F0TVRJemRDMHlNalFnTFRRMUxqVjBMVEl5TkNBME5TNDFkQzB4T0RRdU5TQXhNak4wTFRFeU15QXhPRFF1TlhRdE5EVXVOU0F5TWpSME5EVXVOU0F5TWpSME1USXpJREU0TkM0MWRERTROQzQxSURFeU0zUXlNalFnTkRVdU5YcE5OVGc0SURrME1YRXRNamtnTUNBdE5Ua2dMVFV1TlhRdE5qTWdMVEl3TGpWMExUVTRJQzB6T0M0MWRDMDBNUzQxSUMwMk0zUXRNVFl1TlNBdE9Ea3VOU0J4TUNBdE1qVWdNakFnTFRJMWFERXpNWEV6TUNBdE5TQXpOU0F4TVhFMklESXdJREl3TGpVZ01qaDBORFV1TlNBNGNUSXdJREFnTXpFdU5TQXRNVEF1TlhReE1TNDFJQzB5T0M0MWNUQWdMVEl6SUMwM0lDMHpOSFF0TWpZZ0xURTRjUzB4SURBZ0xURXpMalVnTFRSMExURTVMalVnTFRjdU5YUXRNakFnTFRFd0xqVjBMVEl5SUMweE4zUXRNVGd1TlNBdE1qUjBMVEUxTGpVZ0xUTTFkQzA0SUMwME5uRXRNU0F0T0NBMUxqVWdMVEUyTGpWME1qQXVOU0F0T0M0MWFERTNNM0UzSURBZ01qSWdPSFF6TlNBeU9IUXpOeTQxSURRNGRESTVMalVnTnpSME1USWdNVEF3Y1RBZ05EY2dMVEUzSURneklIUXROREl1TlNBMU4zUXROVGt1TlNBek5DNDFkQzAyTkNBeE9IUXROVGtnTkM0MWVrMDJOelVnTkRBd2FDMHhOVEJ4TFRFd0lEQWdMVEUzTGpVZ0xUY3VOWFF0Tnk0MUlDMHhOeTQxZGkweE5UQnhNQ0F0TVRBZ055NDFJQzB4Tnk0MWRERTNMalVnTFRjdU5XZ3hOVEJ4TVRBZ01DQXhOeTQxSURjdU5YUTNMalVnTVRjdU5YWXhOVEJ4TUNBeE1DQXROeTQxSURFM0xqVjBMVEUzTGpVZ055NDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNRGcyT3lJZ1pEMGlUVFl3TUNBeE1UYzNjVEV4TnlBd0lESXlOQ0F0TkRVdU5YUXhPRFF1TlNBdE1USXpkREV5TXlBdE1UZzBMalYwTkRVdU5TQXRNakkwZEMwME5TNDFJQzB5TWpSMExURXlNeUF0TVRnMExqVjBMVEU0TkM0MUlDMHhNak4wTFRJeU5DQXRORFV1TlhRdE1qSTBJRFExTGpWMExURTROQzQxSURFeU0zUXRNVEl6SURFNE5DNDFkQzAwTlM0MUlESXlOSFEwTlM0MUlESXlOSFF4TWpNZ01UZzBMalYwTVRnMExqVWdNVEl6ZERJeU5DQTBOUzQxZWswMk56VWdNVEF3TUdndE1UVXdjUzB4TUNBd0lDMHhOeTQxSUMwM0xqVjBMVGN1TlNBdE1UY3VOWFl0TVRVd2NUQWdMVEV3SURjdU5TQXRNVGN1TlNCME1UY3VOU0F0Tnk0MWFERTFNSEV4TUNBd0lERTNMalVnTnk0MWREY3VOU0F4Tnk0MWRqRTFNSEV3SURFd0lDMDNMalVnTVRjdU5YUXRNVGN1TlNBM0xqVjZUVFkzTlNBM01EQm9MVEkxTUhFdE1UQWdNQ0F0TVRjdU5TQXROeTQxZEMwM0xqVWdMVEUzTGpWMkxUVXdjVEFnTFRFd0lEY3VOU0F0TVRjdU5YUXhOeTQxSUMwM0xqVm9OelYyTFRJd01HZ3ROelZ4TFRFd0lEQWdMVEUzTGpVZ0xUY3VOWFF0Tnk0MUlDMHhOeTQxZGkwMU1IRXdJQzB4TUNBM0xqVWdMVEUzTGpWME1UY3VOU0F0Tnk0MWFETTFNSEV4TUNBd0lERTNMalVnTnk0MWREY3VOU0F4Tnk0MWRqVXdjVEFnTVRBZ0xUY3VOU0F4Tnk0MUlIUXRNVGN1TlNBM0xqVm9MVGMxZGpJM05YRXdJREV3SUMwM0xqVWdNVGN1TlhRdE1UY3VOU0EzTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd09EYzdJaUJrUFNKTk5USTFJREV5TURCb01UVXdjVEV3SURBZ01UY3VOU0F0Tnk0MWREY3VOU0F0TVRjdU5YWXRNVGswY1RFd015QXRNamNnTVRjNExqVWdMVEV3TWk0MWRERXdNaTQxSUMweE56Z3VOV2d4T1RSeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkweE5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB4T1RSeExUSTNJQzB4TURNZ0xURXdNaTQxSUMweE56Z3VOWFF0TVRjNExqVWdMVEV3TWk0MWRpMHhPVFJ4TUNBdE1UQWdMVGN1TlNBdE1UY3VOWFF0TVRjdU5TQXROeTQxYUMweE5UQnhMVEV3SURBZ0xURTNMalVnTnk0MWRDMDNMalVnTVRjdU5YWXhPVFFnY1MweE1ETWdNamNnTFRFM09DNDFJREV3TWk0MWRDMHhNREl1TlNBeE56Z3VOV2d0TVRrMGNTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk1UVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWb01UazBjVEkzSURFd015QXhNREl1TlNBeE56Z3VOWFF4TnpndU5TQXhNREl1TlhZeE9UUnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TlhwTk56QXdJRGc1TTNZdE1UWTRjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TVRVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk1UWTRjUzAyT0NBdE1qTWdMVEV4T1NBdE56UWdkQzAzTkNBdE1URTVhREUyT0hFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRFMU1IRXdJQzB4TUNBdE55NDFJQzB4Tnk0MWRDMHhOeTQxSUMwM0xqVm9MVEUyT0hFeU15QXROamdnTnpRZ0xURXhPWFF4TVRrZ0xUYzBkakUyT0hFd0lERXdJRGN1TlNBeE55NDFkREUzTGpVZ055NDFhREUxTUhFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRFMk9IRTJPQ0F5TXlBeE1Ua2dOelIwTnpRZ01URTVhQzB4TmpoeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZeE5UQnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TldneE5qZ2djUzB5TXlBMk9DQXROelFnTVRFNWRDMHhNVGtnTnpSNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd09EZzdJaUJrUFNKTk5qQXdJREV4TnpkeE1URTNJREFnTWpJMElDMDBOUzQxZERFNE5DNDFJQzB4TWpOME1USXpJQzB4T0RRdU5YUTBOUzQxSUMweU1qUjBMVFExTGpVZ0xUSXlOSFF0TVRJeklDMHhPRFF1TlhRdE1UZzBMalVnTFRFeU0zUXRNakkwSUMwME5TNDFkQzB5TWpRZ05EVXVOWFF0TVRnMExqVWdNVEl6ZEMweE1qTWdNVGcwTGpWMExUUTFMalVnTWpJMGREUTFMalVnTWpJMGRERXlNeUF4T0RRdU5YUXhPRFF1TlNBeE1qTjBNakkwSURRMUxqVjZUVFl3TUNBeE1ESTNjUzB4TVRZZ01DQXRNakUwTGpVZ0xUVTNkQzB4TlRVdU5TQXRNVFUxTGpWMExUVTNJQzB5TVRRdU5YUTFOeUF0TWpFMExqVWdkREUxTlM0MUlDMHhOVFV1TlhReU1UUXVOU0F0TlRkME1qRTBMalVnTlRkME1UVTFMalVnTVRVMUxqVjBOVGNnTWpFMExqVjBMVFUzSURJeE5DNDFkQzB4TlRVdU5TQXhOVFV1TlhRdE1qRTBMalVnTlRkNlRUYzFPU0E0TWpOc05qUWdMVFkwY1RjZ0xUY2dOeUF0TVRjdU5YUXROeUF0TVRjdU5Xd3RNVEkwSUMweE1qUnNNVEkwSUMweE1qUnhOeUF0TnlBM0lDMHhOeTQxZEMwM0lDMHhOeTQxYkMwMk5DQXROalJ4TFRjZ0xUY2dMVEUzTGpVZ0xUZDBMVEUzTGpVZ04yd3RNVEkwSURFeU5Hd3RNVEkwSUMweE1qUnhMVGNnTFRjZ0xURTNMalVnTFRkMExURTNMalVnTjJ3dE5qUWdOalFnY1MwM0lEY2dMVGNnTVRjdU5YUTNJREUzTGpWc01USTBJREV5Tkd3dE1USTBJREV5TkhFdE55QTNJQzAzSURFM0xqVjBOeUF4Tnk0MWJEWTBJRFkwY1RjZ055QXhOeTQxSURkME1UY3VOU0F0TjJ3eE1qUWdMVEV5Tkd3eE1qUWdNVEkwY1RjZ055QXhOeTQxSURkME1UY3VOU0F0TjNvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBNE9Uc2lJR1E5SWswMk1EQWdNVEUzTjNFeE1UY2dNQ0F5TWpRZ0xUUTFMalYwTVRnMExqVWdMVEV5TTNReE1qTWdMVEU0TkM0MWREUTFMalVnTFRJeU5IUXRORFV1TlNBdE1qSTBkQzB4TWpNZ0xURTROQzQxZEMweE9EUXVOU0F0TVRJemRDMHlNalFnTFRRMUxqVjBMVEl5TkNBME5TNDFkQzB4T0RRdU5TQXhNak4wTFRFeU15QXhPRFF1TlhRdE5EVXVOU0F5TWpSME5EVXVOU0F5TWpSME1USXpJREU0TkM0MWRERTROQzQxSURFeU0zUXlNalFnTkRVdU5YcE5OakF3SURFd01qZHhMVEV4TmlBd0lDMHlNVFF1TlNBdE5UZDBMVEUxTlM0MUlDMHhOVFV1TlhRdE5UY2dMVEl4TkM0MWREVTNJQzB5TVRRdU5TQjBNVFUxTGpVZ0xURTFOUzQxZERJeE5DNDFJQzAxTjNReU1UUXVOU0ExTjNReE5UVXVOU0F4TlRVdU5YUTFOeUF5TVRRdU5YUXROVGNnTWpFMExqVjBMVEUxTlM0MUlERTFOUzQxZEMweU1UUXVOU0ExTjNwTk56Z3lJRGM0T0d3eE1EWWdMVEV3Tm5FM0lDMDNJRGNnTFRFM0xqVjBMVGNnTFRFM0xqVnNMVE15TUNBdE16SXhjUzA0SUMwM0lDMHhPQ0F0TjNRdE1UZ2dOMnd0TWpBeUlESXdNM0V0T0NBM0lDMDRJREUzTGpWME9DQXhOeTQxYkRFd05pQXhNRFp4TnlBNElERTNMalVnT0hReE55NDFJQzA0YkRjNUlDMDNPV3d4T1RjZ01UazNjVGNnTnlBeE55NDFJRGQwTVRjdU5TQXROM29pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEE1TURzaUlHUTlJazAyTURBZ01URTNOM0V4TVRjZ01DQXlNalFnTFRRMUxqVjBNVGcwTGpVZ0xURXlNM1F4TWpNZ0xURTROQzQxZERRMUxqVWdMVEl5TkhRdE5EVXVOU0F0TWpJMGRDMHhNak1nTFRFNE5DNDFkQzB4T0RRdU5TQXRNVEl6ZEMweU1qUWdMVFExTGpWMExUSXlOQ0EwTlM0MWRDMHhPRFF1TlNBeE1qTjBMVEV5TXlBeE9EUXVOWFF0TkRVdU5TQXlNalIwTkRVdU5TQXlNalIwTVRJeklERTROQzQxZERFNE5DNDFJREV5TTNReU1qUWdORFV1TlhwTk5qQXdJREV3TWpkeExURXhOaUF3SUMweU1UUXVOU0F0TlRkMExURTFOUzQxSUMweE5UVXVOWFF0TlRjZ0xUSXhOQzQxY1RBZ0xURXlNQ0EyTlNBdE1qSTFJR3cxT0RjZ05UZzNjUzB4TURVZ05qVWdMVEl5TlNBMk5YcE5PVFkxSURneE9Xd3ROVGcwSUMwMU9EUnhNVEEwSUMwMk1pQXlNVGtnTFRZeWNURXhOaUF3SURJeE5DNDFJRFUzZERFMU5TNDFJREUxTlM0MWREVTNJREl4TkM0MWNUQWdNVEUxSUMwMk1pQXlNVGw2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3T1RFN0lpQmtQU0pOTXprZ05UZ3liRFV5TWlBME1qZHhNVFlnTVRNZ01qY3VOU0E0ZERFeExqVWdMVEkyZGkweU9URm9OVFV3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweU1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRVMU1IWXRNamt4Y1RBZ0xUSXhJQzB4TVM0MUlDMHlOblF0TWpjdU5TQTRiQzAxTWpJZ05ESTNjUzB4TmlBeE15QXRNVFlnTXpKME1UWWdNeko2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3T1RJN0lpQmtQU0pOTmpNNUlERXdNRGxzTlRJeUlDMDBNamR4TVRZZ0xURXpJREUySUMwek1uUXRNVFlnTFRNeWJDMDFNaklnTFRReU4zRXRNVFlnTFRFeklDMHlOeTQxSUMwNGRDMHhNUzQxSURJMmRqSTVNV2d0TlRVd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXlNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFhRFUxTUhZeU9URnhNQ0F5TVNBeE1TNDFJREkyZERJM0xqVWdMVGg2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V3T1RNN0lpQmtQU0pOTmpneUlERXhOakZzTkRJM0lDMDFNakp4TVRNZ0xURTJJRGdnTFRJM0xqVjBMVEkySUMweE1TNDFhQzB5T1RGMkxUVTFNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1qQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFkxTlRCb0xUSTVNWEV0TWpFZ01DQXRNallnTVRFdU5YUTRJREkzTGpWc05ESTNJRFV5TW5FeE15QXhOaUF6TWlBeE5uUXpNaUF0TVRaNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVd09UUTdJaUJrUFNKTk5UVXdJREV5TURCb01qQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAxTlRCb01qa3hjVEl4SURBZ01qWWdMVEV4TGpWMExUZ2dMVEkzTGpWc0xUUXlOeUF0TlRJeWNTMHhNeUF0TVRZZ0xUTXlJQzB4Tm5RdE16SWdNVFpzTFRReU55QTFNakp4TFRFeklERTJJQzA0SURJM0xqVjBNallnTVRFdU5XZ3lPVEYyTlRVd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBNU5Uc2lJR1E5SWswMk16a2dNVEV3T1d3MU1qSWdMVFF5TjNFeE5pQXRNVE1nTVRZZ0xUTXlkQzB4TmlBdE16SnNMVFV5TWlBdE5ESTNjUzB4TmlBdE1UTWdMVEkzTGpVZ0xUaDBMVEV4TGpVZ01qWjJNamt4Y1MwNU5DQXRNaUF0TVRneUlDMHlNSFF0TVRjd0xqVWdMVFV5ZEMweE5EY2dMVGt5TGpWMExURXdNQzQxSUMweE16VXVOWEUxSURFd05TQXlOeUF4T1RNdU5YUTJOeTQxSURFMk4zUXhNVE1nTVRNMWRERTJOeUE1TVM0MWRESXlOUzQxSURReWRqSTJNbkV3SURJeElERXhMalVnTWpaME1qY3VOU0F0T0hvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRBNU5qc2lJR1E5SWswNE5UQWdNVEl3TUdnek1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVE13TUhFd0lDMHlNU0F0TVRBdU5TQXRNalYwTFRJMExqVWdNVEJzTFRrMElEazBiQzB5TkRrZ0xUSTBPWEV0T0NBdE55QXRNVGdnTFRkMExURTRJRGRzTFRFd05pQXhNRFp4TFRjZ09DQXROeUF4T0hRM0lERTRiREkwT1NBeU5EbHNMVGswSURrMGNTMHhOQ0F4TkNBdE1UQWdNalF1TlhReU5TQXhNQzQxZWswek5UQWdNR2d0TXpBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXpNREJ4TUNBeU1TQXhNQzQxSURJMWRESTBMalVnTFRFd2JEazBJQzA1Tkd3eU5Ea2dNalE1SUhFNElEY2dNVGdnTjNReE9DQXROMnd4TURZZ0xURXdObkUzSUMwNElEY2dMVEU0ZEMwM0lDMHhPR3d0TWpRNUlDMHlORGxzT1RRZ0xUazBjVEUwSUMweE5DQXhNQ0F0TWpRdU5YUXRNalVnTFRFd0xqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXdPVGM3SWlCa1BTSk5NVEF4TkNBeE1USXdiREV3TmlBdE1UQTJjVGNnTFRnZ055QXRNVGgwTFRjZ0xURTRiQzB5TkRrZ0xUSTBPV3c1TkNBdE9UUnhNVFFnTFRFMElERXdJQzB5TkM0MWRDMHlOU0F0TVRBdU5XZ3RNekF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZek1EQnhNQ0F5TVNBeE1DNDFJREkxZERJMExqVWdMVEV3YkRrMElDMDVOR3d5TkRrZ01qUTVjVGdnTnlBeE9DQTNkREU0SUMwM2VrMHlOVEFnTmpBd2FETXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TXpBd2NUQWdMVEl4SUMweE1DNDFJQzB5TlhRdE1qUXVOU0F4TUd3dE9UUWdPVFFnYkMweU5Ea2dMVEkwT1hFdE9DQXROeUF0TVRnZ0xUZDBMVEU0SURkc0xURXdOaUF4TURaeExUY2dPQ0F0TnlBeE9IUTNJREU0YkRJME9TQXlORGxzTFRrMElEazBjUzB4TkNBeE5DQXRNVEFnTWpRdU5YUXlOU0F4TUM0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UQXhPeUlnWkQwaVRUWXdNQ0F4TVRjM2NURXhOeUF3SURJeU5DQXRORFV1TlhReE9EUXVOU0F0TVRJemRERXlNeUF0TVRnMExqVjBORFV1TlNBdE1qSTBkQzAwTlM0MUlDMHlNalIwTFRFeU15QXRNVGcwTGpWMExURTROQzQxSUMweE1qTjBMVEl5TkNBdE5EVXVOWFF0TWpJMElEUTFMalYwTFRFNE5DNDFJREV5TTNRdE1USXpJREU0TkM0MWRDMDBOUzQxSURJeU5IUTBOUzQxSURJeU5IUXhNak1nTVRnMExqVjBNVGcwTGpVZ01USXpkREl5TkNBME5TNDFlazAzTURRZ09UQXdhQzB5TURoeExUSXdJREFnTFRNeUlDMHhOQzQxZEMwNElDMHpOQzQxYkRVNElDMHpNREp4TkNBdE1qQWdNakV1TlNBdE16UXVOU0IwTXpjdU5TQXRNVFF1TldnMU5IRXlNQ0F3SURNM0xqVWdNVFF1TlhReU1TNDFJRE0wTGpWc05UZ2dNekF5Y1RRZ01qQWdMVGdnTXpRdU5YUXRNeklnTVRRdU5YcE5OamMxSURRd01HZ3RNVFV3Y1MweE1DQXdJQzB4Tnk0MUlDMDNMalYwTFRjdU5TQXRNVGN1TlhZdE1UVXdjVEFnTFRFd0lEY3VOU0F0TVRjdU5YUXhOeTQxSUMwM0xqVm9NVFV3Y1RFd0lEQWdNVGN1TlNBM0xqVjBOeTQxSURFM0xqVjJNVFV3Y1RBZ01UQWdMVGN1TlNBeE55NDFkQzB4Tnk0MUlEY3VOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEV3TWpzaUlHUTlJazB5TmpBZ01USXdNSEU1SURBZ01Ua2dMVEowTVRVZ0xUUnNOU0F0TW5FeU1pQXRNVEFnTkRRZ0xUSXpiREU1TmlBdE1URTRjVEl4SUMweE15QXpOaUF0TWpSeE1qa2dMVEl4SURNM0lDMHhNbkV4TVNBeE15QTBPU0F6Tld3eE9UWWdNVEU0Y1RJeUlERXpJRFExSURJemNURTNJRGNnTXpnZ04zRXlNeUF3SURRM0lDMHhOaTQxZERNM0lDMHpNeTQxYkRFeklDMHhObkV4TkNBdE1qRWdNVGdnTFRRMWJESTFJQzB4TWpOc09DQXRORFJ4TVNBdE9TQTRMalVnTFRFMExqVjBNVGN1TlNBdE5TNDFhRFl4Y1RFd0lEQWdNVGN1TlNBdE55NDFkRGN1TlNBdE1UY3VOWFl0TlRBZ2NUQWdMVEV3SUMwM0xqVWdMVEUzTGpWMExURTNMalVnTFRjdU5XZ3ROVEJ4TFRFd0lEQWdMVEUzTGpVZ0xUY3VOWFF0Tnk0MUlDMHhOeTQxZGkweE56Vm9MVFF3TUhZek1EQm9MVEl3TUhZdE16QXdhQzAwTURCMk1UYzFjVEFnTVRBZ0xUY3VOU0F4Tnk0MWRDMHhOeTQxSURjdU5XZ3ROVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFkQzAzTGpVZ01UY3VOWFkxTUhFd0lERXdJRGN1TlNBeE55NDFkREUzTGpVZ055NDFhRFl4Y1RFeElEQWdNVGdnTTNRM0lEaHhNQ0EwSURrZ05USnNNalVnTVRJNGNUVWdNalVnTVRrZ05EVnhNaUF6SURVZ04zUXhNeTQxSURFMWRESXhMalVnTVRrdU5YUXlOaTQxSURFMUxqVWdkREk1TGpVZ04zcE5PVEUxSURFd056bHNMVEUyTmlBdE1UWXljUzAzSUMwM0lDMDFJQzB4TW5ReE1pQXROV2d5TVRseE1UQWdNQ0F4TlNBM2RESWdNVGRzTFRVeElERTBPWEV0TXlBeE1DQXRNVEVnTVRKMExURTFJQzAyZWswME5qTWdPVEUzYkMweE56Y2dNVFUzY1MwNElEY2dMVEUySURWMExURXhJQzB4TW13dE5URWdMVEUwTTNFdE15QXRNVEFnTWlBdE1UZDBNVFVnTFRkb01qTXhjVEV4SURBZ01USXVOU0ExZEMwMUxqVWdNVEo2VFRVd01DQXdhQzB6TnpWeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZek56Vm9OREF3ZGkwME1EQjZUVEV4TURBZ05EQXdkaTB6TnpVZ2NUQWdMVEV3SUMwM0xqVWdMVEUzTGpWMExURTNMalVnTFRjdU5XZ3RNemMxZGpRd01HZzBNREI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V4TURNN0lpQmtQU0pOTVRFMk5TQXhNVGt3Y1RnZ015QXlNU0F0Tmk0MWRERXpJQzB4Tnk0MWNTMHlJQzB4TnpnZ0xUSTBMalVnTFRNeU15NDFkQzAxTlM0MUlDMHlORFV1TlhRdE9EY2dMVEUzTkM0MWRDMHhNREl1TlNBdE1URTRMalYwTFRFeE9DQXROamd1TlhRdE1URTRMalVnTFRNemRDMHhNakFnTFRRdU5YUXRNVEExSURrdU5YUXRPVEFnTVRZdU5YRXROakVnTVRJZ0xUYzRJREV4Y1MwMElERWdMVEV5TGpVZ01IUXRNelFnTFRFMExqVjBMVFV5TGpVZ0xUUXdMalZzTFRFMU15QXRNVFV6Y1MweU5pQXRNalFnTFRNM0lDMHhOQzQxZEMweE1TQTBNeTQxY1RBZ05qUWdORElnTVRBeWNUZ2dPQ0ExTUM0MUlEUTFJSFEyTmk0MUlEVTRjVEU1SURFM0lETTFJRFEzZERFeklEWXhjUzA1SURVMUlDMHhNQ0F4TURJdU5YUTNJREV4TVhRek55QXhNekIwTnpnZ01USTVMalZ4TXprZ05URWdPREFnT0RoME9Ea3VOU0EyTXk0MWREazBMalVnTkRWME1URXpMalVnTXpaME1USTVJRE14ZERFMU55NDFJRE0zZERFNE1pQTBOeTQxZWsweE1URTJJREV3T1RoeExUZ2dPU0F0TWpJdU5TQXRNM1F0TkRVdU5TQXROVEJ4TFRNNElDMDBOeUF0TVRFNUlDMHhNRE11TlhRdE1UUXlJQzA0T1M0MWJDMDJNaUF0TXpOeExUVTJJQzB6TUNBdE1UQXlJQzAxTjNRdE1UQTBJQzAyT0hRdE1UQXlMalVnTFRnd0xqVjBMVGcxTGpVZ0xUa3hJSFF0TmpRZ0xURXdOQzQxY1MweU5DQXROVFlnTFRNeElDMDROblF5SUMwek1uUXpNUzQxSURFM0xqVjBOVFV1TlNBMU9TNDFjVEkxSURNd0lEazBJRGMxTGpWME1USTFMalVnTnpjdU5YUXhORGN1TlNBNE1YRTNNQ0F6TnlBeE1UZ3VOU0EyT1hReE1ESWdOemt1TlhRNU9TQXhNVEYwT0RZdU5TQXhORGd1TlhFeU1pQTFNQ0F5TkNBMk1IUXROaUF4T1hvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFd05Ec2lJR1E5SWswMk5UTWdNVEl6TVhFdE16a2dMVFkzSUMwMU5DNDFJQzB4TXpGMExURXdMalVnTFRFeE5DNDFkREkwTGpVZ0xUazJMalYwTkRjdU5TQXRPREIwTmpNdU5TQXROakl1TlhRMk9DNDFJQzAwTmk0MWREWTFJQzB6TUhFdE5DQTNJQzB4Tnk0MUlETTFkQzB4T0M0MUlETTVMalYwTFRFM0lETTVMalYwTFRFM0lEUXpkQzB4TXlBME1uUXRPUzQxSURRMExqVjBMVElnTkRKME5DQTBNM1F4TXk0MUlETTVkREl6SURNNExqVnhPVFlnTFRReUlERTJOU0F0TVRBM0xqVjBNVEExSUMweE16aDBOVElnTFRFMU5uUXhNeUF0TVRVNWRDMHhPU0F0TVRRNUxqVnhMVEV6SUMwMU5TQXRORFFnTFRFd05pNDFJSFF0TmpnZ0xUZzNkQzAzT0M0MUlDMDJOQzQxZEMwM01pNDFJQzAwTlhRdE5UTWdMVEl5Y1MwM01pQXRNaklnTFRFeU55QXRNVEZ4TFRNeElEWWdMVEV6SURFNWNUWWdNeUF4TnlBM2NURXpJRFVnTXpJdU5TQXlNWFEwTVNBME5IUXpPQzQxSURZekxqVjBNakV1TlNBNE1TNDFkQzAyTGpVZ09UUXVOWFF0TlRBZ01UQTNkQzB4TURRZ01URTFMalZ4TVRBZ0xURXdOQ0F0TUM0MUlDMHhPRGwwTFRNM0lDMHhOREF1TlhRdE5qVWdMVGt6ZEMwNE5DQXROVEowTFRrekxqVWdMVEV4ZEMwNU5TQXlOQzQxY1MwNE1DQXpOaUF0TVRNeExqVWdNVEUwZEMwMU15NDFJREUzTVhFdE1pQXlNeUF3SURRNUxqVWdkRFF1TlNBMU1pNDFkREV6TGpVZ05UWjBNamN1TlNBMk1IUTBOaUEyTkM0MWREWTVMalVnTmpndU5YRXRPQ0F0TlRNZ0xUVWdMVEV3TWk0MWRERTNMalVnTFRrd2RETTBJQzAyT0M0MWREUTBMalVnTFRNNWREUTVJQzB5Y1RNeElERXpJRE00TGpVZ016WjBMVFF1TlNBMU5YUXRNamtnTmpRdU5YUXRNellnTnpWMExUSTJJRGMxTGpWeExURTFJRGcxSURJZ01UWXhMalYwTlRNdU5TQXhNamd1TlhRNE5TNDFJRGt5TGpWME9UTXVOU0EyTVhRNE1TNDFJREkxTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE1EVTdJaUJrUFNKTk5qQXdJREV3T1RSeE9ESWdNQ0F4TmpBdU5TQXRNakl1TlhReE5EQWdMVFU1ZERFeE5pNDFJQzA0TWk0MWREazBMalVnTFRrMWREWTRJQzA1TlhRME1pNDFJQzA0TWk0MWRERTBJQzAxTnk0MWRDMHhOQ0F0TlRjdU5YUXRORE1nTFRneUxqVjBMVFk0TGpVZ0xUazFkQzA1TkM0MUlDMDVOWFF0TVRFMkxqVWdMVGd5TGpWMExURTBNQ0F0TlRsMExURTFPUzQxSUMweU1pNDFkQzB4TlRrdU5TQXlNaTQxZEMweE5EQWdOVGwwTFRFeE5pNDFJRGd5TGpWMExUazBMalVnT1RWMExUWTRMalVnT1RWMExUUXpJRGd5TGpWMExURTBJRFUzTGpWME1UUWdOVGN1TlhRME1pNDFJRGd5TGpWME5qZ2dPVFVnZERrMExqVWdPVFYwTVRFMkxqVWdPREl1TlhReE5EQWdOVGwwTVRZd0xqVWdNakl1TlhwTk9EZzRJRGd5T1hFdE1UVWdNVFVnTFRFNElERXlkRFVnTFRJeWNUSTFJQzAxTnlBeU5TQXRNVEU1Y1RBZ0xURXlOQ0F0T0RnZ0xUSXhNblF0TWpFeUlDMDRPSFF0TWpFeUlEZzRkQzA0T0NBeU1USnhNQ0ExT1NBeU15QXhNVFJ4T0NBeE9TQTBMalVnTWpKMExURTNMalVnTFRFeWNTMDNNQ0F0TmprZ0xURTJNQ0F0TVRnMGNTMHhNeUF0TVRZZ0xURTFJQzAwTUM0MWREa2dMVFF5TGpWeE1qSWdMVE0ySURRM0lDMDNNWFEzTUNBdE9ESjBPVEl1TlNBdE9ERjBNVEV6SUMwMU9DNDFkREV6TXk0MUlDMHlOQzQxSUhReE16TXVOU0F5TkhReE1UTWdOVGd1TlhRNU1pNDFJRGd4TGpWME56QWdPREV1TlhRME55QTNNQzQxY1RFeElERTRJRGtnTkRJdU5YUXRNVFFnTkRFdU5YRXRPVEFnTVRFM0lDMHhOak1nTVRnNWVrMDBORGdnTnpJM2JDMHpOU0F0TXpaeExURTFJQzB4TlNBdE1Ua3VOU0F0TXpndU5YUTBMalVnTFRReExqVnhNemNnTFRZNElEa3pJQzB4TVRaeE1UWWdMVEV6SURNNExqVWdMVEV4ZERNMkxqVWdNVGRzTXpVZ016UnhNVFFnTVRVZ01USXVOU0F6TXk0MWRDMHhOaTQxSURNekxqVnhMVFEwSURRMElDMDRPU0F4TVRkeExURXhJREU0SUMweU9DQXlNSFF0TXpJZ0xURXllaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVEEyT3lJZ1pEMGlUVFU1TWlBd2FDMHhORGhzTXpFZ01USXdjUzA1TVNBeU1DQXRNVGMxTGpVZ05qZ3VOWFF0TVRRekxqVWdNVEEyTGpWMExURXdNeTQxSURFeE9YUXROall1TlNBeE1UQjBMVEl5SURjMmNUQWdNakVnTVRRZ05UY3VOWFEwTWk0MUlEZ3lMalYwTmpnZ09UVjBPVFF1TlNBNU5YUXhNVFl1TlNBNE1pNDFkREUwTUNBMU9YUXhOakF1TlNBeU1pNDFjVFl4SURBZ01USTJJQzB4Tld3ek1pQXhNakZvTVRRNGVrMDVORFFnTnpjd2JEUTNJREU0TVhFeE1EZ2dMVGcxSURFM05pNDFJQzB4T1RKME5qZ3VOU0F0TVRVNWNUQWdMVEkySUMweE9TNDFJQzAzTVhRdE5Ua3VOU0F0TVRBeWRDMDVNeUF0TVRFeUlIUXRNVEk1SUMweE1EUXVOWFF0TVRVNElDMDNOUzQxYkRRMklERTNNM0UzTnlBME9TQXhNellnTVRFM2REazNJREV6TVhFeE1TQXhPQ0E1SURReUxqVjBMVEUwSURReExqVnhMVFUwSURjd0lDMHhNRGNnTVRNd2VrMHpNVEFnT0RJMGNTMDNNQ0F0TmprZ0xURTJNQ0F0TVRnMGNTMHhNeUF0TVRZZ0xURTFJQzAwTUM0MWREa2dMVFF5TGpWeE1UZ2dMVE13SURNNUlDMDJNSFExTnlBdE56QXVOWFEzTkNBdE56TjBPVEFnTFRZeGRERXdOU0F0TkRFdU5XdzBNU0F4TlRSeExURXdOeUF4T0NBdE1UYzRMalVnTVRBeExqVjBMVGN4TGpVZ01Ua3pMalZ4TUNBMU9TQXlNeUF4TVRSeE9DQXhPU0EwTGpVZ01qSWdkQzB4Tnk0MUlDMHhNbnBOTkRRNElEY3lOMnd0TXpVZ0xUTTJjUzB4TlNBdE1UVWdMVEU1TGpVZ0xUTTRMalYwTkM0MUlDMDBNUzQxY1RNM0lDMDJPQ0E1TXlBdE1URTJjVEUySUMweE15QXpPQzQxSUMweE1YUXpOaTQxSURFM2JERXlJREV4YkRJeUlEZzJiQzB6SURSeExUUTBJRFEwSUMwNE9TQXhNVGR4TFRFeElERTRJQzB5T0NBeU1IUXRNeklnTFRFeWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UQTNPeUlnWkQwaVRTMDVNQ0F4TURCc05qUXlJREV3TmpaeE1qQWdNekVnTkRnZ01qZ3VOWFEwT0NBdE16VXVOV3cyTkRJZ0xURXdOVFp4TWpFZ0xUTXlJRGN1TlNBdE5qY3VOWFF0TlRBdU5TQXRNelV1TldndE1USTVOSEV0TXpjZ01DQXROVEF1TlNBek5IUTNMalVnTmpaNlRURTFOU0F5TURCb016UTFkamMxY1RBZ01UQWdOeTQxSURFM0xqVjBNVGN1TlNBM0xqVm9NVFV3Y1RFd0lEQWdNVGN1TlNBdE55NDFkRGN1TlNBdE1UY3VOWFl0TnpWb016UTFiQzAwTkRVZ056SXplazAwT1RZZ056QXdhREl3T0hFeU1DQXdJRE15SUMweE5DNDFkRGdnTFRNMExqVnNMVFU0SUMweU5USWdjUzAwSUMweU1DQXRNakV1TlNBdE16UXVOWFF0TXpjdU5TQXRNVFF1TldndE5UUnhMVEl3SURBZ0xUTTNMalVnTVRRdU5YUXRNakV1TlNBek5DNDFiQzAxT0NBeU5USnhMVFFnTWpBZ09DQXpOQzQxZERNeUlERTBMalY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V4TURnN0lpQmtQU0pOTmpVd0lERXlNREJ4TmpJZ01DQXhNRFlnTFRRMGREUTBJQzB4TURaMkxUTXpPV3d6TmpNZ0xUTXlOWEV4TlNBdE1UUWdNallnTFRNNExqVjBNVEVnTFRRMExqVjJMVFF4Y1RBZ0xUSXdJQzB4TWlBdE1qWXVOWFF0TWprZ05TNDFiQzB6TlRrZ01qUTVkaTB5TmpOeE1UQXdJQzA1TXlBeE1EQWdMVEV4TTNZdE5qUnhNQ0F0TWpFZ0xURXpJQzB5T1hRdE16SWdNV3d0TWpBMUlERXlPR3d0TWpBMUlDMHhNamh4TFRFNUlDMDVJQzB6TWlBdE1YUXRNVE1nTWpsMk5qUnhNQ0F5TUNBeE1EQWdNVEV6ZGpJMk0yd3RNelU1SUMweU5EbHhMVEUzSUMweE1pQXRNamtnTFRVdU5YUXRNVElnTWpZdU5YWTBNU0J4TUNBeU1DQXhNU0EwTkM0MWRESTJJRE00TGpWc016WXpJRE15TlhZek16bHhNQ0EyTWlBME5DQXhNRFowTVRBMklEUTBlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVEE1T3lJZ1pEMGlUVGcxTUNBeE1qQXdhREV3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE5UQm9OVEJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRFMU1HZ3RNVEV3TUhZeE5UQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWFEVXdkalV3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOV2d4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUVXdhRFV3TUhZMU1IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRURXhNREFnT0RBd2RpMDNOVEJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalVnZEMwek5TNDFJQzB4TkM0MWFDMHhNREF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZM05UQm9NVEV3TUhwTk1UQXdJRFl3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk16QXdJRFl3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk5UQXdJRFl3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk56QXdJRFl3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk9UQXdJRFl3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk1UQXdJRFF3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk16QXdJRFF3TUhZdE1UQXdhREV3TUhZeE1EQm9MVEV3TUhwTk5UQXdJRFF3TUNCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRUY3dNQ0EwTURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRUa3dNQ0EwTURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRURXdNQ0F5TURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRUTXdNQ0F5TURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRUVXdNQ0F5TURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRUY3dNQ0F5TURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNlRUa3dNQ0F5TURCMkxURXdNR2d4TURCMk1UQXdhQzB4TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE1UQTdJaUJrUFNKTk1URXpOU0F4TVRZMWJESTBPU0F0TWpNd2NURTFJQzB4TkNBeE5TQXRNelYwTFRFMUlDMHpOV3d0TWpRNUlDMHlNekJ4TFRFMElDMHhOQ0F0TWpRdU5TQXRNVEIwTFRFd0xqVWdNalYyTVRVd2FDMHhOVGxzTFRZd01DQXROakF3YUMweU9URnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalZvTWpBNWJEWXdNQ0EyTURCb01qUXhkakUxTUhFd0lESXhJREV3TGpVZ01qVjBNalF1TlNBdE1UQjZUVFV5TWlBNE1UbHNMVEUwTVNBdE1UUXhiQzB4TWpJZ01USXlhQzB5TURseExUSXhJREFnTFRNMUxqVWdNVFF1TlNCMExURTBMalVnTXpVdU5YWXhNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFhREk1TVhwTk1URXpOU0ExTmpWc01qUTVJQzB5TXpCeE1UVWdMVEUwSURFMUlDMHpOWFF0TVRVZ0xUTTFiQzB5TkRrZ0xUSXpNSEV0TVRRZ0xURTBJQzB5TkM0MUlDMHhNSFF0TVRBdU5TQXlOWFl4TlRCb0xUSTBNV3d0TVRneElERTRNV3d4TkRFZ01UUXhiREV5TWlBdE1USXlhREUxT1hZeE5UQnhNQ0F5TVNBeE1DNDFJREkxZERJMExqVWdMVEV3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRFeE95SWdaRDBpVFRFd01DQXhNVEF3YURFd01EQnhOREVnTUNBM01DNDFJQzB5T1M0MWRESTVMalVnTFRjd0xqVjJMVFl3TUhFd0lDMDBNU0F0TWprdU5TQXROekF1TlhRdE56QXVOU0F0TWprdU5XZ3ROVGsyYkMwek1EUWdMVE13TUhZek1EQm9MVEV3TUhFdE5ERWdNQ0F0TnpBdU5TQXlPUzQxZEMweU9TNDFJRGN3TGpWMk5qQXdjVEFnTkRFZ01qa3VOU0EzTUM0MWREY3dMalVnTWprdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURXhNanNpSUdROUlrMHhOVEFnTVRJd01HZ3lNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRJMU1HZ3RNekF3ZGpJMU1IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUZzFNQ0F4TWpBd2FESXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TWpVd2FDMHpNREIyTWpVd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk1URXdNQ0E0TURCMkxUTXdNSEV3SUMwME1TQXRNeUF0TnpjdU5YUXRNVFVnTFRnNUxqVjBMVE15SUMwNU5uUXROVGdnTFRnNWRDMDRPU0F0TnpkMExURXlPU0F0TlRGMExURTNOQ0F0TWpCMExURTNOQ0F5TUNCMExURXlPU0ExTVhRdE9Ea2dOemQwTFRVNElEZzVkQzB6TWlBNU5uUXRNVFVnT0RrdU5YUXRNeUEzTnk0MWRqTXdNR2d6TURCMkxUSTFNSFl0TWpkMkxUUXlMalYwTVM0MUlDMDBNWFExSUMwek9IUXhNQ0F0TXpWME1UWXVOU0F0TXpCME1qVXVOU0F0TWpRdU5YUXpOU0F0TVRsME5EWXVOU0F0TVRKME5qQWdMVFIwTmpBZ05DNDFkRFEyTGpVZ01USXVOWFF6TlNBeE9TNDFkREkxSURJMUxqVjBNVGNnTXpBdU5YUXhNQ0F6TlhRMUlETTRkRElnTkRBdU5YUXRNQzQxSURReWRqSTFkakkxTUdnek1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhNVE03SWlCa1BTSk5NVEV3TUNBME1URnNMVEU1T0NBdE1UazViQzB6TlRNZ016VXpiQzB6TlRNZ0xUTTFNMnd0TVRrM0lERTVPV3cxTlRFZ05UVXhlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVEUwT3lJZ1pEMGlUVEV4TURFZ056ZzViQzAxTlRBZ0xUVTFNV3d0TlRVeElEVTFNV3d4T1RnZ01UazViRE0xTXlBdE16VXpiRE0xTXlBek5UTjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhNVFU3SWlCa1BTSk5OREEwSURFd01EQm9OelEyY1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkwMU5URm9NVFV3Y1RJeElEQWdNalVnTFRFd0xqVjBMVEV3SUMweU5DNDFiQzB5TXpBZ0xUSTBPWEV0TVRRZ0xURTFJQzB6TlNBdE1UVjBMVE0xSURFMWJDMHlNekFnTWpRNWNTMHhOQ0F4TkNBdE1UQWdNalF1TlhReU5TQXhNQzQxYURFMU1IWTBNREZvTFRNNE1YcE5NVE0xSURrNE5Hd3lNekFnTFRJME9YRXhOQ0F0TVRRZ01UQWdMVEkwTGpWMExUSTFJQzB4TUM0MWFDMHhOVEIyTFRRd01HZ3pPRFZzTWpFMUlDMHlNREJvTFRjMU1IRXRNakVnTUNBdE16VXVOU0F4TkM0MUlIUXRNVFF1TlNBek5TNDFkalUxTUdndE1UVXdjUzB5TVNBd0lDMHlOU0F4TUM0MWRERXdJREkwTGpWc01qTXdJREkwT1hFeE5DQXhOU0F6TlNBeE5YUXpOU0F0TVRWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE1UWTdJaUJrUFNKTk5UWWdNVEl3TUdnNU5IRXhOeUF3SURNeElDMHhNWFF4T0NBdE1qZHNNemdnTFRFMk1tZzRPVFp4TWpRZ01DQXpPU0F0TVRndU5YUXhNQ0F0TkRJdU5Xd3RNVEF3SUMwME56VnhMVFVnTFRJeElDMHlOeUF0TkRJdU5YUXROVFVnTFRJeExqVm9MVFl6TTJ3ME9DQXRNakF3YURVek5YRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YUXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE5UQjJMVFV3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWRDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFkxTUdndE16QXdkaTAxTUNCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVjBMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpVd2FDMHpNWEV0TVRnZ01DQXRNekl1TlNBeE1IUXRNakF1TlNBeE9Xd3ROU0F4TUd3dE1qQXhJRGsyTVdndE5UUnhMVEl3SURBZ0xUTTFJREUwTGpWMExURTFJRE0xTGpWME1UVWdNelV1TlhRek5TQXhOQzQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRFM095SWdaRDBpVFRFeU1EQWdNVEF3TUhZdE1UQXdhQzB4TWpBd2RqRXdNR2d5TURCeE1DQTBNU0F5T1M0MUlEY3dMalYwTnpBdU5TQXlPUzQxYURNd01IRTBNU0F3SURjd0xqVWdMVEk1TGpWME1qa3VOU0F0TnpBdU5XZzFNREI2VFRBZ09EQXdhREV5TURCMkxUZ3dNR2d0TVRJd01IWTRNREI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V4TVRnN0lpQmtQU0pOTWpBd0lEZ3dNR3d0TWpBd0lDMDBNREIyTmpBd2FESXdNSEV3SURReElESTVMalVnTnpBdU5YUTNNQzQxSURJNUxqVm9NekF3Y1RReUlEQWdOekVnTFRJNUxqVjBNamtnTFRjd0xqVm9OVEF3ZGkweU1EQm9MVEV3TURCNlRURTFNREFnTnpBd2JDMHpNREFnTFRjd01HZ3RNVEl3TUd3ek1EQWdOekF3YURFeU1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhNVGs3SWlCa1BTSk5Oak0xSURFeE9EUnNNak13SUMweU5EbHhNVFFnTFRFMElERXdJQzB5TkM0MWRDMHlOU0F0TVRBdU5XZ3RNVFV3ZGkwMk1ERm9NVFV3Y1RJeElEQWdNalVnTFRFd0xqVjBMVEV3SUMweU5DNDFiQzB5TXpBZ0xUSTBPWEV0TVRRZ0xURTFJQzB6TlNBdE1UVjBMVE0xSURFMWJDMHlNekFnTWpRNWNTMHhOQ0F4TkNBdE1UQWdNalF1TlhReU5TQXhNQzQxYURFMU1IWTJNREZvTFRFMU1IRXRNakVnTUNBdE1qVWdNVEF1TlhReE1DQXlOQzQxYkRJek1DQXlORGx4TVRRZ01UVWdNelVnTVRWME16VWdMVEUxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRJd095SWdaRDBpVFRrek5pQTROalJzTWpRNUlDMHlNamx4TVRRZ0xURTFJREUwSUMwek5TNDFkQzB4TkNBdE16VXVOV3d0TWpRNUlDMHlNamx4TFRFMUlDMHhOU0F0TWpVdU5TQXRNVEF1TlhRdE1UQXVOU0F5TkM0MWRqRTFNV2d0TmpBd2RpMHhOVEZ4TUNBdE1qQWdMVEV3TGpVZ0xUSTBMalYwTFRJMUxqVWdNVEF1Tld3dE1qUTVJREl5T1hFdE1UUWdNVFVnTFRFMElETTFMalYwTVRRZ016VXVOV3d5TkRrZ01qSTVjVEUxSURFMUlESTFMalVnTVRBdU5YUXhNQzQxSUMweU5TNDFkaTB4TkRsb05qQXdkakUwT1hFd0lESXhJREV3TGpVZ01qVXVOWFF5TlM0MUlDMHhNQzQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRJeE95SWdaRDBpVFRFeE5qa2dOREF3YkMweE56SWdOek15Y1MwMUlESXpJQzB5TXlBME5TNDFkQzB6T0NBeU1pNDFhQzAyTnpKeExUSXdJREFnTFRNNElDMHlNSFF0TWpNZ0xUUXhiQzB4TnpJZ0xUY3pPV2d4TVRNNGVrMHhNVEF3SURNd01HZ3RNVEF3TUhFdE5ERWdNQ0F0TnpBdU5TQXRNamt1TlhRdE1qa3VOU0F0TnpBdU5YWXRNVEF3Y1RBZ0xUUXhJREk1TGpVZ0xUY3dMalYwTnpBdU5TQXRNamt1TldneE1EQXdjVFF4SURBZ056QXVOU0F5T1M0MWRESTVMalVnTnpBdU5YWXhNREJ4TUNBME1TQXRNamt1TlNBM01DNDFkQzAzTUM0MUlESTVMalY2VFRnd01DQXhNREIyTVRBd2FERXdNSFl0TVRBd2FDMHhNREFnZWsweE1EQXdJREV3TUhZeE1EQm9NVEF3ZGkweE1EQm9MVEV3TUhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFeU1qc2lJR1E5SWsweE1UVXdJREV4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUZzFNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TlhRdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJPRFV3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTVRBd01DQXlNREJzTFRZM05TQXlNREJvTFRNNGJEUTNJQzB5TnpaeE15QXRNVFlnTFRVdU5TQXRNakIwTFRJNUxqVWdMVFJvTFRkb0xUZzBjUzB5TUNBd0lDMHpOQzQxSURFMGRDMHhPQzQxSURNMWNTMDFOU0F6TXpjZ0xUVTFJRE0xTVhZeU5UQjJObkV3SURFMklERWdNak11TlhRMkxqVWdNVFFnZERFM0xqVWdOaTQxYURJd01HdzJOelVnTWpVd2RpMDROVEI2VFRBZ056VXdkaTB5TlRCeExUUWdNQ0F0TVRFZ01DNDFkQzB5TkNBMmRDMHpNQ0F4TlhRdE1qUWdNekIwTFRFeElEUTRMalYyTlRCeE1DQXlOaUF4TUM0MUlEUTJkREkxSURNd2RESTVJREUyZERJMUxqVWdOM29pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEV5TXpzaUlHUTlJazAxTlRNZ01USXdNR2c1TkhFeU1DQXdJREk1SUMweE1DNDFkRE1nTFRJNUxqVnNMVEU0SUMwek4zRTRNeUF0TVRrZ01UUTBJQzA0TWk0MWREYzJJQzB4TkRBdU5XdzJNeUF0TXpJM2JERXhPQ0F0TVRjemFERTNjVEU1SURBZ016TWdMVEUwTGpWME1UUWdMVE0xZEMweE15QXROREF1TlhRdE16RWdMVEkzY1MwNElDMDBJQzB5TXlBdE9TNDFkQzAyTlNBdE1Ua3VOWFF0TVRBeklDMHlOWFF0TVRNeUxqVWdMVEl3ZEMweE5UZ3VOU0F0T1hFdE5UY2dNQ0F0TVRFMUlEVjBMVEV3TkNBeE1uUXRPRGd1TlNBeE5TNDFkQzAzTXk0MUlERTNMalYwTFRVMExqVWdNVFowTFRNMUxqVWdNVEpzTFRFeElEUWdjUzB4T0NBNElDMHpNU0F5T0hRdE1UTWdOREF1TlhReE5DQXpOWFF6TXlBeE5DNDFhREUzYkRFeE9DQXhOek5zTmpNZ016STNjVEUxSURjM0lEYzJJREUwTUhReE5EUWdPRE5zTFRFNElETXljUzAySURFNUlETXVOU0F6TW5ReU9DNDFJREV6ZWswME9UZ2dNVEV3Y1RVd0lDMDJJREV3TWlBdE5uRTFNeUF3SURFd01pQTJjUzB4TWlBdE5Ea2dMVE01TGpVZ0xUYzVMalYwTFRZeUxqVWdMVE13TGpWMExUWXpJRE13TGpWMExUTTVJRGM1TGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE1qUTdJaUJrUFNKTk9EQXdJRGswTm13eU1qUWdOemhzTFRjNElDMHlNalJzTWpNMElDMDBOV3d0TVRnd0lDMHhOVFZzTVRnd0lDMHhOVFZzTFRJek5DQXRORFZzTnpnZ0xUSXlOR3d0TWpJMElEYzRiQzAwTlNBdE1qTTBiQzB4TlRVZ01UZ3diQzB4TlRVZ0xURTRNR3d0TkRVZ01qTTBiQzB5TWpRZ0xUYzRiRGM0SURJeU5Hd3RNak0wSURRMWJERTRNQ0F4TlRWc0xURTRNQ0F4TlRWc01qTTBJRFExYkMwM09DQXlNalJzTWpJMElDMDNPR3cwTlNBeU16UnNNVFUxSUMweE9EQnNNVFUxSURFNE1Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURXlOVHNpSUdROUlrMDJOVEFnTVRJd01HZzFNSEUwTUNBd0lEY3dJQzAwTUM0MWRETXdJQzA0TkM0MWRpMHhOVEJzTFRJNElDMHhNalZvTXpJNGNUUXdJREFnTnpBZ0xUUXdMalYwTXpBZ0xUZzBMalYyTFRFd01IRXdJQzAwTlNBdE1qa2dMVGMwYkMweU16Z2dMVE0wTkhFdE1UWWdMVEkwSUMwek9DQXROREF1TlhRdE5EVWdMVEUyTGpWb0xUSTFNSEV0TnlBd0lDMDBNaUF5TlhRdE5qWWdOVEJzTFRNeElESTFhQzAyTVhFdE5EVWdNQ0F0TnpJdU5TQXhPSFF0TWpjdU5TQTFOM1kwTURCeE1DQXpOaUF5TUNBMk0yd3hORFVnTVRrMmJEazJJREU1T0hFeE15QXlPQ0F6Tnk0MUlEUTRkRFV4TGpVZ01qQjZJRTAyTlRBZ01URXdNR3d0TVRBd0lDMHlNVEpzTFRFMU1DQXRNakV6ZGkwek56Vm9NVEF3YkRFek5pQXRNVEF3YURJeE5Hd3lOVEFnTXpjMWRqRXlOV2d0TkRVd2JEVXdJREl5TlhZeE56Vm9MVFV3ZWswMU1DQTRNREJvTVRBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDFNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xURXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTlRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFeU5qc2lJR1E5SWswMk1EQWdNVEV3TUdneU5UQnhNak1nTUNBME5TQXRNVFl1TlhRek9DQXROREF1Tld3eU16Z2dMVE0wTkhFeU9TQXRNamtnTWprZ0xUYzBkaTB4TURCeE1DQXRORFFnTFRNd0lDMDROQzQxZEMwM01DQXROREF1TldndE16STRjVEk0SUMweE1UZ2dNamdnTFRFeU5YWXRNVFV3Y1RBZ0xUUTBJQzB6TUNBdE9EUXVOWFF0TnpBZ0xUUXdMalZvTFRVd2NTMHlOeUF3SUMwMU1TNDFJREl3ZEMwek55NDFJRFE0YkMwNU5pQXhPVGhzTFRFME5TQXhPVFp4TFRJd0lESTNJQzB5TUNBMk0zWTBNREJ4TUNBek9TQXlOeTQxSURVM2REY3lMalVnTVRob05qRnhNVEkwSURFd01DQXhNemtnTVRBd2VpQk5OVEFnTVRBd01HZ3hNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRVd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TVRBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWTFNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAyTXpZZ01UQXdNR3d0TVRNMklDMHhNREJvTFRFd01IWXRNemMxYkRFMU1DQXRNakV6YkRFd01DQXRNakV5YURVd2RqRTNOV3d0TlRBZ01qSTFhRFExTUhZeE1qVnNMVEkxTUNBek56Vm9MVEl4TkhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFeU56c2lJR1E5SWswek5UWWdPRGN6YkRNMk15QXlNekJ4TXpFZ01UWWdOVE1nTFRac01URXdJQzB4TVRKeE1UTWdMVEV6SURFekxqVWdMVE15ZEMweE1TNDFJQzB6Tkd3dE9EUWdMVEV5TVdnek1ESnhPRFFnTUNBeE16Z2dMVE00ZERVMElDMHhNVEIwTFRVMUlDMHhNVEYwTFRFek9TQXRNemxvTFRFd05td3RNVE14SUMwek16bHhMVFlnTFRJeElDMHhPUzQxSUMwME1YUXRNamd1TlNBdE1qQm9MVE0wTW5FdE55QXdJQzA1TUNBNE1YUXRPRE1nT1RSMk5USTFjVEFnTVRjZ01UUWdNelV1TlhReU9DQXlPQzQxZWswME1EQWdOemt5ZGkwMU1ETnNNVEF3SUMwNE9XZ3lPVE5zTVRNeElETXpPU0J4TmlBeU1TQXhPUzQxSURReGRESTRMalVnTWpCb01qQXpjVEl4SURBZ016QXVOU0F5TlhRd0xqVWdOVEIwTFRNeElESTFhQzAwTlRab0xUZG9MVFpvTFRVdU5YUXROaUF3TGpWMExUVWdNUzQxZEMwMUlESjBMVFFnTWk0MWRDMDBJRFIwTFRJdU5TQTBMalZ4TFRFeUlESTFJRFVnTkRkc01UUTJJREU0TTJ3dE9EWWdPRE42VFRVd0lEZ3dNR2d4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUVXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1UQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFkxTURBZ2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFeU9Ec2lJR1E5SWswME56VWdNVEV3TTJ3ek5qWWdMVEl6TUhFeUlDMHhJRFlnTFRNdU5YUXhOQ0F0TVRBdU5YUXhPQ0F0TVRZdU5YUXhOQzQxSUMweU1IUTJMalVnTFRJeUxqVjJMVFV5TlhFd0lDMHhNeUF0T0RZZ0xUazBkQzA1TXlBdE9ERm9MVE0wTW5FdE1UVWdNQ0F0TWpndU5TQXlNSFF0TVRrdU5TQTBNV3d0TVRNeElETXpPV2d0TVRBMmNTMDROU0F3SUMweE16a3VOU0F6T1hRdE5UUXVOU0F4TVRGME5UUWdNVEV3ZERFek9DQXpPR2d6TURKc0xUZzFJREV5TVhFdE1URWdNVFVnTFRFd0xqVWdNelIwTVRNdU5TQXpNbXd4TVRBZ01URXljVEl5SURJeUlEVXpJRFo2VFRNM01DQTVORFZzTVRRMklDMHhPRE1nY1RFM0lDMHlNaUExSUMwME4zRXRNaUF0TWlBdE15NDFJQzAwTGpWMExUUWdMVFIwTFRRZ0xUSXVOWFF0TlNBdE1uUXROU0F0TVM0MWRDMDJJQzB3TGpWb0xUWm9MVFl1TldndE5tZ3RORGMxZGkweE1EQm9Nakl4Y1RFMUlEQWdNamtnTFRJd2RESXdJQzAwTVd3eE16QWdMVE16T1dneU9UUnNNVEEySURnNWRqVXdNMnd0TXpReUlESXpObnBOTVRBMU1DQTRNREJvTVRBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDFNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xURXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalVnZGpVd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE1qazdJaUJrUFNKTk5UVXdJREV5T1RSeE56SWdNQ0F4TVRFZ0xUVTFkRE01SUMweE16bDJMVEV3Tm13ek16a2dMVEV6TVhFeU1TQXROaUEwTVNBdE1Ua3VOWFF5TUNBdE1qZ3VOWFl0TXpReWNUQWdMVGNnTFRneElDMDVNSFF0T1RRZ0xUZ3phQzAxTWpWeExURTNJREFnTFRNMUxqVWdNVFIwTFRJNExqVWdNamhzTFRrZ01UUnNMVEl6TUNBek5qTnhMVEUySURNeElEWWdOVE5zTVRFeUlERXhNSEV4TXlBeE15QXpNaUF4TXk0MWRETTBJQzB4TVM0MWJERXlNU0F0T0RSMk16QXljVEFnT0RRZ016Z2dNVE00ZERFeE1DQTFOSHBOTmpBd0lEazNNbll5TUROeE1DQXlNU0F0TWpVZ016QXVOWFF0TlRBZ01DNDFJSFF0TWpVZ0xUTXhkaTAwTlRaMkxUZDJMVFoyTFRVdU5YUXRNQzQxSUMwMmRDMHhMalVnTFRWMExUSWdMVFYwTFRJdU5TQXROSFF0TkNBdE5IUXROQzQxSUMweUxqVnhMVEkxSUMweE1pQXRORGNnTld3dE1UZ3pJREUwTm13dE9ETWdMVGcyYkRJek5pQXRNek01YURVd00ydzRPU0F4TURCMk1qa3piQzB6TXprZ01UTXhjUzB5TVNBMklDMDBNU0F4T1M0MWRDMHlNQ0F5T0M0MWVrMDBOVEFnTWpBd2FEVXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TVRBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzAxTURBZ2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXhNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVE13T3lJZ1pEMGlUVE0xTUNBeE1UQXdhRFV3TUhFeU1TQXdJRE0xTGpVZ01UUXVOWFF4TkM0MUlETTFMalYyTVRBd2NUQWdNakVnTFRFMExqVWdNelV1TlhRdE16VXVOU0F4TkM0MWFDMDFNREJ4TFRJeElEQWdMVE0xTGpVZ0xURTBMalYwTFRFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXhOQzQxSUMwek5TNDFkRE0xTGpVZ0xURTBMalY2VFRZd01DQXpNRFoyTFRFd05uRXdJQzA0TkNBdE16a2dMVEV6T1hRdE1URXhJQzAxTlhRdE1URXdJRFUwZEMwek9DQXhNemgyTXpBeWJDMHhNakVnTFRnMGNTMHhOU0F0TVRJZ0xUTTBJQzB4TVM0MWRDMHpNaUF4TXk0MWJDMHhNVElnTVRFd0lIRXRNaklnTWpJZ0xUWWdOVE5zTWpNd0lETTJNM0V4SURJZ015NDFJRFowTVRBdU5TQXhNeTQxZERFMkxqVWdNVGQwTWpBZ01UTXVOWFF5TWk0MUlEWm9OVEkxY1RFeklEQWdPVFFnTFRnemREZ3hJQzA1TUhZdE16UXljVEFnTFRFMUlDMHlNQ0F0TWpndU5YUXROREVnTFRFNUxqVjZUVE13T0NBNU1EQnNMVEl6TmlBdE16TTViRGd6SUMwNE5td3hPRE1nTVRRMmNUSXlJREUzSURRM0lEVnhNaUF0TVNBMExqVWdMVEl1TlhRMElDMDBkREl1TlNBdE5IUXlJQzAxZERFdU5TQXROWFF3TGpVZ0xUWjJMVFV1TlhZdE5uWXROM1l0TkRVMmNUQWdMVEl5SURJMUlDMHpNWFExTUNBd0xqVjBNalVnTXpBdU5TQjJNakF6Y1RBZ01UVWdNakFnTWpndU5YUTBNU0F4T1M0MWJETXpPU0F4TXpGMk1qa3piQzA0T1NBeE1EQm9MVFV3TTNvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFek1Uc2lJR1E5SWswMk1EQWdNVEUzT0hFeE1UZ2dNQ0F5TWpVZ0xUUTFMalYwTVRnMExqVWdMVEV5TTNReE1qTWdMVEU0TkM0MWREUTFMalVnTFRJeU5YUXRORFV1TlNBdE1qSTFkQzB4TWpNZ0xURTROQzQxZEMweE9EUXVOU0F0TVRJemRDMHlNalVnTFRRMUxqVjBMVEl5TlNBME5TNDFkQzB4T0RRdU5TQXhNak4wTFRFeU15QXhPRFF1TlhRdE5EVXVOU0F5TWpWME5EVXVOU0F5TWpWME1USXpJREU0TkM0MWRERTROQzQxSURFeU0zUXlNalVnTkRVdU5YcE5PVEUwSURZek1td3RNamMxSURJeU0zRXRNVFlnTVRNZ0xUSTNMalVnT0hRdE1URXVOU0F0TWpaMkxURXpOMmd0TWpjMUlIRXRNVEFnTUNBdE1UY3VOU0F0Tnk0MWRDMDNMalVnTFRFM0xqVjJMVEUxTUhFd0lDMHhNQ0EzTGpVZ0xURTNMalYwTVRjdU5TQXROeTQxYURJM05YWXRNVE0zY1RBZ0xUSXhJREV4TGpVZ0xUSTJkREkzTGpVZ09Hd3lOelVnTWpJemNURTJJREV6SURFMklETXlkQzB4TmlBek1ub2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURXpNanNpSUdROUlrMDJNREFnTVRFM09IRXhNVGdnTUNBeU1qVWdMVFExTGpWME1UZzBMalVnTFRFeU0zUXhNak1nTFRFNE5DNDFkRFExTGpVZ0xUSXlOWFF0TkRVdU5TQXRNakkxZEMweE1qTWdMVEU0TkM0MWRDMHhPRFF1TlNBdE1USXpkQzB5TWpVZ0xUUTFMalYwTFRJeU5TQTBOUzQxZEMweE9EUXVOU0F4TWpOMExURXlNeUF4T0RRdU5YUXRORFV1TlNBeU1qVjBORFV1TlNBeU1qVjBNVEl6SURFNE5DNDFkREU0TkM0MUlERXlNM1F5TWpVZ05EVXVOWHBOTlRZeElEZzFOV3d0TWpjMUlDMHlNak54TFRFMklDMHhNeUF0TVRZZ0xUTXlkREUySUMwek1td3lOelVnTFRJeU0zRXhOaUF0TVRNZ01qY3VOU0F0T0NCME1URXVOU0F5Tm5ZeE16ZG9NamMxY1RFd0lEQWdNVGN1TlNBM0xqVjBOeTQxSURFM0xqVjJNVFV3Y1RBZ01UQWdMVGN1TlNBeE55NDFkQzB4Tnk0MUlEY3VOV2d0TWpjMWRqRXpOM0V3SURJeElDMHhNUzQxSURJMmRDMHlOeTQxSUMwNGVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UTXpPeUlnWkQwaVRUWXdNQ0F4TVRjNGNURXhPQ0F3SURJeU5TQXRORFV1TlhReE9EUXVOU0F0TVRJemRERXlNeUF0TVRnMExqVjBORFV1TlNBdE1qSTFkQzAwTlM0MUlDMHlNalYwTFRFeU15QXRNVGcwTGpWMExURTROQzQxSUMweE1qTjBMVEl5TlNBdE5EVXVOWFF0TWpJMUlEUTFMalYwTFRFNE5DNDFJREV5TTNRdE1USXpJREU0TkM0MWRDMDBOUzQxSURJeU5YUTBOUzQxSURJeU5YUXhNak1nTVRnMExqVjBNVGcwTGpVZ01USXpkREl5TlNBME5TNDFlazA0TlRVZ05qTTViQzB5TWpNZ01qYzFjUzB4TXlBeE5pQXRNeklnTVRaMExUTXlJQzB4Tm13dE1qSXpJQzB5TnpWeExURXpJQzB4TmlBdE9DQXRNamN1TlNCME1qWWdMVEV4TGpWb01UTTNkaTB5TnpWeE1DQXRNVEFnTnk0MUlDMHhOeTQxZERFM0xqVWdMVGN1TldneE5UQnhNVEFnTUNBeE55NDFJRGN1TlhRM0xqVWdNVGN1TlhZeU56Vm9NVE0zY1RJeElEQWdNallnTVRFdU5YUXRPQ0F5Tnk0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UTTBPeUlnWkQwaVRUWXdNQ0F4TVRjNGNURXhPQ0F3SURJeU5TQXRORFV1TlhReE9EUXVOU0F0TVRJemRERXlNeUF0TVRnMExqVjBORFV1TlNBdE1qSTFkQzAwTlM0MUlDMHlNalYwTFRFeU15QXRNVGcwTGpWMExURTROQzQxSUMweE1qTjBMVEl5TlNBdE5EVXVOWFF0TWpJMUlEUTFMalYwTFRFNE5DNDFJREV5TTNRdE1USXpJREU0TkM0MWRDMDBOUzQxSURJeU5YUTBOUzQxSURJeU5YUXhNak1nTVRnMExqVjBNVGcwTGpVZ01USXpkREl5TlNBME5TNDFlazAyTnpVZ09UQXdhQzB4TlRCeExURXdJREFnTFRFM0xqVWdMVGN1TlhRdE55NDFJQzB4Tnk0MWRpMHlOelZvTFRFek4zRXRNakVnTUNBdE1qWWdMVEV4TGpVZ2REZ2dMVEkzTGpWc01qSXpJQzB5TnpWeE1UTWdMVEUySURNeUlDMHhOblF6TWlBeE5td3lNak1nTWpjMWNURXpJREUySURnZ01qY3VOWFF0TWpZZ01URXVOV2d0TVRNM2RqSTNOWEV3SURFd0lDMDNMalVnTVRjdU5YUXRNVGN1TlNBM0xqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhNelU3SWlCa1BTSk5OakF3SURFeE56WnhNVEUySURBZ01qSXlMalVnTFRRMmRERTROQ0F0TVRJekxqVjBNVEl6TGpVZ0xURTROSFEwTmlBdE1qSXlMalYwTFRRMklDMHlNakl1TlhRdE1USXpMalVnTFRFNE5IUXRNVGcwSUMweE1qTXVOWFF0TWpJeUxqVWdMVFEyZEMweU1qSXVOU0EwTm5RdE1UZzBJREV5TXk0MWRDMHhNak11TlNBeE9EUjBMVFEySURJeU1pNDFkRFEySURJeU1pNDFkREV5TXk0MUlERTROSFF4T0RRZ01USXpMalYwTWpJeUxqVWdORFo2VFRZeU55QXhNVEF4Y1MweE5TQXRNVElnTFRNMkxqVWdMVEl3TGpWMExUTTFMalVnTFRFeWRDMDBNeUF0T0hRdE16a2dMVFl1TlNCeExURTFJQzB6SUMwME5TNDFJREIwTFRRMUxqVWdMVEp4TFRJd0lDMDNJQzAxTVM0MUlDMHlOaTQxZEMwek5DNDFJQzB6TkM0MWNTMHpJQzB4TVNBMkxqVWdMVEl5TGpWME9DNDFJQzB4T0M0MWNTMHpJQzB6TkNBdE1qY3VOU0F0T1RGMExUSTVMalVnTFRjNWNTMDVJQzB6TkNBMUlDMDVNM1E0SUMwNE4zRXdJQzA1SURFM0lDMDBOQzQxZERFMklDMDFPUzQxY1RFeUlEQWdNak1nTFRWME1qTXVOU0F0TVRWME1Ua3VOU0F0TVRSeE1UWWdMVGdnTXpNZ0xURTFkRFF3TGpVZ0xURTFkRE0wTGpVZ0xURXljVEl4SUMwNUlEVXlMalVnTFRNeWREWXdJQzB6T0hRMU55NDFJQzB4TVNCeE55QXRNVFVnTFRNZ0xUTTBkQzB5TWk0MUlDMDBNSFF0T1M0MUlDMHpPSEV4TXlBdE1qRWdNak1nTFRNMExqVjBNamN1TlNBdE1qY3VOWFF6Tmk0MUlDMHhPSEV3SUMwM0lDMHpMalVnTFRFMmRDMHpMalVnTFRFMGREVWdMVEUzY1RFd05DQXRNaUF5TWpFZ01URXljVE13SURJNUlEUTJMalVnTkRkME16UXVOU0EwT1hReU1TQTJNM0V0TVRNZ09DQXRNemNnT0M0MWRDMHpOaUEzTGpWeExURTFJRGNnTFRRNUxqVWdNVFYwTFRVeExqVWdNVGx4TFRFNElEQWdMVFF4SUMwd0xqVjBMVFF6SUMweExqVjBMVFF5SUMwMkxqVjBMVE00SUMweE5pNDFjUzAxTVNBdE16VWdMVFkySUMweE1pQnhMVFFnTVNBdE15NDFJREkxTGpWME1DNDFJREkxTGpWeExUWWdNVE1nTFRJMkxqVWdNVGN1TlhRdE1qUXVOU0EyTGpWeE1TQXhOU0F0TUM0MUlETXdMalYwTFRjZ01qaDBMVEU0TGpVZ01URXVOWFF0TXpFZ0xUSXhjUzB5TXlBdE1qVWdMVFF5SURSeExURTVJREk0SUMwNElEVTRjVFlnTVRZZ01qSWdNakp4TmlBdE1TQXlOaUF0TVM0MWRETXpMalVnTFRSME1Ua3VOU0F0TVRNdU5YRTNJQzB4TWlBeE9DQXRNalIwTWpFdU5TQXRNakF1TlhReU1DQXRNVFYwTVRVdU5TQXRNVEF1Tld3MUlDMHpjVElnTVRJZ055NDFJRE13TGpWME9DQXpOQzQxZEMwd0xqVWdNekp4TFRNZ01UZ2dNeTQxSURJNUlIUXhPQ0F5TWk0MWRERTFMalVnTWpRdU5YRTJJREUwSURFd0xqVWdNelYwT0NBek1YUXhOUzQxSURJeUxqVjBNelFnTWpJdU5YRXROaUF4T0NBeE1DQXpObkU0SURBZ01qUWdMVEV1TlhReU5DNDFJQzB4TGpWME1qQWdOQzQxZERJd0xqVWdNVFV1TlhFdE1UQWdNak1nTFRNeElEUXlMalYwTFRNM0xqVWdNamt1TlhRdE5Ea2dNamQwTFRRekxqVWdNak54TUNBeElESWdPSFF6SURFeExqVjBNUzQxSURFd0xqVjBMVEVnT1M0MWRDMDBMalVnTkM0MWNUTXhJQzB4TXlBMU9DNDFJQzB4TkM0MWRETTRMalVnTWk0MWJERXlJRFZ4TlNBeU9DQXRPUzQxSURRMmRDMHpOaTQxSURJMGRDMDFNQ0F4TlNCMExUUXhJREl3Y1MweE9DQXROQ0F0TXpjZ01IcE5OakV6SURrNU5IRXdJQzB4TnlBNElDMDBNblF4TnlBdE5EVjBPU0F0TWpOeExUZ2dNU0F0TXprdU5TQTFMalYwTFRVeUxqVWdNVEIwTFRNM0lERTJMalZ4TXlBeE1TQXhOaUF5T1M0MWRERTJJREkxTGpWeE1UQWdMVEV3SURFNUlDMHhNSFF4TkNBMmRERXpMalVnTVRRdU5YUXhOaTQxSURFeUxqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhNelk3SWlCa1BTSk5OelUySURFeE5UZHhNVFkwSURreUlETXdOaUF0T1d3dE1qVTVJQzB4TXpoc01UUTFJQzB5TXpKc01qVXhJREV5Tm5FMklDMDRPU0F0TXpRZ0xURTFOaTQxZEMweE1UY2dMVEV4TUM0MWNTMDJNQ0F0TXpRZ0xURXlOeUF0TXprdU5YUXRNVEkySURFMkxqVnNMVFU1TmlBdE5UazJjUzB4TlNBdE1UWWdMVE0yTGpVZ0xURTJkQzB6Tmk0MUlERTJiQzB4TVRFZ01URXdjUzB4TlNBeE5TQXRNVFVnTXpZdU5YUXhOU0F6Tnk0MWJEWXdNQ0ExT1RseExUTTBJREV3TVNBMUxqVWdNakF4TGpWME1UTTFMalVnTVRVMExqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhNemM3SWlCb2IzSnBlaTFoWkhZdGVEMGlNVEl5TUNJZ1pEMGlUVEV3TUNBeE1UazJhREV3TURCeE5ERWdNQ0EzTUM0MUlDMHlPUzQxZERJNUxqVWdMVGN3TGpWMkxURXdNSEV3SUMwME1TQXRNamt1TlNBdE56QXVOWFF0TnpBdU5TQXRNamt1TldndE1UQXdNSEV0TkRFZ01DQXROekF1TlNBeU9TNDFkQzB5T1M0MUlEY3dMalYyTVRBd2NUQWdOREVnTWprdU5TQTNNQzQxZERjd0xqVWdNamt1TlhwTk1URXdNQ0F4TURrMmFDMHlNREIyTFRFd01HZ3lNREIyTVRBd2VrMHhNREFnTnprMmFERXdNREJ4TkRFZ01DQTNNQzQxSUMweU9TNDFkREk1TGpVZ0xUY3dMalYyTFRFd01IRXdJQzAwTVNBdE1qa3VOU0F0TnpBdU5YUXROekF1TlNBdE1qa3VOV2d0TVRBd01DQnhMVFF4SURBZ0xUY3dMalVnTWprdU5YUXRNamt1TlNBM01DNDFkakV3TUhFd0lEUXhJREk1TGpVZ056QXVOWFEzTUM0MUlESTVMalY2VFRFeE1EQWdOamsyYUMwMU1EQjJMVEV3TUdnMU1EQjJNVEF3ZWsweE1EQWdNemsyYURFd01EQnhOREVnTUNBM01DNDFJQzB5T1M0MWRESTVMalVnTFRjd0xqVjJMVEV3TUhFd0lDMDBNU0F0TWprdU5TQXROekF1TlhRdE56QXVOU0F0TWprdU5XZ3RNVEF3TUhFdE5ERWdNQ0F0TnpBdU5TQXlPUzQxZEMweU9TNDFJRGN3TGpWMk1UQXdjVEFnTkRFZ01qa3VOU0EzTUM0MWREY3dMalVnTWprdU5YcE5NVEV3TUNBeU9UWm9MVE13TUhZdE1UQXdhRE13TUhZeE1EQjZJQ0lnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVE00T3lJZ1pEMGlUVEUxTUNBeE1qQXdhRGt3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhRdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0T1RBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YUXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAzTURBZ05UQXdkaTB6TURCc0xUSXdNQ0F0TWpBd2RqVXdNR3d0TXpVd0lEVXdNR2c1TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE16azdJaUJrUFNKTk5UQXdJREV5TURCb01qQXdjVFF4SURBZ056QXVOU0F0TWprdU5YUXlPUzQxSUMwM01DNDFkaTB4TURCb016QXdjVFF4SURBZ056QXVOU0F0TWprdU5YUXlPUzQxSUMwM01DNDFkaTAwTURCb0xUVXdNSFl4TURCb0xUSXdNSFl0TVRBd2FDMDFNREIyTkRBd2NUQWdOREVnTWprdU5TQTNNQzQxZERjd0xqVWdNamt1Tldnek1EQjJNVEF3Y1RBZ05ERWdNamt1TlNBM01DNDFkRGN3TGpVZ01qa3VOWHBOTlRBd0lERXhNREIyTFRFd01HZ3lNREIyTVRBd2FDMHlNREI2VFRFeU1EQWdOREF3ZGkweU1EQnhNQ0F0TkRFZ0xUSTVMalVnTFRjd0xqVjBMVGN3TGpVZ0xUSTVMalZvTFRFd01EQWdjUzAwTVNBd0lDMDNNQzQxSURJNUxqVjBMVEk1TGpVZ056QXVOWFl5TURCb01USXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUwTURzaUlHUTlJazAxTUNBeE1qQXdhRE13TUhFeU1TQXdJREkxSUMweE1DNDFkQzB4TUNBdE1qUXVOV3d0T1RRZ0xUazBiREU1T1NBdE1UazVjVGNnTFRnZ055QXRNVGgwTFRjZ0xURTRiQzB4TURZZ0xURXdObkV0T0NBdE55QXRNVGdnTFRkMExURTRJRGRzTFRFNU9TQXhPVGxzTFRrMElDMDVOSEV0TVRRZ0xURTBJQzB5TkM0MUlDMHhNSFF0TVRBdU5TQXlOWFl6TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWswNE5UQWdNVEl3TUdnek1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVE13TUhFd0lDMHlNU0F0TVRBdU5TQXRNalYwTFRJMExqVWdNVEJzTFRrMElEazBJR3d0TVRrNUlDMHhPVGx4TFRnZ0xUY2dMVEU0SUMwM2RDMHhPQ0EzYkMweE1EWWdNVEEyY1MwM0lEZ2dMVGNnTVRoME55QXhPR3d4T1RrZ01UazViQzA1TkNBNU5IRXRNVFFnTVRRZ0xURXdJREkwTGpWME1qVWdNVEF1TlhwTk16WTBJRFEzTUd3eE1EWWdMVEV3Tm5FM0lDMDRJRGNnTFRFNGRDMDNJQzB4T0d3dE1UazVJQzB4T1Rsc09UUWdMVGswY1RFMElDMHhOQ0F4TUNBdE1qUXVOWFF0TWpVZ0xURXdMalZvTFRNd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJNekF3Y1RBZ01qRWdNVEF1TlNBeU5YUXlOQzQxSUMweE1HdzVOQ0F0T1RSc01UazVJREU1T1NCeE9DQTNJREU0SURkME1UZ2dMVGQ2VFRFd056RWdNamN4YkRrMElEazBjVEUwSURFMElESTBMalVnTVRCME1UQXVOU0F0TWpWMkxUTXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE16QXdjUzB5TVNBd0lDMHlOU0F4TUM0MWRERXdJREkwTGpWc09UUWdPVFJzTFRFNU9TQXhPVGx4TFRjZ09DQXROeUF4T0hRM0lERTRiREV3TmlBeE1EWnhPQ0EzSURFNElEZDBNVGdnTFRkNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE5ERTdJaUJrUFNKTk5UazJJREV4T1RKeE1USXhJREFnTWpNeExqVWdMVFEzTGpWME1Ua3dJQzB4TWpkME1USTNJQzB4T1RCME5EY3VOU0F0TWpNeExqVjBMVFEzTGpVZ0xUSXpNUzQxZEMweE1qY2dMVEU1TUM0MWRDMHhPVEFnTFRFeU4zUXRNak14TGpVZ0xUUTNkQzB5TXpFdU5TQTBOM1F0TVRrd0xqVWdNVEkzZEMweE1qY2dNVGt3TGpWMExUUTNJREl6TVM0MWREUTNJREl6TVM0MWRERXlOeUF4T1RCME1Ua3dMalVnTVRJM2RESXpNUzQxSURRM0xqVjZUVFU1TmlBeE1ERXdjUzB4TVRJZ01DQXRNakEzTGpVZ0xUVTFMalYwTFRFMU1TQXRNVFV4ZEMwMU5TNDFJQzB5TURjdU5YUTFOUzQxSUMweU1EY3VOU0IwTVRVeElDMHhOVEYwTWpBM0xqVWdMVFUxTGpWME1qQTNMalVnTlRVdU5YUXhOVEVnTVRVeGREVTFMalVnTWpBM0xqVjBMVFUxTGpVZ01qQTNMalYwTFRFMU1TQXhOVEYwTFRJd055NDFJRFUxTGpWNlRUUTFOQzQxSURrd05YRXlNaTQxSURBZ016Z3VOU0F0TVRaME1UWWdMVE00TGpWMExURTJJQzB6T1hRdE16Z3VOU0F0TVRZdU5YUXRNemd1TlNBeE5pNDFkQzB4TmlBek9YUXhOaUF6T0M0MWRETTRMalVnTVRaNlRUYzFOQzQxSURrd05YRXlNaTQxSURBZ016Z3VOU0F0TVRaME1UWWdMVE00TGpWMExURTJJQzB6T1hRdE16Z2dMVEUyTGpWeExURTBJREFnTFRJNUlERXdiQzAxTlNBdE1UUTFJSEV4TnlBdE1qTWdNVGNnTFRVeGNUQWdMVE0ySUMweU5TNDFJQzAyTVM0MWRDMDJNUzQxSUMweU5TNDFkQzAyTVM0MUlESTFMalYwTFRJMUxqVWdOakV1TlhFd0lETXlJREl3TGpVZ05UWXVOWFExTVM0MUlESTVMalZzTVRJeUlERXlObXd4SURGeExUa2dNVFFnTFRrZ01qaHhNQ0F5TXlBeE5pQXpPWFF6T0M0MUlERTJlazB6TkRVdU5TQTNNRGx4TWpJdU5TQXdJRE00TGpVZ0xURTJkREUySUMwek9DNDFkQzB4TmlBdE16Z3VOWFF0TXpndU5TQXRNVFowTFRNNExqVWdNVFowTFRFMklETTRMalYwTVRZZ016Z3VOWFF6T0M0MUlERTJlazA0TlRRdU5TQTNNRGx4TWpJdU5TQXdJRE00TGpVZ0xURTJJSFF4TmlBdE16Z3VOWFF0TVRZZ0xUTTRMalYwTFRNNExqVWdMVEUyZEMwek9DNDFJREUyZEMweE5pQXpPQzQxZERFMklETTRMalYwTXpndU5TQXhObm9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUwTWpzaUlHUTlJazAxTkRZZ01UY3piRFEyT1NBME56QnhPVEVnT1RFZ09Ua2dNVGt5Y1RjZ09UZ2dMVFV5SURFM05TNDFkQzB4TlRRZ09UUXVOWEV0TWpJZ05DQXRORGNnTkhFdE16UWdNQ0F0TmpZdU5TQXRNVEIwTFRVMkxqVWdMVEl6ZEMwMU5TNDFJQzB6T0hRdE5EZ2dMVFF4TGpWMExUUTRMalVnTFRRM0xqVnhMVE0zTmlBdE16YzFJQzB6T1RFZ0xUTTVNSEV0TXpBZ0xUSTNJQzAwTlNBdE5ERXVOWFF0TXpjdU5TQXROREYwTFRNeUlDMDBOaTQxZEMweE5pQXRORGN1TlhRdE1TNDFJQzAxTmk0MWNUa2dMVFl5SURVekxqVWdMVGsxZERrNUxqVWdMVE16Y1RjMElEQWdNVEkxSURVeGJEVTBPQ0ExTkRnZ2NUTTJJRE0ySURJd0lEYzFjUzAzSURFMklDMHlNUzQxSURJMmRDMHpNaTQxSURFd2NTMHlOaUF3SUMwMU1DQXRNak54TFRFeklDMHhNaUF0TXprZ0xUTTRiQzB6TkRFZ0xUTXpPSEV0TVRVZ0xURTFJQzB6TlM0MUlDMHhOUzQxZEMwek5DNDFJREV6TGpWMExURTBJRE0wTGpWME1UUWdNelF1TlhFek1qY2dNek16SURNMk1TQXpOamR4TXpVZ016VWdOamN1TlNBMU1TNDFkRGM0TGpVZ01UWXVOWEV4TkNBd0lESTVJQzB4Y1RRMElDMDRJRGMwTGpVZ0xUTTFMalYwTkRNdU5TQXROamd1TlhFeE5DQXRORGNnTWlBdE9UWXVOWFF0TkRjZ0xUZzBMalZ4TFRFeUlDMHhNU0F0TXpJZ0xUTXlJSFF0TnprdU5TQXRPREYwTFRFeE5DNDFJQzB4TVRWMExURXlOQzQxSUMweE1qTXVOWFF0TVRJeklDMHhNVGt1TlhRdE9UWXVOU0F0T0RsMExUVTNJQzAwTlhFdE5UWWdMVEkzSUMweE1qQWdMVEkzY1MwM01DQXdJQzB4TWprZ016SjBMVGt6SURnNWNTMDBPQ0EzT0NBdE16VWdNVGN6ZERneElERTJNMncxTVRFZ05URXhjVGN4SURjeUlERXhNU0E1Tm5FNU1TQTFOU0F4T1RnZ05UVnhPREFnTUNBeE5USWdMVE16Y1RjNElDMHpOaUF4TWprdU5TQXRNVEF6ZERZMkxqVWdMVEUxTkhFeE55QXRPVE1nTFRFeElDMHhPRE11TlhRdE9UUWdMVEUxTmk0MWJDMDBPRElnTFRRM05pQnhMVEUxSUMweE5TQXRNellnTFRFMmRDMHpOeUF4TkhRdE1UY3VOU0F6TkhReE5DNDFJRE0xZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRRek95SWdaRDBpVFRZME9TQTVORGx4TkRnZ05qZ2dNVEE1TGpVZ01UQTBkREV5TVM0MUlETTRMalYwTVRFNExqVWdMVEl3ZERFd01pNDFJQzAyTkhRM01TQXRNVEF3TGpWME1qY2dMVEV5TTNFd0lDMDFOeUF0TXpNdU5TQXRNVEUzTGpWMExUazBJQzB4TWpRdU5YUXRNVEkyTGpVZ0xURXlOeTQxZEMweE5UQWdMVEUxTWk0MWRDMHhORFlnTFRFM05IRXROaklnT0RVZ0xURTBOUzQxSURFM05IUXRNVFV3SURFMU1pNDFkQzB4TWpZdU5TQXhNamN1TlhRdE9UTXVOU0F4TWpRdU5YUXRNek11TlNBeE1UY3VOWEV3SURZMElESTRJREV5TTNRM015QXhNREF1TlhReE1EUWdOalIwTVRFNUlESXdJSFF4TWpBdU5TQXRNemd1TlhReE1EUXVOU0F0TVRBMGVrMDRPVFlnT1RjeWNTMHpNeUF3SUMwMk5DNDFJQzB4T1hRdE5UWXVOU0F0TkRaMExUUTNMalVnTFRVekxqVjBMVFF6TGpVZ0xUUTFMalYwTFRNM0xqVWdMVEU1ZEMwek5pQXhPWFF0TkRBZ05EVXVOWFF0TkRNZ05UTXVOWFF0TlRRZ05EWjBMVFkxTGpVZ01UbHhMVFkzSURBZ0xURXlNaTQxSUMwMU5TNDFkQzAxTlM0MUlDMHhNekl1TlhFd0lDMHlNeUF4TXk0MUlDMDFNWFEwTmlBdE5qVjBOVGN1TlNBdE5qTjBOellnTFRjMWJESXlJQzB5TW5FeE5TQXRNVFFnTkRRZ0xUUTBkRFV3TGpVZ0xUVXhkRFEySUMwME5IUTBNU0F0TXpWME1qTWdMVEV5SUhReU15NDFJREV5ZERReUxqVWdNelowTkRZZ05EUjBOVEl1TlNBMU1uUTBOQ0EwTTNFMElEUWdNVElnTVROeE5ETWdOREVnTmpNdU5TQTJNblExTWlBMU5YUTBOaUExTlhReU5pQTBOblF4TVM0MUlEUTBjVEFnTnprZ0xUVXpJREV6TXk0MWRDMHhNakFnTlRRdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTBORHNpSUdROUlrMDNOell1TlNBeE1qRTBjVGt6TGpVZ01DQXhOVGt1TlNBdE5qWnNNVFF4SUMweE5ERnhOallnTFRZMklEWTJJQzB4TmpCeE1DQXRORElnTFRJNElDMDVOUzQxZEMwMk1pQXRPRGN1Tld3dE1qa2dMVEk1Y1Mwek1TQTFNeUF0TnpjZ09UbHNMVEU0SURFNGJEazFJRGsxYkMweU5EY2dNalE0YkMwek9Ea2dMVE00T1d3eU1USWdMVEl4TW13dE1UQTFJQzB4TURac0xURTVJREU0YkMweE5ERWdNVFF4Y1MwMk5pQTJOaUF0TmpZZ01UVTVkRFkySURFMU9Xd3lPRE1nTWpnemNUWTFJRFkySURFMU9DNDFJRFkyZWswMk1EQWdOekEyYkRFd05TQXhNRFZ4TVRBZ0xUZ2dNVGtnTFRFM2JERTBNU0F0TVRReElIRTJOaUF0TmpZZ05qWWdMVEUxT1hRdE5qWWdMVEUxT1d3dE1qZ3pJQzB5T0ROeExUWTJJQzAyTmlBdE1UVTVJQzAyTm5RdE1UVTVJRFkyYkMweE5ERWdNVFF4Y1MwMk5pQTJOaUF0TmpZZ01UVTVMalYwTmpZZ01UVTVMalZzTlRVZ05UVnhNamtnTFRVMUlEYzFJQzB4TURKc01UZ2dMVEUzYkMwNU5TQXRPVFZzTWpRM0lDMHlORGhzTXpnNUlETTRPWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUwTlRzaUlHUTlJazAyTURNZ01USXdNSEU0TlNBd0lERTJNaUF0TVRWME1USTNJQzB6T0hRM09TQXRORGgwTWprZ0xUUTJkaTA1TlROeE1DQXROREVnTFRJNUxqVWdMVGN3TGpWMExUY3dMalVnTFRJNUxqVm9MVFl3TUhFdE5ERWdNQ0F0TnpBdU5TQXlPUzQxZEMweU9TNDFJRGN3TGpWMk9UVXpjVEFnTWpFZ016QWdORFl1TlhRNE1TQTBPSFF4TWprZ016Y3VOWFF4TmpNZ01UVjZUVE13TUNBeE1EQXdkaTAzTURCb05qQXdkamN3TUdndE5qQXdlazAyTURBZ01qVTBjUzAwTXlBd0lDMDNNeTQxSUMwek1DNDFkQzB6TUM0MUlDMDNNeTQxZERNd0xqVWdMVGN6TGpWME56TXVOU0F0TXpBdU5YUTNNeTQxSURNd0xqVWdkRE13TGpVZ056TXVOWFF0TXpBdU5TQTNNeTQxZEMwM015NDFJRE13TGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE5EWTdJaUJrUFNKTk9UQXlJREV4T0RWc01qZ3pJQzB5T0RKeE1UVWdMVEUxSURFMUlDMHpOblF0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5YUXRNelVnTVRWc0xUTTJJRE0xYkMweU56a2dMVEkyTjNZdE16QXdiQzB5TVRJZ01qRXdiQzB6TURnZ0xUTXdOMnd0TWpnd0lDMHlNRE5zTWpBeklESTRNR3d6TURjZ016QTRiQzB5TVRBZ01qRXlhRE13TUd3eU5qY2dNamM1YkMwek5TQXpObkV0TVRVZ01UUWdMVEUxSURNMWRERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjBNelVnTFRFMWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UUTRPeUlnWkQwaVRUY3dNQ0F4TWpRNGRpMDNPSEV6T0NBdE5TQTNNaTQxSUMweE5DNDFkRGMxTGpVZ0xUTXhMalYwTnpFZ0xUVXpMalYwTlRJZ0xUZzBkREkwSUMweE1UZ3VOV2d0TVRVNWNTMDBJRE0ySUMweE1DNDFJRFU1ZEMweU1TQTBOWFF0TkRBZ016VXVOWFF0TmpRdU5TQXlNQzQxZGkwek1EZHNOalFnTFRFemNUTTBJQzAzSURZMElDMHhOaTQxZERjd0lDMHpNblEyTnk0MUlDMDFNaTQxZERRM0xqVWdMVGd3ZERJd0lDMHhNVEp4TUNBdE1UTTVJQzA0T1NBdE1qSTBkQzB5TkRRZ0xUazNkaTAzTjJndE1UQXdkamM1Y1MweE5UQWdNVFlnTFRJek55QXhNRE54TFRRd0lEUXdJQzAxTWk0MUlEa3pMalVnZEMweE5TNDFJREV6T1M0MWFERXpPWEUxSUMwM055QTBPQzQxSUMweE1qWjBNVEUzTGpVZ0xUWTFkak16Tld3dE1qY2dPSEV0TkRZZ01UUWdMVGM1SURJMkxqVjBMVGN5SURNMmRDMDJNeUExTW5RdE5EQWdOekl1TlhRdE1UWWdPVGh4TUNBM01DQXlOU0F4TWpaME5qY3VOU0E1TW5RNU5DNDFJRFUzZERFeE1DQXlOM1kzTjJneE1EQjZUVFl3TUNBM05UUjJNamMwY1MweU9TQXROQ0F0TlRBZ0xURXhkQzAwTWlBdE1qRXVOWFF0TXpFdU5TQXROREV1TlhRdE1UQXVOU0F0TmpWeE1DQXRNamtnTnlBdE5UQXVOWFF4Tmk0MUlDMHpOSFF5T0M0MUlDMHlNaTQxZERNeExqVWdMVEUwZERNM0xqVWdMVEV3SUhFNUlDMHpJREV6SUMwMGVrMDNNREFnTlRRM2RpMHpNVEJ4TWpJZ01pQTBNaTQxSURZdU5YUTBOU0F4TlM0MWREUXhMalVnTWpkME1qa2dOREowTVRJZ05Ua3VOWFF0TVRJdU5TQTFPUzQxZEMwek9DQTBOQzQxZEMwMU15QXpNWFF0TmpZdU5TQXlOQzQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRRNU95SWdaRDBpVFRVMk1TQXhNVGszY1RnMElEQWdNVFl3TGpVZ0xUUXdkREV5TXk0MUlDMHhNRGt1TlhRME55QXRNVFEzTGpWb0xURTFNM0V3SURRd0lDMHhPUzQxSURjeExqVjBMVFE1TGpVZ05EZ3VOWFF0TlRrdU5TQXlOblF0TlRVdU5TQTVjUzB6TnlBd0lDMDNPU0F0TVRRdU5YUXROaklnTFRNMUxqVnhMVFF4SUMwME5DQXROREVnTFRFd01YRXdJQzB5TmlBeE15NDFJQzAyTTNReU5pNDFJQzAyTVhRek55QXROalp4TmlBdE9TQTVJQzB4TkdneU5ERjJMVEV3TUdndE1UazNjVGdnTFRVd0lDMHlMalVnTFRFeE5YUXRNekV1TlNBdE9UVnhMVFExSUMwMk1pQXRPVGtnTFRFeE1pQnhNelFnTVRBZ09ETWdNVGN1TlhRM01TQTNMalZ4TXpJZ01TQXhNRElnTFRFMmRERXdOQ0F0TVRkeE9ETWdNQ0F4TXpZZ016QnNOVEFnTFRFME4zRXRNekVnTFRFNUlDMDFPQ0F0TXpBdU5YUXROVFVnTFRFMUxqVjBMVFF5SUMwMExqVjBMVFEySUMwd0xqVnhMVEl6SURBZ0xUYzJJREUzZEMweE1URWdNekl1TlhRdE9UWWdNVEV1TlhFdE16a2dMVE1nTFRneUlDMHhOblF0TmpjZ0xUSTFiQzB5TXlBdE1URnNMVFUxSURFME5YRTBJRE1nTVRZZ01URjBNVFV1TlNBeE1DNDFkREV6SURsME1UVXVOU0F4TW5ReE5DNDFJREUwZERFM0xqVWdNVGd1TlhFME9DQTFOU0ExTkNBeE1qWXVOU0IwTFRNd0lERTBNaTQxYUMweU1qRjJNVEF3YURFMk5uRXRNak1nTkRjZ0xUUTBJREV3TkhFdE55QXlNQ0F0TVRJZ05ERXVOWFF0TmlBMU5TNDFkRFlnTmpZdU5YUXlPUzQxSURjd0xqVjBOVGd1TlNBM01YRTVOeUE0T0NBeU5qTWdPRGg2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V4TlRBN0lpQmtQU0pOTkRBd0lETXdNR2d4TlRCeE1qRWdNQ0F5TlNBdE1URjBMVEV3SUMweU5Xd3RNak13SUMweU5UQnhMVEUwSUMweE5TQXRNelVnTFRFMWRDMHpOU0F4Tld3dE1qTXdJREkxTUhFdE1UUWdNVFFnTFRFd0lESTFkREkxSURFeGFERTFNSFk1TURCb01qQXdkaTA1TURCNlRUa3pOU0F4TVRnMGJESXpNQ0F0TWpRNWNURTBJQzB4TkNBeE1DQXRNalF1TlhRdE1qVWdMVEV3TGpWb0xURTFNSFl0T1RBd2FDMHlNREIyT1RBd2FDMHhOVEJ4TFRJeElEQWdMVEkxSURFd0xqVjBNVEFnTWpRdU5Xd3lNekFnTWpRNWNURTBJREUxSURNMUlERTFkRE0xSUMweE5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTFNVHNpSUdROUlrMHhNREF3SURjd01HZ3RNVEF3ZGpFd01HZ3RNVEF3ZGkweE1EQm9MVEV3TUhZMU1EQm9NekF3ZGkwMU1EQjZUVFF3TUNBek1EQm9NVFV3Y1RJeElEQWdNalVnTFRFeGRDMHhNQ0F0TWpWc0xUSXpNQ0F0TWpVd2NTMHhOQ0F0TVRVZ0xUTTFJQzB4TlhRdE16VWdNVFZzTFRJek1DQXlOVEJ4TFRFMElERTBJQzB4TUNBeU5YUXlOU0F4TVdneE5UQjJPVEF3YURJd01IWXRPVEF3ZWswNE1ERWdNVEV3TUhZdE1qQXdhREV3TUhZeU1EQm9MVEV3TUhwTk1UQXdNQ0F6TlRCc0xUSXdNQ0F0TWpVd2FESXdNSFl0TVRBd2FDMHpNREIyTVRVd2JESXdNQ0F5TlRCb0xUSXdNSFl4TURCb016QXdkaTB4TlRCNklDSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UVXlPeUlnWkQwaVRUUXdNQ0F6TURCb01UVXdjVEl4SURBZ01qVWdMVEV4ZEMweE1DQXRNalZzTFRJek1DQXRNalV3Y1MweE5DQXRNVFVnTFRNMUlDMHhOWFF0TXpVZ01UVnNMVEl6TUNBeU5UQnhMVEUwSURFMElDMHhNQ0F5TlhReU5TQXhNV2d4TlRCMk9UQXdhREl3TUhZdE9UQXdlazB4TURBd0lERXdOVEJzTFRJd01DQXRNalV3YURJd01IWXRNVEF3YUMwek1EQjJNVFV3YkRJd01DQXlOVEJvTFRJd01IWXhNREJvTXpBd2RpMHhOVEI2VFRFd01EQWdNR2d0TVRBd2RqRXdNR2d0TVRBd2RpMHhNREJvTFRFd01IWTFNREJvTXpBd2RpMDFNREI2VFRnd01TQTBNREIyTFRJd01HZ3hNREIyTWpBd2FDMHhNREI2SUNJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRVek95SWdaRDBpVFRRd01DQXpNREJvTVRVd2NUSXhJREFnTWpVZ0xURXhkQzB4TUNBdE1qVnNMVEl6TUNBdE1qVXdjUzB4TkNBdE1UVWdMVE0xSUMweE5YUXRNelVnTVRWc0xUSXpNQ0F5TlRCeExURTBJREUwSUMweE1DQXlOWFF5TlNBeE1XZ3hOVEIyT1RBd2FESXdNSFl0T1RBd2VrMHhNREF3SURjd01HZ3RNVEF3ZGpRd01HZ3RNVEF3ZGpFd01HZ3lNREIyTFRVd01IcE5NVEV3TUNBd2FDMHhNREIyTVRBd2FDMHlNREIyTkRBd2FETXdNSFl0TlRBd2VrMDVNREVnTkRBd2RpMHlNREJvTVRBd2RqSXdNR2d0TVRBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UVTBPeUlnWkQwaVRUUXdNQ0F6TURCb01UVXdjVEl4SURBZ01qVWdMVEV4ZEMweE1DQXRNalZzTFRJek1DQXRNalV3Y1MweE5DQXRNVFVnTFRNMUlDMHhOWFF0TXpVZ01UVnNMVEl6TUNBeU5UQnhMVEUwSURFMElDMHhNQ0F5TlhReU5TQXhNV2d4TlRCMk9UQXdhREl3TUhZdE9UQXdlazB4TVRBd0lEY3dNR2d0TVRBd2RqRXdNR2d0TWpBd2RqUXdNR2d6TURCMkxUVXdNSHBOT1RBeElERXhNREIyTFRJd01HZ3hNREIyTWpBd2FDMHhNREI2VFRFd01EQWdNR2d0TVRBd2RqUXdNR2d0TVRBd2RqRXdNR2d5TURCMkxUVXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUxTlRzaUlHUTlJazAwTURBZ016QXdhREUxTUhFeU1TQXdJREkxSUMweE1YUXRNVEFnTFRJMWJDMHlNekFnTFRJMU1IRXRNVFFnTFRFMUlDMHpOU0F0TVRWMExUTTFJREUxYkMweU16QWdNalV3Y1MweE5DQXhOQ0F0TVRBZ01qVjBNalVnTVRGb01UVXdkamt3TUdneU1EQjJMVGt3TUhwTk9UQXdJREV3TURCb0xUSXdNSFl5TURCb01qQXdkaTB5TURCNlRURXdNREFnTnpBd2FDMHpNREIyTWpBd2FETXdNSFl0TWpBd2VrMHhNVEF3SURRd01HZ3ROREF3ZGpJd01HZzBNREIyTFRJd01IcE5NVEl3TUNBeE1EQm9MVFV3TUhZeU1EQm9OVEF3ZGkweU1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhOVFk3SWlCa1BTSk5OREF3SURNd01HZ3hOVEJ4TWpFZ01DQXlOU0F0TVRGMExURXdJQzB5Tld3dE1qTXdJQzB5TlRCeExURTBJQzB4TlNBdE16VWdMVEUxZEMwek5TQXhOV3d0TWpNd0lESTFNSEV0TVRRZ01UUWdMVEV3SURJMWRESTFJREV4YURFMU1IWTVNREJvTWpBd2RpMDVNREI2VFRFeU1EQWdNVEF3TUdndE5UQXdkakl3TUdnMU1EQjJMVEl3TUhwTk1URXdNQ0EzTURCb0xUUXdNSFl5TURCb05EQXdkaTB5TURCNlRURXdNREFnTkRBd2FDMHpNREIyTWpBd2FETXdNSFl0TWpBd2VrMDVNREFnTVRBd2FDMHlNREIyTWpBd2FESXdNSFl0TWpBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UVTNPeUlnWkQwaVRUTTFNQ0F4TVRBd2FEUXdNSEV4TmpJZ01DQXlOVFlnTFRrekxqVjBPVFFnTFRJMU5pNDFkaTAwTURCeE1DQXRNVFkxSUMwNU15NDFJQzB5TlRjdU5YUXRNalUyTGpVZ0xUa3lMalZvTFRRd01IRXRNVFkxSURBZ0xUSTFOeTQxSURreUxqVjBMVGt5TGpVZ01qVTNMalYyTkRBd2NUQWdNVFkxSURreUxqVWdNalUzTGpWME1qVTNMalVnT1RJdU5YcE5PREF3SURrd01HZ3ROVEF3Y1MwME1TQXdJQzAzTUM0MUlDMHlPUzQxZEMweU9TNDFJQzAzTUM0MWRpMDFNREJ4TUNBdE5ERWdNamt1TlNBdE56QXVOWFEzTUM0MUlDMHlPUzQxYURVd01IRTBNU0F3SURjd0xqVWdNamt1TlhReU9TNDFJRGN3TGpVZ2RqVXdNSEV3SURReElDMHlPUzQxSURjd0xqVjBMVGN3TGpVZ01qa3VOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUxT0RzaUlHUTlJazB6TlRBZ01URXdNR2cwTURCeE1UWTFJREFnTWpVM0xqVWdMVGt5TGpWME9USXVOU0F0TWpVM0xqVjJMVFF3TUhFd0lDMHhOalVnTFRreUxqVWdMVEkxTnk0MWRDMHlOVGN1TlNBdE9USXVOV2d0TkRBd2NTMHhOak1nTUNBdE1qVTJMalVnT1RJdU5YUXRPVE11TlNBeU5UY3VOWFkwTURCeE1DQXhOak1nT1RRZ01qVTJMalYwTWpVMklEa3pMalY2VFRnd01DQTVNREJvTFRVd01IRXROREVnTUNBdE56QXVOU0F0TWprdU5YUXRNamt1TlNBdE56QXVOWFl0TlRBd2NUQWdMVFF4SURJNUxqVWdMVGN3TGpWME56QXVOU0F0TWprdU5XZzFNREJ4TkRFZ01DQTNNQzQxSURJNUxqVjBNamt1TlNBM01DNDFJSFkxTURCeE1DQTBNU0F0TWprdU5TQTNNQzQxZEMwM01DNDFJREk1TGpWNlRUUTBNQ0EzTnpCc01qVXpJQzB4T1RCeE1UY2dMVEV5SURFM0lDMHpNSFF0TVRjZ0xUTXdiQzB5TlRNZ0xURTVNSEV0TVRZZ0xURXlJQzB5T0NBdE5pNDFkQzB4TWlBeU5pNDFkalF3TUhFd0lESXhJREV5SURJMkxqVjBNamdnTFRZdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTFPVHNpSUdROUlrMHpOVEFnTVRFd01HZzBNREJ4TVRZeklEQWdNalUyTGpVZ0xUazBkRGt6TGpVZ0xUSTFObll0TkRBd2NUQWdMVEUyTlNBdE9USXVOU0F0TWpVM0xqVjBMVEkxTnk0MUlDMDVNaTQxYUMwME1EQnhMVEUyTlNBd0lDMHlOVGN1TlNBNU1pNDFkQzA1TWk0MUlESTFOeTQxZGpRd01IRXdJREUyTXlBNU1pNDFJREkxTmk0MWRESTFOeTQxSURrekxqVjZUVGd3TUNBNU1EQm9MVFV3TUhFdE5ERWdNQ0F0TnpBdU5TQXRNamt1TlhRdE1qa3VOU0F0TnpBdU5YWXROVEF3Y1RBZ0xUUXhJREk1TGpVZ0xUY3dMalYwTnpBdU5TQXRNamt1TldnMU1EQnhOREVnTUNBM01DNDFJREk1TGpWME1qa3VOU0EzTUM0MUlIWTFNREJ4TUNBME1TQXRNamt1TlNBM01DNDFkQzAzTUM0MUlESTVMalY2VFRNMU1DQTNNREJvTkRBd2NUSXhJREFnTWpZdU5TQXRNVEowTFRZdU5TQXRNamhzTFRFNU1DQXRNalV6Y1MweE1pQXRNVGNnTFRNd0lDMHhOM1F0TXpBZ01UZHNMVEU1TUNBeU5UTnhMVEV5SURFMklDMDJMalVnTWpoME1qWXVOU0F4TW5vaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFMk1Ec2lJR1E5SWswek5UQWdNVEV3TUdnME1EQnhNVFkxSURBZ01qVTNMalVnTFRreUxqVjBPVEl1TlNBdE1qVTNMalYyTFRRd01IRXdJQzB4TmpNZ0xUa3lMalVnTFRJMU5pNDFkQzB5TlRjdU5TQXRPVE11TldndE5EQXdjUzB4TmpNZ01DQXRNalUyTGpVZ09UUjBMVGt6TGpVZ01qVTJkalF3TUhFd0lERTJOU0E1TWk0MUlESTFOeTQxZERJMU55NDFJRGt5TGpWNlRUZ3dNQ0E1TURCb0xUVXdNSEV0TkRFZ01DQXROekF1TlNBdE1qa3VOWFF0TWprdU5TQXROekF1TlhZdE5UQXdjVEFnTFRReElESTVMalVnTFRjd0xqVjBOekF1TlNBdE1qa3VOV2cxTURCeE5ERWdNQ0EzTUM0MUlESTVMalYwTWprdU5TQTNNQzQxSUhZMU1EQnhNQ0EwTVNBdE1qa3VOU0EzTUM0MWRDMDNNQzQxSURJNUxqVjZUVFU0TUNBMk9UTnNNVGt3SUMweU5UTnhNVElnTFRFMklEWXVOU0F0TWpoMExUSTJMalVnTFRFeWFDMDBNREJ4TFRJeElEQWdMVEkyTGpVZ01USjBOaTQxSURJNGJERTVNQ0F5TlROeE1USWdNVGNnTXpBZ01UZDBNekFnTFRFM2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UWXhPeUlnWkQwaVRUVTFNQ0F4TVRBd2FEUXdNSEV4TmpVZ01DQXlOVGN1TlNBdE9USXVOWFE1TWk0MUlDMHlOVGN1TlhZdE5EQXdjVEFnTFRFMk5TQXRPVEl1TlNBdE1qVTNMalYwTFRJMU55NDFJQzA1TWk0MWFDMDBNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWb05EVXdjVFF4SURBZ056QXVOU0F5T1M0MWRESTVMalVnTnpBdU5YWTFNREJ4TUNBME1TQXRNamt1TlNBM01DNDFkQzAzTUM0MUlESTVMalZvTFRRMU1IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJNVEF3SUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRNek9DQTROamRzTXpJMElDMHlPRFJ4TVRZZ0xURTBJREUySUMwek0zUXRNVFlnTFRNemJDMHpNalFnTFRJNE5IRXRNVFlnTFRFMElDMHlOeUF0T1hRdE1URWdNaloyTVRVd2FDMHlOVEJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpJd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWb01qVXdkakUxTUhFd0lESXhJREV4SURJMmRESTNJQzA1ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRZeU95SWdaRDBpVFRjNU15QXhNVGd5YkRrZ0xUbHhPQ0F0TVRBZ05TQXRNamR4TFRNZ0xURXhJQzAzT1NBdE1qSTFMalYwTFRjNElDMHlNakV1Tld3ek1EQWdNWEV5TkNBd0lETXlMalVnTFRFM0xqVjBMVFV1TlNBdE16VXVOWEV0TVNBd0lDMHhNek11TlNBdE1UVTFkQzB5TmpjZ0xUTXhNaTQxZEMweE16Z3VOU0F0TVRZeUxqVnhMVEV5SUMweE5TQXRNallnTFRFMWFDMDViQzA1SURoeExUa2dNVEVnTFRRZ016SnhNaUE1SURReUlERXlNeTQxZERjNUlESXlOQzQxYkRNNUlERXhNR2d0TXpBeWNTMHlNeUF3SUMwek1TQXhPWEV0TVRBZ01qRWdOaUEwTVhFM05TQTROaUF5TURrdU5TQXlNemN1TlNCME1qSTRJREkxTjNRNU9DNDFJREV4TVM0MWNUa2dNVFlnTWpVZ01UWm9PWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUyTXpzaUlHUTlJazB6TlRBZ01URXdNR2cwTURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE5EVXdjUzAwTVNBd0lDMDNNQzQxSUMweU9TNDFkQzB5T1M0MUlDMDNNQzQxZGkwMU1EQnhNQ0F0TkRFZ01qa3VOU0F0TnpBdU5YUTNNQzQxSUMweU9TNDFhRFExTUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1UQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwME1EQnhMVEUyTlNBd0lDMHlOVGN1TlNBNU1pNDFkQzA1TWk0MUlESTFOeTQxZGpRd01DQnhNQ0F4TmpVZ09USXVOU0F5TlRjdU5YUXlOVGN1TlNBNU1pNDFlazA1TXpnZ09EWTNiRE15TkNBdE1qZzBjVEUySUMweE5DQXhOaUF0TXpOMExURTJJQzB6TTJ3dE16STBJQzB5T0RSeExURTJJQzB4TkNBdE1qY2dMVGwwTFRFeElESTJkakUxTUdndE1qVXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl5TURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxYURJMU1IWXhOVEJ4TUNBeU1TQXhNU0F5Tm5ReU55QXRPWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUyTkRzaUlHUTlJazAzTlRBZ01USXdNR2cwTURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUUXdNSEV3SUMweU1TQXRNVEF1TlNBdE1qVjBMVEkwTGpVZ01UQnNMVEV3T1NBeE1EbHNMVE14TWlBdE16RXljUzB4TlNBdE1UVWdMVE0xTGpVZ0xURTFkQzB6TlM0MUlERTFiQzB4TkRFZ01UUXhjUzB4TlNBeE5TQXRNVFVnTXpVdU5YUXhOU0F6TlM0MWJETXhNaUF6TVRKc0xURXdPU0F4TURseExURTBJREUwSUMweE1DQXlOQzQxZERJMUlERXdMalY2VFRRMU5pQTVNREJvTFRFMU5uRXROREVnTUNBdE56QXVOU0F0TWprdU5YUXRNamt1TlNBdE56QXVOWFl0TlRBd0lIRXdJQzAwTVNBeU9TNDFJQzAzTUM0MWREY3dMalVnTFRJNUxqVm9OVEF3Y1RReElEQWdOekF1TlNBeU9TNDFkREk1TGpVZ056QXVOWFl4TkRoc01qQXdJREl3TUhZdE1qazRjVEFnTFRFMk5TQXRPVE11TlNBdE1qVTNMalYwTFRJMU5pNDFJQzA1TWk0MWFDMDBNREJ4TFRFMk5TQXdJQzB5TlRjdU5TQTVNaTQxZEMwNU1pNDFJREkxTnk0MWRqUXdNSEV3SURFMk5TQTVNaTQxSURJMU55NDFkREkxTnk0MUlEa3lMalZvTXpBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1UWTFPeUlnWkQwaVRUWXdNQ0F4TVRnMmNURXhPU0F3SURJeU55NDFJQzAwTmk0MWRERTROeUF0TVRJMWRERXlOU0F0TVRnM2REUTJMalVnTFRJeU55NDFkQzAwTmk0MUlDMHlNamN1TlhRdE1USTFJQzB4T0RkMExURTROeUF0TVRJMWRDMHlNamN1TlNBdE5EWXVOWFF0TWpJM0xqVWdORFl1TlhRdE1UZzNJREV5TlhRdE1USTFJREU0TjNRdE5EWXVOU0F5TWpjdU5YUTBOaTQxSURJeU55NDFkREV5TlNBeE9EZDBNVGczSURFeU5YUXlNamN1TlNBME5pNDFlazAyTURBZ01UQXlNbkV0TVRFMUlEQWdMVEl4TWlBdE5UWXVOWFF0TVRVekxqVWdMVEUxTXk0MWRDMDFOaTQxSUMweU1USjBOVFl1TlNBdE1qRXlJSFF4TlRNdU5TQXRNVFV6TGpWME1qRXlJQzAxTmk0MWRESXhNaUExTmk0MWRERTFNeTQxSURFMU15NDFkRFUyTGpVZ01qRXlkQzAxTmk0MUlESXhNblF0TVRVekxqVWdNVFV6TGpWMExUSXhNaUExTmk0MWVrMDJNREFnTnprMGNUZ3dJREFnTVRNM0lDMDFOM1ExTnlBdE1UTTNkQzAxTnlBdE1UTTNkQzB4TXpjZ0xUVTNkQzB4TXpjZ05UZDBMVFUzSURFek4zUTFOeUF4TXpkME1UTTNJRFUzZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRZMk95SWdaRDBpVFRRMU1DQXhNakF3YURJd01IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNelV3YURJME5YRXlNQ0F3SURJMUlDMHhNWFF0T1NBdE1qWnNMVE00TXlBdE5ESTJjUzB4TkNBdE1UVWdMVE16TGpVZ0xURTFkQzB6TWk0MUlERTFiQzB6TnprZ05ESTJjUzB4TXlBeE5TQXRPQzQxSURJMmRESTFMalVnTVRGb01qVXdkak0xTUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRVd0lETXdNR2d4TURBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHlOVEJvTFRFeE1EQjJNalV3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWG9nVFRrd01DQXlNREIyTFRVd2FERXdNSFkxTUdndE1UQXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVFkzT3lJZ1pEMGlUVFU0TXlBeE1UZ3liRE0zT0NBdE5ETTFjVEUwSUMweE5TQTVJQzB6TVhRdE1qWWdMVEUyYUMweU5EUjJMVEkxTUhFd0lDMHlNQ0F0TVRjZ0xUTTFkQzB6T1NBdE1UVm9MVEl3TUhFdE1qQWdNQ0F0TXpJZ01UUXVOWFF0TVRJZ016VXVOWFl5TlRCb0xUSTFNSEV0TWpBZ01DQXRNalV1TlNBeE5pNDFkRGd1TlNBek1TNDFiRE00TXlBME16RnhNVFFnTVRZZ016TXVOU0F4TjNRek15NDFJQzB4TkhwTk5UQWdNekF3YURFd01EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVEkxTUdndE1URXdNSFl5TlRCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWlCTk9UQXdJREl3TUhZdE5UQm9NVEF3ZGpVd2FDMHhNREI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V4TmpnN0lpQmtQU0pOTXprMklEY3lNMnd6TmprZ016WTVjVGNnTnlBeE55NDFJRGQwTVRjdU5TQXROMnd4TXprZ0xURXpPWEUzSUMwNElEY2dMVEU0TGpWMExUY2dMVEUzTGpWc0xUVXlOU0F0TlRJMWNTMDNJQzA0SUMweE55NDFJQzA0ZEMweE55NDFJRGhzTFRJNU1pQXlPVEZ4TFRjZ09DQXROeUF4T0hRM0lERTRiREV6T1NBeE16bHhPQ0EzSURFNExqVWdOM1F4Tnk0MUlDMDNlazAxTUNBek1EQm9NVEF3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1qVXdhQzB4TVRBd2RqSTFNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZUVGt3TUNBeU1EQjJMVFV3YURFd01IWTFNQ0JvTFRFd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTJPVHNpSUdROUlrMHhNelVnTVRBeU0yd3hORElnTVRReWNURTBJREUwSURNMUlERTBkRE0xSUMweE5HdzNOeUF0Tnpkc0xUSXhNaUF0TWpFeWJDMDNOeUEzTm5FdE1UUWdNVFVnTFRFMElETTJkREUwSURNMWVrMDJOVFVnT0RVMWJESXhNQ0F5TVRCeE1UUWdNVFFnTWpRdU5TQXhNSFF4TUM0MUlDMHlOV3d0TWlBdE5UazVjUzB4SUMweU1DQXRNVFV1TlNBdE16VjBMVE0xTGpVZ0xURTFiQzAxT1RjZ0xURnhMVEl4SURBZ0xUSTFJREV3TGpWME1UQWdNalF1Tld3eU1EZ2dNakE0YkMweE5UUWdNVFUxYkRJeE1pQXlNVEo2VFRVd0lETXdNR2d4TURBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MUlIWXRNalV3YUMweE1UQXdkakkxTUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRrd01DQXlNREIyTFRVd2FERXdNSFkxTUdndE1UQXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVGN3T3lJZ1pEMGlUVE0xTUNBeE1qQXdiRFU1T1NBdE1uRXlNQ0F0TVNBek5TQXRNVFV1TlhReE5TQXRNelV1Tld3eElDMDFPVGR4TUNBdE1qRWdMVEV3TGpVZ0xUSTFkQzB5TkM0MUlERXdiQzB5TURnZ01qQTRiQzB4TlRVZ0xURTFOR3d0TWpFeUlESXhNbXd4TlRVZ01UVTBiQzB5TVRBZ01qRXdjUzB4TkNBeE5DQXRNVEFnTWpRdU5YUXlOU0F4TUM0MWVrMDFNalFnTlRFeWJDMDNOaUF0TnpkeExURTFJQzB4TkNBdE16WWdMVEUwZEMwek5TQXhOR3d0TVRReUlERTBNbkV0TVRRZ01UUWdMVEUwSURNMWRERTBJRE0xYkRjM0lEYzNlazAxTUNBek1EQm9NVEF3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalVnZERFMExqVWdMVE0xTGpWMkxUSTFNR2d0TVRFd01IWXlOVEJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazA1TURBZ01qQXdkaTAxTUdneE1EQjJOVEJvTFRFd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTNNVHNpSUdROUlrMHhNakF3SURFd00yd3RORGd6SURJM05td3RNekUwSUMwek9UbDJOREl6YUMwek9UbHNNVEU1TmlBM09UWjJMVEV3T1RaNlRUUTRNeUEwTWpSMkxUSXpNR3cyT0RNZ09UVXplaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVGN5T3lJZ1pEMGlUVEV4TURBZ01UQXdNSFl0T0RVd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TlRCMk5EQXdhQzAzTURCMkxUUXdNR2d0TVRVd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXhNREF3Y1RBZ01qQWdNVFF1TlNBek5YUXpOUzQxSURFMWFESTFNSFl0TXpBd2FEVXdNSFl6TURCb01UQXdlazAzTURBZ01UQXdNR2d0TVRBd2RqSXdNR2d4TURCMkxUSXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUzTXpzaUlHUTlJazB4TVRBd0lERXdNREJzTFRJZ0xURTBPV3d0TWprNUlDMHlPVGxzTFRrMUlEazFjUzA1SURrZ0xUSXhMalVnT1hRdE1qRXVOU0F0T1d3dE1UUTVJQzB4TkRkb0xUTXhNbll0TkRBd2FDMHhOVEJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01EQnhNQ0F5TUNBeE5DNDFJRE0xZERNMUxqVWdNVFZvTWpVd2RpMHpNREJvTlRBd2RqTXdNR2d4TURCNlRUY3dNQ0F4TURBd2FDMHhNREIyTWpBd2FERXdNSFl0TWpBd2VrMHhNVE15SURZek9Hd3hNRFlnTFRFd05uRTNJQzAzSURjZ0xURTNMalYwTFRjZ0xURTNMalZzTFRReU1DQXROREl4Y1MwNElDMDNJQzB4T0NBdE55QjBMVEU0SURkc0xUSXdNaUF5TUROeExUZ2dOeUF0T0NBeE55NDFkRGdnTVRjdU5Xd3hNRFlnTVRBMmNUY2dPQ0F4Tnk0MUlEaDBNVGN1TlNBdE9HdzNPU0F0Tnpsc01qazNJREk1TjNFM0lEY2dNVGN1TlNBM2RERTNMalVnTFRkNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE56UTdJaUJrUFNKTk1URXdNQ0F4TURBd2RpMHlOamxzTFRFd015QXRNVEF6YkMweE16UWdNVE0wY1MweE5TQXhOU0F0TXpNdU5TQXhOaTQxZEMwek5DNDFJQzB4TWk0MWJDMHlOallnTFRJMk5tZ3RNekk1ZGkwME1EQm9MVEUxTUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk1UQXdNSEV3SURJd0lERTBMalVnTXpWME16VXVOU0F4TldneU5UQjJMVE13TUdnMU1EQjJNekF3YURFd01IcE5OekF3SURFd01EQm9MVEV3TUhZeU1EQm9NVEF3ZGkweU1EQjZUVEV5TURJZ05UY3liRGN3SUMwM01IRXhOU0F0TVRVZ01UVWdMVE0xTGpWMExURTFJQzB6TlM0MWJDMHhNekVnTFRFek1TQnNNVE14SUMweE16RnhNVFVnTFRFMUlERTFJQzB6TlM0MWRDMHhOU0F0TXpVdU5Xd3ROekFnTFRjd2NTMHhOU0F0TVRVZ0xUTTFMalVnTFRFMWRDMHpOUzQxSURFMWJDMHhNekVnTVRNeGJDMHhNekVnTFRFek1YRXRNVFVnTFRFMUlDMHpOUzQxSUMweE5YUXRNelV1TlNBeE5Xd3ROekFnTnpCeExURTFJREUxSUMweE5TQXpOUzQxZERFMUlETTFMalZzTVRNeElERXpNV3d0TVRNeElERXpNWEV0TVRVZ01UVWdMVEUxSURNMUxqVjBNVFVnTXpVdU5XdzNNQ0EzTUhFeE5TQXhOU0F6TlM0MUlERTFkRE0xTGpVZ0xURTFiREV6TVNBdE1UTXhiREV6TVNBeE16RnhNVFVnTVRVZ016VXVOU0F4TlNCME16VXVOU0F0TVRWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE56VTdJaUJrUFNKTk1URXdNQ0F4TURBd2RpMHpNREJvTFRNMU1IRXRNakVnTUNBdE16VXVOU0F0TVRRdU5YUXRNVFF1TlNBdE16VXVOWFl0TVRVd2FDMDFNREIyTFRRd01HZ3RNVFV3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZeE1EQXdjVEFnTWpBZ01UUXVOU0F6TlhRek5TNDFJREUxYURJMU1IWXRNekF3YURVd01IWXpNREJvTVRBd2VrMDNNREFnTVRBd01HZ3RNVEF3ZGpJd01HZ3hNREIyTFRJd01IcE5PRFV3SURZd01HZ3hNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRJMU1HZ3hOVEJ4TWpFZ01DQXlOU0F0TVRBdU5YUXRNVEFnTFRJMExqVWdiQzB5TXpBZ0xUSXpNSEV0TVRRZ0xURTBJQzB6TlNBdE1UUjBMVE0xSURFMGJDMHlNekFnTWpNd2NTMHhOQ0F4TkNBdE1UQWdNalF1TlhReU5TQXhNQzQxYURFMU1IWXlOVEJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVGMyT3lJZ1pEMGlUVEV4TURBZ01UQXdNSFl0TkRBd2JDMHhOalVnTVRZMWNTMHhOQ0F4TlNBdE16VWdNVFYwTFRNMUlDMHhOV3d0TWpZeklDMHlOalZvTFRRd01uWXROREF3YUMweE5UQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkakV3TURCeE1DQXlNQ0F4TkM0MUlETTFkRE0xTGpVZ01UVm9NalV3ZGkwek1EQm9OVEF3ZGpNd01HZ3hNREI2VFRjd01DQXhNREF3YUMweE1EQjJNakF3YURFd01IWXRNakF3ZWswNU16VWdOVFkxYkRJek1DQXRNakk1Y1RFMElDMHhOU0F4TUNBdE1qVXVOWFF0TWpVZ0xURXdMalZvTFRFMU1IWXRNalV3Y1RBZ0xUSXdJQzB4TkM0MUlDMHpOU0IwTFRNMUxqVWdMVEUxYUMweE1EQnhMVEl4SURBZ0xUTTFMalVnTVRWMExURTBMalVnTXpWMk1qVXdhQzB4TlRCeExUSXhJREFnTFRJMUlERXdMalYwTVRBZ01qVXVOV3d5TXpBZ01qSTVjVEUwSURFMUlETTFJREUxZERNMUlDMHhOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUzTnpzaUlHUTlJazAxTUNBeE1UQXdhREV4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxURTFNR2d0TVRJd01IWXhOVEJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazB4TWpBd0lEZ3dNSFl0TlRVd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TVRBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWTFOVEJvTVRJd01IcE5NVEF3SURVd01IWXRNakF3YURRd01IWXlNREJvTFRRd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTNPRHNpSUdROUlrMDVNelVnTVRFMk5Xd3lORGdnTFRJek1IRXhOQ0F0TVRRZ01UUWdMVE0xZEMweE5DQXRNelZzTFRJME9DQXRNak13Y1MweE5DQXRNVFFnTFRJMExqVWdMVEV3ZEMweE1DNDFJREkxZGpFMU1HZ3ROREF3ZGpJd01HZzBNREIyTVRVd2NUQWdNakVnTVRBdU5TQXlOWFF5TkM0MUlDMHhNSHBOTWpBd0lEZ3dNR2d0TlRCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqRXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVm9OVEIyTFRJd01IcE5OREF3SURnd01HZ3RNVEF3ZGpJd01HZ3hNREIyTFRJd01IcE5NVGdnTkRNMWJESTBOeUF5TXpBZ2NURTBJREUwSURJMExqVWdNVEIwTVRBdU5TQXRNalYyTFRFMU1HZzBNREIyTFRJd01HZ3ROREF3ZGkweE5UQnhNQ0F0TWpFZ0xURXdMalVnTFRJMWRDMHlOQzQxSURFd2JDMHlORGNnTWpNd2NTMHhOU0F4TkNBdE1UVWdNelYwTVRVZ016VjZUVGt3TUNBek1EQm9MVEV3TUhZeU1EQm9NVEF3ZGkweU1EQjZUVEV3TURBZ05UQXdhRFV4Y1RJd0lEQWdNelF1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkweE1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0wTGpVZ0xURTBMalZvTFRVeGRqSXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEUzT1RzaUlHUTlJazA0TmpJZ01UQTNNMnd5TnpZZ01URTJjVEkxSURFNElEUXpMalVnT0hReE9DNDFJQzAwTVhZdE1URXdObkV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1qQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFl6T1RkeExUUWdNU0F0TVRFZ05YUXRNalFnTVRjdU5YUXRNekFnTWpsMExUSTBJRFF5ZEMweE1TQTFOaTQxZGpNMU9YRXdJRE14SURFNExqVWdOalYwTkRNdU5TQTFNbnBOTlRVd0lERXlNREJ4TWpJZ01DQXpOQzQxSUMweE1pNDFkREUwTGpVZ0xUSTBMalZzTVNBdE1UTjJMVFExTUhFd0lDMHlPQ0F0TVRBdU5TQXROVGt1TlNCMExUSTFJQzAxTm5RdE1qa2dMVFExZEMweU5TNDFJQzB6TVM0MWJDMHhNQ0F0TVRGMkxUUTBOM0V3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1qQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFkwTkRkeExUUWdOQ0F0TVRFZ01URXVOWFF0TWpRZ016QXVOWFF0TXpBZ05EWjBMVEkwSURVMWRDMHhNU0EyTUhZME5UQnhNQ0F5SURBdU5TQTFMalYwTkNBeE1uUTRMalVnTVRWME1UUXVOU0F4TW5ReU1pNDFJRFV1TlhFeU1DQXdJRE15TGpVZ0xURXlMalYwTVRRdU5TQXRNalF1Tld3eklDMHhNM1l0TXpVd2FERXdNSFl6TlRCMk5TNDFkREl1TlNBeE1pQjBOeUF4TlhReE5TQXhNblF5TlM0MUlEVXVOWEV5TXlBd0lETTFMalVnTFRFeUxqVjBNVE11TlNBdE1qUXVOV3d4SUMweE0zWXRNelV3YURFd01IWXpOVEJ4TUNBeUlEQXVOU0ExTGpWME15QXhNblEzSURFMWRERTFJREV5ZERJMExqVWdOUzQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRnd095SWdaRDBpVFRFeU1EQWdNVEV3TUhZdE5UWnhMVFFnTUNBdE1URWdMVEF1TlhRdE1qUWdMVE4wTFRNd0lDMDNMalYwTFRJMElDMHhOWFF0TVRFZ0xUSTBkaTA0T0RoeE1DQXRNaklnTWpVZ0xUTTBMalYwTlRBZ0xURXpMalZzTWpVZ0xUSjJMVFUyYUMwME1EQjJOVFp4TnpVZ01DQTROeTQxSURZdU5YUXhNaTQxSURRekxqVjJNemswYUMwMU1EQjJMVE01TkhFd0lDMHpOeUF4TWk0MUlDMDBNeTQxZERnM0xqVWdMVFl1TlhZdE5UWm9MVFF3TUhZMU5uRTBJREFnTVRFZ01DNDFkREkwSUROME16QWdOeTQxZERJMElERTFkREV4SURJMGRqZzRPSEV3SURJeUlDMHlOU0F6TkM0MWRDMDFNQ0F4TXk0MUlHd3RNalVnTW5ZMU5tZzBNREIyTFRVMmNTMDNOU0F3SUMwNE55NDFJQzAyTGpWMExURXlMalVnTFRRekxqVjJMVE01TkdnMU1EQjJNemswY1RBZ016Y2dMVEV5TGpVZ05ETXVOWFF0T0RjdU5TQTJMalYyTlRab05EQXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVGd4T3lJZ1pEMGlUVFkzTlNBeE1EQXdhRE0zTlhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1UVXdhQzB4TURWc0xUSTVOU0F0T1RoMk9UaHNMVEl3TUNBeU1EQm9MVFF3TUd3eE1EQWdNVEF3YURNM05YcE5NVEF3SURrd01HZ3pNREJ4TkRFZ01DQTNNQzQxSUMweU9TNDFkREk1TGpVZ0xUY3dMalYyTFRVd01IRXdJQzAwTVNBdE1qa3VOU0F0TnpBdU5YUXROekF1TlNBdE1qa3VOV2d0TXpBd2NTMDBNU0F3SUMwM01DNDFJREk1TGpWMExUSTVMalVnTnpBdU5YWTFNREJ4TUNBME1TQXlPUzQxSURjd0xqVjBOekF1TlNBeU9TNDFlazB4TURBZ09EQXdkaTB5TURCb016QXdkakl3TUNCb0xUTXdNSHBOTVRFd01DQTFNelZzTFRRd01DQXRNVE16ZGpFMk0ydzBNREFnTVRNemRpMHhOak42VFRFd01DQTFNREIyTFRJd01HZ3pNREIyTWpBd2FDMHpNREI2VFRFeE1EQWdNems0ZGkweU5EaHhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRNM05Xd3RNVEF3SUMweE1EQm9MVE0zTld3dE1UQXdJREV3TUdnME1EQnNNakF3SURJd01HZ3hNRFY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V4T0RJN0lpQmtQU0pOTVRjZ01UQXdOMnd4TmpJZ01UWXljVEUzSURFM0lEUXdJREUwZERNM0lDMHlNbXd4TXprZ0xURTVOSEV4TkNBdE1qQWdNVEVnTFRRMExqVjBMVEl3SUMwME1TNDFiQzB4TVRrZ0xURXhPSEV4TURJZ0xURTBNaUF5TWpnZ0xUSTJPSFF5TmpjZ0xUSXlOMnd4TVRrZ01URTRjVEUzSURFM0lEUXlMalVnTVRsME5EUXVOU0F0TVRKc01Ua3lJQzB4TXpaeE1Ua2dMVEUwSURJeUxqVWdMVE0zTGpWMExURXpMalVnTFRRd0xqVnNMVEUyTXlBdE1UWXljUzB6SUMweElDMDVMalVnTFRGMExUSTVMalVnTW5RdE5EY3VOU0EyZEMwMk1pNDFJREUwTGpWMExUYzNMalVnTWpZdU5YUXRPVEFnTkRJdU5TQjBMVEV3TVM0MUlEWXdkQzB4TVRFZ09ETjBMVEV4T1NBeE1EZ3VOWEV0TnpRZ056UWdMVEV6TXk0MUlERTFNQzQxZEMwNU5DNDFJREV6T0M0MWRDMDJNQ0F4TVRrdU5YUXRNelF1TlNBeE1EQjBMVEUxSURjMExqVjBMVFF1TlNBME9Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTRNenNpSUdROUlrMDJNREFnTVRFd01IRTVNaUF3SURFM05TQXRNVEF1TlhReE5ERXVOU0F0TWpkME1UQTRMalVnTFRNMkxqVjBPREV1TlNBdE5EQjBOVE11TlNBdE16ZDBNekVnTFRJM2JEa2dMVEV3ZGkweU1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNemRDMHpOQzQxSUMwNWJDMHlNRElnTXpSeExUSXdJRE1nTFRNMExqVWdNakIwTFRFMExqVWdNemgyTVRRMmNTMHhOREVnTWpRZ0xUTXdNQ0F5TkhRdE16QXdJQzB5TkhZdE1UUTJjVEFnTFRJeElDMHhOQzQxSUMwek9IUXRNelF1TlNBdE1qQnNMVEl3TWlBdE16UnhMVEl3SUMweklDMHpOQzQxSURsMExURTBMalVnTXpOMk1qQXdjVE1nTkNBNUxqVWdNVEF1TlNCME16RWdNalowTlRRZ016Y3VOWFE0TUM0MUlETTVMalYwTVRBNUlETTNMalYwTVRReElESTJMalYwTVRjMUlERXdMalY2VFRZd01DQTNPVFZ4TlRZZ01DQTVOeUF0T1M0MWREWXdJQzB5TXk0MWRETXdJQzB5T0hReE1pQXRNalJzTVNBdE1UQjJMVFV3YkRNMk5TQXRNekF6Y1RFMElDMHhOU0F5TkM0MUlDMDBNSFF4TUM0MUlDMDBOWFl0TWpFeWNUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TVRBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXlNVEp4TUNBeU1DQXhNQzQxSURRMWRESTBMalVnTkRCc016WTFJRE13TTNZMU1DQnhNQ0EwSURFZ01UQXVOWFF4TWlBeU0zUXpNQ0F5T1hRMk1DQXlNaTQxZERrM0lERXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNVGcwT3lJZ1pEMGlUVEV4TURBZ056QXdiQzB5TURBZ0xUSXdNR2d0TmpBd2JDMHlNREFnTWpBd2RqVXdNR2d5TURCMkxUSXdNR2d5TURCMk1qQXdhREl3TUhZdE1qQXdhREl3TUhZeU1EQm9NakF3ZGkwMU1EQjZUVEkxTUNBME1EQm9OekF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZEMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TW13eE16Y2dMVEV3TUdndE9UVXdiREV6TnlBeE1EQm9MVEV5Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhReE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMDFNQ0F4TURCb01URXdNSEV5TVNBd0lETTFMalVnTFRFMExqVWdkREUwTGpVZ0xUTTFMalYyTFRVd2FDMHhNakF3ZGpVd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFNE5Uc2lJR1E5SWswM01EQWdNVEV3TUdndE1UQXdjUzAwTVNBd0lDMDNNQzQxSUMweU9TNDFkQzB5T1M0MUlDMDNNQzQxZGkweE1EQXdhRE13TUhZeE1EQXdjVEFnTkRFZ0xUSTVMalVnTnpBdU5YUXROekF1TlNBeU9TNDFlazB4TVRBd0lEZ3dNR2d0TVRBd2NTMDBNU0F3SUMwM01DNDFJQzB5T1M0MWRDMHlPUzQxSUMwM01DNDFkaTAzTURCb016QXdkamN3TUhFd0lEUXhJQzB5T1M0MUlEY3dMalYwTFRjd0xqVWdNamt1TlhwTk5EQXdJREJvTFRNd01IWTBNREJ4TUNBME1TQXlPUzQxSURjd0xqVjBOekF1TlNBeU9TNDFhREV3TUhFME1TQXdJRGN3TGpVZ0xUSTVMalYwTWprdU5TQXROekF1TlhZdE5EQXdlaUFpSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEU0TmpzaUlHUTlJazB5TURBZ01URXdNR2czTURCeE1USTBJREFnTWpFeUlDMDRPSFE0T0NBdE1qRXlkaTAxTURCeE1DQXRNVEkwSUMwNE9DQXRNakV5ZEMweU1USWdMVGc0YUMwM01EQnhMVEV5TkNBd0lDMHlNVElnT0RoMExUZzRJREl4TW5ZMU1EQnhNQ0F4TWpRZ09EZ2dNakV5ZERJeE1pQTRPSHBOTVRBd0lEa3dNSFl0TnpBd2FEa3dNSFkzTURCb0xUa3dNSHBOTlRBd0lEY3dNR2d0TWpBd2RpMHhNREJvTWpBd2RpMHpNREJvTFRNd01IWXhNREJvTWpBd2RqRXdNR2d0TWpBd2RqTXdNR2d6TURCMkxURXdNSHBOT1RBd0lEY3dNSFl0TXpBd2JDMHhNREFnTFRFd01HZ3RNakF3ZGpVd01HZ3lNREI2SUUwM01EQWdOekF3ZGkwek1EQm9NVEF3ZGpNd01HZ3RNVEF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRnM095SWdaRDBpVFRJd01DQXhNVEF3YURjd01IRXhNalFnTUNBeU1USWdMVGc0ZERnNElDMHlNVEoyTFRVd01IRXdJQzB4TWpRZ0xUZzRJQzB5TVRKMExUSXhNaUF0T0Rob0xUY3dNSEV0TVRJMElEQWdMVEl4TWlBNE9IUXRPRGdnTWpFeWRqVXdNSEV3SURFeU5DQTRPQ0F5TVRKME1qRXlJRGc0ZWsweE1EQWdPVEF3ZGkwM01EQm9PVEF3ZGpjd01HZ3RPVEF3ZWswMU1EQWdNekF3YUMweE1EQjJNakF3YUMweE1EQjJMVEl3TUdndE1UQXdkalV3TUdneE1EQjJMVEl3TUdneE1EQjJNakF3YURFd01IWXROVEF3ZWswNU1EQWdOekF3ZGkwek1EQnNMVEV3TUNBdE1UQXdhQzB5TURCMk5UQXdhREl3TUhvZ1RUY3dNQ0EzTURCMkxUTXdNR2d4TURCMk16QXdhQzB4TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeE9EZzdJaUJrUFNKTk1qQXdJREV4TURCb056QXdjVEV5TkNBd0lESXhNaUF0T0RoME9EZ2dMVEl4TW5ZdE5UQXdjVEFnTFRFeU5DQXRPRGdnTFRJeE1uUXRNakV5SUMwNE9HZ3ROekF3Y1MweE1qUWdNQ0F0TWpFeUlEZzRkQzA0T0NBeU1USjJOVEF3Y1RBZ01USTBJRGc0SURJeE1uUXlNVElnT0RoNlRURXdNQ0E1TURCMkxUY3dNR2c1TURCMk56QXdhQzA1TURCNlRUVXdNQ0EzTURCb0xUSXdNSFl0TXpBd2FESXdNSFl0TVRBd2FDMHpNREIyTlRBd2FETXdNSFl0TVRBd2VrMDVNREFnTnpBd2FDMHlNREIyTFRNd01HZ3lNREIyTFRFd01HZ3RNekF3ZGpVd01HZ3pNREIyTFRFd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTRPVHNpSUdROUlrMHlNREFnTVRFd01HZzNNREJ4TVRJMElEQWdNakV5SUMwNE9IUTRPQ0F0TWpFeWRpMDFNREJ4TUNBdE1USTBJQzA0T0NBdE1qRXlkQzB5TVRJZ0xUZzRhQzAzTURCeExURXlOQ0F3SUMweU1USWdPRGgwTFRnNElESXhNblkxTURCeE1DQXhNalFnT0RnZ01qRXlkREl4TWlBNE9IcE5NVEF3SURrd01IWXROekF3YURrd01IWTNNREJvTFRrd01IcE5OVEF3SURRd01Hd3RNekF3SURFMU1Hd3pNREFnTVRVd2RpMHpNREI2VFRrd01DQTFOVEJzTFRNd01DQXRNVFV3ZGpNd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTVNRHNpSUdROUlrMHlNREFnTVRFd01HZzNNREJ4TVRJMElEQWdNakV5SUMwNE9IUTRPQ0F0TWpFeWRpMDFNREJ4TUNBdE1USTBJQzA0T0NBdE1qRXlkQzB5TVRJZ0xUZzRhQzAzTURCeExURXlOQ0F3SUMweU1USWdPRGgwTFRnNElESXhNblkxTURCeE1DQXhNalFnT0RnZ01qRXlkREl4TWlBNE9IcE5NVEF3SURrd01IWXROekF3YURrd01IWTNNREJvTFRrd01IcE5PVEF3SURNd01HZ3ROekF3ZGpVd01HZzNNREIyTFRVd01IcE5PREF3SURjd01HZ3RNVE13Y1Mwek9DQXdJQzAyTmk0MUlDMDBNM1F0TWpndU5TQXRNVEE0ZERJM0lDMHhNRGQwTmpnZ0xUUXlhREV6TUhZek1EQjZUVE13TUNBM01EQjJMVE13TUNCb01UTXdjVFF4SURBZ05qZ2dOREowTWpjZ01UQTNkQzB5T0M0MUlERXdPSFF0TmpZdU5TQTBNMmd0TVRNd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1Ua3hPeUlnWkQwaVRUSXdNQ0F4TVRBd2FEY3dNSEV4TWpRZ01DQXlNVElnTFRnNGREZzRJQzB5TVRKMkxUVXdNSEV3SUMweE1qUWdMVGc0SUMweU1USjBMVEl4TWlBdE9EaG9MVGN3TUhFdE1USTBJREFnTFRJeE1pQTRPSFF0T0RnZ01qRXlkalV3TUhFd0lERXlOQ0E0T0NBeU1USjBNakV5SURnNGVrMHhNREFnT1RBd2RpMDNNREJvT1RBd2RqY3dNR2d0T1RBd2VrMDFNREFnTnpBd2FDMHlNREIyTFRFd01HZ3lNREIyTFRNd01HZ3RNekF3ZGpFd01HZ3lNREIyTVRBd2FDMHlNREIyTXpBd2FETXdNSFl0TVRBd2VrMDVNREFnTXpBd2FDMHhNREIyTkRBd2FDMHhNREIyTVRBd2FESXdNSFl0TlRBd2VpQk5OekF3SURNd01HZ3RNVEF3ZGpFd01HZ3hNREIyTFRFd01Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpURTVNanNpSUdROUlrMHlNREFnTVRFd01HZzNNREJ4TVRJMElEQWdNakV5SUMwNE9IUTRPQ0F0TWpFeWRpMDFNREJ4TUNBdE1USTBJQzA0T0NBdE1qRXlkQzB5TVRJZ0xUZzRhQzAzTURCeExURXlOQ0F3SUMweU1USWdPRGgwTFRnNElESXhNblkxTURCeE1DQXhNalFnT0RnZ01qRXlkREl4TWlBNE9IcE5NVEF3SURrd01IWXROekF3YURrd01IWTNNREJvTFRrd01IcE5NekF3SURjd01HZ3lNREIyTFRRd01HZ3RNekF3ZGpVd01HZ3hNREIyTFRFd01IcE5PVEF3SURNd01HZ3RNVEF3ZGpRd01HZ3RNVEF3ZGpFd01HZ3lNREIyTFRVd01IcE5NekF3SURZd01IWXRNakF3YURFd01IWXlNREJvTFRFd01Ib2dUVGN3TUNBek1EQm9MVEV3TUhZeE1EQm9NVEF3ZGkweE1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXhPVE03SWlCa1BTSk5NakF3SURFeE1EQm9OekF3Y1RFeU5DQXdJREl4TWlBdE9EaDBPRGdnTFRJeE1uWXROVEF3Y1RBZ0xURXlOQ0F0T0RnZ0xUSXhNblF0TWpFeUlDMDRPR2d0TnpBd2NTMHhNalFnTUNBdE1qRXlJRGc0ZEMwNE9DQXlNVEoyTlRBd2NUQWdNVEkwSURnNElESXhNblF5TVRJZ09EaDZUVEV3TUNBNU1EQjJMVGN3TUdnNU1EQjJOekF3YUMwNU1EQjZUVFV3TUNBMU1EQnNMVEU1T1NBdE1qQXdhQzB4TURCMk5UQnNNVGs1SURJd01IWXhOVEJvTFRJd01IWXhNREJvTXpBd2RpMHpNREI2VFRrd01DQXpNREJvTFRFd01IWTBNREJvTFRFd01IWXhNREJvTWpBd2RpMDFNREI2VFRjd01TQXpNREJvTFRFd01DQjJNVEF3YURFd01IWXRNVEF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRrME95SWdaRDBpVFRZd01DQXhNVGt4Y1RFeU1DQXdJREl5T1M0MUlDMDBOM1F4T0RndU5TQXRNVEkyZERFeU5pQXRNVGc0TGpWME5EY2dMVEl5T1M0MWRDMDBOeUF0TWpJNUxqVjBMVEV5TmlBdE1UZzRMalYwTFRFNE9DNDFJQzB4TWpaMExUSXlPUzQxSUMwME4zUXRNakk1TGpVZ05EZDBMVEU0T0M0MUlERXlOblF0TVRJMklERTRPQzQxZEMwME55QXlNamt1TlhRME55QXlNamt1TlhReE1qWWdNVGc0TGpWME1UZzRMalVnTVRJMmRESXlPUzQxSURRM2VrMDJNREFnTVRBeU1YRXRNVEUwSURBZ0xUSXhNU0F0TlRZdU5YUXRNVFV6TGpVZ0xURTFNeTQxZEMwMU5pNDFJQzB5TVRGME5UWXVOU0F0TWpFeElIUXhOVE11TlNBdE1UVXpMalYwTWpFeElDMDFOaTQxZERJeE1TQTFOaTQxZERFMU15NDFJREUxTXk0MWREVTJMalVnTWpFeGRDMDFOaTQxSURJeE1YUXRNVFV6TGpVZ01UVXpMalYwTFRJeE1TQTFOaTQxZWswNE1EQWdOekF3YUMwek1EQjJMVEl3TUdnek1EQjJMVEV3TUdndE16QXdiQzB4TURBZ01UQXdkakl3TUd3eE1EQWdNVEF3YURNd01IWXRNVEF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRrMU95SWdaRDBpVFRZd01DQXhNVGt4Y1RFeU1DQXdJREl5T1M0MUlDMDBOM1F4T0RndU5TQXRNVEkyZERFeU5pQXRNVGc0TGpWME5EY2dMVEl5T1M0MWRDMDBOeUF0TWpJNUxqVjBMVEV5TmlBdE1UZzRMalYwTFRFNE9DNDFJQzB4TWpaMExUSXlPUzQxSUMwME4zUXRNakk1TGpVZ05EZDBMVEU0T0M0MUlERXlOblF0TVRJMklERTRPQzQxZEMwME55QXlNamt1TlhRME55QXlNamt1TlhReE1qWWdNVGc0TGpWME1UZzRMalVnTVRJMmRESXlPUzQxSURRM2VrMDJNREFnTVRBeU1YRXRNVEUwSURBZ0xUSXhNU0F0TlRZdU5YUXRNVFV6TGpVZ0xURTFNeTQxZEMwMU5pNDFJQzB5TVRGME5UWXVOU0F0TWpFeElIUXhOVE11TlNBdE1UVXpMalYwTWpFeElDMDFOaTQxZERJeE1TQTFOaTQxZERFMU15NDFJREUxTXk0MWREVTJMalVnTWpFeGRDMDFOaTQxSURJeE1YUXRNVFV6TGpVZ01UVXpMalYwTFRJeE1TQTFOaTQxZWswNE1EQWdOekF3ZGkweE1EQnNMVFV3SUMwMU1Hd3hNREFnTFRFd01IWXROVEJvTFRFd01Hd3RNVEF3SURFd01HZ3RNVFV3ZGkweE1EQm9MVEV3TUhZME1EQm9NekF3ZWswMU1EQWdOekF3ZGkweE1EQm9NakF3ZGpFd01HZ3RNakF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRrM095SWdaRDBpVFRVd015QXhNRGc1Y1RFeE1DQXdJREl3TUM0MUlDMDFPUzQxZERFek5DNDFJQzB4TlRZdU5YRTBOQ0F4TkNBNU1DQXhOSEV4TWpBZ01DQXlNRFVnTFRnMkxqVjBPRFVnTFRJd04zUXRPRFVnTFRJd04zUXRNakExSUMwNE5pNDFhQzB4TWpoMk1qVXdjVEFnTWpFZ0xURTBMalVnTXpVdU5YUXRNelV1TlNBeE5DNDFhQzB6TURCeExUSXhJREFnTFRNMUxqVWdMVEUwTGpWMExURTBMalVnTFRNMUxqVjJMVEkxTUdndE1qSXljUzA0TUNBd0lDMHhNellnTlRjdU5YUXROVFlnTVRNMkxqVnhNQ0EyT1NBME15QXhNakl1TlhReE1EZ2dOamN1TlhFdE1pQXhPU0F0TWlBek4zRXdJREV3TUNBME9TQXhPRFVnZERFek5DQXhNelIwTVRnMUlEUTVlazAxTWpVZ05UQXdhREUxTUhFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRJM05XZ3hNemR4TWpFZ01DQXlOaUF0TVRFdU5YUXRPQ0F0TWpjdU5Xd3RNakl6SUMweU5EUnhMVEV6SUMweE5pQXRNeklnTFRFMmRDMHpNaUF4Tm13dE1qSXpJREkwTkhFdE1UTWdNVFlnTFRnZ01qY3VOWFF5TmlBeE1TNDFhREV6TjNZeU56VnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRFNU9Ec2lJR1E5SWswMU1ESWdNVEE0T1hFeE1UQWdNQ0F5TURFZ0xUVTVMalYwTVRNMUlDMHhOVFl1TlhFME15QXhOU0E0T1NBeE5YRXhNakVnTUNBeU1EWWdMVGcyTGpWME9EWWdMVEl3Tmk0MWNUQWdMVGs1SUMwMk1DQXRNVGd4ZEMweE5UQWdMVEV4TUd3dE16YzRJRE0yTUhFdE1UTWdNVFlnTFRNeExqVWdNVFowTFRNeExqVWdMVEUyYkMwek9ERWdMVE0yTldndE9YRXROemtnTUNBdE1UTTFMalVnTlRjdU5YUXROVFl1TlNBeE16WXVOWEV3SURZNUlEUXpJREV5TWk0MWRERXdPQ0EyTnk0MWNTMHlJREU1SUMweUlETTRjVEFnTVRBd0lEUTVJREU0TkM0MWRERXpNeTQxSURFek5IUXhPRFF1TlNBME9TNDFlaUJOTmpNeUlEUTJOMnd5TWpNZ0xUSXlPSEV4TXlBdE1UWWdPQ0F0TWpjdU5YUXRNallnTFRFeExqVm9MVEV6TjNZdE1qYzFjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TVRVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk1qYzFhQzB4TXpkeExUSXhJREFnTFRJMklERXhMalYwT0NBeU55NDFjVEU1T1NBeU1EUWdNakl6SURJeU9IRXhPU0F4T1NBek1TNDFJREU1ZERNeUxqVWdMVEU1ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTVRrNU95SWdaRDBpVFRjd01DQXhNREIyTVRBd2FEUXdNR3d0TWpjd0lETXdNR2d4TnpCc0xUSTNNQ0F6TURCb01UY3diQzB6TURBZ016TXpiQzB6TURBZ0xUTXpNMmd4TnpCc0xUSTNNQ0F0TXpBd2FERTNNR3d0TWpjd0lDMHpNREJvTkRBd2RpMHhNREJvTFRVd2NTMHlNU0F3SUMwek5TNDFJQzB4TkM0MWRDMHhOQzQxSUMwek5TNDFkaTAxTUdnME1EQjJOVEJ4TUNBeU1TQXRNVFF1TlNBek5TNDFkQzB6TlM0MUlERTBMalZvTFRVd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1qQXdPeUlnWkQwaVRUWXdNQ0F4TVRjNWNUazBJREFnTVRZM0xqVWdMVFUyTGpWME9Ua3VOU0F0TVRRMUxqVnhPRGtnTFRZZ01UVXdMalVnTFRjeExqVjBOakV1TlNBdE1UVTFMalZ4TUNBdE5qRWdMVEk1TGpVZ0xURXhNaTQxZEMwM09TNDFJQzA0TWk0MWNUa2dMVEk1SURrZ0xUVTFjVEFnTFRjMElDMDFNaTQxSUMweE1qWXVOWFF0TVRJMkxqVWdMVFV5TGpWeExUVTFJREFnTFRFd01DQXpNSFl0TWpVeGNUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDFNR2d0TXpBd2RqVXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YWXlOVEZ4TFRRMUlDMHpNQ0F0TVRBd0lDMHpNQ0J4TFRjMElEQWdMVEV5Tmk0MUlEVXlMalYwTFRVeUxqVWdNVEkyTGpWeE1DQXhPQ0EwSURNNGNTMDBOeUF5TVNBdE56VXVOU0EyTlhRdE1qZ3VOU0E1TjNFd0lEYzBJRFV5TGpVZ01USTJMalYwTVRJMkxqVWdOVEl1TlhFMUlEQWdNak1nTFRKeE1DQXlJQzB4SURFd2RDMHhJREV6Y1RBZ01URTJJRGd4TGpVZ01UazNMalYwTVRrM0xqVWdPREV1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJd01Uc2lJR1E5SWsweE1ERXdJREV3TVRCeE1URXhJQzB4TVRFZ01UVXdMalVnTFRJMk1DNDFkREFnTFRJNU9YUXRNVFV3TGpVZ0xUSTJNQzQxY1MwNE15QXRPRE1nTFRFNU1TNDFJQzB4TWpZdU5YUXRNakU0TGpVZ0xUUXpMalYwTFRJeE9DNDFJRFF6TGpWMExURTVNUzQxSURFeU5pNDFjUzB4TVRFZ01URXhJQzB4TlRBdU5TQXlOakF1TlhRd0lESTVPWFF4TlRBdU5TQXlOakF1TlhFNE15QTRNeUF4T1RFdU5TQXhNall1TlhReU1UZ3VOU0EwTXk0MWRESXhPQzQxSUMwME15NDFkREU1TVM0MUlDMHhNall1TlhwTk5EYzJJREV3TmpWeExUUWdNQ0F0T0NBdE1YRXRNVEl4SUMwek5DQXRNakE1TGpVZ0xURXlNaTQxSUhRdE1USXlMalVnTFRJd09TNDFjUzAwSUMweE1pQXlMalVnTFRJemRERTRMalVnTFRFMGJETTJJQzA1Y1RNZ0xURWdOeUF0TVhFeU15QXdJREk1SURJeWNUSTNJRGsySURrNElERTJObkUzTUNBM01TQXhOallnT1RoeE1URWdNeUF4Tnk0MUlERXpMalYwTXk0MUlESXlMalZzTFRrZ016VnhMVE1nTVRNZ0xURTBJREU1Y1MwM0lEUWdMVEUxSURSNlRUVXhNaUE1TWpCeExUUWdNQ0F0T1NBdE1uRXRPREFnTFRJMElDMHhNemd1TlNBdE9ESXVOWFF0T0RJdU5TQXRNVE00TGpWeExUUWdMVEV6SURJZ0xUSTBkREU1SUMweE5Hd3pOQ0F0T1hFMElDMHhJRGdnTFRGeE1qSWdNQ0F5T0NBeU1TQnhNVGdnTlRnZ05UZ3VOU0E1T0M0MWREazNMalVnTlRndU5YRXhNaUF6SURFNElERXpMalYwTXlBeU1TNDFiQzA1SURNMWNTMHpJREV5SUMweE5DQXhPWEV0TnlBMElDMHhOU0EwZWswM01Ua3VOU0EzTVRrdU5YRXRORGt1TlNBME9TNDFJQzB4TVRrdU5TQTBPUzQxZEMweE1Ua3VOU0F0TkRrdU5YUXRORGt1TlNBdE1URTVMalYwTkRrdU5TQXRNVEU1TGpWME1URTVMalVnTFRRNUxqVjBNVEU1TGpVZ05Ea3VOWFEwT1M0MUlERXhPUzQxZEMwME9TNDFJREV4T1M0MWVrMDROVFVnTlRVeGNTMHlNaUF3SUMweU9DQXRNakZ4TFRFNElDMDFPQ0F0TlRndU5TQXRPVGd1TlhRdE9UZ3VOU0F0TlRjdU5TQnhMVEV4SUMwMElDMHhOeUF0TVRRdU5YUXRNeUF0TWpFdU5XdzVJQzB6TlhFeklDMHhNaUF4TkNBdE1UbHhOeUF0TkNBeE5TQXROSEUwSURBZ09TQXljVGd3SURJMElERXpPQzQxSURneUxqVjBPREl1TlNBeE16Z3VOWEUwSURFeklDMHlMalVnTWpSMExURTRMalVnTVRSc0xUTTBJRGx4TFRRZ01TQXRPQ0F4ZWsweE1EQXdJRFV4TlhFdE1qTWdNQ0F0TWprZ0xUSXljUzB5TnlBdE9UWWdMVGs0SUMweE5qWnhMVGN3SUMwM01TQXRNVFkySUMwNU9IRXRNVEVnTFRNZ0xURTNMalVnTFRFekxqVjBMVE11TlNBdE1qSXVOV3c1SUMwek5YRXpJQzB4TXlBeE5DQXRNVGx4TnlBdE5DQXhOU0F0TkNCeE5DQXdJRGdnTVhFeE1qRWdNelFnTWpBNUxqVWdNVEl5TGpWME1USXlMalVnTWpBNUxqVnhOQ0F4TWlBdE1pNDFJREl6ZEMweE9DNDFJREUwYkMwek5pQTVjUzB6SURFZ0xUY2dNWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEl3TWpzaUlHUTlJazAzTURBZ09EQXdhRE13TUhZdE16Z3dhQzB4T0RCMk1qQXdhQzB6TkRCMkxUSXdNR2d0TXpnd2RqYzFOWEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWFEVTNOWFl0TkRBd2VrMHhNREF3SURrd01HZ3RNakF3ZGpJd01IcE5OekF3SURNd01HZ3hOakpzTFRJeE1pQXRNakV5YkMweU1USWdNakV5YURFMk1uWXlNREJvTVRBd2RpMHlNREI2VFRVeU1DQXdhQzB6T1RWeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZek9UVjZUVEV3TURBZ01qSXdkaTB4T1RWeE1DQXRNVEFnTFRjdU5TQXRNVGN1TlhRdE1UY3VOU0F0Tnk0MWFDMHhPVFY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V5TURNN0lpQmtQU0pOTnpBd0lEZ3dNR2d6TURCMkxUVXlNR3d0TXpVd0lETTFNR3d0TlRVd0lDMDFOVEIyTVRBNU5YRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxYURVM05YWXROREF3ZWsweE1EQXdJRGt3TUdndE1qQXdkakl3TUhwTk9EWXlJREl3TUdndE1UWXlkaTB5TURCb0xURXdNSFl5TURCb0xURTJNbXd5TVRJZ01qRXllazAwT0RBZ01HZ3RNelUxY1MweE1DQXdJQzB4Tnk0MUlEY3VOWFF0Tnk0MUlERTNMalYyTlRWb016Z3dkaTA0TUhwTk1UQXdNQ0E0TUhZdE5UVnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB4TlRWMk9EQm9NVGd3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTWpBME95SWdaRDBpVFRFeE5qSWdPREF3YUMweE5qSjJMVEl3TUdneE1EQnNNVEF3SUMweE1EQm9MVE13TUhZek1EQm9MVEUyTW13eU1USWdNakV5ZWsweU1EQWdPREF3YURJd01IRXlOeUF3SURRd0lDMHlkREk1TGpVZ0xURXdMalYwTWpNdU5TQXRNekIwTnlBdE5UY3VOV2d6TURCMkxURXdNR2d0TmpBd2JDMHlNREFnTFRNMU1IWTBOVEJvTVRBd2NUQWdNellnTnlBMU55NDFkREl6TGpVZ016QjBNamt1TlNBeE1DNDFkRFF3SURKNlRUZ3dNQ0EwTURCb01qUXdiQzB5TkRBZ0xUUXdNR2d0T0RBd2JETXdNQ0ExTURCb05UQXdkaTB4TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU1EVTdJaUJrUFNKTk5qVXdJREV4TURCb01UQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAxTUdnMU1IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXRNVEF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMHpNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpFd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWb05UQjJOVEJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazB4TURBd0lEZzFNSFl4TlRCeE5ERWdNQ0EzTUM0MUlDMHlPUzQxZERJNUxqVWdMVGN3TGpWMkxUZ3dNQ0J4TUNBdE5ERWdMVEk1TGpVZ0xUY3dMalYwTFRjd0xqVWdMVEk1TGpWb0xUWXdNSEV0TVNBd0lDMHlNQ0EwYkRJME5pQXlORFpzTFRNeU5pQXpNaloyTXpJMGNUQWdOREVnTWprdU5TQTNNQzQxZERjd0xqVWdNamt1TlhZdE1UVXdjVEFnTFRZeUlEUTBJQzB4TURaME1UQTJJQzAwTkdnek1EQnhOaklnTUNBeE1EWWdORFIwTkRRZ01UQTJlazAwTVRJZ01qVXdiQzB5TVRJZ0xUSXhNbll4TmpKb0xUSXdNSFl4TURCb01qQXdkakUyTW5vaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJd05qc2lJR1E5SWswME5UQWdNVEV3TUdneE1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVFV3YURVd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMHhNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUTXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTVRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TldnMU1IWTFNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZUVGd3TUNBNE5UQjJNVFV3Y1RReElEQWdOekF1TlNBdE1qa3VOWFF5T1M0MUlDMDNNQzQxZGkwMU1EQWdhQzB5TURCMkxUTXdNR2d5TURCeE1DQXRNellnTFRjZ0xUVTNMalYwTFRJekxqVWdMVE13ZEMweU9TNDFJQzB4TUM0MWRDMDBNQ0F0TW1ndE5qQXdjUzAwTVNBd0lDMDNNQzQxSURJNUxqVjBMVEk1TGpVZ056QXVOWFk0TURCeE1DQTBNU0F5T1M0MUlEY3dMalYwTnpBdU5TQXlPUzQxZGkweE5UQnhNQ0F0TmpJZ05EUWdMVEV3Tm5ReE1EWWdMVFEwYURNd01IRTJNaUF3SURFd05pQTBOSFEwTkNBeE1EWjZUVEV5TVRJZ01qVXdiQzB5TVRJZ0xUSXhNbll4TmpKb0xUSXdNSFl4TURCb01qQXdkakUyTW5vaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJd09Uc2lJR1E5SWswMk5UZ2dNVEU1TjJ3Mk16Y2dMVEV4TURSeE1qTWdMVE00SURjZ0xUWTFMalYwTFRZd0lDMHlOeTQxYUMweE1qYzJjUzAwTkNBd0lDMDJNQ0F5Tnk0MWREY2dOalV1Tld3Mk16Y2dNVEV3TkhFeU1pQXpPU0ExTkNBek9YUTFOQ0F0TXpsNlRUY3dOQ0E0TURCb0xUSXdPSEV0TWpBZ01DQXRNeklnTFRFMExqVjBMVGdnTFRNMExqVnNOVGdnTFRNd01uRTBJQzB5TUNBeU1TNDFJQzB6TkM0MWRETTNMalVnTFRFMExqVm9OVFJ4TWpBZ01DQXpOeTQxSURFMExqVjBNakV1TlNBek5DNDFiRFU0SURNd01uRTBJREl3SUMwNElETTBMalYwTFRNeUlERTBMalY2VFRVd01DQXpNREIyTFRFd01HZ3lNREFnZGpFd01HZ3RNakF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTWpFd095SWdaRDBpVFRReU5TQXhNVEF3YURJMU1IRXhNQ0F3SURFM0xqVWdMVGN1TlhRM0xqVWdMVEUzTGpWMkxURTFNSEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRJMU1IRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqRTFNSEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWVrMDBNalVnT0RBd2FESTFNSEV4TUNBd0lERTNMalVnTFRjdU5YUTNMalVnTFRFM0xqVjJMVEUxTUhFd0lDMHhNQ0F0Tnk0MUlDMHhOeTQxZEMweE55NDFJQzAzTGpWb0xUSTFNSEV0TVRBZ01DQXRNVGN1TlNBM0xqVjBMVGN1TlNBeE55NDFkakUxTUhFd0lERXdJRGN1TlNBeE55NDFJSFF4Tnk0MUlEY3VOWHBOT0RJMUlEZ3dNR2d5TlRCeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkweE5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB5TlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZeE5UQnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TlhwTk1qVWdOVEF3YURJMU1IRXhNQ0F3SURFM0xqVWdMVGN1TlhRM0xqVWdMVEUzTGpWMkxURTFNSEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRJMU1IRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqRTFNQ0J4TUNBeE1DQTNMalVnTVRjdU5YUXhOeTQxSURjdU5YcE5OREkxSURVd01HZ3lOVEJ4TVRBZ01DQXhOeTQxSUMwM0xqVjBOeTQxSUMweE55NDFkaTB4TlRCeE1DQXRNVEFnTFRjdU5TQXRNVGN1TlhRdE1UY3VOU0F0Tnk0MWFDMHlOVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFkQzAzTGpVZ01UY3VOWFl4TlRCeE1DQXhNQ0EzTGpVZ01UY3VOWFF4Tnk0MUlEY3VOWHBOT0RJMUlEVXdNR2d5TlRCeE1UQWdNQ0F4Tnk0MUlDMDNMalYwTnk0MUlDMHhOeTQxZGkweE5UQnhNQ0F0TVRBZ0xUY3VOU0F0TVRjdU5YUXRNVGN1TlNBdE55NDFhQzB5TlRCeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlNCMk1UVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNlRUSTFJREl3TUdneU5UQnhNVEFnTUNBeE55NDFJQzAzTGpWME55NDFJQzB4Tnk0MWRpMHhOVEJ4TUNBdE1UQWdMVGN1TlNBdE1UY3VOWFF0TVRjdU5TQXROeTQxYUMweU5UQnhMVEV3SURBZ0xURTNMalVnTnk0MWRDMDNMalVnTVRjdU5YWXhOVEJ4TUNBeE1DQTNMalVnTVRjdU5YUXhOeTQxSURjdU5YcE5OREkxSURJd01HZ3lOVEJ4TVRBZ01DQXhOeTQxSUMwM0xqVjBOeTQxSUMweE55NDFkaTB4TlRCeE1DQXRNVEFnTFRjdU5TQXRNVGN1TlhRdE1UY3VOU0F0Tnk0MWFDMHlOVEJ4TFRFd0lEQWdMVEUzTGpVZ055NDFJSFF0Tnk0MUlERTNMalYyTVRVd2NUQWdNVEFnTnk0MUlERTNMalYwTVRjdU5TQTNMalY2VFRneU5TQXlNREJvTWpVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE1UVXdjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0TWpVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk1UVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU1URTdJaUJrUFNKTk56QXdJREV5TURCb01UQXdkaTB5TURCb0xURXdNSFl0TVRBd2FETTFNSEUyTWlBd0lEZzJMalVnTFRNNUxqVjBMVE11TlNBdE9UUXVOV3d0TmpZZ0xURXpNbkV0TkRFZ0xUZ3pJQzA0TVNBdE1UTTBhQzAzTnpKeExUUXdJRFV4SUMwNE1TQXhNelJzTFRZMklERXpNbkV0TWpnZ05UVWdMVE11TlNBNU5DNDFkRGcyTGpVZ016a3VOV2d6TlRCMk1UQXdhQzB4TURCMk1qQXdhREV3TUhZeE1EQm9NakF3ZGkweE1EQjZUVEkxTUNBME1EQm9OekF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZEMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzB4TW13eE16Y2dMVEV3TUNCb0xUazFNR3d4TXpnZ01UQXdhQzB4TTNFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWME1UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5OVEFnTVRBd2FERXhNREJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRVd2FDMHhNakF3ZGpVd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJeE1qc2lJR1E5SWswMk1EQWdNVE13TUhFME1DQXdJRFk0TGpVZ0xUSTVMalYwTWpndU5TQXROekF1TldndE1UazBjVEFnTkRFZ01qZ3VOU0EzTUM0MWREWTRMalVnTWprdU5YcE5ORFF6SURFeE1EQm9NekUwY1RFNElDMHpOeUF4T0NBdE56VnhNQ0F0T0NBdE15QXRNalZvTXpJNGNUUXhJREFnTkRRdU5TQXRNVFl1TlhRdE16QXVOU0F0TXpndU5Xd3RNVGMxSUMweE5EVm9MVFkzT0d3dE1UYzRJREUwTlhFdE16UWdNaklnTFRJNUlETTRMalYwTkRZZ01UWXVOV2d6TWpoeExUTWdNVGNnTFRNZ01qVnhNQ0F6T0NBeE9DQTNOWHBOTWpVd0lEY3dNR2czTURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxSUhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweE5UQjJMVEl3TUd3eU56VWdMVEl3TUdndE9UVXdiREkzTlNBeU1EQjJNakF3YUMweE5UQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRVd0lERXdNR2d4TVRBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDFNR2d0TVRJd01IWTFNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlNVE03SWlCa1BTSk5OakF3SURFeE9ERnhOelVnTUNBeE1qZ2dMVFV6ZERVeklDMHhNamgwTFRVeklDMHhNamgwTFRFeU9DQXROVE4wTFRFeU9DQTFNM1F0TlRNZ01USTRkRFV6SURFeU9IUXhNamdnTlRONlRUWXdNaUEzT1Rob05EWnhNelFnTUNBMU5TNDFJQzB5T0M0MWRESXhMalVnTFRnMkxqVnhNQ0F0TnpZZ016a2dMVEU0TTJndE16STBjVE01SURFd055QXpPU0F4T0ROeE1DQTFPQ0F5TVM0MUlEZzJMalYwTlRZdU5TQXlPQzQxYURRMWVrMHlOVEFnTkRBd2FEY3dNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFF0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3RNVE1nYkRFek9DQXRNVEF3YUMwNU5UQnNNVE0zSURFd01HZ3RNVEp4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZERFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUVXdJREV3TUdneE1UQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAxTUdndE1USXdNSFkxTUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V5TVRRN0lpQmtQU0pOTmpBd0lERXpNREJ4TkRjZ01DQTVNaTQxSUMwMU15NDFkRGN4SUMweE1qTjBNalV1TlNBdE1USXpMalZ4TUNBdE56Z2dMVFUxTGpVZ0xURXpNeTQxZEMweE16TXVOU0F0TlRVdU5YUXRNVE16TGpVZ05UVXVOWFF0TlRVdU5TQXhNek11TlhFd0lEWXlJRE0wSURFME0yd3hORFFnTFRFME0yd3hNVEVnTVRFeGJDMHhOak1nTVRZemNUTTBJREkySURZeklESTJlazAyTURJZ056azRhRFEyY1RNMElEQWdOVFV1TlNBdE1qZ3VOWFF5TVM0MUlDMDROaTQxY1RBZ0xUYzJJRE01SUMweE9ETm9MVE15TkhFek9TQXhNRGNnTXprZ01UZ3pjVEFnTlRnZ01qRXVOU0E0Tmk0MWREVTJMalVnTWpndU5XZzBOU0I2VFRJMU1DQTBNREJvTnpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweE0yd3hNemdnTFRFd01HZ3RPVFV3YkRFek55QXhNREJvTFRFeWNTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YUXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAxTUNBeE1EQm9NVEV3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE5UQm9MVEV5TURCMk5UQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1qRTFPeUlnWkQwaVRUWXdNQ0F4TWpBd2JETXdNQ0F0TVRZeGRpMHhNemxvTFRNd01IRXdJQzAxTnlBeE9DNDFJQzB4TURoME5UQWdMVGt4TGpWME5qTWdMVGN5ZERjd0lDMDJOeTQxZERVM0xqVWdMVFl4YUMwMU16QnhMVFl3SURneklDMDVNQzQxSURFM055NDFkQzB6TUM0MUlERTNPQzQxZERNeklERTJOQzQxZERnM0xqVWdNVE01TGpWME1USTJJRGsyTGpWME1UUTFMalVnTkRFdU5YWXRPVGg2VFRJMU1DQTBNREJvTnpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMweE0yd3hNemdnTFRFd01HZ3RPVFV3YkRFek55QXhNREFnYUMweE1uRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjBNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTlRBZ01UQXdhREV4TURCeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUVXdhQzB4TWpBd2RqVXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5Yb2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUSXhOanNpSUdROUlrMDJNREFnTVRNd01IRTBNU0F3SURjd0xqVWdMVEk1TGpWME1qa3VOU0F0TnpBdU5YWXROemh4TkRZZ0xUSTJJRGN6SUMwM01uUXlOeUF0TVRBd2RpMDFNR2d0TkRBd2RqVXdjVEFnTlRRZ01qY2dNVEF3ZERjeklEY3lkamM0Y1RBZ05ERWdNamt1TlNBM01DNDFkRGN3TGpVZ01qa3VOWHBOTkRBd0lEZ3dNR2cwTURCeE5UUWdNQ0F4TURBZ0xUSTNkRGN5SUMwM00yZ3RNVGN5ZGkweE1EQm9NakF3ZGkweE1EQm9MVEl3TUhZdE1UQXdhREl3TUhZdE1UQXdhQzB5TURCMkxURXdNR2d5TURCeE1DQXRPRE1nTFRVNExqVWdMVEUwTVM0MWRDMHhOREV1TlNBdE5UZ3VOV2d0TkRBd0lIRXRPRE1nTUNBdE1UUXhMalVnTlRndU5YUXROVGd1TlNBeE5ERXVOWFkwTURCeE1DQTRNeUExT0M0MUlERTBNUzQxZERFME1TNDFJRFU0TGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU1UZzdJaUJrUFNKTk1UVXdJREV4TURCb09UQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAxTURCeE1DQXRNakVnTFRFMExqVWdMVE0xTGpWMExUTTFMalVnTFRFMExqVm9MVGt3TUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxZEMweE5DNDFJRE0xTGpWMk5UQXdjVEFnTWpFZ01UUXVOU0F6TlM0MWRETTFMalVnTVRRdU5YcE5NVEkxSURRd01HZzVOVEJ4TVRBZ01DQXhOeTQxSUMwM0xqVjBOeTQxSUMweE55NDFkaTAxTUhFd0lDMHhNQ0F0Tnk0MUlDMHhOeTQxZEMweE55NDFJQzAzTGpWb0xUSTRNMnd5TWpRZ0xUSXlOSEV4TXlBdE1UTWdNVE1nTFRNeExqVjBMVEV6SUMwek1pQjBMVE14TGpVZ0xURXpMalYwTFRNeExqVWdNVE5zTFRnNElEZzRhQzAxTWpSc0xUZzNJQzA0T0hFdE1UTWdMVEV6SUMwek1pQXRNVE4wTFRNeUlERXpMalYwTFRFeklETXlkREV6SURNeExqVnNNakkwSURJeU5HZ3RNamc1Y1MweE1DQXdJQzB4Tnk0MUlEY3VOWFF0Tnk0MUlERTNMalYyTlRCeE1DQXhNQ0EzTGpVZ01UY3VOWFF4Tnk0MUlEY3VOWHBOTlRReElETXdNR3d0TVRBd0lDMHhNREJvTXpJMGJDMHhNREFnTVRBd2FDMHhNalI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V5TVRrN0lpQmtQU0pOTWpBd0lERXhNREJvT0RBd2NUZ3pJREFnTVRReExqVWdMVFU0TGpWME5UZ3VOU0F0TVRReExqVjJMVEl3TUdndE1UQXdjVEFnTkRFZ0xUSTVMalVnTnpBdU5YUXROekF1TlNBeU9TNDFhQzB5TlRCeExUUXhJREFnTFRjd0xqVWdMVEk1TGpWMExUSTVMalVnTFRjd0xqVm9MVEV3TUhFd0lEUXhJQzB5T1M0MUlEY3dMalYwTFRjd0xqVWdNamt1TldndE1qVXdjUzAwTVNBd0lDMDNNQzQxSUMweU9TNDFkQzB5T1M0MUlDMDNNQzQxYUMweE1EQjJNakF3Y1RBZ09ETWdOVGd1TlNBeE5ERXVOWFF4TkRFdU5TQTFPQzQxZWsweE1EQWdOakF3YURFd01EQnhOREVnTUNBM01DNDFJQzB5T1M0MUlIUXlPUzQxSUMwM01DNDFkaTB6TURCb0xURXlNREIyTXpBd2NUQWdOREVnTWprdU5TQTNNQzQxZERjd0xqVWdNamt1TlhwTk16QXdJREV3TUhZdE5UQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRFd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJOVEJvTWpBd2VrMHhNVEF3SURFd01IWXROVEJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xURXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTlRCb01qQXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNakl4T3lJZ1pEMGlUVFE0TUNBeE1UWTFiRFk0TWlBdE5qZ3pjVE14SUMwek1TQXpNU0F0TnpVdU5YUXRNekVnTFRjMUxqVnNMVEV6TVNBdE1UTXhhQzAwT0RGc0xUVXhOeUExTVRoeExUTXlJRE14SUMwek1pQTNOUzQxZERNeUlEYzFMalZzTWprMUlESTVObkV6TVNBek1TQTNOUzQxSURNeGREYzJMalVnTFRNeGVrMHhNRGdnTnprMGJETTBNaUF0TXpReWJETXdNeUF6TURSc0xUTTBNU0F6TkRGNlRUSTFNQ0F4TURCb09EQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFkaTAxTUdndE9UQXdkalV3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEl5TXpzaUlHUTlJazB4TURVM0lEWTBOMnd0TVRnNUlEVXdObkV0T0NBeE9TQXRNamN1TlNBek0zUXROREF1TlNBeE5HZ3ROREF3Y1MweU1TQXdJQzAwTUM0MUlDMHhOSFF0TWpjdU5TQXRNek5zTFRFNE9TQXROVEEyY1MwNElDMHhPU0F4TGpVZ0xUTXpkRE13TGpVZ0xURTBhRFl5TlhZdE1UVXdjVEFnTFRJeElERTBMalVnTFRNMUxqVjBNelV1TlNBdE1UUXVOWFF6TlM0MUlERTBMalYwTVRRdU5TQXpOUzQxZGpFMU1HZ3hNalZ4TWpFZ01DQXpNQzQxSURFMGRERXVOU0F6TTNwTk9EazNJREJvTFRVNU5YWTFNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVm9OVEIyTlRBZ2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TldnME9IWXpNREJvTWpBd2RpMHpNREJvTkRkeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUVXdhRFV3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkwMU1Ib2lJQzgrRFFvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUSXlORHNpSUdROUlrMDVNREFnT0RBd2FETXdNSFl0TlRjMWNUQWdMVEV3SUMwM0xqVWdMVEUzTGpWMExURTNMalVnTFRjdU5XZ3RNemMxZGpVNU1Xd3RNekF3SURNd01IWTROSEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWFETTNOWFl0TkRBd2VrMHhNakF3SURrd01HZ3RNakF3ZGpJd01IcE5OREF3SURZd01HZ3pNREIyTFRVM05YRXdJQzB4TUNBdE55NDFJQzB4Tnk0MWRDMHhOeTQxSUMwM0xqVm9MVFkxTUhFdE1UQWdNQ0F0TVRjdU5TQTNMalYwTFRjdU5TQXhOeTQxZGprMU1IRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxYURNM05YWXROREF3ZWswM01EQWdOekF3YUMweU1EQjJNakF3ZWlBaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJeU5Uc2lJR1E5SWswME9EUWdNVEE1TldneE9UVnhOelVnTUNBeE5EWWdMVE15TGpWME1USTBJQzA0Tm5RNE9TNDFJQzB4TWpJdU5YUTBPQzQxSUMweE5ESnhNVGdnTFRFMElETTFJQzB5TUhFek1TQXRNVEFnTmpRdU5TQTJMalYwTkRNdU5TQTBPQzQxY1RFd0lETTBJQzB4TlNBM01YRXRNVGtnTWpjZ0xUa2dORE54TlNBNElERXlMalVnTVRGME1Ua2dMVEYwTWpNdU5TQXRNVFp4TkRFZ0xUUTBJRE01SUMweE1EVnhMVE1nTFRZeklDMDBOaUF0TVRBMkxqVjBMVEV3TkNBdE5ETXVOV2d0TmpKeExUY2dMVFUxSUMwek5TQXRNVEUzZEMwMU5pQXRNVEF3YkMwek9TQXRNak0wY1MweklDMHlNQ0F0TWpBZ0xUTTBMalVnZEMwek9DQXRNVFF1TldndE1UQXdjUzB5TVNBd0lDMHpNeUF4TkM0MWRDMDVJRE0wTGpWc01USWdOekJ4TFRRNUlDMHhOQ0F0T1RFZ0xURTBhQzB4T1RWeExUSTBJREFnTFRZMUlEaHNMVEV4SUMwMk5IRXRNeUF0TWpBZ0xUSXdJQzB6TkM0MWRDMHpPQ0F0TVRRdU5XZ3RNVEF3Y1MweU1TQXdJQzB6TXlBeE5DNDFkQzA1SURNMExqVnNNallnTVRVM2NTMDROQ0EzTkNBdE1USTRJREUzTld3dE1UVTVJRFV6Y1MweE9TQTNJQzB6TXlBeU5uUXRNVFFnTkRCMk5UQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWFERXlOSEV4TVNBNE55QTFOaUF4Tmpac0xURXhNU0E1TlNCeExURTJJREUwSUMweE1pNDFJREl6TGpWME1qUXVOU0E1TGpWb01qQXpjVEV4TmlBeE1ERWdNalV3SURFd01YcE5OamMxSURFd01EQm9MVEkxTUhFdE1UQWdNQ0F0TVRjdU5TQXROeTQxZEMwM0xqVWdMVEUzTGpWMkxUVXdjVEFnTFRFd0lEY3VOU0F0TVRjdU5YUXhOeTQxSUMwM0xqVm9NalV3Y1RFd0lEQWdNVGN1TlNBM0xqVjBOeTQxSURFM0xqVjJOVEJ4TUNBeE1DQXROeTQxSURFM0xqVjBMVEUzTGpVZ055NDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNakkyT3lJZ1pEMGlUVFkwTVNBNU1EQnNOREl6SURJME4zRXhPU0E0SURReUlESXVOWFF6TnlBdE1qRXVOV3d6TWlBdE16aHhNVFFnTFRFMUlERXlMalVnTFRNMmRDMHhOeTQxSUMwek5Hd3RNVE01SUMweE1qQm9MVE01TUhwTk5UQWdNVEV3TUdneE1EWnhOamNnTUNBeE1ETWdMVEUzZERZMklDMDNNV3d4TURJZ0xUSXhNbWc0TWpOeE1qRWdNQ0F6TlM0MUlDMHhOQzQxZERFMExqVWdMVE0xTGpWMkxUVXdjVEFnTFRJeElDMHhOQ0F0TkRCMExUTXpJQzB5Tm13dE56TTNJQzB4TXpKeExUSXpJQzAwSUMwME1DQTJkQzB5TmlBeU5YRXRORElnTmpjZ0xURXdNQ0EyTjJndE16QXdjUzAyTWlBd0lDMHhNRFlnTkRRZ2RDMDBOQ0F4TURaMk1qQXdjVEFnTmpJZ05EUWdNVEEyZERFd05pQTBOSHBOTVRjeklEa3lPR2d0T0RCeExURTVJREFnTFRJNElDMHhOSFF0T1NBdE16VjJMVFUyY1RBZ0xUVXhJRFF5SUMwMU1XZ3hNelJ4TVRZZ01DQXlNUzQxSURoME5TNDFJREkwY1RBZ01URWdMVEUySURRMWRDMHlOeUExTVhFdE1UZ2dNamdnTFRReklESTRlazAxTlRBZ056STNjUzB6TWlBd0lDMDFOQzQxSUMweU1pNDFkQzB5TWk0MUlDMDFOQzQxZERJeUxqVWdMVFUwTGpWME5UUXVOU0F0TWpJdU5YUTFOQzQxSURJeUxqVjBNakl1TlNBMU5DNDFkQzB5TWk0MUlEVTBMalYwTFRVMExqVWdNakl1TlhwTk1UTXdJRE00T1NCc01UVXlJREV6TUhFeE9DQXhPU0F6TkNBeU5IUXpNU0F0TXk0MWRESTBMalVnTFRFM0xqVjBNalV1TlNBdE1qaHhNamdnTFRNMUlEVXdMalVnTFRVeGREUTRMalVnTFRFemJEWXpJRFZzTkRnZ0xURTNPWEV4TXlBdE5qRWdMVE11TlNBdE9UY3VOWFF0TmpjdU5TQXROemt1Tld3dE9EQWdMVFk1Y1MwME55QXROREFnTFRFd09TQXRNelV1TlhRdE1UQXpJRFV4TGpWc0xURXpNQ0F4TlRGeExUUXdJRFEzSUMwek5TNDFJREV3T1M0MWREVXhMalVnTVRBeUxqVjZUVE00TUNBek56ZHNMVEV3TWlBdE9EaHhMVE14SUMweU55QXlJQzAyTld3ek55QXRORE54TVRNZ0xURTFJREkzTGpVZ0xURTVMalVnZERNeExqVWdOaTQxYkRZeElEVXpjVEU1SURFMklERTBJRFE1Y1MweUlESXdJQzB4TWlBMU5uUXRNVGNnTkRWeExURXhJREV5SUMweE9TQXhOSFF0TWpNZ0xUaDZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlNamM3SWlCa1BTSk5OakkxSURFeU1EQm9NVFV3Y1RFd0lEQWdNVGN1TlNBdE55NDFkRGN1TlNBdE1UY3VOWFl0TVRBNWNUYzVJQzB6TXlBeE16RWdMVGczTGpWME5UTWdMVEV5T0M0MWNURWdMVFEySUMweE5TQXRPRFF1TlhRdE16a2dMVFl4ZEMwME5pQXRNemgwTFRNNUlDMHlNUzQxYkMweE55QXRObkUySURBZ01UVWdMVEV1TlhRek5TQXRPWFExTUNBdE1UY3VOWFExTXlBdE16QjBOVEFnTFRRMWRETTFMalVnTFRZMGRERTBMalVnTFRnMGNUQWdMVFU1SUMweE1TNDFJQzB4TURVdU5YUXRNamd1TlNBdE56WXVOWFF0TkRRZ0xUVXhkQzAwT1M0MUlDMHpNUzQxZEMwMU5DNDFJQzB4Tm5RdE5Ea3VOU0F0Tmk0MUlIUXRORE11TlNBdE1YWXROelZ4TUNBdE1UQWdMVGN1TlNBdE1UY3VOWFF0TVRjdU5TQXROeTQxYUMweE5UQnhMVEV3SURBZ0xURTNMalVnTnk0MWRDMDNMalVnTVRjdU5YWTNOV2d0TVRBd2RpMDNOWEV3SUMweE1DQXROeTQxSUMweE55NDFkQzB4Tnk0MUlDMDNMalZvTFRFMU1IRXRNVEFnTUNBdE1UY3VOU0EzTGpWMExUY3VOU0F4Tnk0MWRqYzFhQzB4TnpWeExURXdJREFnTFRFM0xqVWdOeTQxZEMwM0xqVWdNVGN1TlhZeE5UQnhNQ0F4TUNBM0xqVWdNVGN1TlhReE55NDFJRGN1TldnM05YWTJNREJvTFRjMWNTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk1UVXdJSEV3SURFd0lEY3VOU0F4Tnk0MWRERTNMalVnTnk0MWFERTNOWFkzTlhFd0lERXdJRGN1TlNBeE55NDFkREUzTGpVZ055NDFhREUxTUhFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRjMWFERXdNSFkzTlhFd0lERXdJRGN1TlNBeE55NDFkREUzTGpVZ055NDFlazAwTURBZ09UQXdkaTB5TURCb01qWXpjVEk0SURBZ05EZ3VOU0F4TUM0MWRETXdJREkxZERFMUlESTVkRFV1TlNBeU5TNDFiREVnTVRCeE1DQTBJQzB3TGpVZ01URjBMVFlnTWpSMExURTFJRE13ZEMwek1DQXlOSFF0TkRndU5TQXhNV2d0TWpZemVrMDBNREFnTlRBd2RpMHlNREJvTXpZemNUSTRJREFnTkRndU5TQXhNQzQxSUhRek1DQXlOWFF4TlNBeU9YUTFMalVnTWpVdU5Xd3hJREV3Y1RBZ05DQXRNQzQxSURFeGRDMDJJREkwZEMweE5TQXpNSFF0TXpBZ01qUjBMVFE0TGpVZ01URm9MVE0yTTNvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJek1Ec2lJR1E5SWsweU1USWdNVEU1T0dnM09EQnhPRFlnTUNBeE5EY2dMVFl4ZERZeElDMHhORGQyTFRReE5uRXdJQzAxTVNBdE1UZ2dMVEUwTWk0MWRDMHpOaUF0TVRVM0xqVnNMVEU0SUMwMk5uRXRNamtnTFRnM0lDMDVNeTQxSUMweE5EWXVOWFF0TVRRMkxqVWdMVFU1TGpWb0xUVTNNbkV0T0RJZ01DQXRNVFEzSURVNWRDMDVNeUF4TkRkeExUZ2dNamdnTFRJd0lEY3pkQzB6TWlBeE5ETXVOWFF0TWpBZ01UUTVMalYyTkRFMmNUQWdPRFlnTmpFZ01UUTNkREUwTnlBMk1YcE5OakF3SURFd05EVnhMVGN3SURBZ0xURXpNaTQxSUMweE1TNDFkQzB4TURVdU5TQXRNekF1TlhRdE56Z3VOU0F0TkRFdU5TQjBMVFUzSUMwME5YUXRNellnTFRReGRDMHlNQzQxSUMwek1DNDFiQzAySUMweE1td3hOVFlnTFRJME0yZzFOakJzTVRVMklESTBNM0V0TWlBMUlDMDJJREV5TGpWMExUSXdJREk1TGpWMExUTTJMalVnTkRKMExUVTNJRFEwTGpWMExUYzVJRFF5ZEMweE1EVWdNamt1TlhRdE1UTXlMalVnTVRKNlRUYzJNaUEzTUROb0xURTFOMnd4T1RVZ01qWXhlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNak14T3lJZ1pEMGlUVFEzTlNBeE16QXdhREUxTUhFeE1ETWdNQ0F4T0RrZ0xUZzJkRGcySUMweE9EbDJMVFV3TUhFd0lDMDBNU0F0TkRJZ0xUZ3pkQzA0TXlBdE5ESm9MVFExTUhFdE5ERWdNQ0F0T0RNZ05ESjBMVFF5SURnemRqVXdNSEV3SURFd015QTROaUF4T0RsME1UZzVJRGcyZWswM01EQWdNekF3ZGkweU1qVnhNQ0F0TWpFZ0xUSTNJQzAwT0hRdE5EZ2dMVEkzYUMweE5UQnhMVEl4SURBZ0xUUTRJREkzZEMweU55QTBPSFl5TWpWb016QXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNak15T3lJZ1pEMGlUVFEzTlNBeE16QXdhRGsyY1RBZ0xURTFNQ0E0T1M0MUlDMHlNemt1TlhReU16a3VOU0F0T0RrdU5YWXRORFEyY1RBZ0xUUXhJQzAwTWlBdE9ETjBMVGd6SUMwME1tZ3RORFV3Y1MwME1TQXdJQzA0TXlBME1uUXRORElnT0ROMk5UQXdjVEFnTVRBeklEZzJJREU0T1hReE9Ea2dPRFo2VFRjd01DQXpNREIyTFRJeU5YRXdJQzB5TVNBdE1qY2dMVFE0ZEMwME9DQXRNamRvTFRFMU1IRXRNakVnTUNBdE5EZ2dNamQwTFRJM0lEUTRkakl5Tldnek1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlNek03SWlCa1BTSk5NVEk1TkNBM05qZHNMVFl6T0NBdE1qZ3piQzB6TnpnZ01UY3diQzAzT0NBdE5qQjJMVEl5Tkd3eE1EQWdMVEUxTUhZdE1UazViQzB4TlRBZ01UUTRiQzB4TlRBZ0xURTBPWFl5TURCc01UQXdJREUxTUhZeU5UQnhNQ0EwSUMwd0xqVWdNVEF1TlhRd0lEa3VOWFF4SURoME15QTRkRFl1TlNBMmJEUTNJRFF3YkMweE5EY2dOalZzTmpReUlESTRNM3BOTVRBd01DQXpPREJzTFRNMU1DQXRNVFkyYkMwek5UQWdNVFkyZGpFME4yd3pOVEFnTFRFMk5Xd3pOVEFnTVRZMWRpMHhORGQ2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V5TXpRN0lpQmtQU0pOTWpVd0lEZ3dNSEUyTWlBd0lERXdOaUF0TkRSME5EUWdMVEV3Tm5RdE5EUWdMVEV3Tm5RdE1UQTJJQzAwTkhRdE1UQTJJRFEwZEMwME5DQXhNRFowTkRRZ01UQTJkREV3TmlBME5IcE5OalV3SURnd01IRTJNaUF3SURFd05pQXRORFIwTkRRZ0xURXdOblF0TkRRZ0xURXdOblF0TVRBMklDMDBOSFF0TVRBMklEUTBkQzAwTkNBeE1EWjBORFFnTVRBMmRERXdOaUEwTkhwTk1UQTFNQ0E0TURCeE5qSWdNQ0F4TURZZ0xUUTBkRFEwSUMweE1EWjBMVFEwSUMweE1EWjBMVEV3TmlBdE5EUjBMVEV3TmlBME5IUXRORFFnTVRBMmREUTBJREV3Tm5ReE1EWWdORFI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V5TXpVN0lpQmtQU0pOTlRVd0lERXhNREJ4TmpJZ01DQXhNRFlnTFRRMGREUTBJQzB4TURaMExUUTBJQzB4TURaMExURXdOaUF0TkRSMExURXdOaUEwTkhRdE5EUWdNVEEyZERRMElERXdOblF4TURZZ05EUjZUVFUxTUNBM01EQnhOaklnTUNBeE1EWWdMVFEwZERRMElDMHhNRFowTFRRMElDMHhNRFowTFRFd05pQXRORFIwTFRFd05pQTBOSFF0TkRRZ01UQTJkRFEwSURFd05uUXhNRFlnTkRSNlRUVTFNQ0F6TURCeE5qSWdNQ0F4TURZZ0xUUTBkRFEwSUMweE1EWjBMVFEwSUMweE1EWjBMVEV3TmlBdE5EUjBMVEV3TmlBME5IUXRORFFnTVRBMmREUTBJREV3Tm5ReE1EWWdORFI2SWlBdlBnMEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1V5TXpZN0lpQmtQU0pOTVRJMUlERXhNREJvT1RVd2NURXdJREFnTVRjdU5TQXROeTQxZERjdU5TQXRNVGN1TlhZdE1UVXdjVEFnTFRFd0lDMDNMalVnTFRFM0xqVjBMVEUzTGpVZ0xUY3VOV2d0T1RVd2NTMHhNQ0F3SUMweE55NDFJRGN1TlhRdE55NDFJREUzTGpWMk1UVXdjVEFnTVRBZ055NDFJREUzTGpWME1UY3VOU0EzTGpWNlRURXlOU0EzTURCb09UVXdjVEV3SURBZ01UY3VOU0F0Tnk0MWREY3VOU0F0TVRjdU5YWXRNVFV3Y1RBZ0xURXdJQzAzTGpVZ0xURTNMalYwTFRFM0xqVWdMVGN1TldndE9UVXdjUzB4TUNBd0lDMHhOeTQxSURjdU5YUXROeTQxSURFM0xqVjJNVFV3Y1RBZ01UQWdOeTQxSURFM0xqVWdkREUzTGpVZ055NDFlazB4TWpVZ016QXdhRGsxTUhFeE1DQXdJREUzTGpVZ0xUY3VOWFEzTGpVZ0xURTNMalYyTFRFMU1IRXdJQzB4TUNBdE55NDFJQzB4Tnk0MWRDMHhOeTQxSUMwM0xqVm9MVGsxTUhFdE1UQWdNQ0F0TVRjdU5TQTNMalYwTFRjdU5TQXhOeTQxZGpFMU1IRXdJREV3SURjdU5TQXhOeTQxZERFM0xqVWdOeTQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTWpNM095SWdaRDBpVFRNMU1DQXhNakF3YURVd01IRXhOaklnTUNBeU5UWWdMVGt6TGpWME9UUWdMVEkxTmk0MWRpMDFNREJ4TUNBdE1UWTFJQzA1TXk0MUlDMHlOVGN1TlhRdE1qVTJMalVnTFRreUxqVm9MVFV3TUhFdE1UWTFJREFnTFRJMU55NDFJRGt5TGpWMExUa3lMalVnTWpVM0xqVjJOVEF3Y1RBZ01UWTFJRGt5TGpVZ01qVTNMalYwTWpVM0xqVWdPVEl1TlhwTk9UQXdJREV3TURCb0xUWXdNSEV0TkRFZ01DQXROekF1TlNBdE1qa3VOWFF0TWprdU5TQXROekF1TlhZdE5qQXdjVEFnTFRReElESTVMalVnTFRjd0xqVjBOekF1TlNBdE1qa3VOV2cyTURCeE5ERWdNQ0EzTUM0MUlESTVMalVnZERJNUxqVWdOekF1TlhZMk1EQnhNQ0EwTVNBdE1qa3VOU0EzTUM0MWRDMDNNQzQxSURJNUxqVjZUVE0xTUNBNU1EQm9OVEF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkwek1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRVd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJNekF3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTkRBd0lEZ3dNSFl0TWpBd2FEUXdNSFl5TURCb0xUUXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEl6T0RzaUlHUTlJazB4TlRBZ01URXdNR2d4TURBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwMU1IWXRNakF3YURVd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwMU1IWXRNakF3YURVd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwMU1IWXRNakF3YURVd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRDMHhOQzQxSUMwek5TNDFJSFF0TXpVdU5TQXRNVFF1TldndE1UQXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYwTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TldnMU1IWXlNREJvTFRVd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YUXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFhRFV3ZGpJd01HZ3ROVEJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZERFMExqVWdNelV1TlhRek5TNDFJREUwTGpWb05UQjJNakF3YUMwMU1IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjBNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEl6T1RzaUlHUTlJazAyTlRBZ01URTROM0U0TnlBdE5qY2dNVEU0TGpVZ0xURTFOblF3SUMweE56aDBMVEV4T0M0MUlDMHhOVFZ4TFRnM0lEWTJJQzB4TVRndU5TQXhOVFYwTUNBeE56aDBNVEU0TGpVZ01UVTJlazB6TURBZ09EQXdjVEV5TkNBd0lESXhNaUF0T0RoME9EZ2dMVEl4TW5FdE1USTBJREFnTFRJeE1pQTRPSFF0T0RnZ01qRXllazB4TURBd0lEZ3dNSEV3SUMweE1qUWdMVGc0SUMweU1USjBMVEl4TWlBdE9EaHhNQ0F4TWpRZ09EZ2dNakV5ZERJeE1pQTRPSHBOTXpBd0lEVXdNSEV4TWpRZ01DQXlNVElnTFRnNGREZzRJQzB5TVRKeExURXlOQ0F3SUMweU1USWdPRGgwTFRnNElESXhNbm9nVFRFd01EQWdOVEF3Y1RBZ0xURXlOQ0F0T0RnZ0xUSXhNblF0TWpFeUlDMDRPSEV3SURFeU5DQTRPQ0F5TVRKME1qRXlJRGc0ZWswM01EQWdNVGs1ZGkweE5EUnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalYwTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqRTBNbkUwTUNBdE5DQTBNeUF0TkhFeE55QXdJRFUzSURaNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU5EQTdJaUJrUFNKTk56UTFJRGczT0d3Mk9TQXhPWEV5TlNBMklEUTFJQzB4TW13eU9UZ2dMVEk1TlhFeE1TQXRNVEVnTVRVZ0xUSTJMalYwTFRJZ0xUTXdMalZ4TFRVZ0xURTBJQzB4T0NBdE1qTXVOWFF0TWpnZ0xUa3VOV2d0T0hFeElEQWdNU0F0TVROeE1DQXRNamtnTFRJZ0xUVTJkQzA0TGpVZ0xUWXlkQzB5TUNBdE5qTjBMVE16SUMwMU0zUXROVEVnTFRNNWRDMDNNaTQxSUMweE5HZ3RNVFEyY1MweE9EUWdNQ0F0TVRnMElESTRPSEV3SURJMElERXdJRFEzY1MweU1DQTBJQzAyTWlBMGRDMDJNeUF0TkhFeE1TQXRNalFnTVRFZ0xUUTNjVEFnTFRJNE9DQXRNVGcwSUMweU9EaG9MVEUwTWlCeExUUTRJREFnTFRnMExqVWdNakYwTFRVMklEVXhkQzB6TWlBM01TNDFkQzB4TmlBM05YUXRNeTQxSURZNExqVnhNQ0F4TXlBeUlERXphQzAzY1MweE5TQXdJQzB5Tnk0MUlEa3VOWFF0TVRndU5TQXlNeTQxY1MwMklERTFJQzB5SURNd0xqVjBNVFVnTWpVdU5Xd3lPVGdnTWprMmNUSXdJREU0SURRMklERXhiRGMySUMweE9YRXlNQ0F0TlNBek1DNDFJQzB5TWk0MWREVXVOU0F0TXpjdU5YUXRNakl1TlNBdE16RjBMVE0zTGpVZ0xUVnNMVFV4SURFeWJDMHhPRElnTFRFNU0yZzRPVEZzTFRFNE1pQXhPVE5zTFRRMElDMHhNbkV0TWpBZ0xUVWdMVE0zTGpVZ05uUXRNakl1TlNBek1YUTJJRE0zTGpVZ2RETXhJREl5TGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU5ERTdJaUJrUFNKTk1USXdNQ0E1TURCb0xUVXdjVEFnTWpFZ0xUUWdNemQwTFRrdU5TQXlOaTQxZEMweE9DQXhOeTQxZEMweU1pQXhNWFF0TWpndU5TQTFMalYwTFRNeElESjBMVE0zSURBdU5XZ3RNakF3ZGkwNE5UQnhNQ0F0TWpJZ01qVWdMVE0wTGpWME5UQWdMVEV6TGpWc01qVWdMVEoyTFRFd01HZ3ROREF3ZGpFd01IRTBJREFnTVRFZ01DNDFkREkwSUROME16QWdOM1F5TkNBeE5YUXhNU0F5TkM0MWRqZzFNR2d0TWpBd2NTMHlOU0F3SUMwek55QXRNQzQxZEMwek1TQXRNblF0TWpndU5TQXROUzQxZEMweU1pQXRNVEYwTFRFNElDMHhOeTQxZEMwNUxqVWdMVEkyTGpWMExUUWdMVE0zYUMwMU1IWXpNREFnYURFd01EQjJMVE13TUhwTk5UQXdJRFExTUdndE1qVnhNQ0F4TlNBdE5DQXlOQzQxZEMwNUlERTBMalYwTFRFM0lEY3VOWFF0TWpBZ00zUXRNalVnTUM0MWFDMHhNREIyTFRReU5YRXdJQzB4TVNBeE1pNDFJQzB4Tnk0MWRESTFMalVnTFRjdU5XZ3hNbll0TlRCb0xUSXdNSFkxTUhFMU1DQXdJRFV3SURJMWRqUXlOV2d0TVRBd2NTMHhOeUF3SUMweU5TQXRNQzQxZEMweU1DQXRNM1F0TVRjZ0xUY3VOWFF0T1NBdE1UUXVOWFF0TkNBdE1qUXVOV2d0TWpWMk1UVXdhRFV3TUhZdE1UVXdlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNalF5T3lJZ1pEMGlUVEV3TURBZ016QXdkalV3Y1MweU5TQXdJQzAxTlNBek1uRXRNVFFnTVRRZ0xUSTFJRE14ZEMweE5pQXlOMnd0TkNBeE1Xd3RNamc1SURjME4yZ3ROamxzTFRNd01DQXROelUwY1MweE9DQXRNelVnTFRNNUlDMDFObkV0T1NBdE9TQXRNalF1TlNBdE1UZ3VOWFF0TWpZdU5TQXRNVFF1Tld3dE1URWdMVFYyTFRVd2FESTNNM1kxTUhFdE5Ea2dNQ0F0TnpndU5TQXlNUzQxZEMweE1TNDFJRFkzTGpWc05qa2dNVGMyYURJNU0ydzJNU0F0TVRZMmNURXpJQzB6TkNBdE15NDFJQzAyTmk0MWRDMDFOUzQxSUMwek1pNDFkaTAxTUdnek1USjZUVFF4TWlBMk9URnNNVE0wSURNME1td3hNakVnTFRNME1pQm9MVEkxTlhwTk1URXdNQ0F4TlRCMkxURXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1UQXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTVRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TldneE1EQXdjVEl4SURBZ016VXVOU0F0TVRRdU5YUXhOQzQxSUMwek5TNDFlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNalF6T3lJZ1pEMGlUVFV3SURFeU1EQm9NVEV3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE1URXdNSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE1URXdNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTVRFd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUWXhNU0F4TVRFNGFDMDNNSEV0TVRNZ01DQXRNVGdnTFRFeWJDMHlPVGtnTFRjMU0zRXRNVGNnTFRNeUlDMHpOU0F0TlRGeExURTRJQzB4T0NBdE5UWWdMVE0wY1MweE1pQXROU0F0TVRJZ0xURTRkaTAxTUhFd0lDMDRJRFV1TlNBdE1UUjBNVFF1TlNBdE5pQm9NamN6Y1RnZ01DQXhOQ0EyZERZZ01UUjJOVEJ4TUNBNElDMDJJREUwZEMweE5DQTJjUzAxTlNBd0lDMDNNU0F5TTNFdE1UQWdNVFFnTUNBek9XdzJNeUF4TmpOb01qWTJiRFUzSUMweE5UTnhNVEVnTFRNeElDMDJJQzAxTlhFdE1USWdMVEUzSUMwek5pQXRNVGR4TFRnZ01DQXRNVFFnTFRaMExUWWdMVEUwZGkwMU1IRXdJQzA0SURZZ0xURTBkREUwSUMwMmFETXhNM0U0SURBZ01UUWdOblEySURFMGRqVXdjVEFnTnlBdE5TNDFJREV6ZEMweE15NDFJRGR4TFRFM0lEQWdMVFF5SURJMWNTMHlOU0F5TnlBdE5EQWdOak5vTFRGc0xUSTRPQ0EzTkRoeExUVWdNVElnTFRFNUlERXllazAyTXprZ05qRXhJR2d0TVRrM2JERXdNeUF5TmpSNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU5EUTdJaUJrUFNKTk1USXdNQ0F4TVRBd2FDMHhNakF3ZGpFd01HZ3hNakF3ZGkweE1EQjZUVFV3SURFd01EQm9OREF3Y1RJeElEQWdNelV1TlNBdE1UUXVOWFF4TkM0MUlDMHpOUzQxZGkwNU1EQnhNQ0F0TWpFZ0xURTBMalVnTFRNMUxqVjBMVE0xTGpVZ0xURTBMalZvTFRRd01IRXRNakVnTUNBdE16VXVOU0F4TkM0MWRDMHhOQzQxSURNMUxqVjJPVEF3Y1RBZ01qRWdNVFF1TlNBek5TNDFkRE0xTGpVZ01UUXVOWHBOTmpVd0lERXdNREJvTkRBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDBNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xUUXdNQ0J4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpRd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNlRUY3dNQ0E1TURCMkxUTXdNR2d6TURCMk16QXdhQzB6TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU5EVTdJaUJrUFNKTk5UQWdNVEl3TUdnME1EQnhNakVnTUNBek5TNDFJQzB4TkM0MWRERTBMalVnTFRNMUxqVjJMVGt3TUhFd0lDMHlNU0F0TVRRdU5TQXRNelV1TlhRdE16VXVOU0F0TVRRdU5XZ3ROREF3Y1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZNU1EQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMDJOVEFnTnpBd2FEUXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TkRBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzAwTURCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqUXdNQ0J4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFlazAzTURBZ05qQXdkaTB6TURCb016QXdkak13TUdndE16QXdlazB4TWpBd0lEQm9MVEV5TURCMk1UQXdhREV5TURCMkxURXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEkwTmpzaUlHUTlJazAxTUNBeE1EQXdhRFF3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE16VXdhREV3TUhZeE5UQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWFEUXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TVRVd2FERXdNSFl0TVRBd2FDMHhNREIyTFRFMU1IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0TkRBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWXhOVEJvTFRFd01IWXRNelV3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMDBNREFnY1MweU1TQXdJQzB6TlM0MUlERTBMalYwTFRFMExqVWdNelV1TlhZNE1EQnhNQ0F5TVNBeE5DNDFJRE0xTGpWME16VXVOU0F4TkM0MWVrMDNNREFnTnpBd2RpMHpNREJvTXpBd2RqTXdNR2d0TXpBd2VpSWdMejROQ2p4bmJIbHdhQ0IxYm1samIyUmxQU0ltSTNobE1qUTNPeUlnWkQwaVRURXdNQ0F3YUMweE1EQjJNVEl3TUdneE1EQjJMVEV5TURCNlRUSTFNQ0F4TVRBd2FEUXdNSEV5TVNBd0lETTFMalVnTFRFMExqVjBNVFF1TlNBdE16VXVOWFl0TkRBd2NUQWdMVEl4SUMweE5DNDFJQzB6TlM0MWRDMHpOUzQxSUMweE5DNDFhQzAwTURCeExUSXhJREFnTFRNMUxqVWdNVFF1TlhRdE1UUXVOU0F6TlM0MWRqUXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVjZUVE13TUNBeE1EQXdkaTB6TURCb016QXdkak13TUdndE16QXdlazB5TlRBZ05UQXdhRGt3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE5EQXdJSEV3SUMweU1TQXRNVFF1TlNBdE16VXVOWFF0TXpVdU5TQXRNVFF1TldndE9UQXdjUzB5TVNBd0lDMHpOUzQxSURFMExqVjBMVEUwTGpVZ016VXVOWFkwTURCeE1DQXlNU0F4TkM0MUlETTFMalYwTXpVdU5TQXhOQzQxZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTWpRNE95SWdaRDBpVFRZd01DQXhNVEF3YURFMU1IRXlNU0F3SURNMUxqVWdMVEUwTGpWME1UUXVOU0F0TXpVdU5YWXROREF3Y1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMHhOVEIyTFRFd01HZzBOVEJ4TWpFZ01DQXpOUzQxSUMweE5DNDFkREUwTGpVZ0xUTTFMalYyTFRRd01IRXdJQzB5TVNBdE1UUXVOU0F0TXpVdU5YUXRNelV1TlNBdE1UUXVOV2d0T1RBd2NTMHlNU0F3SUMwek5TNDFJREUwTGpWMExURTBMalVnTXpVdU5YWTBNREJ4TUNBeU1TQXhOQzQxSURNMUxqVjBNelV1TlNBeE5DNDFhRE0xTUhZeE1EQm9MVEUxTUhFdE1qRWdNQ0F0TXpVdU5TQXhOQzQxSUhRdE1UUXVOU0F6TlM0MWRqUXdNSEV3SURJeElERTBMalVnTXpVdU5YUXpOUzQxSURFMExqVm9NVFV3ZGpFd01HZ3hNREIyTFRFd01IcE5OREF3SURFd01EQjJMVE13TUdnek1EQjJNekF3YUMwek1EQjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlORGs3SWlCa1BTSk5NVEl3TUNBd2FDMHhNREIyTVRJd01HZ3hNREIyTFRFeU1EQjZUVFUxTUNBeE1UQXdhRFF3TUhFeU1TQXdJRE0xTGpVZ0xURTBMalYwTVRRdU5TQXRNelV1TlhZdE5EQXdjVEFnTFRJeElDMHhOQzQxSUMwek5TNDFkQzB6TlM0MUlDMHhOQzQxYUMwME1EQnhMVEl4SURBZ0xUTTFMalVnTVRRdU5YUXRNVFF1TlNBek5TNDFkalF3TUhFd0lESXhJREUwTGpVZ016VXVOWFF6TlM0MUlERTBMalY2VFRZd01DQXhNREF3ZGkwek1EQm9NekF3ZGpNd01HZ3RNekF3ZWswMU1DQTFNREJvT1RBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDBNREFnY1RBZ0xUSXhJQzB4TkM0MUlDMHpOUzQxZEMwek5TNDFJQzB4TkM0MWFDMDVNREJ4TFRJeElEQWdMVE0xTGpVZ01UUXVOWFF0TVRRdU5TQXpOUzQxZGpRd01IRXdJREl4SURFMExqVWdNelV1TlhRek5TNDFJREUwTGpWNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU5UQTdJaUJrUFNKTk9EWTFJRFUyTld3dE5EazBJQzAwT1RSeExUSXpJQzB5TXlBdE5ERWdMVEl6Y1MweE5DQXdJQzB5TWlBeE15NDFkQzA0SURNNExqVjJNVEF3TUhFd0lESTFJRGdnTXpndU5YUXlNaUF4TXk0MWNURTRJREFnTkRFZ0xUSXpiRFE1TkNBdE5EazBjVEUwSUMweE5DQXhOQ0F0TXpWMExURTBJQzB6TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJMU1Uc2lJR1E5SWswek16VWdOak0xYkRRNU5DQTBPVFJ4TWprZ01qa2dOVEFnTWpBdU5YUXlNU0F0TkRrdU5YWXRNVEF3TUhFd0lDMDBNU0F0TWpFZ0xUUTVMalYwTFRVd0lESXdMalZzTFRRNU5DQTBPVFJ4TFRFMElERTBJQzB4TkNBek5YUXhOQ0F6TlhvaUlDOCtEUW84WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRJMU1qc2lJR1E5SWsweE1EQWdPVEF3YURFd01EQnhOREVnTUNBME9TNDFJQzB5TVhRdE1qQXVOU0F0TlRCc0xUUTVOQ0F0TkRrMGNTMHhOQ0F0TVRRZ0xUTTFJQzB4TkhRdE16VWdNVFJzTFRRNU5DQTBPVFJ4TFRJNUlESTVJQzB5TUM0MUlEVXdkRFE1TGpVZ01qRjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlOVE03SWlCa1BTSk5Oak0xSURnMk5XdzBPVFFnTFRRNU5IRXlPU0F0TWprZ01qQXVOU0F0TlRCMExUUTVMalVnTFRJeGFDMHhNREF3Y1MwME1TQXdJQzAwT1M0MUlESXhkREl3TGpVZ05UQnNORGswSURRNU5IRXhOQ0F4TkNBek5TQXhOSFF6TlNBdE1UUjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlOVFE3SWlCa1BTSk5OekF3SURjME1YWXRNVGd5YkMwMk9USWdMVE15TTNZeU1qRnNOREV6SURFNU0yd3ROREV6SURFNU0zWXlNakY2VFRFeU1EQWdNR2d0T0RBd2RqSXdNR2c0TURCMkxUSXdNSG9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVEkxTlRzaUlHUTlJazB4TWpBd0lEa3dNR2d0TWpBd2RpMHhNREJvTWpBd2RpMHhNREJvTFRNd01IWXpNREJvTWpBd2RqRXdNR2d0TWpBd2RqRXdNR2d6TURCMkxUTXdNSHBOTUNBM01EQm9OVEJ4TUNBeU1TQTBJRE0zZERrdU5TQXlOaTQxZERFNElERTNMalYwTWpJZ01URjBNamd1TlNBMUxqVjBNekVnTW5Rek55QXdMalZvTVRBd2RpMDFOVEJ4TUNBdE1qSWdMVEkxSUMwek5DNDFkQzAxTUNBdE1UTXVOV3d0TWpVZ0xUSjJMVEV3TUdnME1EQjJNVEF3Y1MwMElEQWdMVEV4SURBdU5YUXRNalFnTTNRdE16QWdOM1F0TWpRZ01UVjBMVEV4SURJMExqVjJOVFV3YURFd01IRXlOU0F3SURNM0lDMHdMalYwTXpFZ0xUSWdkREk0TGpVZ0xUVXVOWFF5TWlBdE1URjBNVGdnTFRFM0xqVjBPUzQxSUMweU5pNDFkRFFnTFRNM2FEVXdkak13TUdndE9EQXdkaTB6TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVeU5UWTdJaUJrUFNKTk9EQXdJRGN3TUdndE5UQnhNQ0F5TVNBdE5DQXpOM1F0T1M0MUlESTJMalYwTFRFNElERTNMalYwTFRJeUlERXhkQzB5T0M0MUlEVXVOWFF0TXpFZ01uUXRNemNnTUM0MWFDMHhNREIyTFRVMU1IRXdJQzB5TWlBeU5TQXRNelF1TlhRMU1DQXRNVFF1Tld3eU5TQXRNWFl0TVRBd2FDMDBNREIyTVRBd2NUUWdNQ0F4TVNBd0xqVjBNalFnTTNRek1DQTNkREkwSURFMWRERXhJREkwTGpWMk5UVXdhQzB4TURCeExUSTFJREFnTFRNM0lDMHdMalYwTFRNeElDMHlkQzB5T0M0MUlDMDFMalYwTFRJeUlDMHhNWFF0TVRnZ0xURTNMalYwTFRrdU5TQXRNall1TlhRdE5DQXRNemRvTFRVd2RqTXdNQ0JvT0RBd2RpMHpNREI2VFRFeE1EQWdNakF3YUMweU1EQjJMVEV3TUdneU1EQjJMVEV3TUdndE16QXdkak13TUdneU1EQjJNVEF3YUMweU1EQjJNVEF3YURNd01IWXRNekF3ZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTWpVM095SWdaRDBpVFRjd01TQXhNRGs0YURFMk1IRXhOaUF3SURJeElDMHhNWFF0TnlBdE1qTnNMVFEyTkNBdE5EWTBiRFEyTkNBdE5EWTBjVEV5SUMweE1pQTNJQzB5TTNRdE1qRWdMVEV4YUMweE5qQnhMVEV6SURBZ0xUSXpJRGxzTFRRM01TQTBOekZ4TFRjZ09DQXROeUF4T0hRM0lERTRiRFEzTVNBME56RnhNVEFnT1NBeU15QTVlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxNalU0T3lJZ1pEMGlUVE16T1NBeE1EazRhREUyTUhFeE15QXdJREl6SUMwNWJEUTNNU0F0TkRjeGNUY2dMVGdnTnlBdE1UaDBMVGNnTFRFNGJDMDBOekVnTFRRM01YRXRNVEFnTFRrZ0xUSXpJQzA1YUMweE5qQnhMVEUySURBZ0xUSXhJREV4ZERjZ01qTnNORFkwSURRMk5Hd3RORFkwSURRMk5IRXRNVElnTVRJZ0xUY2dNak4wTWpFZ01URjZJaUF2UGcwS1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVXlOVGs3SWlCa1BTSk5NVEE0TnlBNE9ESnhNVEVnTFRVZ01URWdMVEl4ZGkweE5qQnhNQ0F0TVRNZ0xUa2dMVEl6YkMwME56RWdMVFEzTVhFdE9DQXROeUF0TVRnZ0xUZDBMVEU0SURkc0xUUTNNU0EwTnpGeExUa2dNVEFnTFRrZ01qTjJNVFl3Y1RBZ01UWWdNVEVnTWpGME1qTWdMVGRzTkRZMElDMDBOalJzTkRZMElEUTJOSEV4TWlBeE1pQXlNeUEzZWlJZ0x6NE5DanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsTWpZd095SWdaRDBpVFRZeE9DQTVPVE5zTkRjeElDMDBOekZ4T1NBdE1UQWdPU0F0TWpOMkxURTJNSEV3SUMweE5pQXRNVEVnTFRJeGRDMHlNeUEzYkMwME5qUWdORFkwYkMwME5qUWdMVFEyTkhFdE1USWdMVEV5SUMweU15QXROM1F0TVRFZ01qRjJNVFl3Y1RBZ01UTWdPU0F5TTJ3ME56RWdORGN4Y1RnZ055QXhPQ0EzZERFNElDMDNlaUlnTHo0TkNqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaG1PR1ptT3lJZ1pEMGlUVEV3TURBZ01USXdNSEV3SUMweE1qUWdMVGc0SUMweU1USjBMVEl4TWlBdE9EaHhNQ0F4TWpRZ09EZ2dNakV5ZERJeE1pQTRPSHBOTkRVd0lERXdNREJvTVRBd2NUSXhJREFnTkRBZ0xURTBkREkySUMwek0ydzNPU0F0TVRrMGNUVWdNU0F4TmlBemNUTTBJRFlnTlRRZ09TNDFkRFl3SURkME5qVXVOU0F4ZERZeElDMHhNSFExTmk0MUlDMHlNM1EwTWk0MUlDMDBNblF5T1NBdE5qUjBOU0F0T1RKMExURTVMalVnTFRFeU1TNDFjUzB4SUMwM0lDMHpJQzB4T1M0MWRDMHhNU0F0TlRCMExUSXdMalVnTFRjemRDMHpNaTQxSUMwNE1TNDFkQzAwTmk0MUlDMDRNM1F0TmpRZ0xUY3dJSFF0T0RJdU5TQXROVEJ4TFRFeklDMDFJQzAwTWlBdE5YUXROalV1TlNBeUxqVjBMVFEzTGpVZ01pNDFjUzB4TkNBd0lDMDBPUzQxSUMwekxqVjBMVFl6SUMwekxqVjBMVFF6TGpVZ04zRXROVGNnTWpVZ0xURXdOQzQxSURjNExqVjBMVGMxSURFeE1TNDFkQzAwTmk0MUlERXhNblF0TWpZZ09UQnNMVGNnTXpWeExURTFJRFl6SUMweE9DQXhNVFYwTkM0MUlEZzRMalYwTWpZZ05qUjBNemt1TlNBME15NDFkRFV5SURJMUxqVjBOVGd1TlNBeE0zUTJNaTQxSURKME5Ua3VOU0F0TkM0MWREVTFMalVnTFRoc0xURTBOeUF4T1RKeExURXlJREU0SUMwMUxqVWdNekIwTWpjdU5TQXhNbm9pSUM4K0RRbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRNV1kxTVRFN0lpQmtQU0pOTWpVd0lERXlNREJvTmpBd2NUSXhJREFnTXpVdU5TQXRNVFF1TlhReE5DNDFJQzB6TlM0MWRpMDBNREJ4TUNBdE1qRWdMVEUwTGpVZ0xUTTFMalYwTFRNMUxqVWdMVEUwTGpWb0xURTFNSFl0TlRBd2JDMHlOVFVnTFRFM09IRXRNVGtnTFRrZ0xUTXlJQzB4ZEMweE15QXlPWFkyTlRCb0xURTFNSEV0TWpFZ01DQXRNelV1TlNBeE5DNDFkQzB4TkM0MUlETTFMalYyTkRBd2NUQWdNakVnTVRRdU5TQXpOUzQxZERNMUxqVWdNVFF1TlhwTk5EQXdJREV4TURCMkxURXdNR2d6TURCMk1UQXdhQzB6TURCNklpQXZQZzBLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZURGbU5tRmhPeUlnWkQwaVRUSTFNQ0F4TWpBd2FEYzFNSEV6T1NBd0lEWTVMalVnTFRRd0xqVjBNekF1TlNBdE9EUXVOWFl0T1RNemJDMDNNREFnTFRFeE4zWTVOVEJzTmpBd0lERXlOV2d0TnpBd2RpMHhNREF3YUMweE1EQjJNVEF5TlhFd0lESXpJREUxTGpVZ05EbDBNelF1TlNBeU5ucE5OVEF3SURVeU5YWXRNVEF3YkRFd01DQXlNSFl4TURCNklpQXZQZzBLUEM5bWIyNTBQZzBLUEM5a1pXWnpQand2YzNablBpQT0i"

/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf":
/*!*******************************************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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JbwmFCZ+JuYnUCe8J/goNChwKKwpoCnMKiYqSiqEKworeiwILGgsuizsLRwtiC30LiguZi6iLtgvDi9GL34vsi/4MD4whDDSMRIxYDGuMegyJDJeMpoy3jMiMz4zaDO2NBg0YDSoNNI1LDWeNeg2PjZ8Ntw3GjdON5I31DgQOEI4hjjIOQo5SjmIOcw6HDpsOpo63jugO9w8GDxQPKI8+D0yPew+Oj6MPtQ/KD9uP6o/+kBIQIBAxkECQX5CGEKoQu5DGENCQ3ZDoEPKRBBEYESuRPZFWkW2RgZGdEa0RvZHNkd2R7ZH9kgWSDJITkhqSIZIzEkSSThJXkmESapKAkouSlIAAQAAARcApwARAAAAAAACAAAAAQABAAAAQAAuAAAAAAAAABAAxgABAAAAAAATABIAAAADAAEECQAAAGoAEgADAAEECQABACgAfAADAAEECQACAA4ApAADAAEECQADAEwAsgADAAEECQAEADgA/gADAAEECQAFAHgBNgADAAEECQAGADYBrgADAAEECQAIABYB5AADAAEECQAJABYB+gADAAEECQALACQCEAADAAEECQAMACQCNAADAAEECQATACQCWAADAAEECQDIABYCfAADAAEECQDJADACkgADAAEECdkDABoCwnd3dy5nbHlwaGljb25zLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQA0ACAAYgB5ACAASgBhAG4AIABLAG8AdgBhAHIAaQBrAC4AIABBAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ARwBMAFkAUABIAEkAQwBPAE4AUwAgAEgAYQBsAGYAbABpAG4AZwBzAFIAZQBnAHUAbABhAHIAMQAuADAAMAA5ADsAVQBLAFcATgA7AEcATABZAFAASABJAEMATwBOAFMASABhAGwAZgBsAGkAbgBnAHMALQBSAGUAZwB1AGwAYQByAEcATABZAFAASABJAEMATwBOAFMAIABIAGEAbABmAGwAaQBuAGcAcwAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAOQA7AFAAUwAgADAAMAAxAC4AMAAwADkAOwBoAG8AdABjAG8AbgB2ACAAMQAuADAALgA3ADAAOwBtAGEAawBlAG8AdABmAC4AbABpAGIAMgAuADUALgA1ADgAMwAyADkARwBMAFkAUABIAEkAQwBPAE4AUwBIAGEAbABmAGwAaQBuAGcAcwAtAFIAZQBnAHUAbABhAHIASgBhAG4AIABLAG8AdgBhAHIAaQBrAEoAYQBuACAASwBvAHYAYQByAGkAawB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQBXAGUAYgBmAG8AbgB0ACAAMQAuADAAVwBlAGQAIABPAGMAdAAgADIAOQAgADAANgA6ADMANgA6ADAANwAgADIAMAAxADQARgBvAG4AdAAgAFMAcQB1AGkAcgByAGUAbAAAAAIAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAABFwAAAQIBAwADAA0ADgEEAJYBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMA7wEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgZnbHlwaDEGZ2x5cGgyB3VuaTAwQTAHdW5pMjAwMAd1bmkyMDAxB3VuaTIwMDIHdW5pMjAwMwd1bmkyMDA0B3VuaTIwMDUHdW5pMjAwNgd1bmkyMDA3B3VuaTIwMDgHdW5pMjAwOQd1bmkyMDBBB3VuaTIwMkYHdW5pMjA1RgRFdXJvB3VuaTIwQkQHdW5pMjMxQgd1bmkyNUZDB3VuaTI2MDEHdW5pMjZGQQd1bmkyNzA5B3VuaTI3MEYHdW5pRTAwMQd1bmlFMDAyB3VuaUUwMDMHdW5pRTAwNQd1bmlFMDA2B3VuaUUwMDcHdW5pRTAwOAd1bmlFMDA5B3VuaUUwMTAHdW5pRTAxMQd1bmlFMDEyB3VuaUUwMTMHdW5pRTAxNAd1bmlFMDE1B3VuaUUwMTYHdW5pRTAxNwd1bmlFMDE4B3VuaUUwMTkHdW5pRTAyMAd1bmlFMDIxB3VuaUUwMjIHdW5pRTAyMwd1bmlFMDI0B3VuaUUwMjUHdW5pRTAyNgd1bmlFMDI3B3VuaUUwMjgHdW5pRTAyOQd1bmlFMDMwB3VuaUUwMzEHdW5pRTAzMgd1bmlFMDMzB3VuaUUwMzQHdW5pRTAzNQd1bmlFMDM2B3VuaUUwMzcHdW5pRTAzOAd1bmlFMDM5B3VuaUUwNDAHdW5pRTA0MQd1bmlFMDQyB3VuaUUwNDMHdW5pRTA0NAd1bmlFMDQ1B3VuaUUwNDYHdW5pRTA0Nwd1bmlFMDQ4B3VuaUUwNDkHdW5pRTA1MAd1bmlFMDUxB3VuaUUwNTIHdW5pRTA1Mwd1bmlFMDU0B3VuaUUwNTUHdW5pRTA1Ngd1bmlFMDU3B3VuaUUwNTgHdW5pRTA1OQd1bmlFMDYwB3VuaUUwNjIHdW5pRTA2Mwd1bmlFMDY0B3VuaUUwNjUHdW5pRTA2Ngd1bmlFMDY3B3VuaUUwNjgHdW5pRTA2OQd1bmlFMDcwB3VuaUUwNzEHdW5pRTA3Mgd1bmlFMDczB3VuaUUwNzQHdW5pRTA3NQd1bmlFMDc2B3VuaUUwNzcHdW5pRTA3OAd1bmlFMDc5B3VuaUUwODAHdW5pRTA4MQd1bmlFMDgyB3VuaUUwODMHdW5pRTA4NAd1bmlFMDg1B3VuaUUwODYHdW5pRTA4Nwd1bmlFMDg4B3VuaUUwODkHdW5pRTA5MAd1bmlFMDkxB3VuaUUwOTIHdW5pRTA5Mwd1bmlFMDk0B3VuaUUwOTUHdW5pRTA5Ngd1bmlFMDk3B3VuaUUxMDEHdW5pRTEwMgd1bmlFMTAzB3VuaUUxMDQHdW5pRTEwNQd1bmlFMTA2B3VuaUUxMDcHdW5pRTEwOAd1bmlFMTA5B3VuaUUxMTAHdW5pRTExMQd1bmlFMTEyB3VuaUUxMTMHdW5pRTExNAd1bmlFMTE1B3VuaUUxMTYHdW5pRTExNwd1bmlFMTE4B3VuaUUxMTkHdW5pRTEyMAd1bmlFMTIxB3VuaUUxMjIHdW5pRTEyMwd1bmlFMTI0B3VuaUUxMjUHdW5pRTEyNgd1bmlFMTI3B3VuaUUxMjgHdW5pRTEyOQd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMTMzB3VuaUUxMzQHdW5pRTEzNQd1bmlFMTM2B3VuaUUxMzcHdW5pRTEzOAd1bmlFMTM5B3VuaUUxNDAHdW5pRTE0MQd1bmlFMTQyB3VuaUUxNDMHdW5pRTE0NAd1bmlFMTQ1B3VuaUUxNDYHdW5pRTE0OAd1bmlFMTQ5B3VuaUUxNTAHdW5pRTE1MQd1bmlFMTUyB3VuaUUxNTMHdW5pRTE1NAd1bmlFMTU1B3VuaUUxNTYHdW5pRTE1Nwd1bmlFMTU4B3VuaUUxNTkHdW5pRTE2MAd1bmlFMTYxB3VuaUUxNjIHdW5pRTE2Mwd1bmlFMTY0B3VuaUUxNjUHdW5pRTE2Ngd1bmlFMTY3B3VuaUUxNjgHdW5pRTE2OQd1bmlFMTcwB3VuaUUxNzEHdW5pRTE3Mgd1bmlFMTczB3VuaUUxNzQHdW5pRTE3NQd1bmlFMTc2B3VuaUUxNzcHdW5pRTE3OAd1bmlFMTc5B3VuaUUxODAHdW5pRTE4MQd1bmlFMTgyB3VuaUUxODMHdW5pRTE4NAd1bmlFMTg1B3VuaUUxODYHdW5pRTE4Nwd1bmlFMTg4B3VuaUUxODkHdW5pRTE5MAd1bmlFMTkxB3VuaUUxOTIHdW5pRTE5Mwd1bmlFMTk0B3VuaUUxOTUHdW5pRTE5Nwd1bmlFMTk4B3VuaUUxOTkHdW5pRTIwMAd1bmlFMjAxB3VuaUUyMDIHdW5pRTIwMwd1bmlFMjA0B3VuaUUyMDUHdW5pRTIwNgd1bmlFMjA5B3VuaUUyMTAHdW5pRTIxMQd1bmlFMjEyB3VuaUUyMTMHdW5pRTIxNAd1bmlFMjE1B3VuaUUyMTYHdW5pRTIxOAd1bmlFMjE5B3VuaUUyMjEHdW5pRTIyMwd1bmlFMjI0B3VuaUUyMjUHdW5pRTIyNgd1bmlFMjI3B3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTIzNAd1bmlFMjM1B3VuaUUyMzYHdW5pRTIzNwd1bmlFMjM4B3VuaUUyMzkHdW5pRTI0MAd1bmlFMjQxB3VuaUUyNDIHdW5pRTI0Mwd1bmlFMjQ0B3VuaUUyNDUHdW5pRTI0Ngd1bmlFMjQ3B3VuaUUyNDgHdW5pRTI0OQd1bmlFMjUwB3VuaUUyNTEHdW5pRTI1Mgd1bmlFMjUzB3VuaUUyNTQHdW5pRTI1NQd1bmlFMjU2B3VuaUUyNTcHdW5pRTI1OAd1bmlFMjU5B3VuaUUyNjAHdW5pRjhGRgZ1MUY1MTEGdTFGNkFBAAAAAAFUUMMXAAA="

/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff":
/*!********************************************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2":
/*!*********************************************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2 ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js":
/*!********************************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/public/vendor/bootstrap/3.3.7/js/bootstrap.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === "undefined") {
	throw new Error("Bootstrap's JavaScript requires jQuery");
}

+function ($) {

	var version = $.fn.jquery.split(" ")[0].split(".");
	if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
		throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
	}
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	// ============================================================

	function transitionEnd() {
		var el = document.createElement("bootstrap");

		var transEndEventNames = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		};

		for (var name in transEndEventNames) {
			if (el.style[name] !== undefined) {
				return { end: transEndEventNames[name] };
			}
		}

		return false; // explicit for ie8 (  ._.)
	}

	// http://blog.alexmaccaw.com/css-transitions
	$.fn.emulateTransitionEnd = function (duration) {
		var called = false;
		var $el = this;
		$(this).one("bsTransitionEnd", function () {
			called = true;
		});
		var callback = function callback() {
			if (!called) $($el).trigger($.support.transition.end);
		};
		setTimeout(callback, duration);
		return this;
	};

	$(function () {
		$.support.transition = transitionEnd();

		if (!$.support.transition) return;

		$.event.special.bsTransitionEnd = {
			bindType: $.support.transition.end,
			delegateType: $.support.transition.end,
			handle: function handle(e) {
				if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
			}
		};
	});
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// ALERT CLASS DEFINITION
	// ======================

	var dismiss = "[data-dismiss=\"alert\"]";
	var Alert = function Alert(el) {
		$(el).on("click", dismiss, this.close);
	};

	Alert.VERSION = "3.3.7";

	Alert.TRANSITION_DURATION = 150;

	Alert.prototype.close = function (e) {
		var $this = $(this);
		var selector = $this.attr("data-target");

		if (!selector) {
			selector = $this.attr("href");
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""); // strip for ie7
		}

		var $parent = $(selector === "#" ? [] : selector);

		if (e) e.preventDefault();

		if (!$parent.length) {
			$parent = $this.closest(".alert");
		}

		$parent.trigger(e = $.Event("close.bs.alert"));

		if (e.isDefaultPrevented()) return;

		$parent.removeClass("in");

		function removeElement() {
			// detach from parent, fire event then clean up data
			$parent.detach().trigger("closed.bs.alert").remove();
		}

		$.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
	};

	// ALERT PLUGIN DEFINITION
	// =======================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.alert");

			if (!data) $this.data("bs.alert", data = new Alert(this));
			if (typeof option == "string") data[option].call($this);
		});
	}

	var old = $.fn.alert;

	$.fn.alert = Plugin;
	$.fn.alert.Constructor = Alert;

	// ALERT NO CONFLICT
	// =================

	$.fn.alert.noConflict = function () {
		$.fn.alert = old;
		return this;
	};

	// ALERT DATA-API
	// ==============

	$(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// BUTTON PUBLIC CLASS DEFINITION
	// ==============================

	var Button = function Button(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, Button.DEFAULTS, options);
		this.isLoading = false;
	};

	Button.VERSION = "3.3.7";

	Button.DEFAULTS = {
		loadingText: "loading..."
	};

	Button.prototype.setState = function (state) {
		var d = "disabled";
		var $el = this.$element;
		var val = $el.is("input") ? "val" : "html";
		var data = $el.data();

		state += "Text";

		if (data.resetText == null) $el.data("resetText", $el[val]());

		// push to event loop to allow forms to submit
		setTimeout($.proxy(function () {
			$el[val](data[state] == null ? this.options[state] : data[state]);

			if (state == "loadingText") {
				this.isLoading = true;
				$el.addClass(d).attr(d, d).prop(d, true);
			} else if (this.isLoading) {
				this.isLoading = false;
				$el.removeClass(d).removeAttr(d).prop(d, false);
			}
		}, this), 0);
	};

	Button.prototype.toggle = function () {
		var changed = true;
		var $parent = this.$element.closest("[data-toggle=\"buttons\"]");

		if ($parent.length) {
			var $input = this.$element.find("input");
			if ($input.prop("type") == "radio") {
				if ($input.prop("checked")) changed = false;
				$parent.find(".active").removeClass("active");
				this.$element.addClass("active");
			} else if ($input.prop("type") == "checkbox") {
				if ($input.prop("checked") !== this.$element.hasClass("active")) changed = false;
				this.$element.toggleClass("active");
			}
			$input.prop("checked", this.$element.hasClass("active"));
			if (changed) $input.trigger("change");
		} else {
			this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
			this.$element.toggleClass("active");
		}
	};

	// BUTTON PLUGIN DEFINITION
	// ========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.button");
			var options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option;

			if (!data) $this.data("bs.button", data = new Button(this, options));

			if (option == "toggle") data.toggle();else if (option) data.setState(option);
		});
	}

	var old = $.fn.button;

	$.fn.button = Plugin;
	$.fn.button.Constructor = Button;

	// BUTTON NO CONFLICT
	// ==================

	$.fn.button.noConflict = function () {
		$.fn.button = old;
		return this;
	};

	// BUTTON DATA-API
	// ===============

	$(document).on("click.bs.button.data-api", "[data-toggle^=\"button\"]", function (e) {
		var $btn = $(e.target).closest(".btn");
		Plugin.call($btn, "toggle");
		if (!$(e.target).is("input[type=\"radio\"], input[type=\"checkbox\"]")) {
			// Prevent double click on radios, and the double selections (so cancellation) on checkboxes
			e.preventDefault();
			// The target component still receive the focus
			if ($btn.is("input,button")) $btn.trigger("focus");else $btn.find("input:visible,button:visible").first().trigger("focus");
		}
	}).on("focus.bs.button.data-api blur.bs.button.data-api", "[data-toggle^=\"button\"]", function (e) {
		$(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
	});
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// CAROUSEL CLASS DEFINITION
	// =========================

	var Carousel = function Carousel(element, options) {
		this.$element = $(element);
		this.$indicators = this.$element.find(".carousel-indicators");
		this.options = options;
		this.paused = null;
		this.sliding = null;
		this.interval = null;
		this.$active = null;
		this.$items = null;

		this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));

		this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
	};

	Carousel.VERSION = "3.3.7";

	Carousel.TRANSITION_DURATION = 600;

	Carousel.DEFAULTS = {
		interval: 5000,
		pause: "hover",
		wrap: true,
		keyboard: true
	};

	Carousel.prototype.keydown = function (e) {
		if (/input|textarea/i.test(e.target.tagName)) return;
		switch (e.which) {
			case 37:
				this.prev();break;
			case 39:
				this.next();break;
			default:
				return;
		}

		e.preventDefault();
	};

	Carousel.prototype.cycle = function (e) {
		e || (this.paused = false);

		this.interval && clearInterval(this.interval);

		this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

		return this;
	};

	Carousel.prototype.getItemIndex = function (item) {
		this.$items = item.parent().children(".item");
		return this.$items.index(item || this.$active);
	};

	Carousel.prototype.getItemForDirection = function (direction, active) {
		var activeIndex = this.getItemIndex(active);
		var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
		if (willWrap && !this.options.wrap) return active;
		var delta = direction == "prev" ? -1 : 1;
		var itemIndex = (activeIndex + delta) % this.$items.length;
		return this.$items.eq(itemIndex);
	};

	Carousel.prototype.to = function (pos) {
		var that = this;
		var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));

		if (pos > this.$items.length - 1 || pos < 0) return;

		if (this.sliding) return this.$element.one("slid.bs.carousel", function () {
			that.to(pos);
		}); // yes, "slid"
		if (activeIndex == pos) return this.pause().cycle();

		return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
	};

	Carousel.prototype.pause = function (e) {
		e || (this.paused = true);

		if (this.$element.find(".next, .prev").length && $.support.transition) {
			this.$element.trigger($.support.transition.end);
			this.cycle(true);
		}

		this.interval = clearInterval(this.interval);

		return this;
	};

	Carousel.prototype.next = function () {
		if (this.sliding) return;
		return this.slide("next");
	};

	Carousel.prototype.prev = function () {
		if (this.sliding) return;
		return this.slide("prev");
	};

	Carousel.prototype.slide = function (type, next) {
		var $active = this.$element.find(".item.active");
		var $next = next || this.getItemForDirection(type, $active);
		var isCycling = this.interval;
		var direction = type == "next" ? "left" : "right";
		var that = this;

		if ($next.hasClass("active")) return this.sliding = false;

		var relatedTarget = $next[0];
		var slideEvent = $.Event("slide.bs.carousel", {
			relatedTarget: relatedTarget,
			direction: direction
		});
		this.$element.trigger(slideEvent);
		if (slideEvent.isDefaultPrevented()) return;

		this.sliding = true;

		isCycling && this.pause();

		if (this.$indicators.length) {
			this.$indicators.find(".active").removeClass("active");
			var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
			$nextIndicator && $nextIndicator.addClass("active");
		}

		var slidEvent = $.Event("slid.bs.carousel", { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
		if ($.support.transition && this.$element.hasClass("slide")) {
			$next.addClass(type);
			$next[0].offsetWidth; // force reflow
			$active.addClass(direction);
			$next.addClass(direction);
			$active.one("bsTransitionEnd", function () {
				$next.removeClass([type, direction].join(" ")).addClass("active");
				$active.removeClass(["active", direction].join(" "));
				that.sliding = false;
				setTimeout(function () {
					that.$element.trigger(slidEvent);
				}, 0);
			}).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
		} else {
			$active.removeClass("active");
			$next.addClass("active");
			this.sliding = false;
			this.$element.trigger(slidEvent);
		}

		isCycling && this.cycle();

		return this;
	};

	// CAROUSEL PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.carousel");
			var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option);
			var action = typeof option == "string" ? option : options.slide;

			if (!data) $this.data("bs.carousel", data = new Carousel(this, options));
			if (typeof option == "number") data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
		});
	}

	var old = $.fn.carousel;

	$.fn.carousel = Plugin;
	$.fn.carousel.Constructor = Carousel;

	// CAROUSEL NO CONFLICT
	// ====================

	$.fn.carousel.noConflict = function () {
		$.fn.carousel = old;
		return this;
	};

	// CAROUSEL DATA-API
	// =================

	var clickHandler = function clickHandler(e) {
		var href;
		var $this = $(this);
		var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")); // strip for ie7
		if (!$target.hasClass("carousel")) return;
		var options = $.extend({}, $target.data(), $this.data());
		var slideIndex = $this.attr("data-slide-to");
		if (slideIndex) options.interval = false;

		Plugin.call($target, options);

		if (slideIndex) {
			$target.data("bs.carousel").to(slideIndex);
		}

		e.preventDefault();
	};

	$(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);

	$(window).on("load", function () {
		$("[data-ride=\"carousel\"]").each(function () {
			var $carousel = $(this);
			Plugin.call($carousel, $carousel.data());
		});
	});
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {

	// COLLAPSE PUBLIC CLASS DEFINITION
	// ================================

	var Collapse = function Collapse(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, Collapse.DEFAULTS, options);
		this.$trigger = $("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + "[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]");
		this.transitioning = null;

		if (this.options.parent) {
			this.$parent = this.getParent();
		} else {
			this.addAriaAndCollapsedClass(this.$element, this.$trigger);
		}

		if (this.options.toggle) this.toggle();
	};

	Collapse.VERSION = "3.3.7";

	Collapse.TRANSITION_DURATION = 350;

	Collapse.DEFAULTS = {
		toggle: true
	};

	Collapse.prototype.dimension = function () {
		var hasWidth = this.$element.hasClass("width");
		return hasWidth ? "width" : "height";
	};

	Collapse.prototype.show = function () {
		if (this.transitioning || this.$element.hasClass("in")) return;

		var activesData;
		var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

		if (actives && actives.length) {
			activesData = actives.data("bs.collapse");
			if (activesData && activesData.transitioning) return;
		}

		var startEvent = $.Event("show.bs.collapse");
		this.$element.trigger(startEvent);
		if (startEvent.isDefaultPrevented()) return;

		if (actives && actives.length) {
			Plugin.call(actives, "hide");
			activesData || actives.data("bs.collapse", null);
		}

		var dimension = this.dimension();

		this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);

		this.$trigger.removeClass("collapsed").attr("aria-expanded", true);

		this.transitioning = 1;

		var complete = function complete() {
			this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
			this.transitioning = 0;
			this.$element.trigger("shown.bs.collapse");
		};

		if (!$.support.transition) return complete.call(this);

		var scrollSize = $.camelCase(["scroll", dimension].join("-"));

		this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
	};

	Collapse.prototype.hide = function () {
		if (this.transitioning || !this.$element.hasClass("in")) return;

		var startEvent = $.Event("hide.bs.collapse");
		this.$element.trigger(startEvent);
		if (startEvent.isDefaultPrevented()) return;

		var dimension = this.dimension();

		this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

		this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);

		this.$trigger.addClass("collapsed").attr("aria-expanded", false);

		this.transitioning = 1;

		var complete = function complete() {
			this.transitioning = 0;
			this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
		};

		if (!$.support.transition) return complete.call(this);

		this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
	};

	Collapse.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	};

	Collapse.prototype.getParent = function () {
		return $(this.options.parent).find("[data-toggle=\"collapse\"][data-parent=\"" + this.options.parent + "\"]").each($.proxy(function (i, element) {
			var $element = $(element);
			this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
		}, this)).end();
	};

	Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
		var isOpen = $element.hasClass("in");

		$element.attr("aria-expanded", isOpen);
		$trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
	};

	function getTargetFromTrigger($trigger) {
		var href;
		var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""); // strip for ie7

		return $(target);
	}

	// COLLAPSE PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.collapse");
			var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option);

			if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
			if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
			if (typeof option == "string") data[option]();
		});
	}

	var old = $.fn.collapse;

	$.fn.collapse = Plugin;
	$.fn.collapse.Constructor = Collapse;

	// COLLAPSE NO CONFLICT
	// ====================

	$.fn.collapse.noConflict = function () {
		$.fn.collapse = old;
		return this;
	};

	// COLLAPSE DATA-API
	// =================

	$(document).on("click.bs.collapse.data-api", "[data-toggle=\"collapse\"]", function (e) {
		var $this = $(this);

		if (!$this.attr("data-target")) e.preventDefault();

		var $target = getTargetFromTrigger($this);
		var data = $target.data("bs.collapse");
		var option = data ? "toggle" : $this.data();

		Plugin.call($target, option);
	});
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// DROPDOWN CLASS DEFINITION
	// =========================

	var backdrop = ".dropdown-backdrop";
	var toggle = "[data-toggle=\"dropdown\"]";
	var Dropdown = function Dropdown(element) {
		$(element).on("click.bs.dropdown", this.toggle);
	};

	Dropdown.VERSION = "3.3.7";

	function getParent($this) {
		var selector = $this.attr("data-target");

		if (!selector) {
			selector = $this.attr("href");
			selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""); // strip for ie7
		}

		var $parent = selector && $(selector);

		return $parent && $parent.length ? $parent : $this.parent();
	}

	function clearMenus(e) {
		if (e && e.which === 3) return;
		$(backdrop).remove();
		$(toggle).each(function () {
			var $this = $(this);
			var $parent = getParent($this);
			var relatedTarget = { relatedTarget: this };

			if (!$parent.hasClass("open")) return;

			if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

			$parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));

			if (e.isDefaultPrevented()) return;

			$this.attr("aria-expanded", "false");
			$parent.removeClass("open").trigger($.Event("hidden.bs.dropdown", relatedTarget));
		});
	}

	Dropdown.prototype.toggle = function (e) {
		var $this = $(this);

		if ($this.is(".disabled, :disabled")) return;

		var $parent = getParent($this);
		var isActive = $parent.hasClass("open");

		clearMenus();

		if (!isActive) {
			if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
				// if mobile we use a backdrop because click events don't delegate
				$(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus);
			}

			var relatedTarget = { relatedTarget: this };
			$parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));

			if (e.isDefaultPrevented()) return;

			$this.trigger("focus").attr("aria-expanded", "true");

			$parent.toggleClass("open").trigger($.Event("shown.bs.dropdown", relatedTarget));
		}

		return false;
	};

	Dropdown.prototype.keydown = function (e) {
		if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

		var $this = $(this);

		e.preventDefault();
		e.stopPropagation();

		if ($this.is(".disabled, :disabled")) return;

		var $parent = getParent($this);
		var isActive = $parent.hasClass("open");

		if (!isActive && e.which != 27 || isActive && e.which == 27) {
			if (e.which == 27) $parent.find(toggle).trigger("focus");
			return $this.trigger("click");
		}

		var desc = " li:not(.disabled):visible a";
		var $items = $parent.find(".dropdown-menu" + desc);

		if (!$items.length) return;

		var index = $items.index(e.target);

		if (e.which == 38 && index > 0) index--; // up
		if (e.which == 40 && index < $items.length - 1) index++; // down
		if (!~index) index = 0;

		$items.eq(index).trigger("focus");
	};

	// DROPDOWN PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.dropdown");

			if (!data) $this.data("bs.dropdown", data = new Dropdown(this));
			if (typeof option == "string") data[option].call($this);
		});
	}

	var old = $.fn.dropdown;

	$.fn.dropdown = Plugin;
	$.fn.dropdown.Constructor = Dropdown;

	// DROPDOWN NO CONFLICT
	// ====================

	$.fn.dropdown.noConflict = function () {
		$.fn.dropdown = old;
		return this;
	};

	// APPLY TO STANDARD DROPDOWN ELEMENTS
	// ===================================

	$(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
		e.stopPropagation();
	}).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// MODAL CLASS DEFINITION
	// ======================

	var Modal = function Modal(element, options) {
		this.options = options;
		this.$body = $(document.body);
		this.$element = $(element);
		this.$dialog = this.$element.find(".modal-dialog");
		this.$backdrop = null;
		this.isShown = null;
		this.originalBodyPad = null;
		this.scrollbarWidth = 0;
		this.ignoreBackdropClick = false;

		if (this.options.remote) {
			this.$element.find(".modal-content").load(this.options.remote, $.proxy(function () {
				this.$element.trigger("loaded.bs.modal");
			}, this));
		}
	};

	Modal.VERSION = "3.3.7";

	Modal.TRANSITION_DURATION = 300;
	Modal.BACKDROP_TRANSITION_DURATION = 150;

	Modal.DEFAULTS = {
		backdrop: true,
		keyboard: true,
		show: true
	};

	Modal.prototype.toggle = function (_relatedTarget) {
		return this.isShown ? this.hide() : this.show(_relatedTarget);
	};

	Modal.prototype.show = function (_relatedTarget) {
		var that = this;
		var e = $.Event("show.bs.modal", { relatedTarget: _relatedTarget });

		this.$element.trigger(e);

		if (this.isShown || e.isDefaultPrevented()) return;

		this.isShown = true;

		this.checkScrollbar();
		this.setScrollbar();
		this.$body.addClass("modal-open");

		this.escape();
		this.resize();

		this.$element.on("click.dismiss.bs.modal", "[data-dismiss=\"modal\"]", $.proxy(this.hide, this));

		this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			that.$element.one("mouseup.dismiss.bs.modal", function (e) {
				if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
			});
		});

		this.backdrop(function () {
			var transition = $.support.transition && that.$element.hasClass("fade");

			if (!that.$element.parent().length) {
				that.$element.appendTo(that.$body); // don't move modals dom position
			}

			that.$element.show().scrollTop(0);

			that.adjustDialog();

			if (transition) {
				that.$element[0].offsetWidth; // force reflow
			}

			that.$element.addClass("in");

			that.enforceFocus();

			var e = $.Event("shown.bs.modal", { relatedTarget: _relatedTarget });

			transition ? that.$dialog // wait for modal to slide in
			.one("bsTransitionEnd", function () {
				that.$element.trigger("focus").trigger(e);
			}).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
		});
	};

	Modal.prototype.hide = function (e) {
		if (e) e.preventDefault();

		e = $.Event("hide.bs.modal");

		this.$element.trigger(e);

		if (!this.isShown || e.isDefaultPrevented()) return;

		this.isShown = false;

		this.escape();
		this.resize();

		$(document).off("focusin.bs.modal");

		this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");

		this.$dialog.off("mousedown.dismiss.bs.modal");

		$.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
	};

	Modal.prototype.enforceFocus = function () {
		$(document).off("focusin.bs.modal") // guard against infinite focus loop
		.on("focusin.bs.modal", $.proxy(function (e) {
			if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
				this.$element.trigger("focus");
			}
		}, this));
	};

	Modal.prototype.escape = function () {
		if (this.isShown && this.options.keyboard) {
			this.$element.on("keydown.dismiss.bs.modal", $.proxy(function (e) {
				e.which == 27 && this.hide();
			}, this));
		} else if (!this.isShown) {
			this.$element.off("keydown.dismiss.bs.modal");
		}
	};

	Modal.prototype.resize = function () {
		if (this.isShown) {
			$(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
		} else {
			$(window).off("resize.bs.modal");
		}
	};

	Modal.prototype.hideModal = function () {
		var that = this;
		this.$element.hide();
		this.backdrop(function () {
			that.$body.removeClass("modal-open");
			that.resetAdjustments();
			that.resetScrollbar();
			that.$element.trigger("hidden.bs.modal");
		});
	};

	Modal.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove();
		this.$backdrop = null;
	};

	Modal.prototype.backdrop = function (callback) {
		var that = this;
		var animate = this.$element.hasClass("fade") ? "fade" : "";

		if (this.isShown && this.options.backdrop) {
			var doAnimate = $.support.transition && animate;

			this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);

			this.$element.on("click.dismiss.bs.modal", $.proxy(function (e) {
				if (this.ignoreBackdropClick) {
					this.ignoreBackdropClick = false;
					return;
				}
				if (e.target !== e.currentTarget) return;
				this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
			}, this));

			if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

			this.$backdrop.addClass("in");

			if (!callback) return;

			doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");

			var callbackRemove = function callbackRemove() {
				that.removeBackdrop();
				callback && callback();
			};
			$.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
		} else if (callback) {
			callback();
		}
	};

	// these following methods are used to handle overflowing modals

	Modal.prototype.handleUpdate = function () {
		this.adjustDialog();
	};

	Modal.prototype.adjustDialog = function () {
		var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
		});
	};

	Modal.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		});
	};

	Modal.prototype.checkScrollbar = function () {
		var fullWindowWidth = window.innerWidth;
		if (!fullWindowWidth) {
			// workaround for missing window.innerWidth in IE8
			var documentElementRect = document.documentElement.getBoundingClientRect();
			fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
		}
		this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
		this.scrollbarWidth = this.measureScrollbar();
	};

	Modal.prototype.setScrollbar = function () {
		var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "";
		if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
	};

	Modal.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad);
	};

	Modal.prototype.measureScrollbar = function () {
		// thx walsh
		var scrollDiv = document.createElement("div");
		scrollDiv.className = "modal-scrollbar-measure";
		this.$body.append(scrollDiv);
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		this.$body[0].removeChild(scrollDiv);
		return scrollbarWidth;
	};

	// MODAL PLUGIN DEFINITION
	// =======================

	function Plugin(option, _relatedTarget) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.modal");
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option);

			if (!data) $this.data("bs.modal", data = new Modal(this, options));
			if (typeof option == "string") data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
		});
	}

	var old = $.fn.modal;

	$.fn.modal = Plugin;
	$.fn.modal.Constructor = Modal;

	// MODAL NO CONFLICT
	// =================

	$.fn.modal.noConflict = function () {
		$.fn.modal = old;
		return this;
	};

	// MODAL DATA-API
	// ==============

	$(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", function (e) {
		var $this = $(this);
		var href = $this.attr("href");
		var $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")); // strip for ie7
		var option = $target.data("bs.modal") ? "toggle" : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

		if ($this.is("a")) e.preventDefault();

		$target.one("show.bs.modal", function (showEvent) {
			if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
			$target.one("hidden.bs.modal", function () {
				$this.is(":visible") && $this.trigger("focus");
			});
		});
		Plugin.call($target, option, this);
	});
}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// TOOLTIP PUBLIC CLASS DEFINITION
	// ===============================

	var Tooltip = function Tooltip(element, options) {
		this.type = null;
		this.options = null;
		this.enabled = null;
		this.timeout = null;
		this.hoverState = null;
		this.$element = null;
		this.inState = null;

		this.init("tooltip", element, options);
	};

	Tooltip.VERSION = "3.3.7";

	Tooltip.TRANSITION_DURATION = 150;

	Tooltip.DEFAULTS = {
		animation: true,
		placement: "top",
		selector: false,
		template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: false,
		container: false,
		viewport: {
			selector: "body",
			padding: 0
		}
	};

	Tooltip.prototype.init = function (type, element, options) {
		this.enabled = true;
		this.type = type;
		this.$element = $(element);
		this.options = this.getOptions(options);
		this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
		this.inState = { click: false, hover: false, focus: false };

		if (this.$element[0] instanceof document.constructor && !this.options.selector) {
			throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		}

		var triggers = this.options.trigger.split(" ");

		for (var i = triggers.length; i--;) {
			var trigger = triggers[i];

			if (trigger == "click") {
				this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
			} else if (trigger != "manual") {
				var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
				var eventOut = trigger == "hover" ? "mouseleave" : "focusout";

				this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
				this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
			}
		}

		this.options.selector ? this._options = $.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	};

	Tooltip.prototype.getDefaults = function () {
		return Tooltip.DEFAULTS;
	};

	Tooltip.prototype.getOptions = function (options) {
		options = $.extend({}, this.getDefaults(), this.$element.data(), options);

		if (options.delay && typeof options.delay == "number") {
			options.delay = {
				show: options.delay,
				hide: options.delay
			};
		}

		return options;
	};

	Tooltip.prototype.getDelegateOptions = function () {
		var options = {};
		var defaults = this.getDefaults();

		this._options && $.each(this._options, function (key, value) {
			if (defaults[key] != value) options[key] = value;
		});

		return options;
	};

	Tooltip.prototype.enter = function (obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data("bs." + this.type, self);
		}

		if (obj instanceof $.Event) {
			self.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
		}

		if (self.tip().hasClass("in") || self.hoverState == "in") {
			self.hoverState = "in";
			return;
		}

		clearTimeout(self.timeout);

		self.hoverState = "in";

		if (!self.options.delay || !self.options.delay.show) return self.show();

		self.timeout = setTimeout(function () {
			if (self.hoverState == "in") self.show();
		}, self.options.delay.show);
	};

	Tooltip.prototype.isInStateTrue = function () {
		for (var key in this.inState) {
			if (this.inState[key]) return true;
		}

		return false;
	};

	Tooltip.prototype.leave = function (obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data("bs." + this.type, self);
		}

		if (obj instanceof $.Event) {
			self.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
		}

		if (self.isInStateTrue()) return;

		clearTimeout(self.timeout);

		self.hoverState = "out";

		if (!self.options.delay || !self.options.delay.hide) return self.hide();

		self.timeout = setTimeout(function () {
			if (self.hoverState == "out") self.hide();
		}, self.options.delay.hide);
	};

	Tooltip.prototype.show = function () {
		var e = $.Event("show.bs." + this.type);

		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);

			var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !inDom) return;
			var that = this;

			var $tip = this.tip();

			var tipId = this.getUID(this.type);

			this.setContent();
			$tip.attr("id", tipId);
			this.$element.attr("aria-describedby", tipId);

			if (this.options.animation) $tip.addClass("fade");

			var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

			var autoToken = /\s?auto?\s?/i;
			var autoPlace = autoToken.test(placement);
			if (autoPlace) placement = placement.replace(autoToken, "") || "top";

			$tip.detach().css({ top: 0, left: 0, display: "block" }).addClass(placement).data("bs." + this.type, this);

			this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
			this.$element.trigger("inserted.bs." + this.type);

			var pos = this.getPosition();
			var actualWidth = $tip[0].offsetWidth;
			var actualHeight = $tip[0].offsetHeight;

			if (autoPlace) {
				var orgPlacement = placement;
				var viewportDim = this.getPosition(this.$viewport);

				placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;

				$tip.removeClass(orgPlacement).addClass(placement);
			}

			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

			this.applyPlacement(calculatedOffset, placement);

			var complete = function complete() {
				var prevHoverState = that.hoverState;
				that.$element.trigger("shown.bs." + that.type);
				that.hoverState = null;

				if (prevHoverState == "out") that.leave(that);
			};

			$.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
		}
	};

	Tooltip.prototype.applyPlacement = function (offset, placement) {
		var $tip = this.tip();
		var width = $tip[0].offsetWidth;
		var height = $tip[0].offsetHeight;

		// manually read margins because getBoundingClientRect includes difference
		var marginTop = parseInt($tip.css("margin-top"), 10);
		var marginLeft = parseInt($tip.css("margin-left"), 10);

		// we must check for NaN for ie 8/9
		if (isNaN(marginTop)) marginTop = 0;
		if (isNaN(marginLeft)) marginLeft = 0;

		offset.top += marginTop;
		offset.left += marginLeft;

		// $.fn.offset doesn't round pixel values
		// so we use setOffset directly with our own function B-0
		$.offset.setOffset($tip[0], $.extend({
			using: function using(props) {
				$tip.css({
					top: Math.round(props.top),
					left: Math.round(props.left)
				});
			}
		}, offset), 0);

		$tip.addClass("in");

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth = $tip[0].offsetWidth;
		var actualHeight = $tip[0].offsetHeight;

		if (placement == "top" && actualHeight != height) {
			offset.top = offset.top + height - actualHeight;
		}

		var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

		if (delta.left) offset.left += delta.left;else offset.top += delta.top;

		var isVertical = /top|bottom/.test(placement);
		var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
		var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";

		$tip.offset(offset);
		this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	};

	Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
		this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
	};

	Tooltip.prototype.setContent = function () {
		var $tip = this.tip();
		var title = this.getTitle();

		$tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
		$tip.removeClass("fade in top bottom left right");
	};

	Tooltip.prototype.hide = function (callback) {
		var that = this;
		var $tip = $(this.$tip);
		var e = $.Event("hide.bs." + this.type);

		function complete() {
			if (that.hoverState != "in") $tip.detach();
			if (that.$element) {
				// TODO: Check whether guarding this code with this `if` is really necessary.
				that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
			}
			callback && callback();
		}

		this.$element.trigger(e);

		if (e.isDefaultPrevented()) return;

		$tip.removeClass("in");

		$.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

		this.hoverState = null;

		return this;
	};

	Tooltip.prototype.fixTitle = function () {
		var $e = this.$element;
		if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
			$e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
		}
	};

	Tooltip.prototype.hasContent = function () {
		return this.getTitle();
	};

	Tooltip.prototype.getPosition = function ($element) {
		$element = $element || this.$element;

		var el = $element[0];
		var isBody = el.tagName == "BODY";

		var elRect = el.getBoundingClientRect();
		if (elRect.width == null) {
			// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
			elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
		}
		var isSvg = window.SVGElement && el instanceof window.SVGElement;
		// Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
		// See https://github.com/twbs/bootstrap/issues/20280
		var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
		var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
		var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

		return $.extend({}, elRect, scroll, outerDims, elOffset);
	};

	Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
		return placement == "bottom" ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == "top" ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == "left" ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
		/* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
	};

	Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
		var delta = { top: 0, left: 0 };
		if (!this.$viewport) return delta;

		var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
		var viewportDimensions = this.getPosition(this.$viewport);

		if (/right|left/.test(placement)) {
			var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
			var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
			if (topEdgeOffset < viewportDimensions.top) {
				// top overflow
				delta.top = viewportDimensions.top - topEdgeOffset;
			} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
				// bottom overflow
				delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
			}
		} else {
			var leftEdgeOffset = pos.left - viewportPadding;
			var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
			if (leftEdgeOffset < viewportDimensions.left) {
				// left overflow
				delta.left = viewportDimensions.left - leftEdgeOffset;
			} else if (rightEdgeOffset > viewportDimensions.right) {
				// right overflow
				delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
			}
		}

		return delta;
	};

	Tooltip.prototype.getTitle = function () {
		var title;
		var $e = this.$element;
		var o = this.options;

		title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);

		return title;
	};

	Tooltip.prototype.getUID = function (prefix) {
		do {
			prefix += ~~(Math.random() * 1000000);
		} while (document.getElementById(prefix));
		return prefix;
	};

	Tooltip.prototype.tip = function () {
		if (!this.$tip) {
			this.$tip = $(this.options.template);
			if (this.$tip.length != 1) {
				throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
			}
		}
		return this.$tip;
	};

	Tooltip.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	};

	Tooltip.prototype.enable = function () {
		this.enabled = true;
	};

	Tooltip.prototype.disable = function () {
		this.enabled = false;
	};

	Tooltip.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	};

	Tooltip.prototype.toggle = function (e) {
		var self = this;
		if (e) {
			self = $(e.currentTarget).data("bs." + this.type);
			if (!self) {
				self = new this.constructor(e.currentTarget, this.getDelegateOptions());
				$(e.currentTarget).data("bs." + this.type, self);
			}
		}

		if (e) {
			self.inState.click = !self.inState.click;
			if (self.isInStateTrue()) self.enter(self);else self.leave(self);
		} else {
			self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
		}
	};

	Tooltip.prototype.destroy = function () {
		var that = this;
		clearTimeout(this.timeout);
		this.hide(function () {
			that.$element.off("." + that.type).removeData("bs." + that.type);
			if (that.$tip) {
				that.$tip.detach();
			}
			that.$tip = null;
			that.$arrow = null;
			that.$viewport = null;
			that.$element = null;
		});
	};

	// TOOLTIP PLUGIN DEFINITION
	// =========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.tooltip");
			var options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option;

			if (!data && /destroy|hide/.test(option)) return;
			if (!data) $this.data("bs.tooltip", data = new Tooltip(this, options));
			if (typeof option == "string") data[option]();
		});
	}

	var old = $.fn.tooltip;

	$.fn.tooltip = Plugin;
	$.fn.tooltip.Constructor = Tooltip;

	// TOOLTIP NO CONFLICT
	// ===================

	$.fn.tooltip.noConflict = function () {
		$.fn.tooltip = old;
		return this;
	};
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// POPOVER PUBLIC CLASS DEFINITION
	// ===============================

	var Popover = function Popover(element, options) {
		this.init("popover", element, options);
	};

	if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");

	Popover.VERSION = "3.3.7";

	Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"
	});

	// NOTE: POPOVER EXTENDS tooltip.js
	// ================================

	Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

	Popover.prototype.constructor = Popover;

	Popover.prototype.getDefaults = function () {
		return Popover.DEFAULTS;
	};

	Popover.prototype.setContent = function () {
		var $tip = this.tip();
		var title = this.getTitle();
		var content = this.getContent();

		$tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
		$tip.find(".popover-content").children().detach().end()[// we use append for html objects to maintain js events
		this.options.html ? typeof content == "string" ? "html" : "append" : "text"](content);

		$tip.removeClass("fade top bottom left right in");

		// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
		// this manually by checking the contents.
		if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide();
	};

	Popover.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	};

	Popover.prototype.getContent = function () {
		var $e = this.$element;
		var o = this.options;

		return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
	};

	Popover.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow");
	};

	// POPOVER PLUGIN DEFINITION
	// =========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.popover");
			var options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option;

			if (!data && /destroy|hide/.test(option)) return;
			if (!data) $this.data("bs.popover", data = new Popover(this, options));
			if (typeof option == "string") data[option]();
		});
	}

	var old = $.fn.popover;

	$.fn.popover = Plugin;
	$.fn.popover.Constructor = Popover;

	// POPOVER NO CONFLICT
	// ===================

	$.fn.popover.noConflict = function () {
		$.fn.popover = old;
		return this;
	};
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// SCROLLSPY CLASS DEFINITION
	// ==========================

	function ScrollSpy(element, options) {
		this.$body = $(document.body);
		this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
		this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
		this.selector = (this.options.target || "") + " .nav li > a";
		this.offsets = [];
		this.targets = [];
		this.activeTarget = null;
		this.scrollHeight = 0;

		this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
		this.refresh();
		this.process();
	}

	ScrollSpy.VERSION = "3.3.7";

	ScrollSpy.DEFAULTS = {
		offset: 10
	};

	ScrollSpy.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	};

	ScrollSpy.prototype.refresh = function () {
		var that = this;
		var offsetMethod = "offset";
		var offsetBase = 0;

		this.offsets = [];
		this.targets = [];
		this.scrollHeight = this.getScrollHeight();

		if (!$.isWindow(this.$scrollElement[0])) {
			offsetMethod = "position";
			offsetBase = this.$scrollElement.scrollTop();
		}

		this.$body.find(this.selector).map(function () {
			var $el = $(this);
			var href = $el.data("target") || $el.attr("href");
			var $href = /^#./.test(href) && $(href);

			return $href && $href.length && $href.is(":visible") && [[$href[offsetMethod]().top + offsetBase, href]] || null;
		}).sort(function (a, b) {
			return a[0] - b[0];
		}).each(function () {
			that.offsets.push(this[0]);
			that.targets.push(this[1]);
		});
	};

	ScrollSpy.prototype.process = function () {
		var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
		var scrollHeight = this.getScrollHeight();
		var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
		var offsets = this.offsets;
		var targets = this.targets;
		var activeTarget = this.activeTarget;
		var i;

		if (this.scrollHeight != scrollHeight) {
			this.refresh();
		}

		if (scrollTop >= maxScroll) {
			return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
		}

		if (activeTarget && scrollTop < offsets[0]) {
			this.activeTarget = null;
			return this.clear();
		}

		for (i = offsets.length; i--;) {
			activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
		}
	};

	ScrollSpy.prototype.activate = function (target) {
		this.activeTarget = target;

		this.clear();

		var selector = this.selector + "[data-target=\"" + target + "\"]," + this.selector + "[href=\"" + target + "\"]";

		var active = $(selector).parents("li").addClass("active");

		if (active.parent(".dropdown-menu").length) {
			active = active.closest("li.dropdown").addClass("active");
		}

		active.trigger("activate.bs.scrollspy");
	};

	ScrollSpy.prototype.clear = function () {
		$(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	};

	// SCROLLSPY PLUGIN DEFINITION
	// ===========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.scrollspy");
			var options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option;

			if (!data) $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
			if (typeof option == "string") data[option]();
		});
	}

	var old = $.fn.scrollspy;

	$.fn.scrollspy = Plugin;
	$.fn.scrollspy.Constructor = ScrollSpy;

	// SCROLLSPY NO CONFLICT
	// =====================

	$.fn.scrollspy.noConflict = function () {
		$.fn.scrollspy = old;
		return this;
	};

	// SCROLLSPY DATA-API
	// ==================

	$(window).on("load.bs.scrollspy.data-api", function () {
		$("[data-spy=\"scroll\"]").each(function () {
			var $spy = $(this);
			Plugin.call($spy, $spy.data());
		});
	});
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// TAB CLASS DEFINITION
	// ====================

	var Tab = function Tab(element) {
		// jscs:disable requireDollarBeforejQueryAssignment
		this.element = $(element);
		// jscs:enable requireDollarBeforejQueryAssignment
	};

	Tab.VERSION = "3.3.7";

	Tab.TRANSITION_DURATION = 150;

	Tab.prototype.show = function () {
		var $this = this.element;
		var $ul = $this.closest("ul:not(.dropdown-menu)");
		var selector = $this.data("target");

		if (!selector) {
			selector = $this.attr("href");
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""); // strip for ie7
		}

		if ($this.parent("li").hasClass("active")) return;

		var $previous = $ul.find(".active:last a");
		var hideEvent = $.Event("hide.bs.tab", {
			relatedTarget: $this[0]
		});
		var showEvent = $.Event("show.bs.tab", {
			relatedTarget: $previous[0]
		});

		$previous.trigger(hideEvent);
		$this.trigger(showEvent);

		if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

		var $target = $(selector);

		this.activate($this.closest("li"), $ul);
		this.activate($target, $target.parent(), function () {
			$previous.trigger({
				type: "hidden.bs.tab",
				relatedTarget: $this[0]
			});
			$this.trigger({
				type: "shown.bs.tab",
				relatedTarget: $previous[0]
			});
		});
	};

	Tab.prototype.activate = function (element, container, callback) {
		var $active = container.find("> .active");
		var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);

		function next() {
			$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", false);

			element.addClass("active").find("[data-toggle=\"tab\"]").attr("aria-expanded", true);

			if (transition) {
				element[0].offsetWidth; // reflow for transition
				element.addClass("in");
			} else {
				element.removeClass("fade");
			}

			if (element.parent(".dropdown-menu").length) {
				element.closest("li.dropdown").addClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", true);
			}

			callback && callback();
		}

		$active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

		$active.removeClass("in");
	};

	// TAB PLUGIN DEFINITION
	// =====================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.tab");

			if (!data) $this.data("bs.tab", data = new Tab(this));
			if (typeof option == "string") data[option]();
		});
	}

	var old = $.fn.tab;

	$.fn.tab = Plugin;
	$.fn.tab.Constructor = Tab;

	// TAB NO CONFLICT
	// ===============

	$.fn.tab.noConflict = function () {
		$.fn.tab = old;
		return this;
	};

	// TAB DATA-API
	// ============

	var clickHandler = function clickHandler(e) {
		e.preventDefault();
		Plugin.call($(this), "show");
	};

	$(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"]", clickHandler).on("click.bs.tab.data-api", "[data-toggle=\"pill\"]", clickHandler);
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {

	// AFFIX CLASS DEFINITION
	// ======================

	var Affix = function Affix(element, options) {
		this.options = $.extend({}, Affix.DEFAULTS, options);

		this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));

		this.$element = $(element);
		this.affixed = null;
		this.unpin = null;
		this.pinnedOffset = null;

		this.checkPosition();
	};

	Affix.VERSION = "3.3.7";

	Affix.RESET = "affix affix-top affix-bottom";

	Affix.DEFAULTS = {
		offset: 0,
		target: window
	};

	Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
		var scrollTop = this.$target.scrollTop();
		var position = this.$element.offset();
		var targetHeight = this.$target.height();

		if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;

		if (this.affixed == "bottom") {
			if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
			return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
		}

		var initializing = this.affixed == null;
		var colliderTop = initializing ? scrollTop : position.top;
		var colliderHeight = initializing ? targetHeight : height;

		if (offsetTop != null && scrollTop <= offsetTop) return "top";
		if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";

		return false;
	};

	Affix.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(Affix.RESET).addClass("affix");
		var scrollTop = this.$target.scrollTop();
		var position = this.$element.offset();
		return this.pinnedOffset = position.top - scrollTop;
	};

	Affix.prototype.checkPositionWithEventLoop = function () {
		setTimeout($.proxy(this.checkPosition, this), 1);
	};

	Affix.prototype.checkPosition = function () {
		if (!this.$element.is(":visible")) return;

		var height = this.$element.height();
		var offset = this.options.offset;
		var offsetTop = offset.top;
		var offsetBottom = offset.bottom;
		var scrollHeight = Math.max($(document).height(), $(document.body).height());

		if ((typeof offset === "undefined" ? "undefined" : _typeof(offset)) != "object") offsetBottom = offsetTop = offset;
		if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
		if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);

		var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

		if (this.affixed != affix) {
			if (this.unpin != null) this.$element.css("top", "");

			var affixType = "affix" + (affix ? "-" + affix : "");
			var e = $.Event(affixType + ".bs.affix");

			this.$element.trigger(e);

			if (e.isDefaultPrevented()) return;

			this.affixed = affix;
			this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;

			this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
		}

		if (affix == "bottom") {
			this.$element.offset({
				top: scrollHeight - height - offsetBottom
			});
		}
	};

	// AFFIX PLUGIN DEFINITION
	// =======================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data("bs.affix");
			var options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == "object" && option;

			if (!data) $this.data("bs.affix", data = new Affix(this, options));
			if (typeof option == "string") data[option]();
		});
	}

	var old = $.fn.affix;

	$.fn.affix = Plugin;
	$.fn.affix.Constructor = Affix;

	// AFFIX NO CONFLICT
	// =================

	$.fn.affix.noConflict = function () {
		$.fn.affix = old;
		return this;
	};

	// AFFIX DATA-API
	// ==============

	$(window).on("load", function () {
		$("[data-spy=\"affix\"]").each(function () {
			var $spy = $(this);
			var data = $spy.data();

			data.offset = data.offset || {};

			if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
			if (data.offsetTop != null) data.offset.top = data.offsetTop;

			Plugin.call($spy, data);
		});
	});
}(jQuery);

/***/ }),

/***/ "../../components/logger/logger.js":
/*!******************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/src/components/logger/logger.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../string/string.js */ "../../components/string/string.js");

(function (ns, $) {

	var logf = function logf() {
		var msg = ns.string.format.apply(ns.string.format, arguments);
		if (this && this.source) {
			msg = this.source + ": " + msg;
		}
		window.console && console.log.apply(console, [msg]);
	};
	var log = function log() {
		if (this && this.source) {
			if (arguments.length === 1 && typeof arguments[0] == "string") {
				logf("{0}: {1}", this.source, arguments[0]);
			} else {
				var obj = {};
				obj[this.source] = arguments;
				if (arguments.length === 1) obj[this.source] = arguments[0];
				window.console && console.log.apply(console, [obj]);
			}
		}
		//if (this && this.source && arguments.length === 1 && typeof arguments[0] == "string") {
		//	let s = this.source + ": "; for (let i = 0; i < arguments.length; i++) {
		//		s += `{${i}} `;
		//	}
		//	var msg = logf(s, arguments[0]);
		//	console.log.apply(console, [msg]);
		//	var obj = {};
		//	obj[this.source] = arguments;
		//	console.log.apply(console, [obj]);
		//         }
		else window.console && console.log.apply(console, arguments);
		//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
	};
	var error = function error() {
		window.console && console.error.apply(console, arguments);
		$("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
	};
	var warn = function warn() {
		window.console && console.warn.apply(console, arguments);
		$("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
	};
	var debug = function debug() {
		window.console && console.log.apply(console, arguments);
		$("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
	};

	var defineScopedTracing = function defineScopedTracing(source, debugging, onTrace) {
		var scopedLog = new function () {
			var d = function d() {
				ns.logger && ns.logger.log.apply(scopedLog, arguments);
				onTrace && onTrace({ type: "log", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedError = new function () {
			var d = function d() {
				ns.logger && ns.logger.error.apply(scopedError, arguments);
				onTrace && onTrace({ type: "error", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedDebug = new function () {
			var d = function d() {
				if (debugging) {
					ns.logger && ns.logger.log.apply(scopedDebug, arguments);
					onTrace && onTrace({ type: "debug", args: arguments });
				}
			};
			d.source = source;
			return d;
		}();

		var scopedWarn = new function () {
			var d = function d() {
				ns.logger && ns.logger.error.apply(scopedWarn, arguments);
				onTrace && onTrace({ type: "warn", args: arguments });
			};
			d.source = source;
			return d;
		}();

		return {
			log: scopedLog,
			error: scopedError,
			debug: scopedDebug,
			warn: scopedWarn
		};
	};

	ns["logger"] = {
		"version": "0.0.2",
		get: defineScopedTracing,
		/// TODO: this should be private
		logf: logf, "log": log, "error": error, "warn": warn, "debug": debug
	};
	log("logger");
	return ns.logger;

	// both of these dependencies are resolved in string.js
})(window.spexplorerjs, window.jQuery); // v 0.0.2: 2018-04-02  - remove try/catch by probing from window.console, let it fail otherwise
// v 0.0.1: 2018-03-28  - debug, get

/***/ }),

/***/ "../../components/string/string.js":
/*!******************************************************************************!*\
  !*** F:/data/sc/spexplorer2/js/spexplorerjs/src/components/string/string.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global require */
// v 0.1.4: 2018-04-02: - check if already defined, make jQuery global if needed
//                          The inline check won't work for more complex modules, but it is an easy way to address multiple endpoints that load this.
// v 0.1.2: 2018-03-10: brought back htmlEncode/htmlDecode and jQuery dependency

(function (ns, $) {

	return ns.string = ns.string || {
		version: "0.1.4",
		htmlEncode: function htmlEncode(value) {
			// create a in-memory div, set it's inner text(which jQuery
			// automatically encodes)
			// then grab the encoded contents back out. The div never exists on
			// the page.
			return $("<div/>").text(value).html();
		},
		htmlDecode: function htmlDecode(value) {
			return $("<div/>").html(value).text();
		},
		format: function format() {
			/// TODO: unit test, breaks in some cases
			var args = arguments;
			var tmpl = args[0];
			for (var i = 0; i < args.length - 1; i++) {
				var s = "\\{" + i + "\\}";
				var reg1 = new RegExp(s, "g");
				tmpl = tmpl.replace(reg1, encodeURIComponent(args[i + 1]));
			}
			try {
				tmpl = decodeURIComponent(tmpl);
			} catch (e) {
				console && console.error(e);
				throw e;
			}

			return tmpl;
		},
		startsWith: function startsWith(str1, str2) {
			return str2.length > 0 && str1.substring(0, str2.length) === str2;
		},
		endsWith: function endsWith(str1, str2) {
			return str2.length > 0 && str1 && str1.substring(str1.length - str2.length, str1.length) === str2;
		},
		trimEnd: function trimEnd(stringToTrim, charToRemove) {
			var s = stringToTrim || ""; // make sure str1 is not null
			var c = charToRemove;
			var lastIndexOf = -1;
			for (var i = s.length - 1; i >= 0; i--) {
				if (s[i] === c) {
					lastIndexOf = i;
				} else {
					break;
				}
			}
			if (lastIndexOf > -1) s = s.substring(0, lastIndexOf);
			return s;
		},
		trimStart: function trimStart(stringToTrim, sToRemove, opts) {
			var exp = "^" + sToRemove + "+";
			var reg = RegExp(exp, opts || "gi");

			var res = stringToTrim.replace(reg, "");
			return res;
		},
		trim: function trim(stringToTrim, sToRemove, opts) {
			stringToTrim = this.trimStart(stringToTrim, sToRemove, opts);
			stringToTrim = this.trimEnd(stringToTrim, sToRemove, opts);
			return stringToTrim;
		}
	};
})(window.spexplorerjs = window["spexplorerjs"] || {}, window.jQuery = window["jQuery"] || __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js-exposed"));

/***/ }),

/***/ "./app1.css":
/*!******************!*\
  !*** ./app1.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./app1.css */ "../../../node_modules/css-loader/index.js!./app1.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../components/logger/logger.js */ "../../components/logger/logger.js");

(function (ns, $) {

	var trace = ns.modules.logger.get("index", true);

	trace.log("0.0.1");

	if (!ns.logger) {
		trace.error("logger should have been registered");
		var string = __webpack_require__(/*! ../../components/string/string.js */ "../../components/string/string.js");
		string.format("d");
	}

	var loadBootstrap = function loadBootstrap() {

		if ($.fn.carousel) {
			trace.debug("bootstrap already loaded");
		} else {
			trace.log("loading bootstrap");
			__webpack_require__(/*! ../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js */ "../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js");
			__webpack_require__(/*! ../../../public/vendor/bootstrap/3.3.7/css/spexp.css */ "../../../public/vendor/bootstrap/3.3.7/css/spexp.css");
		}
	};

	__webpack_require__(/*! ./app1.css */ "./app1.css");

	trace.log("jQuery: " + $.fn.jquery);

	loadBootstrap();
	loadBootstrap();
})(window.spexplorerjs, window.jQuery); /// <reference path="../../components/logger/logger.js" />
/* global require */

/***/ })

/******/ });