<!DOCTYPE html>
<%@ Page Language="C#" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=11" />
	<title>{{ title }}</title>
	{{#each files.css}}
	<link href='{{this}}' rel='stylesheet' />
	{{/each}}

	<SharePoint:ScriptLink runat="server" name="microsoftajax.js"/>
	<SharePoint:ScriptLink runat="server" name="core.js"/>	
	<SharePoint:ScriptLink runat="server" name="sp.js" />
</head>
<body>
<form id="form1" runat="server">
  <SharePoint:FormDigest runat="server"/>
	{{#each files.js}}
    <script src="{{this}}" type='text/javascript'></script>
	{{/each}}
	<SharePoint:ScriptBlock runat="server">
		//  jsom is ready // ExecuteOrDelayUntilScriptLoaded(function(){},'sp.js')
		var ctx = SP.ClientContext.get_current();
		var web = ctx.get_web();
		ctx.load(web);
		ctx.executeQueryAsync(function(){
			console.log(web.get_title());
		});
	</SharePoint:ScriptBlock>	
</form>   	
</body>
</html>