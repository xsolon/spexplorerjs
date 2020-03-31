
import * as tmp from './searchbox.template.html';
import { CodeMirrorHelper } from './jseditor';
import { Logger } from 'spexplorerts';
import 'jquery';

(function (ns) {

  var trace = new Logger('SearchBox');
  var helper = new CodeMirrorHelper();

  $('#searchbox').html(tmp);
  var xmlEditor = helper.createXmlEditor('resultMirror', 'Xml Editor');
  var jsEditor = helper.createJsEditor('jsMirror', "Code Editor");

  jsEditor.setValue('var xml = xmlEditor.getValue();\r\nconsole.log(xml);');

  var onRun = function () {
    var code = jsEditor.getValue();
    runScript(code);
  };

  var elem = jsEditor.getTextArea();
  $(elem).on('run', onRun);

  var runScript = function (code: string) {
    try {
      trace.log(code);
      var script = "var log = console.log, clear = console.clear;\r\n\
                    {0}\r\n".replace("{0}", code);

      var args: string[] = ['xmlEditor', 'jsEditor'];
      var vals = [xmlEditor, jsEditor];

      //for (var name in resourceHash) {
      //  if (resourceHash.hasOwnProperty(name)) {
      //    args.push(name);
      //    vals.push(resourceHash[name]);
      //  }
      //}

      //@ts-ignore
      var tempFunction = new Function(args, script);
      var res = tempFunction.apply(tempFunction, vals);
      if (res) {
        console.log(res);
        xmlEditor.setValue(res);
      }

    } catch (e) {
      trace.error(e.message);
      throw e;
    }

  };

  $('#btnRun').click(function (e) {
    e.preventDefault();
    onRun();
    return false;
  });

})(window['spexplorer'] || {});