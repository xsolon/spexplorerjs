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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sp.wizard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sp.wizard.js":
/*!**********************!*\
  !*** ./sp.wizard.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../widget.base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./sp.base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./sp.web.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _spWizardTemplate = __webpack_require__(/*! ./sp.wizard.template.html */ "./sp.wizard.template.html");

var _spWizardTemplate2 = _interopRequireDefault(_spWizardTemplate);

var _spWizardModaltemplate = __webpack_require__(/*! ./sp.wizard.modaltemplate.html */ "./sp.wizard.modaltemplate.html");

var _spWizardModaltemplate2 = _interopRequireDefault(_spWizardModaltemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (ns, $) {

	var debugging = window.location.href.search(/(localhost|debugspWizard)/) > 0;
	var trace = ns.modules.logger.get("spWizard", debugging);

	trace.log("0.0.2");

	ns.widgetClick = function (el) {

		var $el = $(el);
		var url = $el.attr("data-widgetUrl");
		trace.debug("loading" + url);

		var widgetType = $el.attr("data-widget");
		var parent = $el.parents(".spexp");
		parent.html("<div data-widget='" + widgetType + "'/>");

		$.getScript(url, function () {
			trace.debug("done");
		});
	};

	var SpWizard = function SpWizard(el) {

		$(el).html(_spWizardTemplate2.default);
	};

	var bootDialog = function bootDialog() {
		$("body").append(_spWizardModaltemplate2.default);
		$(".modal-body").html(_spWizardTemplate2.default);
		$("#spExplorerJsWizard").click();
	};

	var spDialog = function spDialog() {

		var options = SP.UI.$create_DialogOptions();

		options.title = "SpExplorerJs";
		options.autoSize = true;
		options.allowMaximize = true;

		var tmp = _spWizardTemplate2.default;

		var dialog = $(tmp);

		options.html = dialog[0];
		options.showMaximized = true;
		options.resizable = true;

		SP.UI.ModalDialog.showModalDialog(options);

		// some third party set an !important z-index!
		setTimeout(function () {
			// this is the ootb value + !important
			$(".ms-dlgContent").each(function () {
				this.style.setProperty("z-index", "1505", "important");
			});
		}, 500);
	};

	ns.widgets.addSpWidget("spWizard", SpWizard, "0.0.2");

	//if (false)
	(function init() {

		ExecuteOrDelayUntilScriptLoaded(function () {
			trace.debug("ExecuteOrDelayUntilScriptLoaded");
			//bootDialog();
			spDialog();
		}, "sp.js");
		//SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () {
		//	debug("executeFunc");
		//});
	})();
})(spexplorerjs, jQuery);

/***/ }),

/***/ "./sp.wizard.modaltemplate.html":
/*!**************************************!*\
  !*** ./sp.wizard.modaltemplate.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <style type=\"text/css\">\r\n        .modal-dialog {\r\n            width: 100%;\r\n            height: 100%;\r\n            margin: 0;\r\n            padding: 0;\r\n        }\r\n\r\n        .modal-content {\r\n            height: auto;\r\n            min-height: 100%;\r\n            border-radius: 0;\r\n        }\r\n    </style>\r\n    <div class=\"spexp\">\r\n        <button class=\"btn btn-primary btn-lg\" id=\"spExplorerJsWizard\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n            Open Model\r\n        </button>\r\n\r\n        <!-- Modal -->\r\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ }),

/***/ "./sp.wizard.template.html":
/*!*********************************!*\
  !*** ./sp.wizard.template.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"spexp\">\r\n        <link data-check='loadOnce' href=\"//xsolonblog2.appspot.com/css/bootstrap/3.2.0/css/css.css\" rel=\"stylesheet\" />\r\n\r\n        <style type=\"text/css\">\r\n            .cuadroA {\r\n                float: left;\r\n                padding: 5px;\r\n            }\r\n\r\n            .cuadro_intro_hover {\r\n                padding: 0px;\r\n                position: relative;\r\n                overflow: hidden;\r\n                height: 200px;\r\n                width: 200px;\r\n            }\r\n\r\n                .cuadro_intro_hover:hover .caption {\r\n                    opacity: 1;\r\n                    transform: translateY(-150px);\r\n                    -webkit-transform: translateY(-150px);\r\n                    -moz-transform: translateY(-150px);\r\n                    -ms-transform: translateY(-150px);\r\n                    -o-transform: translateY(-150px);\r\n                }\r\n\r\n                .cuadro_intro_hover img {\r\n                    z-index: 4;\r\n                }\r\n\r\n                .cuadro_intro_hover .caption {\r\n                    position: absolute;\r\n                    top: 150px;\r\n                    -webkit-transition: all 0.3s ease-in-out;\r\n                    -moz-transition: all 0.3s ease-in-out;\r\n                    -o-transition: all 0.3s ease-in-out;\r\n                    -ms-transition: all 0.3s ease-in-out;\r\n                    transition: all 0.3s ease-in-out;\r\n                    width: 100%;\r\n                }\r\n\r\n                .cuadro_intro_hover .blur {\r\n                    background-color: rgba(0,0,0,0.7);\r\n                    height: 300px;\r\n                    z-index: 5;\r\n                    position: absolute;\r\n                    width: 100%;\r\n                }\r\n\r\n                .cuadro_intro_hover .caption-text {\r\n                    z-index: 10;\r\n                    color: #fff;\r\n                    position: absolute;\r\n                    height: 300px;\r\n                    text-align: center;\r\n                    top: -20px;\r\n                    width: 100%;\r\n                }\r\n        </style>\r\n\r\n        <div class=\"xbootSection\">\u0001\u0001\u0001\u0001\u0001\u0001<div class=\"container\">\r\n                <div class=\"row\">\r\n                    <h2>Welcome!</h2>\r\n                    <p>Select an option</p>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <a href=\"#\" onclick=\"spexplorerjs.widgetClick(this);\" data-widget=\"spListWidget\" data-widgetUrl=\"https://spexplorerjs.azurewebsites.net/components/sp/list.editor.js\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(204, 204, 204);\">\r\n                            <p style=\"text-align: center;\">\r\n\r\n                                <svg style='background-color: #3366FF;' width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">\r\n                                    <defs>\r\n                                        <radialGradient fy=\"50%\" fx=\"50%\" r=\"200%\" cy=\"50%\" cx=\"50%\" id=\"grad2\">\r\n                                            <stop offset=\"0%\" stop-color=\"rgb(255,255,255)\" />\r\n                                            <stop offset=\"100%\" stop-color=\"rgb(0,0,0)\" />\r\n                                        </radialGradient>\r\n                                        <filter id=\"dropshadow\" height=\"130%\">\r\n                                            <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"1\" />\r\n                                            <feOffset dx=\"1\" dy=\"1\" result=\"offsetblur\" />\r\n                                            <feMerge>\r\n                                                <feMergeNode />\r\n                                                <feMergeNode in=\"SourceGraphic\" />\r\n                                            </feMerge>\r\n                                        </filter>\r\n                                    </defs>\r\n                                    <g>\r\n                                        <title>Layer 1</title>\r\n                                        <path d=\"m83.3322,91.5391c0.7917,-16.625 20.9788,-7.125 20.9788,-7.125c1.584,-4.75 6.729,-4.3542 6.729,-4.3542c-0.998,0.9401 0.792,2.77081 0.792,2.77081c-3.958,0 -5.542,2.7709 -5.542,2.7709c15.834,14.25 2.375,20.5834 2.375,20.5834c-12.6661,-4.75 -18.2078,-9.10429 -25.3328,-14.6459l0,0l0,0zm0,1.9791c7.9167,6.7288 13.4583,9.8958 23.7498,13.8538c0,0 -8.3123,16.625 -20.979,11.875c0,0 -0.603,2.92 -3.1666,1.188c-2.1864,-1.435 0,-3.167 0,-3.167c0,0 -9.8959,-6.333 0.3958,-23.74979l0,0z\" stroke-width=\"0.2\" stroke-linejoin=\"round\" id=\"svg_1\" fill=\"url(#grad2)\" filter=\"url(#dropshadow)\" transform='scale(1.8) translate(-40 -50)' />\r\n                                    </g>\r\n                                </svg>\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">List Editor</h3>\r\n                                    <p></p>\r\n                                    <p></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"spexplorerjs.widgetClick(this);\" data-widget=\"xSPFieldSelector\" data-widgetUrl=\"https://spexplorerjs.azurewebsites.net/components/sp/field.selector.js\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(204, 204, 204);\">\r\n                            <p style=\"text-align: center;\">\r\n                                <svg style='background-color: #FF9933;' width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">\r\n\r\n                                    <g>\r\n                                        <path fill=\"#000000\" fill-opacity=\"0.403922\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 57,19L 57,26L 50,26L 50,19L 57,19 Z M 48,19L 48,26L 41,26L 41,19L 48,19 Z M 39,19L 39,26L 32,26L 32,19L 39,19 Z M 57,28L 57,35L 50,35L 50,28L 57,28 Z M 48,28L 48,35L 41,35L 41,28L 48,28 Z M 39,28L 39,35L 32,35L 32,28L 39,28 Z M 57,37L 57,44L 50,44L 50,37L 57,37 Z M 48,37L 48,44L 41,44L 41,37L 48,37 Z M 39,37L 39,44L 32,44L 32,37L 39,37 Z \" transform='scale(2.5) translate(-5 0)' fill=\"url(#grad2)\" />\r\n                                        <path fill=\"url(#grad2)\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 23.6506,56.2021C 22.5867,57.266 20.8618,57.266 19.7979,56.2021C 18.734,55.1382 18.734,53.4133 19.7979,52.3494L 27.6722,44.4751C 26.6112,42.7338 26,40.6883 26,38.5C 26,32.1487 31.1487,27 37.5,27C 43.8513,27 49,32.1487 49,38.5C 49,44.8513 43.8513,50 37.5,50C 35.3117,50 33.2662,49.3888 31.5249,48.3278L 23.6506,56.2021 Z M 37.5,31C 33.3579,31 30,34.3579 30,38.5C 30,42.6421 33.3579,46 37.5,46C 41.6421,46 45,42.6421 45,38.5C 45,34.3579 41.6421,31 37.5,31 Z \" transform='scale(2.0) translate(10 10)' filter=\"url(#dropshadow)\" />\r\n                                    </g>\r\n                                </svg>\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">Field Editor</h3>\r\n                                    <p></p>\r\n                                    <p></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"spexplorerjs.widgetClick(this);\" data-widget=\"xSPTreeLight\" data-widgetUrl=\"https://spexplorerjs.azurewebsites.net/components/sp/treelight.js\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(204, 204, 204);\">\r\n                            <p style=\"text-align: center;\">\r\n                                <svg style='background-color: #47B26B;' width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">\r\n\r\n                                    <g>\r\n                                        <path fill=\"url(#grad2)\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 17,20L 59,20L 59,56L 17,56L 17,20 Z M 20,26L 20,53L 56,53L 56,26L 20,26 Z M 23.75,31L 28.5,31L 33.25,37.5L 28.5,44L 23.75,44L 28.5,37.5L 23.75,31 Z \" transform='scale(2.0) translate(10 5)' filter=\"url(#dropshadow)\" />\r\n                                    </g>\r\n                                </svg>\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">Console</h3>\r\n                                    <p>Run and share SP scripts</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"xSolon.widgetClick(this);\" data-widget=\"//xsolonblog2.appspot.com/components/codemirror/codemirror.html\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(204, 204, 204);\">\r\n                            <p style=\"text-align: center;\">\r\n                                <svg style='background-color: #47B26B;' width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">\r\n\r\n                                    <g>\r\n                                        <path fill=\"url(#grad2)\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 17,20L 59,20L 59,56L 17,56L 17,20 Z M 20,26L 20,53L 56,53L 56,26L 20,26 Z M 23.75,31L 28.5,31L 33.25,37.5L 28.5,44L 23.75,44L 28.5,37.5L 23.75,31 Z \" transform='scale(2.0) translate(10 5)' filter=\"url(#dropshadow)\" />\r\n                                    </g>\r\n                                </svg>\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">Console v2</h3>\r\n                                    <p>Create and run scripts in the context of your web apps.</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"xSolon.widgetClick(this);\" data-widget=\"//xsolonblog2.appspot.com/components/editor/snippet/snippet.widget.min.html\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: #3366FF;\">\r\n                            <p style=\"text-align: center;\">\r\n                                <img style=\"padding-top:30px\" src=\"//icons.iconarchive.com/icons/oxygen-icons.org/oxygen/96/Mimetypes-text-xml-icon.png\" />\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">Snippet Editor</h3>\r\n                                    <p>Create and run scripts in the context of your web apps.</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"xSolon.widgetClick(this);\" data-widget=\"//xsolonblog2.appspot.com/components/editor/indextree/indextree.sample.html\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(255, 0, 0);\">\r\n                            <p style=\"text-align: center;\">\r\n                                <img style=\"padding-top:30px\" src=\"//icons.iconarchive.com/icons/oxygen-icons.org/oxygen/96/Actions-view-web-browser-dom-tree-icon.png\" />\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">Index Site</h3>\r\n                                    <p>Create a site index by web crawl.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"xSolon.widgetClick(this);\" data-widget=\"//xsolonblog2.appspot.com/components/editor/raw/raw.widget.min.html\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(255, 216, 0);\">\r\n                            <p style=\"text-align: center;\">\r\n                                <img style=\"padding-top:30px\" src=\"//icons.iconarchive.com/icons/oxygen-icons.org/oxygen/96/Apps-accessories-text-editor-icon.png\" />\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">Raw Editor</h3>\r\n                                    <p>Edit raw content of cloud records.</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#\" onclick=\"xSolon.widgetClick(this);\" data-widget=\"//xsolonblog2.appspot.com/components/editor/splistbackup/splistbackup.widget.min.html\" class=\"cuadroA\">\r\n                        <div class=\"cuadro_intro_hover \" style=\"background-color: rgb(104, 220, 216);\">\r\n                            <p style=\"text-align: center;\">\r\n                                <img width=\"96\" style=\"padding-top:30px\" src=\"//icons.iconarchive.com/icons/visualpharm/icons8-metro-style/128/Data-Data-backup-icon.png\" />\r\n                            </p>\r\n                            <div class=\"caption\">\r\n                                <div class=\"blur\"></div>\r\n                                <div class=\"caption-text\">\r\n                                    <h3 style=\"padding: 10px;\">List Backup</h3>\r\n                                    <p>Backup/Restore SharePoint lists</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <small>images by <a href=\"http://www.visualpharm.com/\">visualpharm</a> | <a href=\"http://www.oxygen-icons.org\">oxygen</a></small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ })

/******/ });