#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_AdminHeader.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e99a8de2a491662988f18a85822bcb23c81adf64"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__AdminHeader), @"mvc.1.0.view", @"/Views/Shared/_AdminHeader.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/_AdminHeader.cshtml", typeof(AspNetCore.Views_Shared__AdminHeader))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e99a8de2a491662988f18a85822bcb23c81adf64", @"/Views/Shared/_AdminHeader.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c8c9a6b4ecc14a6058ca7e79d215e492e38ed5", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__AdminHeader : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/img/logo.svg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("width", new global::Microsoft.AspNetCore.Html.HtmlString("50px"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("header-right-block-icon"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/img/header-icons/notification.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/img/header-icons/logout.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/signalr.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 1516, true);
            WriteLiteral(@"<style>
    #thankYouPopup {
        display: none;
        overflow: auto;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 22;
        background-color: rgba(50, 50, 50, 0.5);
    }

        #thankYouPopup .thank-you-popup-body {
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 18px;
            -webkit-border-raius: 18px;
            -moz-border-radius: 18px;
            width: 100%;
            max-width: 600px;
            position: absolute;
            padding: 25px;
            display: block;
            z-index: 2500;
            background-color: #f7f7f7;
        }

        #thankYouPopup .thank-you-text {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            color: #038423;
        }
</style>
<div id=""thankYouPopup"">
    <div class=""thank-you-p");
            WriteLiteral(@"opup-body"">
        <div class=""thank-you-text"">
            You Have <br />
            New Order <a href="""">Click</a> to View ...
        </div>
    </div>
</div>
<div class=""header-block"">

    <div class=""navbar-header d-flex justify-content-between align-items-center"">

        <a id=""show-sidebar"" class=""btn-lg left-menu-open-icon p-0 "" href=""#"">
            <i class=""fas fa-bars""></i>
        </a>
        <a class=""header-logo"" href=""/"" target=""_blank"">
            ");
            EndContext();
            BeginContext(1516, 64, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "e99a8de2a491662988f18a85822bcb23c81adf647405", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1580, 670, true);
            WriteLiteral(@"
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
            </div>
        </div>
        <div class=""header-date-block"">
            <div class=""date-title"">Date</div>
            <div class=""date""></div>

        </div>

        <div class=""header-user-name"">");
            EndContext();
            BeginContext(2251, 18, false);
#line 75 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_AdminHeader.cshtml"
                                 Write(User.Identity.Name);

#line default
#line hidden
            EndContext();
            BeginContext(2269, 92, true);
            WriteLiteral("</div>\r\n        <div class=\"header-right-block\">\r\n            <a href=\"#\">\r\n                ");
            EndContext();
            BeginContext(2361, 104, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "e99a8de2a491662988f18a85822bcb23c81adf649905", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2465, 178, true);
            WriteLiteral("\r\n                <span class=\"badge badge-pill notification-count \" id=\"notificationCount\">0</span>\r\n            </a>\r\n\r\n            <a href=\"/Account/LogOut\">\r\n                ");
            EndContext();
            BeginContext(2643, 98, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "e99a8de2a491662988f18a85822bcb23c81adf6411434", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2741, 231, true);
            WriteLiteral("\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"\r\n        integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n        crossorigin=\"anonymous\"></script>\r\n");
            EndContext();
            BeginContext(2972, 66, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e99a8de2a491662988f18a85822bcb23c81adf6413023", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3038, 841, true);
            WriteLiteral(@"
<script>
    // SignalR bootstrap
    var a = 0;
    var updaterConnection;
    openConnection();

    function openConnection() {
        $(""#msg"").html(""Preparing..."");
        updaterConnection = new signalR.HubConnection(""/orderHub"");
        updaterConnection
            .start();
    };

</script>
<script>
    updaterConnection.on(""NotificationCount"",
        (notificationCount) => {
            $(""#notificationCount"").empty();
            $(""#notificationCount"").append(notificationCount);
            $(""#thankYouPopup"").show();
        });
</script>
<script>
    $(""#notificationCount"").on(""click"",
        function () {
            if (parseInt($(this).text()) != 0) {
                console.log(parseInt($(this).text()))
                location.reload();
            }
        });
</script>
");
            EndContext();
            BeginContext(3880, 43, false);
#line 123 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_AdminHeader.cshtml"
Write(await Component.InvokeAsync("NToastNotify"));

#line default
#line hidden
            EndContext();
            BeginContext(3923, 2, true);
            WriteLiteral("\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591