﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace storeadmin.Controllers
{
    public class OperatorInfoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}