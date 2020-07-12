<!DOCTYPE html>
<%@ Page Language="C#" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=11" />
	<title>Document title</title>
	<link href='/app3/css/ui.139f21ad2de9309a7c30.css' rel='stylesheet' />
	<link href='/app3/css/page1.139f21ad2de9309a7c30.css' rel='stylesheet' />

	<SharePoint:ScriptLink runat="server" name="microsoftajax.js"/>
	<SharePoint:ScriptLink runat="server" name="core.js"/>	
	<SharePoint:ScriptLink runat="server" name="sp.js" />
</head>
<body>
<form id="form1" runat="server">
  <SharePoint:FormDigest runat="server"/>
    <script src="/app3/ui.js" type='text/javascript'></script>
    <script src="/app3/page1.js" type='text/javascript'></script>
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