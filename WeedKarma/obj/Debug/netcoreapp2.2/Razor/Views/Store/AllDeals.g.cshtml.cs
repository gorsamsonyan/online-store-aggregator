#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7bb4c9808bc2162b3d472bd793e4491b03a730d1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Store_AllDeals), @"mvc.1.0.view", @"/Views/Store/AllDeals.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Store/AllDeals.cshtml", typeof(AspNetCore.Views_Store_AllDeals))]
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
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
using Weed.Karma.Models.DealModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7bb4c9808bc2162b3d472bd793e4491b03a730d1", @"/Views/Store/AllDeals.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c8c9a6b4ecc14a6058ca7e79d215e492e38ed5", @"/Views/_ViewImports.cshtml")]
    public class Views_Store_AllDeals : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<AllDealsViewModel>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/styles/main-respons.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/styles/bootstrap.min.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/styles/global-styles.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/styles/pages/store-page.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/styles/pages/store-products.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/styles/pages/all-stores.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/bootstrap.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/businessDashboard/scripts/store-page.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
  
    Layout = null;

#line default
#line hidden
            BeginContext(103, 37, true);
            WriteLiteral("\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            EndContext();
            BeginContext(140, 1014, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7bb4c9808bc2162b3d472bd793e4491b03a730d17305", async() => {
                BeginContext(146, 369, true);
                WriteLiteral(@"
    <meta charset=""UTF-8"">
    <title>All Deals</title>
    <meta name=""viewport"" content=""width=device-width, initial-scale=1, shrink-to-fit=no"" />
    <link rel=""stylesheet"" href=""https://use.fontawesome.com/releases/v5.6.1/css/all.css""
          integrity=""sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"" crossorigin=""anonymous"">
    ");
                EndContext();
                BeginContext(515, 74, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7bb4c9808bc2162b3d472bd793e4491b03a730d18068", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(589, 74, true);
                WriteLiteral("\r\n    <!--<link rel=\"stylesheet\" href=\"styles/global-styles.css\">-->\r\n    ");
                EndContext();
                BeginContext(663, 75, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7bb4c9808bc2162b3d472bd793e4491b03a730d19476", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(738, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(744, 75, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7bb4c9808bc2162b3d472bd793e4491b03a730d110809", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(819, 74, true);
                WriteLiteral("\r\n\r\n    <!--<link rel=\"stylesheet\" href=\"styles/form-styles.css\">-->\r\n    ");
                EndContext();
                BeginContext(893, 78, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7bb4c9808bc2162b3d472bd793e4491b03a730d112220", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(971, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(977, 82, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7bb4c9808bc2162b3d472bd793e4491b03a730d113554", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1059, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1065, 78, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7bb4c9808bc2162b3d472bd793e4491b03a730d114890", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1143, 4, true);
                WriteLiteral("\r\n\r\n");
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
            BeginContext(1154, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(1156, 3141, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7bb4c9808bc2162b3d472bd793e4491b03a730d117028", async() => {
                BeginContext(1162, 93, true);
                WriteLiteral("\r\n    <div class=\"page-wrapper chiller-theme toggled\">\r\n        <!--header block-->\r\n        ");
                EndContext();
                BeginContext(1256, 39, false);
#line 29 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
   Write(await Html.PartialAsync("_AdminHeader"));

#line default
#line hidden
                EndContext();
                BeginContext(1295, 45, true);
                WriteLiteral("\r\n        <!--header block End-->\r\n\r\n        ");
                EndContext();
                BeginContext(1341, 46, false);
#line 32 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
   Write(await Html.PartialAsync("_StoreAdminLeftMenu"));

#line default
#line hidden
                EndContext();
                BeginContext(1387, 405, true);
                WriteLiteral(@"


        <!--sidebar-wrapper-->


        <main class=""page-content margin-top"">
            <div class=""container-fluid store-body"">

                <h1 class=""section-title"">
                    Store Products
                </h1>
                <div class=""body-section"">

                    <div class=""products-block container"">

                        <ul class=""col-lg-12"">
");
                EndContext();
#line 49 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
                             if (Model.Count() <= 0)
                            {

#line default
#line hidden
                BeginContext(1877, 819, true);
                WriteLiteral(@"                                <center>
                                    <div class=""component text-component"" data-component-type=""text"">
                                        <ol start=""1"">
                                            <li><h4>No Deals</h4></li>
                                            <li><a href=""/Store/AllProducts"" target=""_blank"" class=""in-cell-link"">Go to All Products.</a></li>
                                            <li>Click the <strong>To Deal</strong> Button.</li>
                                            <li>Fill in all required fields.</li>
                                            <li>Click <strong>To Deal</strong>.</li>
                                        </ol>
                                    </div>

                                </center>
");
                EndContext();
#line 63 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
                            }
                            else
                            {
                                foreach (var item in Model)
                                {

#line default
#line hidden
                BeginContext(2888, 321, true);
                WriteLiteral(@"                                    <li class=""row product-item"">
                                        <div class="" col-lg-3 col-md-6 product-item-col   product-item-name"">
                                            <img src=""/img/left-menu/product.png"" alt="""">
                                            <span><a");
                EndContext();
                BeginWriteAttribute("href", " href=\"", 3209, "\"", 3237, 2);
                WriteAttributeValue("", 3216, "/Store/", 3216, 7, true);
#line 71 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
WriteAttributeValue("", 3223, item.Store.Id, 3223, 14, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginWriteAttribute("title", " title=\"", 3238, "\"", 3282, 7);
                WriteAttributeValue("", 3246, "Go", 3246, 2, true);
                WriteAttributeValue(" ", 3248, "To", 3249, 3, true);
                WriteAttributeValue(" ", 3251, "\'", 3252, 2, true);
#line 71 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
WriteAttributeValue("", 3253, item.Store.ShopName, 3253, 20, false);

#line default
#line hidden
                WriteAttributeValue("", 3273, "\'", 3273, 1, true);
                WriteAttributeValue(" ", 3274, "-", 3275, 2, true);
                WriteAttributeValue(" ", 3276, "Store", 3277, 6, true);
                EndWriteAttribute();
                BeginContext(3283, 1, true);
                WriteLiteral(">");
                EndContext();
                BeginContext(3285, 19, false);
#line 71 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
                                                                                                                          Write(item.Store.ShopName);

#line default
#line hidden
                EndContext();
                BeginContext(3304, 7, true);
                WriteLiteral("</a> - ");
                EndContext();
                BeginContext(3312, 16, false);
#line 71 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
                                                                                                                                                     Write(item.ProductName);

#line default
#line hidden
                EndContext();
                BeginContext(3328, 570, true);
                WriteLiteral(@"</span>
                                        </div>

                                        <div class="" product-item-col product-item-icon  product-item-edit"">
                                            <i class=""far fa-edit""></i>
                                        </div>
                                        <div class="" product-item-col  product-item-icon product-item-delete"">
                                            <i class=""far fa-trash-alt""></i>
                                        </div>
                                        <a");
                EndContext();
                BeginWriteAttribute("href", " href=\"", 3898, "\"", 3930, 2);
                WriteAttributeValue("", 3905, "/Deals/AddToDeal/", 3905, 17, true);
#line 80 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
WriteAttributeValue("", 3922, item.Id, 3922, 8, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(3931, 115, true);
                WriteLiteral(" class=\" store-item-col store-item-all-button  \"> Remove from Deal</a>\r\n                                    </li>\r\n");
                EndContext();
#line 82 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\AllDeals.cshtml"
                                }
                            }

#line default
#line hidden
                BeginContext(4112, 178, true);
                WriteLiteral("\r\n                        </ul>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </main>\r\n        <!--page-content\"-->\r\n\r\n\r\n    </div>\r\n\r\n\r\n");
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
            BeginContext(4297, 177, true);
            WriteLiteral("\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"\r\n        integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n        crossorigin=\"anonymous\"></script>\r\n");
            EndContext();
            BeginContext(4474, 68, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7bb4c9808bc2162b3d472bd793e4491b03a730d125557", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4542, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(4544, 65, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7bb4c9808bc2162b3d472bd793e4491b03a730d126737", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_8);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4609, 11, true);
            WriteLiteral("\r\n\r\n</html>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<AllDealsViewModel>> Html { get; private set; }
    }
}
#pragma warning restore 1591
