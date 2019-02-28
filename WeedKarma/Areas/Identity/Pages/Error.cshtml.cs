using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WeedKarma.Areas.Identity.Pages.Account;
using WeedKarma.ScaffoldedModels;

namespace WeedKarma.Areas.Identity.Pages
{
    [AllowAnonymous]
    public class ErrorModel : BaseView
    {
        public ErrorModel(weedkarmaContext context) : base(context)
        {
        }

        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public void OnGet()
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
        }
    }
}