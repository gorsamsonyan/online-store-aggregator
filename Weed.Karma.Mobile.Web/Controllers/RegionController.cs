using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Models.Region;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class RegionController : ControllerBase
    {
        private readonly IRegionService regionService;
        private readonly IMapper mapper;
        public RegionController(IConfigurationService configuration, 
            IUnitOfWork unitOfWork,
            IRegionService regionService,
            IMapper mapper) : base(configuration, unitOfWork)
        {
            this.regionService = regionService;
            this.mapper = mapper;
        }

        // GET: Region
        public ActionResult GetStates(int? id)
        {
            List<RegionViewModel> states=new List<RegionViewModel>();
            
            if (id != null)
            {
                states =  mapper.Map<List<RegionViewModel>>(regionService.GetStateByRegionId((int)id));
            }
            
            return Ok(states);
        }

        // GET: Region/Details/5
        public ActionResult GetCities(int? id)
        {
           
            List<RegionViewModel> cities = new List<RegionViewModel>();
            
            if (id != null)
            {
                cities = mapper.Map<List<RegionViewModel>>(regionService.GetCityByRegionId((int)id));
            }
            
            return Ok(cities);
        }

        // GET: Region/Create
        public ActionResult Create()
        {
            return View();
        }

    

        // GET: Region/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

     

        // GET: Region/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

    
    }
}