/// TODO: Document
import $ from "jquery";
import "../logger/logger.js";
import "./sp.base.js";

(function(ns, $) {

    var debug = window.location.href.search(/[localhost|debugcustomactions]/) > 0;
    var log = function() { // log function avoids errors when console is not available
        try {
            if (debug && window['console'] && console.log) {
                window.xLog.push(arguments);
                console.log.apply(console, arguments);
                if (window['jQuery']) {
                    $('#xLoaderLog').append($('<p>' + msg + '</p>'));
                }
            }
        } catch (k) { }
    };

    var SPListWidget = function(el, opts) {// constructor
        var $el = $(el), me = {}, ctx = null;
        opts = $.extend({}, opts);
        $el.html($('#spListWidgetTmpl:last').html());
        $el.data('spListWidget', me);

        $('#btnAdd', $el).click(function() {
        });
        var jsWidget = ns.widgets.xjsmirror.startup($el);

        ns.widgets.xSPTreeLight.startup($el).on("listchange", function(event, list) {
            debugger;
            $('#title', $el).val(list.get_title());
            jsWidget.data('xjsmirror').setScriptingObject(list);
            caCtrl.setList(list);
        });

        var caElem = ns.widgets.spCustomActions.startup($el);
        var caCtrl = caElem.data('spCustomActions');
        return me;
    };

    var widgetInfo = {
        publicName: 'spListWidget',
        constructor: SPListWidget,
        version: '0.1.0',
        startup: function(context) {

            log(widgetInfo.publicName + ".startup");
            var selector = '[data-widget="publicName"]'.replace('publicName', widgetInfo.publicName);
            log('selector: ' + selector);
            var elems = $(selector, context || document);
            log('Elems: ' + elems.length);
            elems[widgetInfo.publicName]({});
        }
    };

    $.fn[widgetInfo.publicName] = function(opts) {
        var args = arguments;
        var lastInstance = null;
        var result = this.each(function() {

            var $el = $(this);

            var me = $el.data(widgetInfo.publicName);

            if (me) { // object has been initialized before

                if (opts == null) { // request for instance
                    lastInstance = me;
                } else
                    if (me[opts]) {
                        if (typeof me[opts] == 'function')
                            me[opts].apply(me, Array.prototype.slice.call(args, 1));
                        else
                            me[opts] = args[1];
                    }

            } else {
                var obj = new widgetInfo.constructor(this, opts);
                $el.data(widgetInfo.publicName, obj).data('xwidget', obj);
            }
        });

        return result;
    };

    (ns.widgets = (ns.widgets || {}))[widgetInfo.publicName] = widgetInfo;

    var init = function splistInit() {
        if (window['ExecuteOrDelayUntilScriptLoaded']) {
            ExecuteOrDelayUntilScriptLoaded(function() {
                widgetInfo.startup();
            }, "sp.js");
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function() { ; });
        }
        else widgetInfo.startup();
    };

    init();
    //if (xSolon.loader.isBusy) {
    //    xSolon.loader.bits.push(init);
    //}
    //else {
    //    init();
    //}

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);

