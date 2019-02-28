using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using storeadmin.ScaffoldModels;

namespace storeadmin.Controllers
{
    public class BaseController : Controller
    {
        protected weedkarmaContext contextAdmin;

        public BaseController(weedkarmaContext context)
        {
            contextAdmin = context;
        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var userId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            ViewBag.Stores = contextAdmin.Store.Where(x => x.ParentId == userId).ToList();

            //hima sax controllerner@ vori mej ed piti ereva jarangi base-ic spasi 
            base.OnActionExecuting(context);
        }
    }
}