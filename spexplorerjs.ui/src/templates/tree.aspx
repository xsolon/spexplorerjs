<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="WpNs0" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
    SPExplorerJS
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <meta name="GENERATOR" content="Microsoft SharePoint" />
    <meta name="ProgId" content="SharePoint.WebPartPage.Document" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="CollaborationServer" content="SharePoint Team Web Site" />

    <SharePoint:scriptblock runat="server">
        var navBarHelpOverrideKey = "WSSEndUser";
    </SharePoint:scriptblock>
    <SharePoint:styleblock runat="server">
        body #s4-leftpanel {
        display:none;
        }
        .s4-ca {
        margin-left:0px;
        }
        #contentBox{
        margin-left:5px;
        }
        #sideNavBox{
        display:none;
        }
        #suiteBarDelta{
        display:none;
        }
        #s4-titlerow{
        display:none;

        }
    </SharePoint:styleblock>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderSearchArea" runat="server">
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageDescription" runat="server">
    Console
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderLeftNavBar" runat="server">
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div id="ui"></div>
    <script type='text/javascript' src='tree.js'></script>
</asp:Content>

        