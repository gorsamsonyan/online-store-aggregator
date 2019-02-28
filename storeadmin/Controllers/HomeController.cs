using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using storeadmin.ScaffoldModels;

namespace storeadmin.Controllers
{
    public class HomeController : Controller
    {
        private readonly weedkarmaContext contextAdmin;
        public HomeController(weedkarmaContext dbContextAdmin)
        {
            contextAdmin = dbContextAdmin;
        }

        public IActionResult Index()
        {
           
            return LocalRedirect("~/Account/Login");
          
          //return View();
        }


    }
}
