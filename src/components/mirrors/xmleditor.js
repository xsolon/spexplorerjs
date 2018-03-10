import "../string/string.js";
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
					"'>'": function (cm) { cm.closeTag(cm, ">"); },
					"'/'": function (cm) { cm.closeTag(cm, "/"); },
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

	setupXml($("textarea")[0]);

	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

	// Listen to message from child IFrame window
	eventer(messageEvent, function (e) {
		var elem = e.data;//JSON.parse(e.data);
		var editor = $("textarea").data("CodeMirror");
		if (elem.action == "set") {
			var data = ns.string.htmlDecode(elem.data);
			editor.setValue(data);
			editor.refresh();
		} else if (elem.action == "get") {
			var val = editor.getValue();
			window.parent.postMessage(JSON.stringify({ code: val, action: elem.action, id: window.location.href.split("=")[1] }), "*");
		}
	});
})(window["spexplorerjs"], jQuery);
