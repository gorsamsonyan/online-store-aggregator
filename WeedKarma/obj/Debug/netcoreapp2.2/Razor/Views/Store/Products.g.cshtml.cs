#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b69bc2c668aabea774da125e2acdd663b390d007"
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
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\_ViewImports.cshtml"
using WeedKarma;

#line default
#line hidden
#line 2 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\_ViewImports.cshtml"
using WeedKarma.Models;

#line default
#line hidden
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
using Weed.Karma.Models.StoreModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b69bc2c668aabea774da125e2acdd663b390d007", @"/Views/Store/Products.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c8c9a6b4ecc14a6058ca7e79d215e492e38ed5", @"/Views/_ViewImports.cshtml")]
    public class Views_Store_Products : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<StoreProductsViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/pages/single-product.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "POST", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("singleProduct__form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/menu.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/store-products.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(69, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(71, 63, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "b69bc2c668aabea774da125e2acdd663b390d0075766", async() => {
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
            BeginContext(134, 34, true);
            WriteLiteral("\r\n\r\n<main class=\"wkPage--store\">\r\n");
            EndContext();
            BeginContext(1048, 249, true);
            WriteLiteral("    <!-- WK Structure Start -->\r\n    <div class=\"wkStructure wkShop__container singleProduct__pageContainer container--medium\">\r\n        <!-- WK Structure Aside Start -->\r\n        <aside class=\"wkStructure__aside singleProduct__aside\">\r\n            ");
            EndContext();
            BeginContext(1297, 474, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b69bc2c668aabea774da125e2acdd663b390d0077422", async() => {
                BeginContext(1345, 419, true);
                WriteLiteral(@"
                <div class=""inputField singleProduct__inputField"">
                    <input type=""text""
                           id=""singleProduct__input""
                           placeholder=""Product search"" />
                    <label for=""singleProduct__input"">
                        <i class=""fa fa-search"" aria-hidden=""true""></i>
                    </label>
                </div>
            ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1771, 149, true);
            WriteLiteral("\r\n\r\n            <!-- wk menu -->\r\n            <ul class=\"ss__menu\">\r\n                <li class=\"ss__menuItem ss__menuItem  \">\r\n                    <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1920, "\"", 1965, 2);
            WriteAttributeValue("", 1927, "/Store/Products/", 1927, 16, true);
#line 42 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
WriteAttributeValue("", 1943, Model.Store.UrlByName, 1943, 22, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1966, 148, true);
            WriteLiteral("\r\n                       class=\"singlePage__suggestion singlePage__menuItem singlePage__suggestionLink\"> All Categories</a>\r\n                </li>\r\n");
            EndContext();
#line 45 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                 foreach (var category in Model.ProductCategory)
                {

#line default
#line hidden
            BeginContext(2199, 88, true);
            WriteLiteral("                    <li class=\"ss__menuItem ss__menuItem  \">\r\n                        <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 2287, "\"", 2352, 4);
            WriteAttributeValue("", 2294, "/Store/Products/", 2294, 16, true);
#line 48 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
WriteAttributeValue("", 2310, Model.Store.UrlByName, 2310, 22, false);

#line default
#line hidden
            WriteAttributeValue("", 2332, "/", 2332, 1, true);
#line 48 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
WriteAttributeValue("", 2333, category.UrlByName, 2333, 19, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2353, 108, true);
            WriteLiteral("\r\n                           class=\"singlePage__suggestion singlePage__menuItem singlePage__suggestionLink\">");
            EndContext();
            BeginContext(2462, 13, false);
#line 49 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                                                     Write(category.Name);

#line default
#line hidden
            EndContext();
            BeginContext(2475, 33, true);
            WriteLiteral("</a>\r\n                    </li>\r\n");
            EndContext();
#line 51 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                }

#line default
#line hidden
            BeginContext(2527, 433, true);
            WriteLiteral(@"            </ul>
            <!-- wk menu end -->
        </aside>
        <!-- WK Structure Aside End -->
        <!-- ----------------------- -->
        <!-- WK Structure Section Start -->
        <section class=""wkStructure__section wkStores__container"">
            <!-- Single Shop -->
            <div class=""fx ss-store"">
                <div class=""ss-store__left ss-store__imgContainer"">
                    <img");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 2960, "\"", 2987, 1);
#line 62 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
WriteAttributeValue("", 2966, Model.Store.LogoPath, 2966, 21, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2988, 379, true);
            WriteLiteral(@"
                         class=""ss-store__img""
                         alt=""Shop Thumbnail"" />
                </div>
                <div class=""fx fx-between fx-column ss-store__right"">
                    <div class=""ss-store__header fx fx-between"">
                        <div class=""fx ss-store__headerLeft"">
                            <h2 class=""ss-store__name"">");
            EndContext();
            BeginContext(3368, 20, false);
#line 69 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                  Write(Model.Store.ShopName);

#line default
#line hidden
            EndContext();
            BeginContext(3388, 413, true);
            WriteLiteral(@"</h2>
                            <div class=""ss-store__rating"">
                                <img src=""/img/store/ratingLeaf-grey.png"" alt="""" class=""ss-store__ratingIcon"">
                                <sup class=""ss-store__ratingValue"">1</sup>
                            </div>
                        </div>
                        <div class=""ss-store__headerRigt"">
                            <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3801, "\"", 3842, 2);
            WriteAttributeValue("", 3808, "/Store/Info/", 3808, 12, true);
#line 76 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
WriteAttributeValue("", 3820, Model.Store.UrlByName, 3820, 22, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3843, 210, true);
            WriteLiteral(" class=\"ss-store__headerLink ss-store__headerLink--info\">\r\n                                <img src=\"/img/icons/information.png\" alt=\"\">\r\n                                Info\r\n                            </a>\r\n");
            EndContext();
            BeginContext(4321, 679, true);
            WriteLiteral(@"                        </div>
                    </div>
                    <ul class=""wkShop__infoList store-products fx fx-between fx-wrap"">
                        <li class=""ss__infoItem"">
                            <div class=""ss__infoItemRow fx fx-center-v"">
                                <img src=""/img/store/1.png""
                                     alt=""Working Hours""
                                     class=""ss__infoImg wkShop__infoImg--left"" />
                                <span>Working Hours</span>
                            </div>
                            <span class=""block text-center ss__infoValue"">
                                ");
            EndContext();
            BeginContext(5001, 28, false);
#line 95 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                           Write(Model.Store.WorkingHoursFrom);

#line default
#line hidden
            EndContext();
            BeginContext(5029, 3, true);
            WriteLiteral(" - ");
            EndContext();
            BeginContext(5033, 26, false);
#line 95 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                           Write(Model.Store.WorkingHoursTo);

#line default
#line hidden
            EndContext();
            BeginContext(5059, 545, true);
            WriteLiteral(@"
                            </span>
                        </li>
                        <li class=""ss__infoItem"">
                            <div class=""ss__infoItemRow fx fx-center-v"">
                                <img src=""/img/store/2.png""
                                     alt=""Delivery Time""
                                     class=""ss__infoImg"" />
                                <span>Delivery Time</span>
                            </div>
                            <span class=""block text-center ss__infoValue"">");
            EndContext();
            BeginContext(5605, 35, false);
#line 105 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                     Write(Model.DeliveryTime.DeliveryTimeFrom);

#line default
#line hidden
            EndContext();
            BeginContext(5640, 3, true);
            WriteLiteral(" - ");
            EndContext();
            BeginContext(5644, 33, false);
#line 105 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                                                            Write(Model.DeliveryTime.DeliveryTimeTo);

#line default
#line hidden
            EndContext();
            BeginContext(5677, 515, true);
            WriteLiteral(@"</span>
                        </li>
                        <li class=""ss__infoItem"">
                            <div class=""ss__infoItemRow fx fx-center-v"">
                                <img src=""/img/store/3.png""
                                     alt=""Min Order""
                                     class=""ss__infoImg"" />
                                <span>Min Order Ammount</span>
                            </div>
                            <span class=""block text-center ss__infoValue"">");
            EndContext();
            BeginContext(6193, 35, false);
#line 114 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                     Write(Model.DeliveryTime.MinOrderDelivery);

#line default
#line hidden
            EndContext();
            BeginContext(6228, 521, true);
            WriteLiteral(@" USD</span>
                        </li>
                        <li class=""ss__infoItem"">
                            <div class=""ss__infoItemRow fx fx-center-v"">
                                <img src=""/img/store/4.png""
                                     alt=""Delivery Price""
                                     class=""ss__infoImg"" />
                                <span>Delivery Price</span>
                            </div>
                            <span class=""block text-center ss__infoValue"">");
            EndContext();
            BeginContext(6750, 32, false);
#line 123 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                     Write(Model.DeliveryTime.DeliveryPrice);

#line default
#line hidden
            EndContext();
            BeginContext(6782, 257, true);
            WriteLiteral(@" USD</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class=""ss-store__navBox ss__menu-mobile fx fx-between fx-center-v"">
                <ul class=""ss__menu fx fx-center-h"">
");
            EndContext();
#line 131 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                     foreach (var category in Model.ProductCategory)
                    {

#line default
#line hidden
            BeginContext(7132, 233, true);
            WriteLiteral("                        <li class=\"ss__menuItem ss__menuItem \">\r\n                            <a href=\"javascript:void(0)\"\r\n                               class=\"singlePage__suggestion singlePage__menuItem singlePage__suggestionLink\">");
            EndContext();
            BeginContext(7366, 13, false);
#line 135 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                                                         Write(category.Name);

#line default
#line hidden
            EndContext();
            BeginContext(7379, 37, true);
            WriteLiteral("</a>\r\n                        </li>\r\n");
            EndContext();
#line 137 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                    }

#line default
#line hidden
            BeginContext(7439, 722, true);
            WriteLiteral(@"                </ul>
            </div>
            <div class=""singleProduct__relatedContainer"">
                <div class=""singleProduct__relatedRow fx fx-wrap"">
                    <!-- Add to cart popup -->
                    <div class=""text-center fx fx-center-h addedToCart"">
                        <!-- <span class=""addedToCart__text fx fx-center-v""><img src=""/img/icons/added.png"" alt="""">Added to cart </span>
                        <span class=""addedToCart__tiangle""></span> -->
                        <img src=""/img/added.png"" alt=""Added To Cart Image"" class=""addedToCart__image"">
                    </div>
                    <!-- Add to cart popup -->
                    <!-- wk items -->
");
            EndContext();
#line 150 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                     foreach (var product in Model.Products)
                    {

#line default
#line hidden
            BeginContext(8246, 69, true);
            WriteLiteral("                        <div class=\"ss__product-item\" data-store-id=\"");
            EndContext();
            BeginContext(8316, 15, false);
#line 152 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                Write(product.StoreId);

#line default
#line hidden
            EndContext();
            BeginContext(8331, 19, true);
            WriteLiteral("\" data-product-id=\"");
            EndContext();
            BeginContext(8351, 10, false);
#line 152 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                                                   Write(product.Id);

#line default
#line hidden
            EndContext();
            BeginContext(8361, 136, true);
            WriteLiteral("\">\r\n                            <div class=\"singleProduct__relatedItem\">\r\n                                <div class=\"ss-store__bgImage\"");
            EndContext();
            BeginWriteAttribute("style", "\r\n                                     style=\"", 8497, "\"", 8587, 4);
            WriteAttributeValue("", 8543, "background-image:", 8543, 17, true);
            WriteAttributeValue(" ", 8560, "url(\'", 8561, 6, true);
#line 155 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
WriteAttributeValue("", 8566, product.ImagePath, 8566, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 8584, "\');", 8584, 3, true);
            EndWriteAttribute();
            BeginContext(8588, 3, true);
            WriteLiteral(">\r\n");
            EndContext();
            BeginContext(8893, 505, true);
            WriteLiteral(@"                                    <div class=""ss-store__ratingRibbon ss-ribbons--left ss-ribbons--orange"">
                                        <span class=""ss-store__ratingRibbonValue"">4.8</span>
                                        <i class=""fa fa-star ss-store__ratingRibbonIcon"" aria-hidden=""true""></i>
                                    </div>
                                    <h3 class=""ss-store__category ss-ribbons--both ss-ribbons--grey"">
                                        ");
            EndContext();
            BeginContext(9399, 19, false);
#line 165 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                   Write(product.ProductName);

#line default
#line hidden
            EndContext();
            BeginContext(9418, 594, true);
            WriteLiteral(@"
                                    </h3>
                                </div>
                                <!-- -- -->
                                <div class=""ss-store__details text-center"">
                                    <div class=""fx fx-between fx-center-v ss-store__selects"">
                                        <!-- <h4 class=""singleProduct__name"">Product Name</h4> -->
                                        <div class=""ss-store__selectWrapper fx fx-center"">
                                            <div class=""fx fx-wrap ss-store__variationsContainer"">
");
            EndContext();
#line 174 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                 foreach (var price in product.StoreProductUnits)
                                                {
                                                    if (price.CurrentPrice <= product.StoreProductUnits.Select(s => s.CurrentPrice).Min())
                                                    {

#line default
#line hidden
            BeginContext(10357, 275, true);
            WriteLiteral(@"                                                        <a href=""javascript:void(0)""
                                                           class=""ss-store__variation ss-store__variation--selected""
                                                           data-price=""");
            EndContext();
            BeginContext(10633, 18, false);
#line 180 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                  Write(price.CurrentPrice);

#line default
#line hidden
            EndContext();
            BeginContext(10651, 64, true);
            WriteLiteral("\">\r\n                                                            ");
            EndContext();
            BeginContext(10716, 10, false);
#line 181 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                       Write(price.Size);

#line default
#line hidden
            EndContext();
            BeginContext(10726, 64, true);
            WriteLiteral("\r\n                                                        </a>\r\n");
            EndContext();
#line 183 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                    }
                                                    else
                                                    {

#line default
#line hidden
            BeginContext(10958, 265, true);
            WriteLiteral(@"                                                        <a href=""javascript:void(0)""
                                                           class=""ss-store__variation ss-store__variation""
                                                           data-price=""");
            EndContext();
            BeginContext(11224, 18, false);
#line 188 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                  Write(price.CurrentPrice);

#line default
#line hidden
            EndContext();
            BeginContext(11242, 64, true);
            WriteLiteral("\">\r\n                                                            ");
            EndContext();
            BeginContext(11307, 10, false);
#line 189 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                       Write(price.Size);

#line default
#line hidden
            EndContext();
            BeginContext(11317, 64, true);
            WriteLiteral("\r\n                                                        </a>\r\n");
            EndContext();
#line 191 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                    }

                                                }

#line default
#line hidden
            BeginContext(11489, 347, true);
            WriteLiteral(@"                                            </div>

                                        </div>
                                    </div>
                                    <div class=""fx fx-between fx-center-v singleProduct__bottomRow"">
                                        <span class=""singleProduct__cost singleProduct__cost--usd"">");
            EndContext();
            BeginContext(11837, 59, false);
#line 199 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                                                                                              Write(product.StoreProductUnits.Select(s => s.CurrentPrice).Min());

#line default
#line hidden
            EndContext();
            BeginContext(11896, 1337, true);
            WriteLiteral(@"</span>
                                        <a href=""javascript:void(0)""
                                           class=""ss-store__orderBtn singleProduct__basket singleProduct__order"">Order</a>
                                        <!-- <a
                                          href=""javascrip:void(0)""
                                          class=""singleProduct__quantity""
                                        ></a> -->
                                        <!-- <a href=""javascript:void(0)"" class=""singleProduct__basket singleProduct__order"">
                                          <img src=""/img/single-product/basket.png"" alt=""Basket Image"" class=""singleProduct__basketImg"">
                                        </a> -->
                                    </div>
                                    <div class=""quantityPopup"">
                                        <a href=""javascript:void(0)"" class=""quantityPopup__close"">X</a>
                                        <div clas");
            WriteLiteral(@"s=""quantityPopup__bottom fx fx-column"">
                                            <div class=""quantityPopup__summary fx fx-between fx-center-v"">
                                                <span class=""quantityPopup__cost quantityPopup__cost--usd""></span>
                                                ");
            EndContext();
            BeginContext(13233, 1217, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b69bc2c668aabea774da125e2acdd663b390d00731810", async() => {
                BeginContext(13253, 1190, true);
                WriteLiteral(@"
                                                    <div class=""fx fx-center-v"">
                                                        <a href=""javascript:void(0)""
                                                           class=""quantityPopup__incDec quantityPopup__minus"">
                                                            <i class=""fa fa-minus"" aria-hidden=""true""></i>
                                                        </a>
                                                        <input type=""number"" name="""" class=""quantityPopup__input""
                                                               min=""1""
                                                               value=""1"" />
                                                        <a href=""javascript:void(0)""
                                                           class=""quantityPopup__incDec quantityPopup__plus"">
                                                            <i class=""fa fa-plus"" aria-hidden=""true""></i>
    ");
                WriteLiteral("                                                    </a>\r\n                                                    </div>\r\n                                                ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(14450, 504, true);
            WriteLiteral(@"
                                                <span class=""quantityPopup__costSummary quantityPopup__costSummary--usd""></span>
                                            </div>
                                            <a href=""javascript:void(0)"" class=""quantityPopup__countSubmit dib"">OK</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
");
            EndContext();
#line 238 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Store\Products.cshtml"
                    }

#line default
#line hidden
            BeginContext(14977, 210, true);
            WriteLiteral("\r\n\r\n\r\n                    <!-- wk items end -->\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- WK Structure Section End -->\r\n    </div>\r\n    <!-- WK Structure End -->\r\n</main>\r\n\r\n");
            EndContext();
            BeginContext(15187, 36, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b69bc2c668aabea774da125e2acdd663b390d00735716", async() => {
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
            BeginContext(15223, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(15225, 46, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b69bc2c668aabea774da125e2acdd663b390d00736898", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
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
