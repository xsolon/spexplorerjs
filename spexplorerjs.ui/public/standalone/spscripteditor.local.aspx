<!DOCTYPE html>
<%@ Page Language="C#" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=11" />
	<title>Test - JSOM</title>
	<SharePoint:ScriptLink runat="server" name="microsoftajax.js"/>
	<SharePoint:ScriptLink runat="server" name="core.js"/>	
	<SharePoint:ScriptLink runat="server" name="sp.js" />
	<SharePoint:ScriptLink name="clienttemplates.js" runat="server"  />
    <SharePoint:ScriptLink name="clientforms.js" runat="server"  />
	<SharePoint:ScriptLink name="clientpeoplepicker.js" runat="server" />
	<SharePoint:ScriptLink name="autofill.js" runat="server" />
	<link href='/_layouts/15/1033/styles/Themable/corev15.css' rel='stylesheet' />
</head>
<body>
<form id="form1" runat="server">
    <div id="ui"></div>
	<SharePoint:FormDigest runat="server"/>
    <script type='text/javascript' src='https://localhost:8443/js/spscripteditor.js'></script>
</form>   	
</body>
</html>