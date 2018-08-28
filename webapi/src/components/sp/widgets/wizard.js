var options = SP.UI.$create_DialogOptions();
options.title = "Select Events";
options.autoSize = true;
options.allowMaximize = true;
options.dialogReturnValueCallback = function (resp, retVal) {
	if (resp === SP.UI.DialogResult.OK) {
		$el.trigger("selection", retVal);
	}
};

options.showMaximized = true;
options.resizable = true;
options.args = { data: availableitems, category: $(":selected", cmb).text() };