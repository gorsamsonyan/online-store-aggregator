using Microsoft.AspNetCore.Authorization;
using WeedKarma.ScaffoldedModels;

namespace WeedKarma.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ResetPasswordConfirmationModel : BaseView
    {
        public ResetPasswordConfirmationModel(weedkarmaContext context) : base(context)
        {
        }

        public void OnGet()
        {
        }
    }
}