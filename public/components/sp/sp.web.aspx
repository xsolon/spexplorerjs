<%-- _lcid="1033" _version="16.0.3722" _dal="1" --%>
<%-- _LocalBinding --%>

<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint" %>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
   sp.web.js 
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <meta name="GENERATOR" content="Microsoft SharePoint" />
    <meta name="ProgId" content="SharePoint.WebPartPage.Document" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="CollaborationServer" content="SharePoint Team Web Site" />
    <script type='text/javascript'>
        var navBarHelpOverrideKey = "WSSEndUser";
    </script>
    <style>
        body #s4-leftpanel {
            display: none;
        }

        .s4-ca {
            margin-left: 0px;
        }
    </style>

</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderSearchArea" runat="server">
    <SharePoint:DelegateControl runat="server"
        ControlId="SmallSearchInputBox" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageDescription" runat="server">
    <SharePoint:ProjectProperty Property="Description" runat="server" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div>
        <div class="spexp">
            <div data-widget="xSpExplorer">
            </div>
        </div>

        <script type="text/javascript" https://spexplorerjs.azurewebsites.net/components/sp/sp.web></script>

    </div>
</asp:Content>
