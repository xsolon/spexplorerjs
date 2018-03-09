import "../../sp/sp.web.js";

var ns = spexplorerjs;
var refreshSite = function (siteUrl, siteTitle, siteTemplate) {
    ns.loadWeb(siteUrl).fail(function() {
        debugger;
    }).done(function() {
        ns.logger.error(`Site ${siteUrl} already exists`);
    });

};

