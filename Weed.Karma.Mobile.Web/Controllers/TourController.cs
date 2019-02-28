using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class TourController : ControllerBase
    {
        public TourController(IConfigurationService configuration, IUnitOfWork unitOfWork) : base(configuration, unitOfWork)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}