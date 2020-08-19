/// <reference types='jquery' />
import * as monaco from 'monaco-editor';
// import tmp from '../../node_modules/spexplorerts/bundles/spexplorerts.d.ts.html';
// import tmp from './defs/spexplorerts.d.html';
var tmp = require('./defs/spexplorerts.d.html');
//var tmp = 'require(\'../../node_modules/spexplorerts/bundles/spexplorerts.d.ts.html\')';
// import legacy from './defs/legacy.d.html';
var legacy = require('./defs/legacy.d.html');
// import misc from './defs/misc.d.html';
var misc = require('./defs/misc.d.html');
// import jqueryDef from './defs/JQuery.d.html';
var jqueryDef = require('./defs/JQuery.d.html');
// import jqueryStaticDef from './defs/jqueryStatic.d.html';
var jqueryStaticDef = require('./defs/jqueryStatic.d.html');
// import sp from './defs/sp.d.html';
var sp = require('./defs/sp.d.html');
var $ = require('jquery');

//https://github.com/microsoft/monaco-typescript/pull/8
////#region 
var index1 = require('@pnp/adaljsclient/index.d.ts');
var tslib1 = require('@pnp/adaljsclient/node_modules/tslib/tslib.d.ts');
var collections1 = require('@pnp/common/collections.d.ts');
var index2 = require('@pnp/common/index.d.ts');
var libconfig1 = require('@pnp/common/libconfig.d.ts');
var net1 = require('@pnp/common/net.d.ts');
var tslib2 = require('@pnp/common/node_modules/tslib/tslib.d.ts');
var safeglobal1 = require('@pnp/common/safe-global.d.ts');
var spfxcontextinterface1 = require('@pnp/common/spfxcontextinterface.d.ts');
var storage1 = require('@pnp/common/storage.d.ts');
var util1 = require('@pnp/common/util.d.ts');
var conversations1 = require('@pnp/graph/attachments/conversations.d.ts');
var index3 = require('@pnp/graph/attachments/index.d.ts');
var types1 = require('@pnp/graph/attachments/types.d.ts');
var batch1 = require('@pnp/graph/batch.d.ts');
var funcs1 = require('@pnp/graph/calendars/funcs.d.ts');
var groups1 = require('@pnp/graph/calendars/groups.d.ts');
var index4 = require('@pnp/graph/calendars/index.d.ts');
var types2 = require('@pnp/graph/calendars/types.d.ts');
var users1 = require('@pnp/graph/calendars/users.d.ts');
var index5 = require('@pnp/graph/contacts/index.d.ts');
var types3 = require('@pnp/graph/contacts/types.d.ts');
var users2 = require('@pnp/graph/contacts/users.d.ts');
var groups2 = require('@pnp/graph/conversations/groups.d.ts');
var index6 = require('@pnp/graph/conversations/index.d.ts');
var types4 = require('@pnp/graph/conversations/types.d.ts');
var decorators1 = require('@pnp/graph/decorators.d.ts');
var index7 = require('@pnp/graph/directory-objects/index.d.ts');
var types5 = require('@pnp/graph/directory-objects/types.d.ts');
var graphhttpclient1 = require('@pnp/graph/graphhttpclient.d.ts');
var graphlibconfig1 = require('@pnp/graph/graphlibconfig.d.ts');
var graphqueryable1 = require('@pnp/graph/graphqueryable.d.ts');
var index8 = require('@pnp/graph/groups/index.d.ts');
var types6 = require('@pnp/graph/groups/types.d.ts');
var index9 = require('@pnp/graph/index.d.ts');
var index10 = require('@pnp/graph/insights/index.d.ts');
var types7 = require('@pnp/graph/insights/types.d.ts');
var users3 = require('@pnp/graph/insights/users.d.ts');
var index11 = require('@pnp/graph/invitations/index.d.ts');
var types8 = require('@pnp/graph/invitations/types.d.ts');
var groups3 = require('@pnp/graph/members/groups.d.ts');
var index12 = require('@pnp/graph/members/index.d.ts');
var types9 = require('@pnp/graph/members/types.d.ts');
var index13 = require('@pnp/graph/messages/index.d.ts');
var types10 = require('@pnp/graph/messages/types.d.ts');
var users4 = require('@pnp/graph/messages/users.d.ts');
var tslib3 = require('@pnp/graph/node_modules/tslib/tslib.d.ts');
var index14 = require('@pnp/graph/onedrive/index.d.ts');
var types11 = require('@pnp/graph/onedrive/types.d.ts');
var users5 = require('@pnp/graph/onedrive/users.d.ts');
var index15 = require('@pnp/graph/onenote/index.d.ts');
var types12 = require('@pnp/graph/onenote/types.d.ts');
var users6 = require('@pnp/graph/onenote/users.d.ts');
var operations1 = require('@pnp/graph/operations.d.ts');
var groups4 = require('@pnp/graph/photos/groups.d.ts');
var index16 = require('@pnp/graph/photos/index.d.ts');
var types13 = require('@pnp/graph/photos/types.d.ts');
var users7 = require('@pnp/graph/photos/users.d.ts');
var groups5 = require('@pnp/graph/planner/groups.d.ts');
var index17 = require('@pnp/graph/planner/index.d.ts');
var types14 = require('@pnp/graph/planner/types.d.ts');
var users8 = require('@pnp/graph/planner/users.d.ts');
var all1 = require('@pnp/graph/presets/all.d.ts');
var rest1 = require('@pnp/graph/rest.d.ts');
var index18 = require('@pnp/graph/subscriptions/index.d.ts');
var types15 = require('@pnp/graph/subscriptions/types.d.ts');
var index19 = require('@pnp/graph/teams/index.d.ts');
var types16 = require('@pnp/graph/teams/types.d.ts');
var users9 = require('@pnp/graph/teams/users.d.ts');
var types17 = require('@pnp/graph/types.d.ts');
var index20 = require('@pnp/graph/users/index.d.ts');
var types18 = require('@pnp/graph/users/types.d.ts');
var type1 = require('@pnp/graph/utils/type.d.ts');
var index21 = require('@pnp/logging/index.d.ts');
var listeners1 = require('@pnp/logging/listeners.d.ts');
var logger1 = require('@pnp/logging/logger.d.ts');
var tslib4 = require('@pnp/logging/node_modules/tslib/tslib.d.ts');
var addprop1 = require('@pnp/odata/add-prop.d.ts');
var batch2 = require('@pnp/odata/batch.d.ts');
var caching1 = require('@pnp/odata/caching.d.ts');
var debug1 = require('@pnp/odata/debug.d.ts');
var index22 = require('@pnp/odata/index.d.ts');
var invokablebinder1 = require('@pnp/odata/invokable-binder.d.ts');
var invokableextensions1 = require('@pnp/odata/invokable-extensions.d.ts');
var tslib5 = require('@pnp/odata/node_modules/tslib/tslib.d.ts');
var parsers1 = require('@pnp/odata/parsers.d.ts');
var pipelinebinder1 = require('@pnp/odata/pipeline-binder.d.ts');
var pipeline1 = require('@pnp/odata/pipeline.d.ts');
var queryable1 = require('@pnp/odata/queryable.d.ts');
var requestbuilders1 = require('@pnp/odata/request-builders.d.ts');
var index23 = require('@pnp/polyfill-ie11/dist/index.d.ts');
var searchquerybuilder1 = require('@pnp/polyfill-ie11/dist/searchquerybuilder.d.ts');
var index24 = require('@pnp/sp/appcatalog/index.d.ts');
var types19 = require('@pnp/sp/appcatalog/types.d.ts');
var web1 = require('@pnp/sp/appcatalog/web.d.ts');
var index25 = require('@pnp/sp/attachments/index.d.ts');
var item1 = require('@pnp/sp/attachments/item.d.ts');
var types20 = require('@pnp/sp/attachments/types.d.ts');
var batch3 = require('@pnp/sp/batch.d.ts');
var funcs2 = require('@pnp/sp/clientside-pages/funcs.d.ts');
var index26 = require('@pnp/sp/clientside-pages/index.d.ts');
var types21 = require('@pnp/sp/clientside-pages/types.d.ts');
var web2 = require('@pnp/sp/clientside-pages/web.d.ts');
var folder1 = require('@pnp/sp/column-defaults/folder.d.ts');
var index27 = require('@pnp/sp/column-defaults/index.d.ts');
var list1 = require('@pnp/sp/column-defaults/list.d.ts');
var types22 = require('@pnp/sp/column-defaults/types.d.ts');
var clientsidepage1 = require('@pnp/sp/comments/clientside-page.d.ts');
var index28 = require('@pnp/sp/comments/index.d.ts');
var item2 = require('@pnp/sp/comments/item.d.ts');
var types23 = require('@pnp/sp/comments/types.d.ts');
var index29 = require('@pnp/sp/content-types/index.d.ts');
var item3 = require('@pnp/sp/content-types/item.d.ts');
var list2 = require('@pnp/sp/content-types/list.d.ts');
var types24 = require('@pnp/sp/content-types/types.d.ts');
var web3 = require('@pnp/sp/content-types/web.d.ts');
var decorators2 = require('@pnp/sp/decorators.d.ts');
var index30 = require('@pnp/sp/features/index.d.ts');
var site1 = require('@pnp/sp/features/site.d.ts');
var types25 = require('@pnp/sp/features/types.d.ts');
var web4 = require('@pnp/sp/features/web.d.ts');
var index31 = require('@pnp/sp/fields/index.d.ts');
var list3 = require('@pnp/sp/fields/list.d.ts');
var types26 = require('@pnp/sp/fields/types.d.ts');
var web5 = require('@pnp/sp/fields/web.d.ts');
var folder2 = require('@pnp/sp/files/folder.d.ts');
var index32 = require('@pnp/sp/files/index.d.ts');
var item4 = require('@pnp/sp/files/item.d.ts');
var types27 = require('@pnp/sp/files/types.d.ts');
var web6 = require('@pnp/sp/files/web.d.ts');
var index33 = require('@pnp/sp/folders/index.d.ts');
var item5 = require('@pnp/sp/folders/item.d.ts');
var list4 = require('@pnp/sp/folders/list.d.ts');
var types28 = require('@pnp/sp/folders/types.d.ts');
var web7 = require('@pnp/sp/folders/web.d.ts');
var index34 = require('@pnp/sp/forms/index.d.ts');
var list5 = require('@pnp/sp/forms/list.d.ts');
var types29 = require('@pnp/sp/forms/types.d.ts');
var index35 = require('@pnp/sp/hubsites/index.d.ts');
var site2 = require('@pnp/sp/hubsites/site.d.ts');
var types30 = require('@pnp/sp/hubsites/types.d.ts');
var web8 = require('@pnp/sp/hubsites/web.d.ts');
var index36 = require('@pnp/sp/index.d.ts');
var index37 = require('@pnp/sp/items/index.d.ts');
var list6 = require('@pnp/sp/items/list.d.ts');
var types31 = require('@pnp/sp/items/types.d.ts');
var index38 = require('@pnp/sp/lists/index.d.ts');
var types32 = require('@pnp/sp/lists/types.d.ts');
var web9 = require('@pnp/sp/lists/web.d.ts');
var index39 = require('@pnp/sp/navigation/index.d.ts');
var types33 = require('@pnp/sp/navigation/types.d.ts');
var web10 = require('@pnp/sp/navigation/web.d.ts');
var tslib6 = require('@pnp/sp/node_modules/tslib/tslib.d.ts');
var odata1 = require('@pnp/sp/odata.d.ts');
var operations2 = require('@pnp/sp/operations.d.ts');
var all2 = require('@pnp/sp/presets/all.d.ts');
var core1 = require('@pnp/sp/presets/core.d.ts');
var index40 = require('@pnp/sp/profiles/index.d.ts');
var types34 = require('@pnp/sp/profiles/types.d.ts');
var contenttype1 = require('@pnp/sp/regional-settings/content-type.d.ts');
var field1 = require('@pnp/sp/regional-settings/field.d.ts');
var funcs3 = require('@pnp/sp/regional-settings/funcs.d.ts');
var index41 = require('@pnp/sp/regional-settings/index.d.ts');
var list7 = require('@pnp/sp/regional-settings/list.d.ts');
var types35 = require('@pnp/sp/regional-settings/types.d.ts');
var usercustomactions1 = require('@pnp/sp/regional-settings/user-custom-actions.d.ts');
var web11 = require('@pnp/sp/regional-settings/web.d.ts');
var index42 = require('@pnp/sp/related-items/index.d.ts');
var types36 = require('@pnp/sp/related-items/types.d.ts');
var web12 = require('@pnp/sp/related-items/web.d.ts');
var rest2 = require('@pnp/sp/rest.d.ts');
var index43 = require('@pnp/sp/search/index.d.ts');
var query1 = require('@pnp/sp/search/query.d.ts');
var suggest1 = require('@pnp/sp/search/suggest.d.ts');
var types37 = require('@pnp/sp/search/types.d.ts');
var funcs4 = require('@pnp/sp/security/funcs.d.ts');
var index44 = require('@pnp/sp/security/index.d.ts');
var item6 = require('@pnp/sp/security/item.d.ts');
var list8 = require('@pnp/sp/security/list.d.ts');
var types38 = require('@pnp/sp/security/types.d.ts');
var web13 = require('@pnp/sp/security/web.d.ts');
var sharepointqueryable1 = require('@pnp/sp/sharepointqueryable.d.ts');
var file1 = require('@pnp/sp/sharing/file.d.ts');
var folder3 = require('@pnp/sp/sharing/folder.d.ts');
var funcs5 = require('@pnp/sp/sharing/funcs.d.ts');
var index45 = require('@pnp/sp/sharing/index.d.ts');
var item7 = require('@pnp/sp/sharing/item.d.ts');
var types39 = require('@pnp/sp/sharing/types.d.ts');
var web14 = require('@pnp/sp/sharing/web.d.ts');
var index46 = require('@pnp/sp/site-designs/index.d.ts');
var types40 = require('@pnp/sp/site-designs/types.d.ts');
var web15 = require('@pnp/sp/site-designs/web.d.ts');
var index47 = require('@pnp/sp/site-groups/index.d.ts');
var types41 = require('@pnp/sp/site-groups/types.d.ts');
var web16 = require('@pnp/sp/site-groups/web.d.ts');
var index48 = require('@pnp/sp/site-scripts/index.d.ts');
var list9 = require('@pnp/sp/site-scripts/list.d.ts');
var types42 = require('@pnp/sp/site-scripts/types.d.ts');
var web17 = require('@pnp/sp/site-scripts/web.d.ts');
var index49 = require('@pnp/sp/site-users/index.d.ts');
var types43 = require('@pnp/sp/site-users/types.d.ts');
var web18 = require('@pnp/sp/site-users/web.d.ts');
var index50 = require('@pnp/sp/sites/index.d.ts');
var types44 = require('@pnp/sp/sites/types.d.ts');
var index51 = require('@pnp/sp/social/index.d.ts');
var types45 = require('@pnp/sp/social/types.d.ts');
var sphttpclient1 = require('@pnp/sp/sphttpclient.d.ts');
var splibconfig1 = require('@pnp/sp/splibconfig.d.ts');
var index52 = require('@pnp/sp/sputilities/index.d.ts');
var types46 = require('@pnp/sp/sputilities/types.d.ts');
var index53 = require('@pnp/sp/subscriptions/index.d.ts');
var list10 = require('@pnp/sp/subscriptions/list.d.ts');
var types47 = require('@pnp/sp/subscriptions/types.d.ts');
var index54 = require('@pnp/sp/taxonomy/index.d.ts');
var types48 = require('@pnp/sp/taxonomy/types.d.ts');
var telemetry1 = require('@pnp/sp/telemetry.d.ts');
var types49 = require('@pnp/sp/types.d.ts');
var index55 = require('@pnp/sp/user-custom-actions/index.d.ts');
var list11 = require('@pnp/sp/user-custom-actions/list.d.ts');
var site3 = require('@pnp/sp/user-custom-actions/site.d.ts');
var types50 = require('@pnp/sp/user-custom-actions/types.d.ts');
var web19 = require('@pnp/sp/user-custom-actions/web.d.ts');
var escapeQueryStrValue1 = require('@pnp/sp/utils/escapeQueryStrValue.d.ts');
var extractweburl1 = require('@pnp/sp/utils/extractweburl.d.ts');
var filenames1 = require('@pnp/sp/utils/file-names.d.ts');
var metadata1 = require('@pnp/sp/utils/metadata.d.ts');
var objectToSPKeyValueCollection1 = require('@pnp/sp/utils/objectToSPKeyValueCollection.d.ts');
var toabsoluteurl1 = require('@pnp/sp/utils/toabsoluteurl.d.ts');
var toResourcePath1 = require('@pnp/sp/utils/toResourcePath.d.ts');
var index56 = require('@pnp/sp/views/index.d.ts');
var list12 = require('@pnp/sp/views/list.d.ts');
var types51 = require('@pnp/sp/views/types.d.ts');
var file2 = require('@pnp/sp/webparts/file.d.ts');
var index57 = require('@pnp/sp/webparts/index.d.ts');
var types52 = require('@pnp/sp/webparts/types.d.ts');
var index58 = require('@pnp/sp/webs/index.d.ts');
var types53 = require('@pnp/sp/webs/types.d.ts');

monaco.languages.typescript.typescriptDefaults.addExtraLib(index1, 'file:///node_modules/@pnp/adaljsclient/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tslib1, 'file:///node_modules/@pnp/adaljsclient/node_modules/tslib/tslib.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(collections1, 'file:///node_modules/@pnp/common/collections.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index2, 'file:///node_modules/@pnp/common/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(libconfig1, 'file:///node_modules/@pnp/common/libconfig.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(net1, 'file:///node_modules/@pnp/common/net.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tslib2, 'file:///node_modules/@pnp/common/node_modules/tslib/tslib.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(safeglobal1, 'file:///node_modules/@pnp/common/safe-global.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(spfxcontextinterface1, 'file:///node_modules/@pnp/common/spfxcontextinterface.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(storage1, 'file:///node_modules/@pnp/common/storage.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(util1, 'file:///node_modules/@pnp/common/util.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(conversations1, 'file:///node_modules/@pnp/graph/attachments/conversations.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index3, 'file:///node_modules/@pnp/graph/attachments/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types1, 'file:///node_modules/@pnp/graph/attachments/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(batch1, 'file:///node_modules/@pnp/graph/batch.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(funcs1, 'file:///node_modules/@pnp/graph/calendars/funcs.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(groups1, 'file:///node_modules/@pnp/graph/calendars/groups.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index4, 'file:///node_modules/@pnp/graph/calendars/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types2, 'file:///node_modules/@pnp/graph/calendars/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users1, 'file:///node_modules/@pnp/graph/calendars/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index5, 'file:///node_modules/@pnp/graph/contacts/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types3, 'file:///node_modules/@pnp/graph/contacts/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users2, 'file:///node_modules/@pnp/graph/contacts/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(groups2, 'file:///node_modules/@pnp/graph/conversations/groups.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index6, 'file:///node_modules/@pnp/graph/conversations/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types4, 'file:///node_modules/@pnp/graph/conversations/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(decorators1, 'file:///node_modules/@pnp/graph/decorators.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index7, 'file:///node_modules/@pnp/graph/directory-objects/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types5, 'file:///node_modules/@pnp/graph/directory-objects/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(graphhttpclient1, 'file:///node_modules/@pnp/graph/graphhttpclient.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(graphlibconfig1, 'file:///node_modules/@pnp/graph/graphlibconfig.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(graphqueryable1, 'file:///node_modules/@pnp/graph/graphqueryable.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index8, 'file:///node_modules/@pnp/graph/groups/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types6, 'file:///node_modules/@pnp/graph/groups/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index9, 'file:///node_modules/@pnp/graph/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index10, 'file:///node_modules/@pnp/graph/insights/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types7, 'file:///node_modules/@pnp/graph/insights/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users3, 'file:///node_modules/@pnp/graph/insights/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index11, 'file:///node_modules/@pnp/graph/invitations/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types8, 'file:///node_modules/@pnp/graph/invitations/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(groups3, 'file:///node_modules/@pnp/graph/members/groups.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index12, 'file:///node_modules/@pnp/graph/members/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types9, 'file:///node_modules/@pnp/graph/members/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index13, 'file:///node_modules/@pnp/graph/messages/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types10, 'file:///node_modules/@pnp/graph/messages/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users4, 'file:///node_modules/@pnp/graph/messages/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tslib3, 'file:///node_modules/@pnp/graph/node_modules/tslib/tslib.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index14, 'file:///node_modules/@pnp/graph/onedrive/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types11, 'file:///node_modules/@pnp/graph/onedrive/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users5, 'file:///node_modules/@pnp/graph/onedrive/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index15, 'file:///node_modules/@pnp/graph/onenote/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types12, 'file:///node_modules/@pnp/graph/onenote/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users6, 'file:///node_modules/@pnp/graph/onenote/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(operations1, 'file:///node_modules/@pnp/graph/operations.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(groups4, 'file:///node_modules/@pnp/graph/photos/groups.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index16, 'file:///node_modules/@pnp/graph/photos/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types13, 'file:///node_modules/@pnp/graph/photos/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users7, 'file:///node_modules/@pnp/graph/photos/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(groups5, 'file:///node_modules/@pnp/graph/planner/groups.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index17, 'file:///node_modules/@pnp/graph/planner/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types14, 'file:///node_modules/@pnp/graph/planner/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users8, 'file:///node_modules/@pnp/graph/planner/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(all1, 'file:///node_modules/@pnp/graph/presets/all.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(rest1, 'file:///node_modules/@pnp/graph/rest.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index18, 'file:///node_modules/@pnp/graph/subscriptions/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types15, 'file:///node_modules/@pnp/graph/subscriptions/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index19, 'file:///node_modules/@pnp/graph/teams/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types16, 'file:///node_modules/@pnp/graph/teams/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(users9, 'file:///node_modules/@pnp/graph/teams/users.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types17, 'file:///node_modules/@pnp/graph/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index20, 'file:///node_modules/@pnp/graph/users/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types18, 'file:///node_modules/@pnp/graph/users/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(type1, 'file:///node_modules/@pnp/graph/utils/type.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index21, 'file:///node_modules/@pnp/logging/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(listeners1, 'file:///node_modules/@pnp/logging/listeners.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(logger1, 'file:///node_modules/@pnp/logging/logger.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tslib4, 'file:///node_modules/@pnp/logging/node_modules/tslib/tslib.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(addprop1, 'file:///node_modules/@pnp/odata/add-prop.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(batch2, 'file:///node_modules/@pnp/odata/batch.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(caching1, 'file:///node_modules/@pnp/odata/caching.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(debug1, 'file:///node_modules/@pnp/odata/debug.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index22, 'file:///node_modules/@pnp/odata/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(invokablebinder1, 'file:///node_modules/@pnp/odata/invokable-binder.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(invokableextensions1, 'file:///node_modules/@pnp/odata/invokable-extensions.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tslib5, 'file:///node_modules/@pnp/odata/node_modules/tslib/tslib.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(parsers1, 'file:///node_modules/@pnp/odata/parsers.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(pipelinebinder1, 'file:///node_modules/@pnp/odata/pipeline-binder.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(pipeline1, 'file:///node_modules/@pnp/odata/pipeline.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(queryable1, 'file:///node_modules/@pnp/odata/queryable.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(requestbuilders1, 'file:///node_modules/@pnp/odata/request-builders.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index23, 'file:///node_modules/@pnp/polyfill-ie11/dist/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(searchquerybuilder1, 'file:///node_modules/@pnp/polyfill-ie11/dist/searchquerybuilder.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index24, 'file:///node_modules/@pnp/sp/appcatalog/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types19, 'file:///node_modules/@pnp/sp/appcatalog/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web1, 'file:///node_modules/@pnp/sp/appcatalog/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index25, 'file:///node_modules/@pnp/sp/attachments/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item1, 'file:///node_modules/@pnp/sp/attachments/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types20, 'file:///node_modules/@pnp/sp/attachments/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(batch3, 'file:///node_modules/@pnp/sp/batch.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(funcs2, 'file:///node_modules/@pnp/sp/clientside-pages/funcs.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index26, 'file:///node_modules/@pnp/sp/clientside-pages/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types21, 'file:///node_modules/@pnp/sp/clientside-pages/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web2, 'file:///node_modules/@pnp/sp/clientside-pages/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(folder1, 'file:///node_modules/@pnp/sp/column-defaults/folder.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index27, 'file:///node_modules/@pnp/sp/column-defaults/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list1, 'file:///node_modules/@pnp/sp/column-defaults/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types22, 'file:///node_modules/@pnp/sp/column-defaults/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(clientsidepage1, 'file:///node_modules/@pnp/sp/comments/clientside-page.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index28, 'file:///node_modules/@pnp/sp/comments/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item2, 'file:///node_modules/@pnp/sp/comments/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types23, 'file:///node_modules/@pnp/sp/comments/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index29, 'file:///node_modules/@pnp/sp/content-types/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item3, 'file:///node_modules/@pnp/sp/content-types/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list2, 'file:///node_modules/@pnp/sp/content-types/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types24, 'file:///node_modules/@pnp/sp/content-types/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web3, 'file:///node_modules/@pnp/sp/content-types/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(decorators2, 'file:///node_modules/@pnp/sp/decorators.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index30, 'file:///node_modules/@pnp/sp/features/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(site1, 'file:///node_modules/@pnp/sp/features/site.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types25, 'file:///node_modules/@pnp/sp/features/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web4, 'file:///node_modules/@pnp/sp/features/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index31, 'file:///node_modules/@pnp/sp/fields/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list3, 'file:///node_modules/@pnp/sp/fields/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types26, 'file:///node_modules/@pnp/sp/fields/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web5, 'file:///node_modules/@pnp/sp/fields/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(folder2, 'file:///node_modules/@pnp/sp/files/folder.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index32, 'file:///node_modules/@pnp/sp/files/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item4, 'file:///node_modules/@pnp/sp/files/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types27, 'file:///node_modules/@pnp/sp/files/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web6, 'file:///node_modules/@pnp/sp/files/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index33, 'file:///node_modules/@pnp/sp/folders/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item5, 'file:///node_modules/@pnp/sp/folders/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list4, 'file:///node_modules/@pnp/sp/folders/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types28, 'file:///node_modules/@pnp/sp/folders/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web7, 'file:///node_modules/@pnp/sp/folders/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index34, 'file:///node_modules/@pnp/sp/forms/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list5, 'file:///node_modules/@pnp/sp/forms/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types29, 'file:///node_modules/@pnp/sp/forms/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index35, 'file:///node_modules/@pnp/sp/hubsites/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(site2, 'file:///node_modules/@pnp/sp/hubsites/site.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types30, 'file:///node_modules/@pnp/sp/hubsites/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web8, 'file:///node_modules/@pnp/sp/hubsites/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index36, 'file:///node_modules/@pnp/sp/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index37, 'file:///node_modules/@pnp/sp/items/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list6, 'file:///node_modules/@pnp/sp/items/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types31, 'file:///node_modules/@pnp/sp/items/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index38, 'file:///node_modules/@pnp/sp/lists/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types32, 'file:///node_modules/@pnp/sp/lists/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web9, 'file:///node_modules/@pnp/sp/lists/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index39, 'file:///node_modules/@pnp/sp/navigation/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types33, 'file:///node_modules/@pnp/sp/navigation/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web10, 'file:///node_modules/@pnp/sp/navigation/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tslib6, 'file:///node_modules/@pnp/sp/node_modules/tslib/tslib.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(odata1, 'file:///node_modules/@pnp/sp/odata.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(operations2, 'file:///node_modules/@pnp/sp/operations.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(all2, 'file:///node_modules/@pnp/sp/presets/all.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(core1, 'file:///node_modules/@pnp/sp/presets/core.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index40, 'file:///node_modules/@pnp/sp/profiles/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types34, 'file:///node_modules/@pnp/sp/profiles/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(contenttype1, 'file:///node_modules/@pnp/sp/regional-settings/content-type.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(field1, 'file:///node_modules/@pnp/sp/regional-settings/field.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(funcs3, 'file:///node_modules/@pnp/sp/regional-settings/funcs.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index41, 'file:///node_modules/@pnp/sp/regional-settings/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list7, 'file:///node_modules/@pnp/sp/regional-settings/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types35, 'file:///node_modules/@pnp/sp/regional-settings/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(usercustomactions1, 'file:///node_modules/@pnp/sp/regional-settings/user-custom-actions.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web11, 'file:///node_modules/@pnp/sp/regional-settings/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index42, 'file:///node_modules/@pnp/sp/related-items/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types36, 'file:///node_modules/@pnp/sp/related-items/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web12, 'file:///node_modules/@pnp/sp/related-items/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(rest2, 'file:///node_modules/@pnp/sp/rest.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index43, 'file:///node_modules/@pnp/sp/search/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(query1, 'file:///node_modules/@pnp/sp/search/query.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(suggest1, 'file:///node_modules/@pnp/sp/search/suggest.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types37, 'file:///node_modules/@pnp/sp/search/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(funcs4, 'file:///node_modules/@pnp/sp/security/funcs.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index44, 'file:///node_modules/@pnp/sp/security/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item6, 'file:///node_modules/@pnp/sp/security/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list8, 'file:///node_modules/@pnp/sp/security/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types38, 'file:///node_modules/@pnp/sp/security/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web13, 'file:///node_modules/@pnp/sp/security/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(sharepointqueryable1, 'file:///node_modules/@pnp/sp/sharepointqueryable.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(file1, 'file:///node_modules/@pnp/sp/sharing/file.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(folder3, 'file:///node_modules/@pnp/sp/sharing/folder.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(funcs5, 'file:///node_modules/@pnp/sp/sharing/funcs.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index45, 'file:///node_modules/@pnp/sp/sharing/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(item7, 'file:///node_modules/@pnp/sp/sharing/item.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types39, 'file:///node_modules/@pnp/sp/sharing/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web14, 'file:///node_modules/@pnp/sp/sharing/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index46, 'file:///node_modules/@pnp/sp/site-designs/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types40, 'file:///node_modules/@pnp/sp/site-designs/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web15, 'file:///node_modules/@pnp/sp/site-designs/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index47, 'file:///node_modules/@pnp/sp/site-groups/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types41, 'file:///node_modules/@pnp/sp/site-groups/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web16, 'file:///node_modules/@pnp/sp/site-groups/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index48, 'file:///node_modules/@pnp/sp/site-scripts/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list9, 'file:///node_modules/@pnp/sp/site-scripts/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types42, 'file:///node_modules/@pnp/sp/site-scripts/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web17, 'file:///node_modules/@pnp/sp/site-scripts/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index49, 'file:///node_modules/@pnp/sp/site-users/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types43, 'file:///node_modules/@pnp/sp/site-users/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web18, 'file:///node_modules/@pnp/sp/site-users/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index50, 'file:///node_modules/@pnp/sp/sites/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types44, 'file:///node_modules/@pnp/sp/sites/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index51, 'file:///node_modules/@pnp/sp/social/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types45, 'file:///node_modules/@pnp/sp/social/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(sphttpclient1, 'file:///node_modules/@pnp/sp/sphttpclient.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(splibconfig1, 'file:///node_modules/@pnp/sp/splibconfig.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index52, 'file:///node_modules/@pnp/sp/sputilities/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types46, 'file:///node_modules/@pnp/sp/sputilities/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index53, 'file:///node_modules/@pnp/sp/subscriptions/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list10, 'file:///node_modules/@pnp/sp/subscriptions/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types47, 'file:///node_modules/@pnp/sp/subscriptions/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index54, 'file:///node_modules/@pnp/sp/taxonomy/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types48, 'file:///node_modules/@pnp/sp/taxonomy/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(telemetry1, 'file:///node_modules/@pnp/sp/telemetry.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types49, 'file:///node_modules/@pnp/sp/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index55, 'file:///node_modules/@pnp/sp/user-custom-actions/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list11, 'file:///node_modules/@pnp/sp/user-custom-actions/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(site3, 'file:///node_modules/@pnp/sp/user-custom-actions/site.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types50, 'file:///node_modules/@pnp/sp/user-custom-actions/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(web19, 'file:///node_modules/@pnp/sp/user-custom-actions/web.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(escapeQueryStrValue1, 'file:///node_modules/@pnp/sp/utils/escapeQueryStrValue.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(extractweburl1, 'file:///node_modules/@pnp/sp/utils/extractweburl.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(filenames1, 'file:///node_modules/@pnp/sp/utils/file-names.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(metadata1, 'file:///node_modules/@pnp/sp/utils/metadata.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(objectToSPKeyValueCollection1, 'file:///node_modules/@pnp/sp/utils/objectToSPKeyValueCollection.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(toabsoluteurl1, 'file:///node_modules/@pnp/sp/utils/toabsoluteurl.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(toResourcePath1, 'file:///node_modules/@pnp/sp/utils/toResourcePath.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index56, 'file:///node_modules/@pnp/sp/views/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(list12, 'file:///node_modules/@pnp/sp/views/list.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types51, 'file:///node_modules/@pnp/sp/views/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(file2, 'file:///node_modules/@pnp/sp/webparts/file.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index57, 'file:///node_modules/@pnp/sp/webparts/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types52, 'file:///node_modules/@pnp/sp/webparts/types.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(index58, 'file:///node_modules/@pnp/sp/webs/index.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(types53, 'file:///node_modules/@pnp/sp/webs/types.d.ts');
////#endregion
// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (/*moduleId: string, label: string*/) {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/'
        };
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.js');`
        )}`;
    }
};

//validation settings
// monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
//     noSemanticValidation: false,
//     noSyntaxValidation: false
// });

// compiler options
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES5,
    allowNonTsExtensions: true
});

monaco.languages.typescript.typescriptDefaults.addExtraLib(legacy, 'file:///node_modules/@types/jquery/legacy.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(misc, 'file:///node_modules/@types/jquery/misc.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(jqueryStaticDef, 'file:///node_modules/@types/jquery/jQueryStatic.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(jqueryDef, 'file:///node_modules/@types/jquery/jQuery.d.ts');

monaco.languages.typescript.typescriptDefaults.addExtraLib(sp, 'ts:filename/mysp.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tmp, 'file:///node_modules/@types/spexplorerjs.d.ts');

// monaco.languages.typescript.typescriptDefaults.addExtraLib("declare module 'test/file1' { export interface Test {} }", 'file:///node_modules/@types/test/file1.d.ts'); 
//monaco.languages.typescript.typescriptDefaults.addExtraLib( `    `, 'inmemory://model/test7.d.ts');

// var internalModelUrl = 'file:///internal.tsx';
export class MyMonacoEditor {
    modelName: string;
    private internalModelUrl: string;
    constructor(elemorId: string | HTMLElement, type: string, value: string, modelName?: string) {

        var elem: HTMLElement;
        if (typeof elemorId === 'string')
            elem = document.getElementById(elemorId);
        else elem = elemorId;

        this.modelName = modelName || 'main';
        this.internalModelUrl = `file:///internal${this.modelName}.tsc`;
        var model = monaco.editor.createModel(value, type, monaco.Uri.parse(`file:///${this.modelName}.tsx`));

        this.editor = monaco.editor.create(elem, { model: model, automaticLayout: true });

        this.internalModel = monaco.editor.createModel(value, type, monaco.Uri.parse(this.internalModelUrl));
        monaco.languages.typescript.getTypeScriptWorker().then((worker) => {
            worker(this.internalModel.uri).then((client) => {
                this.tsproxy = client;
            });
        });
        // Explanation:
        // Press F1 (Alt-F1 in Edge) => the action will appear and run if it is enabled
        // Press Ctrl-F10 => the action will run if it is enabled
        // Press Chord Ctrl-K, Ctrl-M => the action will run if it is enabled

        this.editor.addAction({
            id: 'format',
            label: 'Format',
            keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_F,],
            precondition: null,
            keybindingContext: null,
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 1.5,
            run: function (ed) {
                ed.getAction('editor.action.formatDocument').run();
                return null;
            }
        });
        this.editor.addAction({
            // An unique identifier of the contributed action.
            id: 'runIt',
            // A label of the action that will be presented to the user.
            label: 'Run',
            // An optional array of keybindings for the action.
            keybindings: [
                monaco.KeyMod.Alt | monaco.KeyCode.KEY_R,
                // chord
                //monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_M)
            ],
            // A precondition for this action.
            precondition: null,
            // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
            keybindingContext: null,
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 1.5,
            // Method that will be executed when the action is triggered.
            // @param editor The editor instance is passed in as a convinience
            run: function (ed) {
                $(elem).trigger('run', ed.getValue());
                return null;
            }
        });
    }
    internalModel: monaco.editor.ITextModel;
    tsproxy: monaco.languages.typescript.TypeScriptWorker;
    editor: monaco.editor.IStandaloneCodeEditor;

    Code(val?: string) {
        if (val)
            this.editor.setValue(val);
        return this.editor.getValue();
    }
    setValue(val: string) {
        this.editor.setValue(val);
    }
    setTarget(target: string) {

        var _target = monaco.languages.typescript.ScriptTarget.ES5;

        if (target.search('ES2015') > -1) {
            _target = monaco.languages.typescript.ScriptTarget.ES2015;
        }
        if (target.search('ES2017') > -1) {
            _target = monaco.languages.typescript.ScriptTarget.ES2017;
        }
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: _target,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            allowNonTsExtensions: true
        });
    }
    getValue(): JQuery.Promise<string> {
        var p1 = $.Deferred();
        var me = this;
        var rawCode = this.editor.getValue();
        rawCode = rawCode.replace('import * as pnp', '//import * as pnp');
        this.internalModel.setValue(rawCode);
        this.tsproxy.getEmitOutput(me.internalModelUrl).then((r: any) => {
            console.log({ 'gotvalue': r });
            p1.resolve(r.outputFiles[0].text);
        });

        return p1.promise();
    }
}