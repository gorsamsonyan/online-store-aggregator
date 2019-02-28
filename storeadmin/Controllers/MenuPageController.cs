using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using storeadmin.ScaffoldModels;

namespace storeadmin.Controllers
{
    public class MenuPageController : BaseController
    {
        public MenuPageController(weedkarmaContext context) : base(context)
        {
        }

        public IActionResult Index()
        {
            //var listMenu = contextAdmin.menuControls.ToList();
            return View();
        }

        [HttpGet]
        public IActionResult Create()
        {
            var userId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier).Value;

            List<Store> StoreItems = contextAdmin.Store.Where(x => x.ParentId == userId).ToList();
            ViewBag.StoreItems = new SelectList(StoreItems, "Id", "ShopName");

            ViewBag.Menus = contextAdmin.Menu.Include(x => x.Parent)
                .Where(x => x.Parent != null && x.Parent.ParentId != null && x.Parent.ParentId == userId);

            //List<State> StateItems = contextAdmin.State.ToList();
            //ViewBag.StateItems = new SelectList(StateItems, "Id", "StateName");

            return View();
        }

        [HttpPost]
        public IActionResult Create(Menu menuControl)
        {
            if (ModelState.IsValid)
            {
                
                
                contextAdmin.Menu.Add(menuControl);
                contextAdmin.SaveChanges();
                return RedirectToAction("Create");
            }
            return View(menuControl);
        }
        [HttpGet]
        public IActionResult Details()
        {
            List<Menu> StoreItems = contextAdmin.Menu.ToList();
            //ViewBag.StoreItems = new SelectList(StoreItems, "Id", "ShopName");
            return View(StoreItems);
        }
    }
}