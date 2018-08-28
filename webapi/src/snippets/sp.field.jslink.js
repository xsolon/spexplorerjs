console.log(spelem);// spelem: reference to field
window.spelem = spelem;
var ctx = spelem.get_context();
console.log(spelem.get_jsLink());
var link = 'clienttemplates.js|~site/SiteAssets/vault/refs/jquery.js';
spelem.set_jsLink(link);
spelem.updateAndPushChanges(true);
spelem.update();
ctx.load(spelem);
ctx.executeQueryAsync(function () {
    console.log('done' + spelem.get_jsLink());

}, function () {
    debugger;
});