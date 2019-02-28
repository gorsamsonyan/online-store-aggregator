using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Deals;
using Weed.Karma.Entities.Product;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.DealModels;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.UnitModels;

namespace WeedKarma.Controllers
{
    public class DealsController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IStoreProductService storeProductService;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IProductUnitService productUnitService;
        private readonly IStoreProductUnitService storeProductUnitService;
        private readonly IToastNotification toastNotification;
        private readonly IProductDealService productDealService;
 


        public DealsController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IStoreProductService storeProductService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IProductUnitService productUnitService,
            IStoreProductUnitService storeProductUnitService,
            IToastNotification toastNotification,
            IProductDealService productDealService
     ) : base(configuration, unitOfWork)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
            this.storeProductService = storeProductService;
            this.productUnitService = productUnitService;
            this.storeProductUnitService = storeProductUnitService;
            this.toastNotification = toastNotification;
            this.productDealService = productDealService;
        }

        public IActionResult Index()
        {
            DealsViewModel allDeals = new DealsViewModel();

            var klir = productDealService.GetBestDealProducts();
            var dzon = productDealService.GetDealProducts();

            allDeals.BestDeals = mapper.Map<List<BestDealViewModel>>(productDealService.GetBestDealProducts());
            allDeals.Deals = mapper.Map<List<DealViewModel>>(productDealService.GetDealProducts());

            //foreach (var item in allDeals.BestDeals)
            //{

            //    var a = storeProductUnitService.GetStoreProductUnitsByProductId(item.Id);
            //    foreach (var ss in a)
            //    {
            //        item.Unit = new StoreProductUnitViewModel()
            //        {
            //            Id = ss.Id,
            //            CurrentPrice = ss.CurrentPrice,
            //            Size = ss.Unit.Size,
            //            UnitId = ss.UnitId,
            //            StoreProductId = ss.StoreProductId

            //        };
            //    }
            //}

            //foreach (var item in allDeals.Deals)
            //{
            //    var a = storeProductUnitService.GetStoreProductUnitsByProductId(item.Id);
            //    foreach (var ss in a)
            //    {
            //        item.Unit = new StoreProductUnitViewModel()
            //        {
            //            Id = ss.Id,
            //            CurrentPrice = ss.CurrentPrice,
            //            Size = ss.Unit.Size,
            //            UnitId = ss.UnitId,
            //            StoreProductId = ss.StoreProductId

            //        };
            //    }
            //}

            return View(allDeals);
        }

        public async Task<IActionResult> AddToDeal(int id)
        {
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            var result = storeProductService.GetProductByProductId(id);
            List<UnitViewModel> productUnits = new List<UnitViewModel>();


            AddToDealViewModel product = new AddToDealViewModel
            {
                Id = result.Id,
                ProductName = result.ProductName,
                StoreId = result.StoreId,
                ProductCategoryId = result.ProductCategoryId,
                CreatedDate = result.CreatedDate,
                UpdatedDate = result.UpdatedDate,
                IsDeleted = result.IsDeleted,
                Description = result.Description,
                ProductUnits = productUnits,
                ImagePath = result.ImagePath
            };
         
            return View(product);
        }

        [HttpPost]
        public async Task<IActionResult> AddToDeal(InsertToDealVewModel model)
        {
            var storeProd = storeProductService.GetProductByProductId(model.StoreProductId);

            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            try
            {
                DealProduct dealsProduct = new DealProduct
                {
                    UserId = user.Id,
                    CreatedDate = DateTime.UtcNow,
                    CurrentPrice = model.CurrentPrice,
                    IsDeal = true,
                    IsActiveDeal = true,
                    IsDeleted = false,
                    ProductName = model.ProductName,
                    StoreId = model.StoreId,
                    StoreProductId = model.StoreProductId,
                    UpdatedDate = DateTime.UtcNow,
                    ImgSrc = storeProd.ImagePath
                };

                productDealService.AddDealProduct(dealsProduct);
                await SaveAsync();
                toastNotification.AddSuccessToastMessage();
                return Redirect("/Store/AllProducts");
            }
            catch (Exception e)
            {
            }
            toastNotification.AddAlertToastMessage();
            return Redirect("/Store/AllProducts");
        }
    }
}