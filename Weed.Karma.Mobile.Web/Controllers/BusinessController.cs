using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Delivery;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Models.StoreModels;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Weed.Karma.Entities.Users;
using Microsoft.AspNetCore.Authorization;
using Weed.Karma.BLL.Interfaces.Storage;
using Weed.Karma.Models.Brand;
using Weed.Karma.Entities.Brand;
using Weed.Karma.BLL.Interfaces.Brand;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class BusinessController : ControllerBase
    {
        private readonly IStoreService storeService;
        private readonly IMapper mapper;
        private readonly IRegionService regionService;
        private readonly IStoreImagesService storeImagesService;
        private readonly IDeliveryTimeService deliveryTimeService;
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        private readonly IBlobService blobService;
        private readonly IBrandService brandService;


        public BusinessController(IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork,
             IMapper mapper, IStoreService storeService,
             IRegionService regionService,
             IStoreImagesService storeImagesService,
             IDeliveryTimeService deliveryTimeService,
             IBlobService blobService,
             IBrandService brandService,
             UserManager<User> userManager,
             SignInManager<User> signInManager) : base(configurationSvc, unitOfWork)
        {
            this.storeService = storeService;
            this.mapper = mapper;
            this.regionService = regionService;
            this.storeImagesService = storeImagesService;
            this.deliveryTimeService = deliveryTimeService;
            this.blobService = blobService;
            this.brandService = brandService;
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpGet]
        [Authorize(Roles = "Store")]
        public IActionResult AddStore()
        {
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "Store")]
        public IActionResult AddStore(AddStoreViewModel model)
        {
            ClaimsPrincipal currentUser = User;
            var id = userManager.GetUserId(currentUser);
            Guid guid = Guid.NewGuid();
            string dateTime = DateTime.Now.ToString("MM/dd/yyyy_hh-mm-ss");
            var link = blobService.SaveBlobAsync(model.LogoPath, dateTime + "-" + guid, ".jpg");

            //model.IsBestStore = true;
            try
            {
                if (ModelState.IsValid)
                {
                    Store store = new Store
                    {
                        ContactNumber = model.ContactNumber,
                        CreatedDate = model.CreatedDate,
                        IsDeleted = model.IsDeleted,
                        LicenseNumber = model.LicenseNumber,
                        LogoPath = link + "/" + dateTime + "-" + guid + ".jpg",
                        TaxNumber = model.TaxNumber,
                        ShopLegalName = model.ShopLegalName,
                        ShopName = model.ShopName,
                        UpdatedDate = model.UpdatedDate,
                        UserId = Convert.ToInt32(id),
                        WorkingHoursTo = model.WorkingHoursTo,
                        WebSite = model.WebSite,
                        WorkingHoursFrom = model.WorkingHoursFrom,
                        PhysicalAddress = model.PhysicalAddress,
                        LegalAddress = model.LegalAddress,
                        RegionId = model.RegionId,
                        Description = model.Description
                    };
                    for (int i = 0; i < model.Weekends.Count; i++)
                    {
                        if (i == 0)
                        {
                            store.Weekends += model.Weekends[i];
                        }
                        else
                        {
                            store.Weekends += "," + model.Weekends[i];
                        }
                    }
                    storeService.AddStore(store);
                    DeliveryTime delivery = new DeliveryTime
                    {
                        Id = store.Id,
                        DeliveryPrice = model.DeliveryPrice,
                        DeliveryRegionId = model.DeliveryRegionId,
                        DeliveryTimeFrom = model.DeliveryTimeFrom,
                        DeliveryTimeTo = model.DeliveryTimeTo,
                        IsDeleted = model.IsDeleted,
                        MinOrderDelivery = model.MinOrderDelivery,
                        CreatedDate = DateTime.UtcNow,
                        UpdatedDate = DateTime.UtcNow
                    };
                    StoreImage storeImage = new StoreImage
                    {
                        Id = store.Id,
                        ImageName = model.ImageSrc,
                        ImagePath = model.ImageSrc,
                        CreatedDate = DateTime.UtcNow,
                        UpdatedDate = DateTime.UtcNow,
                        IsDeleted = false
                    };
                    storeImagesService.AddStoreImages(storeImage);
                    deliveryTimeService.AddDeliveryTime(delivery);
                    Save();
                    return View(true);
                }
                ModelState.AddModelError("Email", "RegisterModel.Email.Exist");
                return View(ModelState);
            }
            catch (Exception e) { }
            return View(ModelState);
        }


        [HttpGet]
        [Authorize(Roles = "Brand")]
        public IActionResult AddBrand()
        {
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "Brand")]
        public IActionResult AddBrand(InsertBrandViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    ClaimsPrincipal currentUser = User;
                    var id = userManager.GetUserId(currentUser);

                    Guid guid = Guid.NewGuid();
                    Guid guid2 = Guid.NewGuid();
                    string dateTime = DateTime.Now.ToString("MM/dd/yyyy_hh-mm-ss");
                    var coverPath = blobService.SaveBlobAsync(model.CoverPath, dateTime + "-" + guid, ".jpg");
                    var logoPath = blobService.SaveBlobAsync(model.LogoPath, dateTime + "-" + guid2, ".jpg");

                    InsertBrandViewModel insertBrandViewModel = new InsertBrandViewModel
                    {
                        Name = model.Name,
                        CoverPath = coverPath + "/" + dateTime + "-" + guid + ".jpg",
                        LogoPath = logoPath + "/" + dateTime + "-" + guid2 + ".jpg",
                        RegionId = model.RegionId,
                        Description = model.Description,
                        UserId = Convert.ToInt32(id),
                        IsBestBrand = false,
                        CreatedDate = DateTime.UtcNow,
                        UpdatedDate = DateTime.UtcNow,
                        IsDeleted = false
                    };
                    Brand brand = new Brand();
                    brand = mapper.Map<Brand>(insertBrandViewModel);
                    brandService.InsertBrand(brand);
                    Save();
                }
                catch (Exception e)
                {
                    return View();
                }
            }
            return View();
        }
    }
}