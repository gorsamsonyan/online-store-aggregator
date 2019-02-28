using WeedKarma.ScaffoldedModels;

namespace WeedKarma.Areas.Identity.Pages.Account
{
    public class AccessDeniedModel : BaseView
    {
        public AccessDeniedModel(weedkarmaContext context) : base(context)
        {
        }

        public void OnGet()
        {
        }
    }
}