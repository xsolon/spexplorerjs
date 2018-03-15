//v 0.1.1 : 2018-03-15: Support for IE
import jQuery from "jquery";
import "../string/string.js";
import template from "./xmleditor.template.html";

import "../../../node_modules/codemirror/lib/codemirror.css";
import JSHINT from "../../../node_modules/jshint/dist/jshint.js";
import CodeMirror from "../../../node_modules/codemirror/lib/codemirror.js";

import "../../../node_modules/codemirror/mode/javascript/javascript.js";
import "../../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js";
import "../../../node_modules/codemirror/mode/xml/xml.js";

import "../../../node_modules/codemirror/addon/lint/lint.css";
import "../../../node_modules/codemirror/addon/fold/foldgutter.css";

//<!-- hint -->
import "../../../node_modules/codemirror/addon/hint/anyword-hint.js";
import "../../../node_modules/codemirror/addon/hint/xml-hint.js";
import "../../../node_modules/codemirror/addon/hint/show-hint.css";
//<!-- endhint -->
//<!-- fold-->
import "../../../node_modules/codemirror/addon/fold/brace-fold.js";
import "../../../node_modules/codemirror/addon/fold/comment-fold.js";
import "../../../node_modules/codemirror/addon/fold/foldcode.js";
import "../../../node_modules/codemirror/addon/fold/foldgutter.js";
import "../../../node_modules/codemirror/addon/fold/indent-fold.js";
import "../../../node_modules/codemirror/addon/fold/markdown-fold.js";
import "../../../node_modules/codemirror/addon/fold/xml-fold.js";
import "../../../node_modules/codemirror/addon/fold/foldgutter.css";
//< !--end fold-- >
//< !--lint -->
//import "https://ajax.aspnetcdn.com/ajax/jshint/r07/jshint.js";
//import "https://rawgithub.com/zaach/jsonlint/79b553fb65c192add9066da64043458981b3972b/lib/jsonlint.js";
//import "csslint.js";
import "../../../node_modules/codemirror/addon/lint/lint.js";
//import "../../../node_modules/codemirror/addon/lint/coffeescript-lint.js";
//import "../../../node_modules/codemirror/addon/lint/css-lint.js";
//import "../../../node_modules/codemirror/addon/lint/html-lint.js";
//import "../../../node_modules/codemirror/addon/lint/javascript-lint.js";
//import "../../../node_modules/codemirror/addon/lint/json-lint.js";
//import "../../../node_modules/codemirror/addon/lint/yaml-lint.js";
import "../../../node_modules/codemirror/addon/lint/lint.css";

window.CodeMirror = CodeMirror;
window.JSHINT = JSHINT.JSHINT;
(function (ns, $) {

	var setupXml = function (el) {
		var editor = el.CodeMirror;
		if (editor) {
			editor.toTextArea();
		}

		editor = CodeMirror.fromTextArea(el,
			{
				mode: "xml",
				lineNumbers: true,
				lineWrapping: true,
				autoCloseTags: true,
				viewportMargin: Infinity,
				extraKeys: {
					//"'>'": function (cm) { cm.closeTag(cm, ">"); },
					//"'/'": function (cm) { cm.closeTag(cm, "/"); },
					//"' '": function (cm) { CodeMirror.xmlHint(cm, ' '); },
					//"'<'": function (cm) { CodeMirror.xmlHint(cm, '<'); },
					//"Ctrl-Space": function (cm) { CodeMirror.xmlHint(cm, ''); }
				},
				foldGutter: {
					rangeFinder: CodeMirror.fold.xml
				}, gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], lint: false
			});

		$(el).data("CodeMirror", editor);

	};

	//setupXml($("textarea")[0]);

	// old iframe/postMessage implementation
	//var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	//var eventer = window[eventMethod];
	//var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

	// Listen to message from child IFrame window
	//eventer(messageEvent, function (e) {
	//	var elem = e.data;//JSON.parse(e.data);
	//	var editor = $("textarea").data("CodeMirror");
	//	if (elem.action == "set") {
	//		var data = ns.string.htmlDecode(elem.data);
	//		editor.setValue(data);
	//		editor.refresh();
	//	} else if (elem.action == "get") {
	//		var val = editor.getValue();
	//		window.parent.postMessage(JSON.stringify({ code: val, action: elem.action, id: window.location.href.split("=")[1] }), "*");
	//	}
	//});

	ns.widgets = ns.widgets || {};
	ns.widgets.xmleditorInitIframe = function (iframe) {


		//https://www.kochan.io/javascript/how-to-dynamically-create-an-iframe.html
		iframe.attr("src",
			"javascript:void((function(){var script = document.createElement('script');" +
            "script.innerHTML = \"(function() {" +
            "document.open();document.domain='" + document.domain +
            "';document.close();})();\";" +
            "document.write(\"<head>\" + script.outerHTML + \"</head><body></body>\");})())"
		);

		iframe[0].contentWindow.document.write(template);

		var head = iframe.contents().find("head");
		$("style").each(function () {
			// cloneNode doesnt work in IE
			//head.append(this.cloneNode(true));
			$("<style type='text/css'>" + $(this).html() + "</style>").appendTo(head);

		});

		return ns.widgets.xmleditorinit(iframe.contents().find("textarea")[0]);
	};
	ns.widgets.xmleditorinit = function (ell) {

		setupXml(ell);

		// Listen to message from child IFrame window
		var editor = $(ell).data("CodeMirror");

		return {
			set: function (data) {
				editor.setValue(data);
			}, get: function () {
				return editor.getValue();
			}

		};

	};
	ns.widgets.xmleditor = function (iframe) {


		iframe.contentWindow.document.write(template);
		var cont = $(iframe).contents().find("textarea");
		ns.widgets.xmleditorinit(cont);

		//var iframe = document.createElement('iframe');
		//document.body.appendChild(iframe);

		//https://www.kochan.io/javascript/how-to-dynamically-create-an-iframe.html
		//iframe.src = 'javascript:void((function(){var script = document.createElement(\'script\');' +
		//    'script.innerHTML = "(function() {' +
		//    'document.open();document.domain=\'' + document.domain +
		//    '\';document.close();})();";' +
		//    'document.write("<head>" + script.outerHTML + "</head><body></body>");})())';

		//iframe.contentWindow.document.write('<div>foo</div>');
	};
})(window["spexplorerjs"], jQuery);
