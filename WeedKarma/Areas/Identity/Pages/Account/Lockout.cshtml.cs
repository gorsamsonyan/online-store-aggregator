using Microsoft.AspNetCore.Authorization;
using WeedKarma.ScaffoldedModels;

namespace WeedKarma.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class LockoutModel : BaseView
    {
        public LockoutModel(weedkarmaContext context) : base(context)
        {
        }

        public void OnGet()
        {
        }
    }
}