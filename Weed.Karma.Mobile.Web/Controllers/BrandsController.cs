using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Brand;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.BLL.Interfaces.Storage;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Entities.Product;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.Brand;
using Weed.Karma.Models.Members;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.StoreModels;
using WeedKarma.Helpers;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class BrandsController : ControllerBase
    {
        private readonly IBrandService brandService;
        private readonly IMapper mapper;
        private readonly IRegionService regionService;
        private readonly IBrandCategoryService brandCategoryService;
        private readonly IProductCategoryService productCategoryService;
        private readonly IBrandProductService brandProductService;
        private readonly IStoreProductService storeProductService;
        private readonly UserManager<User> userManager;
        private readonly IBlobService blobService;
        private readonly IStoreService storeService;
        private readonly IProductUnitService productUnitService;
        private readonly IStoreProductUnitService storeProductUnitService;


        public BrandsController(
            IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            IBrandService brandService,
            IBrandCategoryService brandCategoryService,
            IBrandProductService brandProductService,
            IProductCategoryService productCategoryService,
            IBlobService blobService,
            IStoreService storeService,
            IStoreProductService storeProductService,
            IMapper mapper,
            UserManager<User> userManager,
            IRegionService regionService,
            IProductUnitService productUnitService,
            IStoreProductUnitService storeProductUnitService) : base(configuration, unitOfWork)
        {
            this.brandService = brandService;
            this.mapper = mapper;
            this.regionService = regionService;
            this.brandCategoryService = brandCategoryService;
            this.productCategoryService = productCategoryService;
            this.blobService = blobService;
            this.storeProductService = storeProductService;
            this.brandProductService = brandProductService;
            this.userManager = userManager;
            this.storeService = storeService;
            this.productUnitService = productUnitService;
            this.storeProductUnitService = storeProductUnitService;
        }


        // GET: Brands
        //[HttpGet]
        public IActionResult Index(string cityCode)
        {
            List<BrandViewModel> brands = new List<BrandViewModel>();
            var result = regionService.GetCityIdbyAbbreviation(cityCode);
            List<Brand> brandsEntity = new List<Brand>();
            brandsEntity = brandService.GetAllBestBrands(result.Id);
            brands = mapper.Map<List<BrandViewModel>>(brandsEntity);
            var brandProds = brandProductService.GetBrandProducts();

            BrandAndProductsViewModel brandAndProductsViewModel = new BrandAndProductsViewModel();

            brandAndProductsViewModel.Brands = brands;
            brandAndProductsViewModel.BrandProducts = mapper.Map<List<BrandProductLowInfoViewModel>>(brandProds);

            //brandAndProductsViewModel = mapper.Map<BrandAndProductsViewModel>(brandProds);

            return View(brandAndProductsViewModel);
        }

        [HttpGet]
        public async Task<IActionResult> AllBrands()
        {
            List<BrandViewModel> brandViewModel = new List<BrandViewModel>();
            CurrentUserViewModel currentUser = new CurrentUserViewModel();
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            currentUser = mapper.Map<CurrentUserViewModel>(user);
            brandService.GetUserBrands(currentUser.Id);
            brandViewModel = mapper.Map<List<BrandViewModel>>(brandService.GetUserBrands(currentUser.Id));

            return View(brandViewModel);
        }
        [Route("Brands/Info/{brandUrlByName}/{brandProductUrlByName}")]
        public IActionResult Info(string brandUrlByName, string brandProductUrlByName)
        {
            var result = storeProductService.GetStoreProductsByBrandProductId(brandUrlByName);
            List<StoreProductUnitViewModel> storeProductUnits = new List<StoreProductUnitViewModel>();
            StoreProductUnitViewModel storeProductUnit = new StoreProductUnitViewModel();
            foreach (var item in result)
            {
                var a = storeProductUnitService.GetStoreProductUnitsByProductId(item.Id);
                foreach (var ss in a)
                {
                    storeProductUnit = new StoreProductUnitViewModel()
                    {
                        Id = ss.Id,
                        CurrentPrice = ss.CurrentPrice,
                        Size = ss.Unit.Size,
                        UnitId = ss.UnitId,
                        StoreProductId = ss.StoreProductId

                    };
                    storeProductUnits.Add(storeProductUnit);
                }
            }

            BrandProductInfoViewModel brandProduct = new BrandProductInfoViewModel();
            List<FullStoreInfoViewModel> fullStoreInfos = new List<FullStoreInfoViewModel>();

            brandProduct.BrandProduct = mapper.Map<GetBrandProductViewModel>(brandProductService.GetBrandProduct(brandProductUrlByName));
            brandProduct.Brand = mapper.Map<BrandViewModel>(brandService.GetSingleBrandByBrandId(brandUrlByName));
            foreach (var item in result)
            {
                fullStoreInfos.Add(new FullStoreInfoViewModel
                {
                    Id = item.Store.Id,
                    ShopName = item.Store.ShopName,
                    RegionId = item.Store.RegionId,
                    StoreProductId = item.Id

                });
            }
            var productSize = productUnitService.GetProductUnits();

            brandProduct.Stores = fullStoreInfos;
            brandProduct.Units = storeProductUnits;
            return View(brandProduct);
        }

        [HttpGet]
        [Route("Brands/Products/{brandUrlByName}")]
        public IActionResult Products(string brandUrlByName)
        {
            
            BrandAllproductsViewModel brandAllproductsViewModel = new BrandAllproductsViewModel();
            BrandViewModel brandViewModel = new BrandViewModel();
            List<SingleBrandProductsViewModel> singleBrandProductsViewModel = new List<SingleBrandProductsViewModel>();

            brandViewModel = mapper.Map<BrandViewModel>(brandService.GetSingleBrandByBrandId(brandUrlByName /*to brandProductUrlByName*/));
            brandAllproductsViewModel.BrandViewModel = brandViewModel;

            singleBrandProductsViewModel = mapper.Map<List<SingleBrandProductsViewModel>>
                (brandProductService.GetAllBrandProductsByBrandId(brandUrlByName));

            brandAllproductsViewModel.SingleBrandProductsViewModels = singleBrandProductsViewModel;

            return View(brandAllproductsViewModel);
        }

        [HttpPost]
        public JsonResult GetBrandsByRegion(string cityCode)
        {
            List<BrandViewModel> brands = new List<BrandViewModel>();
            var result = regionService.GetCityIdbyAbbreviation(cityCode);
            List<Brand> brandsEntity = new List<Brand>();
            brandsEntity = brandService.GetBrandsByRegion(result.Id);
            brands = mapper.Map<List<BrandViewModel>>(brandsEntity);
            return Json(brands);
        }


        [HttpGet]
        public IActionResult AddProduct(int id)
        {
            BrandProductViewModel brandProduct = new BrandProductViewModel();
            List<ProductCategory> categories = new List<ProductCategory>();
            categories = productCategoryService.GetProductCategoriesForBrand();
            brandProduct.BrandCategories = mapper.Map<List<BrandCategoriesViewModel>>(categories);
            brandProduct.BrandId = id;
         
            return View(brandProduct);
        }


        [HttpPost]
        public IActionResult AddProduct(AddBrandProductViewModel model)
        {
            if (ModelState.IsValid)
            {
                Guid guid = Guid.NewGuid();
                string dateTime = DateTime.Now.ToString("MM/dd/yyyy_hh-mm-ss");
                var link = blobService.SaveBlobAsync(model.LogoPath, dateTime + "-" + guid, ".jpg");

                BrandProducts brandProduct = new BrandProducts();
                brandProduct = mapper.Map<BrandProducts>(model);
                brandProduct.BrandCategoryId = model.CategoryId;
                brandProduct.ProductImage = link + "/" + dateTime + "-" + guid + ".jpg";
                brandProduct.UrlByName = TextToUrlHelper.GetClearUrl(model.Name);

                brandProductService.InsertBrandProduct(brandProduct);
                Save();
            }
            return Redirect("/Brands/AllBrands");
        }

        public JsonResult BrandProductsByBrandId(int id)
        {
            List<GetBrandProductViewModel> brandProduct =
                mapper.Map<List<GetBrandProductViewModel>>(brandProductService.GetBrandProductsByBrandId(id));
            return Json(brandProduct);
        }
    }
}