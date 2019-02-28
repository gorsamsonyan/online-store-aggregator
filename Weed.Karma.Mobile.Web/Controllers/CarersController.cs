using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class CarersController : ControllerBase
    {
        public CarersController(IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork) : base(configurationSvc, unitOfWork)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}