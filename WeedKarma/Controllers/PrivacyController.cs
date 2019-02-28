using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;

namespace WeedKarma.Controllers
{
    public class PrivacyController : ControllerBase
    {
        public PrivacyController(IConfigurationService configuration,
            IUnitOfWork unitOfWork) : base(configuration, unitOfWork)
        {
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}