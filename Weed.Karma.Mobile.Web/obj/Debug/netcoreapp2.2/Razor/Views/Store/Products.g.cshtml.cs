#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "96430323d3be50641e12eff6ab973150f4fe5796"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Store_Products), @"mvc.1.0.view", @"/Views/Store/Products.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Store/Products.cshtml", typeof(AspNetCore.Views_Store_Products))]
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
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
using Weed.Karma.Models.StoreModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"96430323d3be50641e12eff6ab973150f4fe5796", @"/Views/Store/Products.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"691b947407e53951e13e28c8b3078d525b85fbf3", @"/Views/_ViewImports.cshtml")]
    public class Views_Store_Products : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<StoreProductsViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/store-products.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(69, 387, true);
            WriteLiteral(@"

    <link rel=""stylesheet"" href=""/css/pages/store-header.css"">
    <link rel=""stylesheet"" href=""/css/pages/store-page.css"">
    <div class=""store-page-main-header"">
        <div class=""store-header display-flex flex-center"">
            <a href=""/Dispensaries"" class=""button-back""><i class=""fas fa-chevron-left""></i></a>
            <div class=""store-img"">
                <img");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 456, "\"", 483, 1);
#line 11 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 462, Model.Store.LogoPath, 462, 21, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(484, 66, true);
            WriteLiteral(" alt=\"\">\r\n            </div>\r\n            <h1 class=\"store-title\">");
            EndContext();
            BeginContext(551, 20, false);
#line 13 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                               Write(Model.Store.ShopName);

#line default
#line hidden
            EndContext();
            BeginContext(571, 1683, true);
            WriteLiteral(@"</h1>
        </div>
        <div class=""store-info"">
            <div class=""store-info-top-buttons"">
                <div class=""store-rating store-info-top-buttons-item"">
                    <div class=""store-rating-text"">+ <span class=""rating-eval"">5</span></div>
                    <div class=""store-rating-icon store-info-icon"">
                        <img src=""/img/store/reating-icon.png"" alt="""">
                    </div>
                    <div class=""store-rating-text""></div>
                </div>
                <div class=""store-share store-info-top-buttons-item"">
                    <div class=""store-share-icon store-info-icon"">
                        <img src=""/img/store/share-icon.png"" alt="""">
                    </div>
                </div>
            </div>

            <div class=""container"">
                <div class=""row"">
                    <div class=""col-lg-6"">

                        <div class=""row align-items-center store-info-row "">
                   ");
            WriteLiteral(@"         <div class=""col-lg-6"">
                                <div class=""store-filter-item-right-block display-flex align-items-center"">
                                    <div class=""icon-block"">
                                        <img src=""/img/store/clock-icon.png"" class=""icon"" />
                                    </div>

                                    <div class=""text"">Working Hours</div>
                                </div>
                            </div>
                            <div class=""col-lg-6"">
                                <div class=""store-filter-item-left-block"">
                                    ");
            EndContext();
            BeginContext(2255, 28, false);
#line 47 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                               Write(Model.Store.WorkingHoursFrom);

#line default
#line hidden
            EndContext();
            BeginContext(2283, 3, true);
            WriteLiteral(" - ");
            EndContext();
            BeginContext(2287, 26, false);
#line 47 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                               Write(Model.Store.WorkingHoursTo);

#line default
#line hidden
            EndContext();
            BeginContext(2313, 1819, true);
            WriteLiteral(@"
                                </div>
                            </div>
                        </div>
                        <div class=""row align-items-center store-info-row"">
                            <div class=""col-lg-6"">
                                <div class=""store-filter-item-right-block display-flex align-items-center"">
                                    <div class=""icon-block"">
                                        <img src=""/img/store/delivery.png"" class=""icon"" />
                                    </div>

                                    <div class=""text"">Delivery Time</div>
                                </div>
                            </div>
                            <div class=""col-lg-6"">
                                <div class=""store-filter-item-left-block"">
                                    30-60 min
                                </div>
                            </div>
                        </div>
                    </div>

            ");
            WriteLiteral(@"        <div class=""col-lg-6"">

                        <div class=""row align-items-center store-info-row "">
                            <div class=""col-lg-8"">
                                <div class=""store-filter-item-right-block display-flex align-items-center"">
                                    <div class=""icon-block"">
                                        <img src=""/img/store/delivery_price.png"" class=""icon"" />
                                    </div>

                                    <div class=""text"">Delivery Price</div>
                                </div>
                            </div>
                            <div class=""col-lg-4"">
                                <div class=""store-filter-item-left-block"">
                                    ");
            EndContext();
            BeginContext(4133, 32, false);
#line 83 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                               Write(Model.DeliveryTime.DeliveryPrice);

#line default
#line hidden
            EndContext();
            BeginContext(4165, 879, true);
            WriteLiteral(@" USD
                                </div>
                            </div>
                        </div>
                        <div class=""row align-items-center store-info-row"">
                            <div class=""col-lg-8"">
                                <div class=""store-filter-item-right-block display-flex align-items-center"">
                                    <div class=""icon-block"">
                                        <img src=""/img/store/min_order_amount.png"" class=""icon"" />
                                    </div>

                                    <div class=""text"">Min Order Ammount</div>
                                </div>
                            </div>
                            <div class=""col-lg-4"">
                                <div class=""store-filter-item-left-block"">
                                    ");
            EndContext();
            BeginContext(5045, 35, false);
#line 99 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                               Write(Model.DeliveryTime.MinOrderDelivery);

#line default
#line hidden
            EndContext();
            BeginContext(5080, 357, true);
            WriteLiteral(@" USD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=""store-navbar"">
            <ul class=""display-flex "">
                <li class=""store-navbar-item   active"">
                    <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 5437, "\"", 5475, 2);
            WriteAttributeValue("", 5444, "/Store/Products/", 5444, 16, true);
#line 110 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 5460, Model.Store.Id, 5460, 15, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(5476, 138, true);
            WriteLiteral(" class=\"store-navbar-item-link \"> menu</a>\r\n                </li>\r\n                <li class=\"store-navbar-item \">\r\n                    <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 5614, "\"", 5648, 2);
            WriteAttributeValue("", 5621, "/Store/Info/", 5621, 12, true);
#line 113 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 5633, Model.Store.Id, 5633, 15, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(5649, 67, true);
            WriteLiteral(" class=\"store-navbar-item-link \"> info</a>\r\n                </li>\r\n");
            EndContext();
            BeginContext(5888, 2057, true);
            WriteLiteral(@"            </ul>
        </div>
    </div>
    <!-- Cart -->

    <main class=""product-page"">
        <div class=""product-category-menu-container"">

            <div class=""product-category-menu"">
                <ul class=""display-flex"">
                    <li class=""product-category-menu-item "">
                        <a href=""#"" class=""product-category-menu-item-link active"">Popular</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Indica</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Sativa</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Wax</a>
                    </li>
                    <li class=""product-category-menu-item"">
   ");
            WriteLiteral(@"                     <a href=""#"" class=""product-category-menu-item-link"">Concetrat</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Concetrat</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Concetrat</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Concetrat</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Concetrat</a>
                    </li>
                    <li class=""product-category-menu-item"">
                        <a href=""#"" class=""product-category-menu-item-link"">Concetrat</a>
                    </li>
              ");
            WriteLiteral("  </ul>\r\n");
            EndContext();
            BeginContext(8058, 121, true);
            WriteLiteral("            </div>\r\n        </div>\r\n\r\n        <div class=\"product-item-container\">\r\n            <div class=\"container\">\r\n");
            EndContext();
#line 167 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                 foreach (var item in Model.Products)
                {

#line default
#line hidden
            BeginContext(8253, 65, true);
            WriteLiteral("                    <div class=\"row product-item\" data-store-id=\"");
            EndContext();
            BeginContext(8319, 12, false);
#line 169 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                            Write(item.StoreId);

#line default
#line hidden
            EndContext();
            BeginContext(8331, 19, true);
            WriteLiteral("\" data-product-id=\"");
            EndContext();
            BeginContext(8351, 7, false);
#line 169 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                            Write(item.Id);

#line default
#line hidden
            EndContext();
            BeginContext(8358, 170, true);
            WriteLiteral("\">\r\n                        <div class=\"col-lg-8 product-item-left-block \">\r\n                            <div class=\"product-item-name\">\r\n                                ");
            EndContext();
            BeginContext(8529, 16, false);
#line 172 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                           Write(item.ProductName);

#line default
#line hidden
            EndContext();
            BeginContext(8545, 100, true);
            WriteLiteral("\r\n                            </div>\r\n                            <div class=\"product-order-info\">\r\n");
            EndContext();
            BeginContext(8972, 121, true);
            WriteLiteral("                                <div class=\"size-block\">\r\n                                    <ul class=\"display-flex\">\r\n");
            EndContext();
#line 181 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                         foreach (var units in item.StoreProductUnits)
                                        {


                                            if (units.CurrentPrice <= item.StoreProductUnits.Select(s => s.CurrentPrice).Min())
                                            {

#line default
#line hidden
            BeginContext(9404, 195, true);
            WriteLiteral("                                                <li class=\"size-item\">\r\n                                                    <label>\r\n                                                        <input");
            EndContext();
            BeginWriteAttribute("name", " name=\"", 9599, "\"", 9627, 2);
            WriteAttributeValue("", 9606, "product-size-", 9606, 13, true);
#line 189 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 9619, item.Id, 9619, 8, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("value", " value=\"", 9628, "\"", 9655, 1);
#line 189 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 9636, units.CurrentPrice, 9636, 19, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(9656, 12, true);
            WriteLiteral(" data-size=\"");
            EndContext();
            BeginContext(9669, 10, false);
#line 189 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                                                              Write(units.Size);

#line default
#line hidden
            EndContext();
            BeginContext(9679, 124, true);
            WriteLiteral("\" type=\"radio\" checked>\r\n                                                        <div class=\"size-radio-button\" data-price=\"");
            EndContext();
            BeginContext(9804, 18, false);
#line 190 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                              Write(units.CurrentPrice);

#line default
#line hidden
            EndContext();
            BeginContext(9822, 2, true);
            WriteLiteral("\">");
            EndContext();
            BeginContext(9825, 10, false);
#line 190 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                                                   Write(units.Size);

#line default
#line hidden
            EndContext();
            BeginContext(9835, 125, true);
            WriteLiteral("</div>\r\n                                                    </label>\r\n                                                </li>\r\n");
            EndContext();
#line 193 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                            }
                                            else
                                            {

#line default
#line hidden
            BeginContext(10104, 195, true);
            WriteLiteral("                                                <li class=\"size-item\">\r\n                                                    <label>\r\n                                                        <input");
            EndContext();
            BeginWriteAttribute("name", " name=\"", 10299, "\"", 10327, 2);
            WriteAttributeValue("", 10306, "product-size-", 10306, 13, true);
#line 198 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 10319, item.Id, 10319, 8, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("value", " value=\"", 10328, "\"", 10355, 1);
#line 198 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 10336, units.CurrentPrice, 10336, 19, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(10356, 12, true);
            WriteLiteral(" data-size=\"");
            EndContext();
            BeginContext(10369, 10, false);
#line 198 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                                                              Write(units.Size);

#line default
#line hidden
            EndContext();
            BeginContext(10379, 116, true);
            WriteLiteral("\" type=\"radio\">\r\n                                                        <div class=\"size-radio-button\" data-price=\"");
            EndContext();
            BeginContext(10496, 18, false);
#line 199 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                              Write(units.CurrentPrice);

#line default
#line hidden
            EndContext();
            BeginContext(10514, 2, true);
            WriteLiteral("\">");
            EndContext();
            BeginContext(10517, 10, false);
#line 199 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                                                                                                   Write(units.Size);

#line default
#line hidden
            EndContext();
            BeginContext(10527, 125, true);
            WriteLiteral("</div>\r\n                                                    </label>\r\n                                                </li>\r\n");
            EndContext();
#line 202 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                            }

                                        }

#line default
#line hidden
            BeginContext(10744, 87, true);
            WriteLiteral("\r\n\r\n                                    </ul>\r\n                                </div>\r\n");
            EndContext();
            BeginContext(11195, 362, true);
            WriteLiteral(@"                            </div>
                            <div class=""product-item-bottom-block display-flex align-items-center"">
                                <div class=""product-order-button"">order</div>
                                <div class=""product-price"">price <span class=""product-price-coast""
                            data-price-coast=""");
            EndContext();
            BeginContext(11558, 56, false);
#line 219 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                                         Write(item.StoreProductUnits.Select(s => s.CurrentPrice).Min());

#line default
#line hidden
            EndContext();
            BeginContext(11614, 40, true);
            WriteLiteral("\">\r\n                                    ");
            EndContext();
            BeginContext(11655, 56, false);
#line 220 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                               Write(item.StoreProductUnits.Select(s => s.CurrentPrice).Min());

#line default
#line hidden
            EndContext();
            BeginContext(11711, 249, true);
            WriteLiteral("\r\n                                      </span>$</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 product-item-right-block\">\r\n                            <div class=\"product-img\"");
            EndContext();
            BeginWriteAttribute("style", " style=\"", 11960, "\"", 12008, 4);
            WriteAttributeValue("", 11968, "background-image:", 11968, 17, true);
            WriteAttributeValue(" ", 11985, "url(\'", 11986, 6, true);
#line 225 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
WriteAttributeValue("", 11991, item.ImagePath, 11991, 15, false);

#line default
#line hidden
            WriteAttributeValue("", 12006, "\')", 12006, 2, true);
            EndWriteAttribute();
            BeginContext(12009, 101, true);
            WriteLiteral(">\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n");
            EndContext();
#line 230 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\Weed.Karma.Mobile.Web\Views\Store\Products.cshtml"
                }

#line default
#line hidden
            BeginContext(12129, 99, true);
            WriteLiteral("\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </main>\r\n\r\n\r\n\r\n<script src=\"/js/store.js\"></script>\r\n");
            EndContext();
            BeginContext(12228, 46, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "96430323d3be50641e12eff6ab973150f4fe579626799", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(12274, 6, true);
            WriteLiteral("\r\n\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<StoreProductsViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591