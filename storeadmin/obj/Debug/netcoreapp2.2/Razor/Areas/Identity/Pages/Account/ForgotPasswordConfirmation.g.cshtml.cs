#pragma checksum "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\storeadmin\Areas\Identity\Pages\Account\ForgotPasswordConfirmation.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3fd945ab2986ab93bea5c2c9c31d9a8296d10ab8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(storeadmin.Areas.Identity.Pages.Account.Areas_Identity_Pages_Account_ForgotPasswordConfirmation), @"mvc.1.0.razor-page", @"/Areas/Identity/Pages/Account/ForgotPasswordConfirmation.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Areas/Identity/Pages/Account/ForgotPasswordConfirmation.cshtml", typeof(storeadmin.Areas.Identity.Pages.Account.Areas_Identity_Pages_Account_ForgotPasswordConfirmation), null)]
namespace storeadmin.Areas.Identity.Pages.Account
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 2 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\storeadmin\Areas\Identity\Pages\_ViewImports.cshtml"
using storeadmin.Areas.Identity;

#line default
#line hidden
#line 3 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\storeadmin\Areas\Identity\Pages\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 1 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\storeadmin\Areas\Identity\Pages\Account\_ViewImports.cshtml"
using storeadmin.Areas.Identity.Pages.Account;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3fd945ab2986ab93bea5c2c9c31d9a8296d10ab8", @"/Areas/Identity/Pages/Account/ForgotPasswordConfirmation.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"94b1344e78bce6fa02d1bcb6d3b474bcd6ad86f2", @"/Areas/Identity/Pages/_ViewImports.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9a8482c0a0a11d9ef77345b746f356296b7bc4a0", @"/Areas/Identity/Pages/Account/_ViewImports.cshtml")]
    public class Areas_Identity_Pages_Account_ForgotPasswordConfirmation : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\storeadmin\Areas\Identity\Pages\Account\ForgotPasswordConfirmation.cshtml"
  
    ViewData["Title"] = "Forgot password confirmation";

#line default
#line hidden
            BeginContext(106, 6, true);
            WriteLiteral("\r\n<h2>");
            EndContext();
            BeginContext(113, 17, false);
#line 7 "C:\Users\Hayk\Source\Workspaces\WeedKarma\DEV\storeadmin\Areas\Identity\Pages\Account\ForgotPasswordConfirmation.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(130, 73, true);
            WriteLiteral("</h2>\r\n<p>\r\n    Please check your email to reset your password.\r\n</p>\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ForgotPasswordConfirmation> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ForgotPasswordConfirmation> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ForgotPasswordConfirmation>)PageContext?.ViewData;
        public ForgotPasswordConfirmation Model => ViewData.Model;
    }
}
#pragma warning restore 1591
