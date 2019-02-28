using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.BLL.Regions;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Models.StoreModels;

namespace WeedKarma.Controllers
{
    public class HomeController : ControllerBase
    {
        private readonly IRegionService region;
        private readonly IStoreService storeService;
        private readonly IMapper mapper;
        public HomeController(IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork,
            IRegionService region,
            IStoreService storeService,
            IMapper mapper) : base(configurationSvc, unitOfWork)
        {
            this.storeService = storeService;
            this.region = region;
            this.mapper = mapper;
        }

        public IActionResult Index()
        {
            //if (cityCode == null)
            //{
            //    return View("_NoLocaltion");
            //}
            //else
            //{
                return View();
           // }

        }



        [HttpGet("home/cities/{stateId}")]
        public IActionResult GetCities(int stateId)
        {
            //var cities = contextAdmin.City.Include(x => x.Parent);
            //var data = cities
            //    .Where(x => x.Parent != null && x.ParentId == stateId).OrderBy(x => x.CityName).ToList();
            //return Json(data);
            return View();
        }


    }
}