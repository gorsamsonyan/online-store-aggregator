#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1bec1b0716f287ad292ba9280c8c72968342b106"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Store_ViewOrder), @"mvc.1.0.view", @"/Views/Store/ViewOrder.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Store/ViewOrder.cshtml", typeof(AspNetCore.Views_Store_ViewOrder))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\_ViewImports.cshtml"
using WeedKarma;

#line default
#line hidden
#line 2 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\_ViewImports.cshtml"
using WeedKarma.Models;

#line default
#line hidden
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
using Weed.Karma.Models.DeliveryModels;

#line default
#line hidden
#line 2 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
using Weed.Karma.Enums;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1bec1b0716f287ad292ba9280c8c72968342b106", @"/Views/Store/ViewOrder.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c8c9a6b4ecc14a6058ca7e79d215e492e38ed5", @"/Views/_ViewImports.cshtml")]
    public class Views_Store_ViewOrder : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<OrderDeliveryViewModel>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/bootstrap.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/store-page.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/orders.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/signalr.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 4 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
  
    Layout = null;
    var NotificationStatusesCount = Enum.GetNames(typeof(NotificationStatuses)).Length;

#line default
#line hidden
            BeginContext(219, 37, true);
            WriteLiteral("\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            EndContext();
            BeginContext(256, 1344, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b1066363", async() => {
                BeginContext(262, 1331, true);
                WriteLiteral(@"
    <meta charset=""UTF-8"">
    <title>Store</title>
    <meta name=""viewport"" content=""width=device-width, initial-scale=1, shrink-to-fit=no"" />
    <link rel=""stylesheet"" href=""https://use.fontawesome.com/releases/v5.6.1/css/all.css""
          integrity=""sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"" crossorigin=""anonymous"">
    <link rel=""stylesheet"" href=""/businessDashboard/styles/main-respons.css"">
    <!--<link rel=""stylesheet"" href=""styles/global-styles.css"">-->
    <link rel=""stylesheet"" href=""/businessDashboard/styles/bootstrap.min.css"">
    <link rel=""stylesheet"" href=""/businessDashboard/styles/global-styles.css"">

    <!--<link rel=""stylesheet"" href=""styles/form-styles.css"">-->
    <link rel=""stylesheet"" href=""/businessDashboard/styles/pages/store-page.css"">
    <link rel=""stylesheet"" href=""/businessDashboard/styles/pages/orders.css"">
    <link rel=""stylesheet"" href=""//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"">
    <link rel=""stylesheet"" href=""/bu");
                WriteLiteral(@"sinessDashboard/styles/pages/contact-information.css"">
    <link rel=""stylesheet"" href=""/businessDashboard/styles/pages/store-page.css"">
    <link rel=""stylesheet"" href=""/businessDashboard/styles/pages/store-info.css"">
    <link rel=""stylesheet"" href=""/businessDashboard/styles/pages/all-stores.css"">

");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1600, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(1602, 7156, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b1068976", async() => {
                BeginContext(1608, 2122, true);
                WriteLiteral(@"
    <div class=""page-wrapper chiller-theme toggled"">
        <!--header block-->
        <div class=""header-block"">


            <div class=""navbar-header d-flex justify-content-between align-items-center"">

                <a id=""show-sidebar"" class=""btn-lg left-menu-open-icon p-0 "" href=""#"">
                    <i class=""fas fa-bars""></i>
                </a>
                <a class=""header-logo"">
                    <img src=""/img/logo.svg"" width=""50px"" alt="""">
                    <div class=""logo-text"">Weed Karma</div>
                </a>
                <div class=""header-search"">
                    <div>
                        <div class=""input-group"">
                            <input type=""text"" class=""form-control search-menu"" placeholder=""Search..."">
                            <div class=""header-search-icon"">

                                <i class=""fa fa-search"" aria-hidden=""true""></i>

                            </div>
                        </div>
            ");
                WriteLiteral(@"        </div>
                </div>
                <div class=""header-date-block"">
                    <div class=""date-title"">Date</div>
                    <div class=""date""></div>

                </div>

                <div class=""header-user-name""> User Name</div>
                <div class=""header-right-block"">
                    <a href=""#"">
                        <img class=""header-right-block-icon"" src=""/img/header-icons/notification.png"" alt="""">
                        <span class=""badge badge-pill notification-count "">3</span>
                    </a>
                    <a href=""#"">
                        <img class=""header-right-block-icon"" src=""/img/header-icons/mail.png"" alt="""">
                        <span class=""badge badge-pill mail-count"">7</span>
                    </a>

                    <a href=""#"">
                        <img class=""header-right-block-icon"" src=""/img/header-icons/logout.png"" alt="""">
                    </a>
                </div>
     ");
                WriteLiteral("       </div>\r\n        </div>\r\n        <!--header block End-->\r\n\r\n        ");
                EndContext();
                BeginContext(3731, 39, false);
#line 84 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
   Write(await Html.PartialAsync("_AdminHeader"));

#line default
#line hidden
                EndContext();
                BeginContext(3770, 44, true);
                WriteLiteral("\r\n\r\n        <!--sidebar-wrapper-->\r\n        ");
                EndContext();
                BeginContext(3815, 46, false);
#line 87 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
   Write(await Html.PartialAsync("_StoreAdminLeftMenu"));

#line default
#line hidden
                EndContext();
                BeginContext(3861, 1857, true);
                WriteLiteral(@"


        <main class=""page-content margin-top"">
            <div class=""container-fluid store-body"">

                <h1 class=""section-title"">
                    Managment Information
                </h1>
                <div class=""body-section"">

                    <div class=""ibox-content"">

                        <table class=""footable table table-stripped toggle-arrow-tiny footable-loaded tablet breakpoint"" data-page-size=""15"">
                            <thead>
                                <tr>

                                    <th class=""footable-visible footable-sortable footable-first-column"">Cart ID<span class=""footable-sort-indicator""></span></th>
                                    <th data-hide=""phone"" class=""footable-sortable footable-visible"" style="""">Address<span class=""footable-sort-indicator""></span></th>
                                    <th data-hide=""phone"" class=""footable-sortable footable-visible"" style="""">Phone Number<span class=""footable-sort-indica");
                WriteLiteral(@"tor""></span></th>
                                    <th data-hide=""phone"" class=""footable-sortable footable-visible"" style="""">Order date<span class=""footable-sort-indicator""></span></th>
                                    <th data-hide=""phone,tablet"" class=""footable-sortable"">Status<span class=""footable-sort-indicator""></span></th>
                                    <th data-hide=""phone"" class=""footable-sortable footable-visible"" style="""">New Status<span class=""footable-sort-indicator""></span></th>
                                    <th class=""text-right footable-visible footable-sortable footable-last-column"">Action<span class=""footable-sort-indicator""></span></th>

                                </tr>
                            </thead>
                            <tbody>
                                ");
                EndContext();
                BeginContext(5718, 2816, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b10614397", async() => {
                    BeginContext(5738, 72, true);
                    WriteLiteral("\r\n                                    <input type=\"hidden\" name=\"CartId\"");
                    EndContext();
                    BeginWriteAttribute("value", " value=\"", 5810, "\"", 5852, 1);
#line 116 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
WriteAttributeValue("", 5818, Model.Select(s=>s.CartId).First(), 5818, 34, false);

#line default
#line hidden
                    EndWriteAttribute();
                    BeginContext(5853, 75, true);
                    WriteLiteral(" />\r\n                                    <input type=\"hidden\" name=\"ItemId\"");
                    EndContext();
                    BeginWriteAttribute("value", " value=\"", 5928, "\"", 5966, 1);
#line 117 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
WriteAttributeValue("", 5936, Model.Select(s=>s.Id).First(), 5936, 30, false);

#line default
#line hidden
                    EndWriteAttribute();
                    BeginContext(5967, 80, true);
                    WriteLiteral(" />\r\n                                    <tr class=\"footable-even\" style=\"\">\r\n\r\n");
                    EndContext();
#line 120 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                         foreach (var item in Model)
                                        {


#line default
#line hidden
                    BeginContext(6162, 211, true);
                    WriteLiteral("                                            <td class=\"footable-visible \">\r\n                                                <span class=\"footable-toggle\"></span>\r\n                                                ");
                    EndContext();
                    BeginContext(6374, 11, false);
#line 125 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                           Write(item.CartId);

#line default
#line hidden
                    EndContext();
                    BeginContext(6385, 185, true);
                    WriteLiteral("\r\n                                            </td>\r\n                                            <td class=\"footable-visible\" style=\"\">\r\n                                                ");
                    EndContext();
                    BeginContext(6571, 12, false);
#line 128 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                           Write(item.Address);

#line default
#line hidden
                    EndContext();
                    BeginContext(6583, 3, true);
                    WriteLiteral(" , ");
                    EndContext();
                    BeginContext(6587, 9, false);
#line 128 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                           Write(item.Home);

#line default
#line hidden
                    EndContext();
                    BeginContext(6596, 3, true);
                    WriteLiteral(" / ");
                    EndContext();
                    BeginContext(6600, 10, false);
#line 128 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                                        Write(item.Floor);

#line default
#line hidden
                    EndContext();
                    BeginContext(6610, 185, true);
                    WriteLiteral("\r\n                                            </td>\r\n                                            <td class=\"footable-visible\" style=\"\">\r\n                                                ");
                    EndContext();
                    BeginContext(6796, 16, false);
#line 131 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                           Write(item.PhoneNumber);

#line default
#line hidden
                    EndContext();
                    BeginContext(6812, 185, true);
                    WriteLiteral("\r\n                                            </td>\r\n                                            <td class=\"footable-visible\" style=\"\">\r\n                                                ");
                    EndContext();
                    BeginContext(6998, 16, false);
#line 134 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                           Write(item.CreatedDate);

#line default
#line hidden
                    EndContext();
                    BeginContext(7014, 53, true);
                    WriteLiteral("\r\n                                            </td>\r\n");
                    EndContext();
                    BeginContext(7069, 167, true);
                    WriteLiteral("                                            <td class=\"footable-visible\" style=\"\">\r\n                                                <span class=\"label label-primary\"> ");
                    EndContext();
                    BeginContext(7237, 75, false);
#line 138 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                                              Write(GetNotificationStatus.GetNotificationStatuses(Convert.ToInt32(item.Status)));

#line default
#line hidden
                    EndContext();
                    BeginContext(7312, 239, true);
                    WriteLiteral("</span>\r\n                                            </td>\r\n                                            <td class=\"footable-visible\" style=\"\">\r\n                                                <select class=\"input-select\" name=\"NewOrder\">\r\n");
                    EndContext();
#line 142 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                     for (int i = 0; i < NotificationStatusesCount; i++)
                                                    {

#line default
#line hidden
                    BeginContext(7712, 56, true);
                    WriteLiteral("                                                        ");
                    EndContext();
                    BeginContext(7768, 77, false);
                    __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b10621225", async() => {
                        BeginContext(7788, 48, false);
#line 144 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                                      Write(GetNotificationStatus.GetNotificationStatuses(i));

#line default
#line hidden
                        EndContext();
                    }
                    );
                    __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                    __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                    BeginWriteTagHelperAttribute();
#line 144 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                           WriteLiteral(i);

#line default
#line hidden
                    __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                    __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = __tagHelperStringValueBuffer;
                    __tagHelperExecutionContext.AddTagHelperAttribute("value", __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                    await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                    if (!__tagHelperExecutionContext.Output.IsContentModified)
                    {
                        await __tagHelperExecutionContext.SetOutputContentAsync();
                    }
                    Write(__tagHelperExecutionContext.Output);
                    __tagHelperExecutionContext = __tagHelperScopeManager.End();
                    EndContext();
                    BeginContext(7845, 2, true);
                    WriteLiteral("\r\n");
                    EndContext();
#line 145 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                                    }

#line default
#line hidden
                    BeginContext(7902, 505, true);
                    WriteLiteral(@"                                                </select>
                                            </td>
                                            <td class=""text-right footable-visible footable-last-column"">
                                                <div class=""btn-group"">
                                                    <button class=""btn-white btn btn-xs"">Checkout</button>
                                                </div>
                                            </td>
");
                    EndContext();
#line 153 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\ViewOrder.cshtml"
                                        }

#line default
#line hidden
                    BeginContext(8450, 77, true);
                    WriteLiteral("                                    </tr>\r\n\r\n                                ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(8534, 217, true);
                WriteLiteral("\r\n\r\n\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </main>\r\n        <!--page-content\"-->\r\n\r\n\r\n    </div>\r\n\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(8758, 333, true);
            WriteLiteral(@"

</html>
<script src=""https://code.jquery.com/jquery-3.3.1.min.js""
        integrity=""sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=""
        crossorigin=""anonymous""></script>
<!--<script src=""https://code.jquery.com/jquery-1.12.4.js""></script>-->
<script src=""https://code.jquery.com/ui/1.12.1/jquery-ui.js""></script>
");
            EndContext();
            BeginContext(9091, 68, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b10627380", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(9159, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(9161, 65, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b10628560", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(9226, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(9228, 61, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b10629740", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(9289, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(9291, 66, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1bec1b0716f287ad292ba9280c8c72968342b10630920", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(9357, 78, true);
            WriteLiteral("\r\n\r\n<script src=\"/businessDashboard/scripts/contact-info.js\"></script>\r\n\r\n\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<OrderDeliveryViewModel>> Html { get; private set; }
    }
}
#pragma warning restore 1591