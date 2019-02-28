using Microsoft.AspNetCore.Authorization;
using WeedKarma.ScaffoldedModels;

namespace WeedKarma.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ForgotPasswordConfirmation : BaseView
    {
        public ForgotPasswordConfirmation(weedkarmaContext context) : base(context)
        {
        }

        public void OnGet()
        {
        }
    }
}