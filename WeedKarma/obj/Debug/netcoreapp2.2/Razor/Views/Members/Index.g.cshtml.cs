#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9ce06b5cdc934ed5e2fe42c0c02c0c6febd7b970"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Members_Index), @"mvc.1.0.view", @"/Views/Members/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Members/Index.cshtml", typeof(AspNetCore.Views_Members_Index))]
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
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
using Weed.Karma.Models.Members;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9ce06b5cdc934ed5e2fe42c0c02c0c6febd7b970", @"/Views/Members/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c8c9a6b4ecc14a6058ca7e79d215e492e38ed5", @"/Views/_ViewImports.cshtml")]
    public class Views_Members_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<CurrentUserViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/pages/account.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("user-addr__form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("user-addr__form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(72, 56, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "9ce06b5cdc934ed5e2fe42c0c02c0c6febd7b9705622", async() => {
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
            BeginContext(128, 1021, true);
            WriteLiteral(@"
<main class=""account-profile"">
    <div class=""container--medium"">
        <div class=""row"">
            <div id=""content"">
                <div class=""card_profile"">
                    <div class=""card_profile-header content-item-header"">


                        <h1 class=""card_profile-header-title content-item-header-title""> <i class=""fas fa-address-card""></i>My profile</h1>
                        <div class=""for_buttons"">
                            <a class=""bttn"" href=""/Members/EditProfile"">Edit Profile</a>
                            <a class=""bttn"" href=""/Members/ChangePassword"">Change password</a>
                        </div>
                    </div>


                    <div class=""profile_info"">
                        <ul>
                            <li class=""profile_info-item fx"">
                                <div class=""profile_info-item-left-block""><strong>First Name</strong></div>
                                <div class=""profile_info-item-right-block""> ");
            EndContext();
            BeginContext(1150, 15, false);
#line 27 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
                                                                       Write(Model.FirstName);

#line default
#line hidden
            EndContext();
            BeginContext(1165, 291, true);
            WriteLiteral(@" </div>
                            </li>
                            <li class=""profile_info-item fx"">
                                <div class=""profile_info-item-left-block""><strong>Last Name</strong></div>
                                <div class=""profile_info-item-right-block""> ");
            EndContext();
            BeginContext(1457, 14, false);
#line 31 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
                                                                       Write(Model.LastName);

#line default
#line hidden
            EndContext();
            BeginContext(1471, 291, true);
            WriteLiteral(@" </div>
                            </li>
                            <li class=""profile_info-item fx"">
                                <div class=""profile_info-item-left-block""><strong>Nick Name</strong></div>
                                <div class=""profile_info-item-right-block""> ");
            EndContext();
            BeginContext(1763, 14, false);
#line 35 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
                                                                       Write(Model.NickName);

#line default
#line hidden
            EndContext();
            BeginContext(1777, 287, true);
            WriteLiteral(@"</div>
                            </li>
                            <li class=""profile_info-item fx"">
                                <div class=""profile_info-item-left-block""><strong>E-mail</strong></div>
                                <div class=""profile_info-item-right-block""> ");
            EndContext();
            BeginContext(2065, 14, false);
#line 39 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
                                                                       Write(Model.UserName);

#line default
#line hidden
            EndContext();
            BeginContext(2079, 295, true);
            WriteLiteral(@"</div>
                            </li>
                            <li class=""profile_info-item fx"">
                                <div class=""profile_info-item-left-block""><strong> Phone Number </strong></div>
                                <div class=""profile_info-item-right-block""> ");
            EndContext();
            BeginContext(2375, 17, false);
#line 43 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
                                                                       Write(Model.PhoneNumber);

#line default
#line hidden
            EndContext();
            BeginContext(2392, 294, true);
            WriteLiteral(@"</div>
                            </li>
                            <li class=""profile_info-item fx"">
                                <div class=""profile_info-item-left-block""><strong>Date of birth</strong></div>
                                <div class=""profile_info-item-right-block""> ");
            EndContext();
            BeginContext(2687, 17, false);
#line 47 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\WeedKarma\Views\Members\Index.cshtml"
                                                                       Write(Model.DateOfBirth);

#line default
#line hidden
            EndContext();
            BeginContext(2704, 462, true);
            WriteLiteral(@"</div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class=""card_address"">
                    <div class=""content-item-header"">
                        <h1 class=""content-item-header-title""> <i class=""fas fa-globe-americas""></i> My address</h1>

                    </div>


                    <div class=""user-form__wrap address"">
                        ");
            EndContext();
            BeginContext(3166, 1212, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9ce06b5cdc934ed5e2fe42c0c02c0c6febd7b97012269", async() => {
                BeginContext(3241, 1130, true);
                WriteLiteral(@"
                            <label class=""user-addr__label"">
                                <span class=""tooltip-v2-par .tooltip-v2-par"">
                                    <input type=""text"" placeholder=""City, Street, home"" id=""user-addr__input""
                                           class=""user-addr__input user-addr__input__type1 user-addr__input__select ui-autocomplete-input""
                                           value="""" autocomplete=""off""><span role=""status"" aria-live=""polite""
                                                                             class=""ui-helper-hidden-accessible""></span>

                                </span>
                                <span class=""user-addr__links"">

                                </span>

                            </label>

                            <label>
                                <a href=""#"" class=""user-addr__submit sbm-btn"">Add Address</a>
                                <input type=""submit"" hidden="""">
       ");
                WriteLiteral("                     </label>\r\n                            <!--addresses list-->\r\n                        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4378, 827, true);
            WriteLiteral(@"
                    </div><!--user-form__wrap-->
                    <div class=""addresses"">
                        <div class=""uaddresses-str"">
                            <b>City, Street, home</b>
                            <div class=""address-edit fx fx-center-v"">

                                <a class=""delete_uaddress"" rel="""" href=""javascript:void(0)"">
                                    <img class=""va"" height=""16"" width=""12"" src=""/img/account/delete_red.png"" alt=""delete""
                                         title=""delete"">
                                    delete
                                </a>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div>


</main>
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<CurrentUserViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591