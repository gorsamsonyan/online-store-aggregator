#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "faa27df600d79990b0461e42544da640b11a2b78"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__BestOfferDispensaries), @"mvc.1.0.view", @"/Views/Shared/_BestOfferDispensaries.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/_BestOfferDispensaries.cshtml", typeof(AspNetCore.Views_Shared__BestOfferDispensaries))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"faa27df600d79990b0461e42544da640b11a2b78", @"/Views/Shared/_BestOfferDispensaries.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c8c9a6b4ecc14a6058ca7e79d215e492e38ed5", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__BestOfferDispensaries : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/product/2.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/product/3.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/product/4.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/product/5.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/product/1.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(0, 6, true);
            WriteLiteral("\r\n\r\n\r\n");
            EndContext();
#line 4 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
 foreach (var item in Model)
{

#line default
#line hidden
            BeginContext(39, 59, true);
            WriteLiteral("    <div class=\"wkProduct\">\r\n        <input type=\"checkbox\"");
            EndContext();
            BeginWriteAttribute("id", "\r\n               id=\"", 98, "\"", 137, 2);
            WriteAttributeValue("", 119, "wkProduct_", 119, 10, true);
#line 8 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
WriteAttributeValue("", 129, item.Id, 129, 8, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(138, 163, true);
            WriteLiteral("\r\n               class=\"wkProduct__more\"\r\n               aria-hidden=\"true\" />\r\n        <div class=\"wkProduct__content\">\r\n            <div class=\"wkProduct__front\"");
            EndContext();
            BeginWriteAttribute("style", "\r\n                 style=\"", 301, "\"", 366, 4);
            WriteAttributeValue("", 327, "background-image:", 327, 17, true);
            WriteAttributeValue(" ", 344, "url(\'", 345, 6, true);
#line 13 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
WriteAttributeValue("", 350, item.ImageSrc, 350, 14, false);

#line default
#line hidden
            WriteAttributeValue("", 364, "\')", 364, 2, true);
            EndWriteAttribute();
            BeginContext(367, 75, true);
            WriteLiteral(">\r\n                <div class=\"wkProduct__inner\">\r\n                    <h2>");
            EndContext();
            BeginContext(443, 13, false);
#line 15 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
                   Write(item.ShopName);

#line default
#line hidden
            EndContext();
            BeginContext(456, 33, true);
            WriteLiteral("</h2>\r\n                    <label");
            EndContext();
            BeginWriteAttribute("for", " for=\"", 489, "\"", 513, 2);
            WriteAttributeValue("", 495, "wkProduct_", 495, 10, true);
#line 16 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
WriteAttributeValue("", 505, item.Id, 505, 8, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(514, 485, true);
            WriteLiteral(@"
                           class=""wkProduct__button""
                           aria-hidden=""true"">
                        Details
                    </label>
                </div>
            </div>
            <div class=""wkProduct__back"">
                <div class=""wkProduct__inner"">
                    <div class=""wkProduct__info"">
                        <!-- <span>5</span> -->
                        <div class=""wkProduct__icon"">
                            ");
            EndContext();
            BeginContext(999, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "faa27df600d79990b0461e42544da640b11a2b788553", async() => {
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
            BeginContext(1037, 286, true);
            WriteLiteral(@"
                            <p>THS%</p>
                        </div>
                    </div>
                    <div class=""wkProduct__info"">
                        <!-- <span>4</span> -->
                        <div class=""wkProduct__icon"">
                            ");
            EndContext();
            BeginContext(1323, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "faa27df600d79990b0461e42544da640b11a2b7810096", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1361, 286, true);
            WriteLiteral(@"
                            <p>Type</p>
                        </div>
                    </div>
                    <div class=""wkProduct__info"">
                        <!-- <span>3</span> -->
                        <div class=""wkProduct__icon"">
                            ");
            EndContext();
            BeginContext(1647, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "faa27df600d79990b0461e42544da640b11a2b7811640", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1685, 291, true);
            WriteLiteral(@"
                            <p>SIZE/GRAM</p>
                        </div>
                    </div>
                    <div class=""wkProduct__info"">
                        <!-- <span>1</span> -->
                        <div class=""wkProduct__icon"">
                            ");
            EndContext();
            BeginContext(1976, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "faa27df600d79990b0461e42544da640b11a2b7813189", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2014, 935, true);
            WriteLiteral(@"
                            <p>VERIFY</p>
                        </div>
                    </div>
                    <!-- <hr class=""wProduct__separator"" /> -->
                    <div class=""wkProduct__description"">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vitae, accusamus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptates earum nostrum ipsam ullam, reiciendis
                            nam consectetur? Doloribus voluptate architecto
                            possimus perferendis tenetur nemo amet temporibus,
                            enim soluta nam, debitis.
                        </p>
                    </div>
                    <div class=""wkProduct__price"">");
            EndContext();
            BeginContext(2949, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "faa27df600d79990b0461e42544da640b11a2b7815384", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2988, 18, false);
#line 67 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
                                                                                   Write(item.DeliveryPrice);

#line default
#line hidden
            EndContext();
            BeginContext(3006, 34, true);
            WriteLiteral("</div>\r\n                    <label");
            EndContext();
            BeginWriteAttribute("for", " for=\"", 3040, "\"", 3064, 2);
            WriteAttributeValue("", 3046, "wkProduct_", 3046, 10, true);
#line 68 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
WriteAttributeValue("", 3056, item.Id, 3056, 8, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3065, 283, true);
            WriteLiteral(@"
                           class=""wkProduct__button wkProduct__return""
                           aria-hidden=""true"">
                        <i class=""fas fa-arrow-left""></i>
                    </label>
                </div>
            </div>
        </div>
    </div>
");
            EndContext();
#line 77 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Shared\_BestOfferDispensaries.cshtml"
}

#line default
#line hidden
            BeginContext(3351, 2, true);
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
