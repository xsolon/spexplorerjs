import $ from "jquery";
import "../string/string.js";
//import "../../../components/js/vakata/libs/jquery.js";
//import "https://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.4/jquery-ui.min.js";
//import "../../../node_modules/jquery-ui-dist/jquery-ui.min.js";
//import "../../../public/vendor/bootstrap/js/bootstrap.js";
import "../../../node_modules/codemirror/lib/codemirror.css";
import JSHINT from "../../../node_modules/jshint/dist/jshint.js";
import CodeMirror from "../../../node_modules/codemirror/lib/codemirror.js";

import "../../../node_modules/codemirror/mode/javascript/javascript.js";
import "../../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js";
import "../../../node_modules/codemirror/mode/css/css.js";

import "../../../node_modules/codemirror/addon/lint/lint.css";
import "../../../node_modules/codemirror/addon/fold/foldgutter.css";

//<!-- hint -->
import "../../../node_modules/codemirror/addon/hint/anyword-hint.js";
import "../../../node_modules/codemirror/addon/hint/css-hint.js";
import "../../../node_modules/codemirror/addon/hint/html-hint.js";
import "../../../node_modules/codemirror/addon/hint/javascript-hint.js";
import "../../../node_modules/codemirror/addon/hint/show-hint.js";
import "../../../node_modules/codemirror/addon/hint/sql-hint.js";
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
import { js_beautify } from "../../../node_modules/js-beautify/js/lib/beautify.js";
//< !--lint -->
//import "https://ajax.aspnetcdn.com/ajax/jshint/r07/jshint.js";
//import "https://rawgithub.com/zaach/jsonlint/79b553fb65c192add9066da64043458981b3972b/lib/jsonlint.js";
//import "csslint.js";
import "../../../node_modules/codemirror/addon/lint/lint.js";
//import "../../../node_modules/codemirror/addon/lint/coffeescript-lint.js";
//import "../../../node_modules/codemirror/addon/lint/css-lint.js";
//import "../../../node_modules/codemirror/addon/lint/html-lint.js";
import "../../../node_modules/codemirror/addon/lint/javascript-lint.js";
//import "../../../node_modules/codemirror/addon/lint/json-lint.js";
//import "../../../node_modules/codemirror/addon/lint/yaml-lint.js";
//import "../../../node_modules/codemirror/addon/lint/lint.css";

window.CodeMirror = CodeMirror;
(function (ns, $) {
	ns.widgets = ns.widgets || {};
	ns.widgets.jseditorinit = function (ell) {
		window.JSHINT = JSHINT.JSHINT;
		var setupJS = function (el) {
			var editor = el.CodeMirror;
			if (editor) {
				editor.toTextArea();
			}
			editor = CodeMirror.fromTextArea(el,
				{
					mode: "javascript",
					lineNumbers: true,
					lineWrapping: true,
					foldGutter: true,
					gutters: ["CodeMirror-lint-markers",
						"CodeMirror-linenumbers",
						"CodeMirror-foldgutter"],
					lint: true
				});

			editor.setOption("extraKeys", {
				"Ctrl-Q": function (cm) {
					
					cm.foldCode(cm.getCursor());
				},
				"Alt-R": function (/*cm*/) {
					$(el).trigger("run");
				},
				"Alt-F": function (cm) {
					
					cm.setValue(js_beautify(cm.getValue()));
				},
				"Enter": function (/*e*/) {
					editor.replaceSelection("\n", "end");
				}
			});

			$(el).data("CodeMirror", editor);
		};

		setupJS(ell);

		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		// Listen to message from child IFrame window
		var editor = $(ell).data("CodeMirror");
		eventer(messageEvent, function (e) {
			var elem = e.data;//JSON.parse(e.data);

			if (elem.action == "set") {
				var data = ns.string.htmlDecode(elem.data);
				editor.setValue(data);
				editor.refresh();
			} else if (elem.action == "get") {
				var val = editor.getValue();
				window.parent.postMessage(JSON.stringify({ code: val, action: elem.action, id: window.location.href.split("=")[1] }), "*");
			}
		});

		return {
			refresh: function () {
				
				editor.refresh();
			},
			set: function (data) {
				editor.setValue(data);
			}, get: function () {
				return editor.getValue();
			}

		};

	};
	ns.widgets.jseditor = function (iframe) {

		iframe.contentWindow.document.write("<html><body><textarea></textarea></body></html>");
		var cont = $(iframe).contents().find("textarea");
		ns.widgets.jseditorinit(cont);
	};

})(window["spexplorerjs"], $);