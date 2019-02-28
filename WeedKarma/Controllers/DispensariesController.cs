using AutoMapper;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Models.DeliveryModels;
using Weed.Karma.Models.Filters;
using Weed.Karma.Models.StoreModels;

namespace WeedKarma.Controllers
{
    public class DispensariesController : ControllerBase
    {
        private readonly IStoreService storeService;
        private readonly IMapper mapper;
        private readonly IRegionService regionService;
        public DispensariesController(
            IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork,
            IStoreService storeService,
            IMapper mapper,
            IRegionService regionService) : base(configurationSvc, unitOfWork)
        {
            this.storeService = storeService;
            this.mapper = mapper;
            this.regionService = regionService;
        }

        [HttpGet]
        public IActionResult Index(string cityCode)
        {
            return View();
        }

        private string ChangeTimezoneOfHour(string arg, int timeZone, int destTimeZone)
        {
            var time = TimeSpan.ParseExact(arg, @"hh\:mm", CultureInfo.InvariantCulture);
            time = time.Add(TimeSpan.FromHours(timeZone)).Subtract(TimeSpan.FromHours(destTimeZone));
            return time.ToString(@"hh\:mm");
        }
        [HttpGet]
        public JsonResult BestOffers(int id)
        {
            var result = storeService.GetBestOfferByRegionId(id);
            List<AddStoreViewModel> addStore = mapper.Map<List<AddStoreViewModel>>(result);


            return Json(addStore);
        }

        public JsonResult GetStoresByRegion(string cityCode)
        {
            var result = regionService.GetCityIdbyAbbreviation(cityCode);
            var storeInfo = storeService.GetStoresByCityId(result.Id);
            List<DispensariesStoresViewModel> storeViewModel = new List<DispensariesStoresViewModel>();
            storeViewModel = mapper.Map<List<DispensariesStoresViewModel>>(storeInfo);
            return Json(storeViewModel);
        }

        public JsonResult DispensariesFilters(DispensariesFiltersViewModel dispensariesFilters)
        {
            return null;
        }

        public JsonResult GetStoresByRegionForMap(string cityCode)
        {
            var result = regionService.GetCityIdbyAbbreviation(cityCode);
            var storeInfo = storeService.GetStoresByCityId(result.Id);
            List<DispensariesStoresViewModel> storeViewModel = new List<DispensariesStoresViewModel>();
            storeViewModel = mapper.Map<List<DispensariesStoresViewModel>>(storeInfo);
            return Json(storeViewModel);
        }
    }
}