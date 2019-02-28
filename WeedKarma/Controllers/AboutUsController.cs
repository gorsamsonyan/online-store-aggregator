using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;

namespace WeedKarma.Controllers
{
    public class AboutUsController : ControllerBase
    {
       
        public AboutUsController(IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork) : base(configurationSvc, unitOfWork)
        {
        }
      
        public IActionResult Index()
        {
            return View();
        }
        
       
    }
}