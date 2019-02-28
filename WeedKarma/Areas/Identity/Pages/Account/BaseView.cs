using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Linq;

namespace WeedKarma.Areas.Identity.Pages.Account
{
    public class BaseView : PageModel
    {
        protected readonly WeedKarma.ScaffoldedModels.weedkarmaContext contextAdmin;

        public BaseView(WeedKarma.ScaffoldedModels.weedkarmaContext context)
        {
            contextAdmin = context;
        }

        public override void OnPageHandlerExecuting(PageHandlerExecutingContext context)
        {
            var cookies = Request.Cookies.ToDictionary(x => x.Key, x => x.Value);

            var stateId = cookies.ContainsKey("stateId") ? int.Parse(cookies["stateId"]) : DataProject.StateId;
            var cityId = cookies.ContainsKey("cityId") ? int.Parse(cookies["cityId"]) : DataProject.CityId;
            ViewData["SelectedState"] = contextAdmin.State.FirstOrDefault(x => x.Id == stateId);
            ViewData["SelectedCity"] = contextAdmin.City.FirstOrDefault(x => x.Id == cityId);
            base.OnPageHandlerExecuting(context);
        }
    }
}