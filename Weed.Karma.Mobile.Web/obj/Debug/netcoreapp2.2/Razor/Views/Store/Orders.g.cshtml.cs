#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Orders.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1a159e73ba5467b8b98c868c89e69345c9304ff6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Store_Orders), @"mvc.1.0.view", @"/Views/Store/Orders.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Store/Orders.cshtml", typeof(AspNetCore.Views_Store_Orders))]
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
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\_ViewImports.cshtml"
using Weed.Karma.Mobile.Web;

#line default
#line hidden
#line 2 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\_ViewImports.cshtml"
using WeedKarma.Models;

#line default
#line hidden
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Orders.cshtml"
using Weed.Karma.Models.CartItems;

#line default
#line hidden
#line 2 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Orders.cshtml"
using Weed.Karma.Enums;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1a159e73ba5467b8b98c868c89e69345c9304ff6", @"/Views/Store/Orders.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"691b947407e53951e13e28c8b3078d525b85fbf3", @"/Views/_ViewImports.cshtml")]
    public class Views_Store_Orders : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<CartItemsViewModelForStore>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 4 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Orders.cshtml"
  
    Layout = null;

#line default
#line hidden
            BeginContext(136, 37, true);
            WriteLiteral("\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            EndContext();
            BeginContext(173, 1005, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff66248", async() => {
                BeginContext(179, 992, true);
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
            BeginContext(1178, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(1180, 6466, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff68469", async() => {
                BeginContext(1186, 2122, true);
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
                BeginContext(3309, 39, false);
#line 80 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Orders.cshtml"
   Write(await Html.PartialAsync("_AdminHeader"));

#line default
#line hidden
                EndContext();
                BeginContext(3348, 44, true);
                WriteLiteral("\r\n\r\n        <!--sidebar-wrapper-->\r\n        ");
                EndContext();
                BeginContext(3393, 46, false);
#line 83 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Orders.cshtml"
   Write(await Html.PartialAsync("_StoreAdminLeftMenu"));

#line default
#line hidden
                EndContext();
                BeginContext(3439, 2089, true);
                WriteLiteral(@"


        <main class=""page-content margin-top"">
            <div class=""container-fluid store-body"">

                <h1 class=""section-title"" id=""msg"">
                    Orders
                </h1>
                <div class=""body-section"">


                    <div class=""container"">
                        <ul class=""row order-menu"">
                            <li class=""order-menu-item""><a class=""order-menu-item-link dark-brown-button"">Non Confirm</a></li>
                            <li class=""order-menu-item"">
                                <a class=""order-menu-item-link light-green-button"">
                                    New order (<span class=""new-order-count"">3</span>)
                                </a>
                            </li>
                            <li class=""order-menu-item"">
                                <a class=""order-menu-item-link green-button"">
                                    Are Waiting (<span class=""are-waiting-count"">3</span>)
   ");
                WriteLiteral(@"                             </a>
                            </li>
                            <li class=""order-menu-item"">
                                <a class=""order-menu-item-link light-green-button"">
                                    On Way (<span class=""order-on-way-count"">3</span>)
                                </a>
                            </li>
                            <li class=""order-menu-item"">
                                <a class=""order-menu-item-link red-button"">
                                    Closed (<span class=""order-closed-count"">3</span>)
                                </a>
                            </li>
                            <li class=""order-menu-item"">
                                <a class=""order-menu-item-link dark-red-button"">
                                    Canceled (<span class=""order-canceled-count"">3</span>)
                                </a>
                            </li>
                            <li class=""order-menu");
                WriteLiteral("-item\">\r\n                                ");
                EndContext();
                BeginContext(5528, 153, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff614166", async() => {
                    BeginContext(5544, 130, true);
                    WriteLiteral("\r\n\r\n                                    <input id=\"datepicker\" type=\"text\" value=\"04/11/2019\">\r\n\r\n                                ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(5681, 1958, true);
                WriteLiteral(@"
                            </li>
                            <li class=""order-menu-item""><a class=""order-menu-item-link dark-brown-button"">period  </a></li>
                        </ul>
                        <div class="" row order-table-block"">
                            <ul class=""p-0 order-table"" id=""CartItems"">
                                <li class=""order-table-header d-flex align-items-center"">
                                    <a class=""order-number"" href=""#"">N </a>
                                    <a class=""order-status"" href=""#"">Status </a>
                                    <a class=""order-time"" href=""#"">Time </a>
                                    <a class=""order-address"" href=""#"">address </a>
                                    <a class=""order-currier"" href=""#"">currier </a>
                                    <a class=""order-client"" href=""#"">client </a>
                                    <a class=""order-comment"" href=""#"">comment </a>
                                  ");
                WriteLiteral(@"  <a class=""order-list"" href=""#"">order list </a>
                                    <a class=""order-amount"" href=""#"">amount </a>
                                    <a class=""order-amount"" href=""#"">Quantity </a>
                                    <a class=""order-amount"" href=""#"">amount </a>
                                </li>
                            </ul>
                            <div class=""order-signal-block"">

                                <div class=""title"">Signal</div>
                                <div class=""signal-button"">PickUp</div>
                                <div class=""signal-button"">Delivery</div>
                                <div class=""signal-button"">B22 OFFer</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
        <!--page-content""-->


    </div>

");
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
            BeginContext(7646, 436, true);
            WriteLiteral(@"

</html>
<script src=""https://code.jquery.com/jquery-3.3.1.min.js""
        integrity=""sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=""
        crossorigin=""anonymous""></script>
<!--<script src=""https://code.jquery.com/jquery-1.12.4.js""></script>-->
<script src=""https://code.jquery.com/ui/1.12.1/jquery-ui.js""></script>
<script>
    $(function () {
        $(""#datepicker"").datepicker({
        });
    });
</script>
");
            EndContext();
            BeginContext(8082, 68, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff619240", async() => {
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
            BeginContext(8150, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(8152, 65, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff620420", async() => {
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
            BeginContext(8217, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(8219, 61, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff621600", async() => {
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
            BeginContext(8280, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(8282, 66, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1a159e73ba5467b8b98c868c89e69345c9304ff622780", async() => {
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
            BeginContext(8348, 2710, true);
            WriteLiteral(@"
<script>

   
</script>
<script>
    // SignalR bootstrap
    var a = 0;
    var updaterConnection;
    openConnection();
    
    function openConnection() {
        $(""#msg"").html(""Preparing..."");
        updaterConnection = new signalR.HubConnection(""/orderHub"");
        updaterConnection
            .start()
            .then(() => {
             
                updaterConnection.invoke(""Order"", 2);
              
            })
            .catch(() => {
                alert(""Error while establishing connection"");
            });
    };

</script>

<script>
    updaterConnection.on(""UpdateCart"",
        (model) => {
            $(""#CartItems"").empty();
            model.forEach(function (i) {

                $(""#CartItems"").append('<li class=""order-table-item d-flex align-items-center"" >' +
                    ' <a class=""order-number"" href=""#""> ' +
                    '<span> ' + i.id + '</span> ' +
                    '</a> ' +
                    '<a class=""or");
            WriteLiteral(@"der-status"" href=""#""> ' +
                    '<span>' + i.orderStatus + '</span> ' +
                    '</a>' +
                    '<a class=""order-time"" href=""#""> ' +
                    '<span>' + i.orderTime + '</span> ' +
                    '</a>' +
                    ' <a class=""order-address"" href=""#""> ' +
                    '<span> la, 485 </span>' +
                    ' </a> ' +
                    '<a class=""order-currier"" href=""#""> ' +
                    '<span> aram </span> ' +
                    '</a>' +
                    ' <a class=""order-client"" href=""#"">' +
                    ' <span> ashot </span>' +
                    ' </a> ' +
                    '<div class=""order-comment"" href=""#"">' +
                    ' <form action=""""> ' +
                    '<label>' +
                    ' <textarea type=""text"" class=""comment-input""></textarea> ' +
                    '</label> ' +
                    '</form>' +
                    ' </div>' +
                  ");
            WriteLiteral(@"  '<a class=""order-list"" href=""#""> ' +
                    '<span> ' + i.storeProduct.productName + '  </span>' +
                    ' </a> ' +
                    '<a class=""order-amount"" href=""#"">' +
                    ' <span> ' + i.totalPrice + ' </span>' +
                    ' </a> ' +
                    '<a class=""order-amount"" href=""#""> ' +
                    '<span> ' + i.quantity + ' </span> ' +
                    '</a> ' +
                    '<a class=""order-amount"" href=""/Store/ViewOrder/'+i.id+'"">' +
                    ' <span> View </span>' +
                    ' </a></li>');

            });

        });
</script>
");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<CartItemsViewModelForStore>> Html { get; private set; }
    }
}
#pragma warning restore 1591