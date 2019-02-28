using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using storeadmin.Models.File;
using storeadmin.ScaffoldModels;


namespace storeadmin.Controllers
{
    public class StoreInfoController : BaseController
    {

        IHostingEnvironment _appEnvironment;
        public StoreInfoController(weedkarmaContext context, IHostingEnvironment appEnvironment) : base(context)
        {
            _appEnvironment = appEnvironment;
        }

        public IActionResult Index()
        {
            //StateCityRegion scr = new StateCityRegion();
            //scr._states = contextAdmin.state.ToList();
            //scr._city = contextAdmin.city.ToList();
            //scr._region = contextAdmin.region.ToList();
           
            return View();
        }

        [HttpGet]
        public IActionResult Create()
        {
            List<State> StateItems = contextAdmin.State.ToList();
            ViewBag.StateItems = new SelectList(StateItems, "Id", "StateName");
            // es verj ha...es store-@ erevi ViewBag-ov bdi xrkes,chidem designov inchx e 
           
            // var liststore = new BusinessControl();
            //bayc es voncvor index-i mej piti liner voch te create-i ha eli  :D lav de du texapoxi ed es elnem eli okaxper jan 
            return View();
        }

        public static byte[] ReadFully(Stream input)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                input.CopyTo(ms);
                return ms.ToArray();
            }
        }

        [HttpPost]
        public  IActionResult Create(Store store , IFormFile imageUpload,IFormFile logoUpload)
        {
           
            if (ModelState.IsValid)
            {
                if (imageUpload != null)
                {

                    store.ImageBase64 = Convert.ToBase64String(ReadFully(imageUpload.OpenReadStream()));
                }
                if (logoUpload!=null)
                {
                    store.LogoBase64 = Convert.ToBase64String(ReadFully(logoUpload.OpenReadStream()));

                }


                var userId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
                store.ParentId = userId;
                //mi hat cuyc tur chjoki inchi het es ok 
                // string days_Value = string.Format("{0},{1},{2},{3},{5},{6}", store.Deys_Monday, store.Deys_Tuesday, store.Deys_Wednesday, store.Deys_Thursday, store.Deys_Friday, store.Deys_Saturday, store.Deys_Sunday);
                contextAdmin.Store.Add(store);
                // store.WeekendDeys = days_Value;
                //hmi inch@ chi ashxati?  axpers codys normal ashxatum a xndiry et chi xndir tanel serveri vra paken sarqel;l paheln a en depqum erb c admini dostupi 
                contextAdmin.SaveChanges();
                return RedirectToAction("Create");
            }
            return View(store);

            //axpers inj petqa tvyal mtac useri idn stanam u qcem stori parenti mej
        }

        public JsonResult getCity(int parentId)
        {
            List<City> listCity = new List<City>();
            listCity = contextAdmin.City.Where(x => x.ParentId == parentId).ToList();
            //listCity.Insert(0, new City { ID = 0, CityName = "Please Select City"});
            return Json(new SelectList(listCity, "Id", "CityName"));
        }

        public JsonResult getRegion(int parentId)
        {
            List<Region> listRegion = new List<Region>();
            listRegion = contextAdmin.Region.Where(x => x.ParentId == parentId).ToList();
            //listCity.Insert(0, new City { ID = 0, CityName = "Please Select City"});
            return Json(new SelectList(listRegion, "Id", "RegionName"));
        }


        
    }
}
