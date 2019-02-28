﻿using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class SitemapController : ControllerBase
    {
        public SitemapController(IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork) : base(configurationSvc, unitOfWork)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}