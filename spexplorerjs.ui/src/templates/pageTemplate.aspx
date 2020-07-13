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

</head>
<body>
<form id="form1" runat="server">
  <SharePoint:FormDigest runat="server"/>
	{{#each files.js}}
    <script src="{{this}}" type='text/javascript'></script>
	{{/each}}
</form>   	
</body>
</html>