using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Brand;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.BLL.Interfaces.MetaData;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.BLL.Interfaces.Storage;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.DealModels;
using Weed.Karma.Models.Brand;
using Weed.Karma.Models.DeliveryModels;
using Weed.Karma.Models.Members;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.StoreModels;
using Weed.Karma.Models.UnitModels;
using Weed.Karma.BLL.Interfaces.Cart;
using Microsoft.AspNetCore.SignalR;
using NToastNotify;
using Weed.Karma.Mobile.Web.Hubs;
using Weed.Karma.Entities.MetaData;
using Weed.Karma.Enums;
using WeedKarma.Helpers;

namespace Weed.Karma.Mobile.Web.Controllers
{
    [Authorize(Roles = "Store")]
    public class StoreController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IStoreProductService storeProductService;
        private readonly IProductUnitService productUnitService;
        private readonly IProductCategoryService productCategoryService;
        private readonly IStoreService storeService;
        private readonly IDeliveryTimeService deliveryTimeService;
        private readonly IStoreProductUnitService storeProductUnitService;
        private readonly IMetaDataService metaDataService;
        private readonly IBlobService blobService;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IBrandService brandService;
        private readonly IBrandCategoryService brandCategoryService;
        private readonly IBrandProductService brandProductService;
        private readonly ICartItemService cartItemService;
        private readonly IHubContext<OrderHub> updaterHubContext;
        private readonly IOrderDeliveryService orderDeliveryService;
        private readonly IToastNotification toastNotification;


        public StoreController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IStoreProductService storeProductService,
            IProductUnitService productUnitService,
            IStoreService storeService,
            IProductCategoryService productCategoryService,
            IDeliveryTimeService deliveryTimeService,
            IStoreProductUnitService storeProductUnitService,
            IMetaDataService metaDataService,
            IBlobService blobService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IBrandService brandService,
            IBrandCategoryService brandCategoryService,
            IBrandProductService brandProductService,
            ICartItemService cartItemService,
            IOrderDeliveryService orderDeliveryService,
            IHubContext<OrderHub> updaterHubContext,
            IToastNotification toastNotification) : base(configuration, unitOfWork)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
            this.storeProductService = storeProductService;
            this.productUnitService = productUnitService;
            this.storeService = storeService;
            this.productCategoryService = productCategoryService;
            this.deliveryTimeService = deliveryTimeService;
            this.storeProductUnitService = storeProductUnitService;
            this.metaDataService = metaDataService;
            this.blobService = blobService;
            this.brandService = brandService;
            this.brandCategoryService = brandCategoryService;
            this.brandProductService = brandProductService;
            this.cartItemService = cartItemService;
            this.updaterHubContext = updaterHubContext;
            this.orderDeliveryService = orderDeliveryService;
            this.toastNotification = toastNotification;

        }

        [HttpGet]
        public IActionResult AddProduct(int? id)
        {
            if (id != null)
            {
                ProductCategoryUnitViewModel productCategoryUnit = new ProductCategoryUnitViewModel
                {
                    StoreId = (int)id,
                    Units = mapper.Map<List<UnitViewModel>>(productUnitService.GetProductUnits()),
                    Categories = mapper.Map<List<ProductCategoryViewModel>>(productCategoryService.GetProductCategories())
                };
                return View(productCategoryUnit);
            }

            return Redirect("/Store");
        }

        [HttpPost]
        public IActionResult AddProduct(AddProductViewModel model)
        {
            Guid guid = Guid.NewGuid();
            string dateTime = DateTime.Now.ToString("MM/dd/yyyy_hh-mm-ss");

            List<StoreProductUnitViewModel> storeProductUnits = new List<StoreProductUnitViewModel>();

            var link = blobService.SaveBlobAsync(model.ImagePath, dateTime + "-" + guid, ".jpg");


            AddSingleProductViewModel addSingleProduct = new AddSingleProductViewModel
            {
                ImagePath = link + "/" + dateTime + "-" + guid + ".jpg",
                ProductName = model.ProductName,
                StoreId = model.StoreId,
                Description = model.Description,
                ProductCategoryId = Convert.ToInt32(model.CategoryName),
                CreatedDate = DateTime.UtcNow,
                UpdatedDate = DateTime.UtcNow,
                IsDeleted = false,
                StoreProductUnits = storeProductUnits,
                UrlByName = TextToUrlHelper.GetClearUrl(model.ProductName)


            };
            StoreProduct storeProduct = mapper.Map<StoreProduct>(addSingleProduct);
            storeProductService.AddStoreProduct(storeProduct);


            List<MetaDataViewModel> metaDataVm = new List<MetaDataViewModel>();

            string[] hashtags = model.Hashtag.Split(',');

            for (int i = 0; i < hashtags.Length; i++)
            {
                metaDataVm.Add(new MetaDataViewModel
                {
                    Hashtag = hashtags[i],
                    StoreProductId = storeProduct.Id,
                    UpdatedDate = DateTime.UtcNow,
                    IsDeleted = false,
                    CreatedDate = DateTime.UtcNow
                });
            }

            List<MetaData> metaDataEntity = mapper.Map<List<MetaData>>(metaDataVm);

            metaDataService.AddMetaData(metaDataEntity);


            for (int i = 0; i < model.Price.Count; i++)
            {
                storeProductUnits.Add(new StoreProductUnitViewModel
                {
                    CurrentPrice = model.Price[i],
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    IsDeleted = false,
                    UnitId = Convert.ToInt32(model.Size[i]),
                    StoreProductId = storeProduct.Id
                });
            }



            List<StoreProductUnit> storeProductUnitas = mapper.Map<List<StoreProductUnit>>(storeProductUnits);
            storeProductUnitService.Insert(storeProductUnitas);

            Save();
            toastNotification.AddSuccessToastMessage("Product " + model.ProductName + " added successfully");
            return Redirect("/Store/AllProducts");
        }


        [HttpGet]
        [AllowAnonymous]
        [Route("Store/Products/{storeUrlByName}/{UrlByName?}")]
        public IActionResult Products(string storeUrlByName, string urlByName)
        {
            var store = storeService.GetStoreInfoByStoreId(storeUrlByName);
            //var categoryCount = brandCategoryService.GetAllBrandCategories();
            if (urlByName == null)
            {
                StoreProductsViewModel storeProductsViewModel = new StoreProductsViewModel
                {
                    DeliveryTime = mapper.Map<DeliveryTimeViewModel>(deliveryTimeService.GetStoreDelivery(store.Id)),
                    Products = mapper.Map<List<ProductViewModel>>(storeProductService.GetStoreProductsByStoreId(storeUrlByName, null)),
                    Store = mapper.Map<StoreInfoViewModel>(storeService.GetStoreInfoByStoreId(storeUrlByName)),
                    ProductCategory = mapper.Map<List<ProductCategoryViewModel>>(productCategoryService.GetProductCategories()),
                };

                var productSize = productUnitService.GetProductUnits();

                foreach (var element in storeProductsViewModel.Products)
                {
                    foreach (var item in element.StoreProductUnits)
                    {
                        item.Size = productSize.FirstOrDefault(w => w.Id == item.UnitId)?.Size;
                    }
                }
                return View(storeProductsViewModel);
            }
            else
            {
                StoreProductsViewModel storeProductsViewModel = new StoreProductsViewModel
                {
                    DeliveryTime = mapper.Map<DeliveryTimeViewModel>(deliveryTimeService.GetStoreDelivery(store.Id)),
                    Products = mapper.Map<List<ProductViewModel>>(storeProductService.GetStoreProductsByStoreId(storeUrlByName, urlByName)),
                    Store = mapper.Map<StoreInfoViewModel>(storeService.GetStoreInfoByStoreId(storeUrlByName)),
                    ProductCategory = mapper.Map<List<ProductCategoryViewModel>>(productCategoryService.GetProductCategories()),
                };

                var productSize = productUnitService.GetProductUnits();

                foreach (var element in storeProductsViewModel.Products)
                {
                    foreach (var item in element.StoreProductUnits)
                    {
                        item.Size = productSize.FirstOrDefault(w => w.Id == item.UnitId)?.Size;
                    }
                }
                return View(storeProductsViewModel);
            }

        }

        [HttpPost]
        public IActionResult Products()
        {
            return View();
        }

        public async Task<IActionResult> Index()
        {

            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            CurrentUserViewModel currentUser = mapper.Map<CurrentUserViewModel>(user);
            var result = storeService.GetAllUserStoresByID(currentUser.Id);
            List<StoreInfoViewModel> storeInfo = mapper.Map<List<StoreInfoViewModel>>(result);

            return View(storeInfo);
        }
        [HttpPost]
        public async Task<JsonResult> GetStoresJson()
        {

            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            CurrentUserViewModel currentUser = mapper.Map<CurrentUserViewModel>(user);
            var result = storeService.GetAllUserStoresByID(currentUser.Id);
            List<StoreInfoViewModel> storeInfo = mapper.Map<List<StoreInfoViewModel>>(result);

            return Json(storeInfo);
        }
        public async Task<IActionResult> AllProducts()
        {
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            var result = storeProductService.GetStoreProducts(user.Id);

            List<AllProductsViewModel> allProducts = new List<AllProductsViewModel>();
            foreach (var item in result)
            {
                allProducts.Add(new AllProductsViewModel()
                {
                    Id = item.Id,
                    ProductName = item.ProductName,
                    StoreId = item.StoreId,
                    ShopName = item.Store.ShopName,
                    ProductCategoryId = item.ProductCategoryId,
                    CreatedDate = item.CreatedDate,
                    UpdatedDate = item.UpdatedDate,
                    IsDeleted = item.IsDeleted,
                    Description = item.Description,
                    IsDeal = item.IsDeal
                });
            }
            return View(allProducts);
        }

        public async Task<IActionResult> AllDeals()
        {
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            var result = storeProductService.GetDeals(user.Id);

            List<AllDealsViewModel> allDeals = new List<AllDealsViewModel>();
            foreach (var item in result)
            {
                allDeals.Add(new AllDealsViewModel()
                {
                    Id = item.Id,
                    ProductName = item.ProductName,
                    StoreId = item.StoreId,
                    ShopName = item.Store.ShopName,
                    ProductCategoryId = item.ProductCategoryId,
                    CreatedDate = item.CreatedDate,
                    UpdatedDate = item.UpdatedDate,
                    IsDeleted = item.IsDeleted,
                    Description = item.Description,
                    IsDeal = item.IsDeal
                });
            }
            return View(allDeals);
        }
        [HttpGet]
        public IActionResult AddBrandProduct(int id)
        {
            BrandProductViewModel brandProduct = new BrandProductViewModel
            {
                StoreId = id,
                Brands = mapper.Map<List<BrandViewModel>>(brandService.GetBrands()),
                ProductCategories = mapper.Map<List<ProductCategoryViewModel>>(productCategoryService.GetProductCategories()),
                ProductUnits = mapper.Map<List<ProductUnitViewModel>>(productUnitService.GetProductUnits())
            };
            return View(brandProduct);
        }

        [HttpPost]
        public IActionResult AddBrandProduct(AddStoreBrandProductViewModel model)
        {
            var result = brandProductService.GetBrandProductByBrandProductId(model.BrandProductId);

            List<MetaDataViewModel> metaData = new List<MetaDataViewModel>();
            List<StoreProductUnitViewModel> storeProductUnits = new List<StoreProductUnitViewModel>();
            AddSingleProductViewModel addSingleProduct = new AddSingleProductViewModel
            {
                ImagePath = result.ProductImage,
                ProductName = result.Name,
                StoreId = model.StoreId,
                Description = result.Description,
                ProductCategoryId = model.CategoryId,
                CreatedDate = DateTime.UtcNow,
                UpdatedDate = DateTime.UtcNow,
                IsDeleted = false,
                StoreProductUnits = storeProductUnits,
                BrandProductId = model.BrandProductId,
                UrlByName = TextToUrlHelper.GetClearUrl(result.Name)

            };
            StoreProduct storeProduct = mapper.Map<StoreProduct>(addSingleProduct);
            storeProductService.AddStoreProduct(storeProduct);

            foreach (var item in model.Hashtag)
            {
                metaData.Add(new MetaDataViewModel
                {
                    
                    Hashtag = "afwafaw",
                    UpdatedDate = DateTime.UtcNow,
                    IsDeleted = false,
                    CreatedDate = DateTime.UtcNow
                });

                for (int i = 0; i < model.Price.Count; i++)
                {
                    storeProductUnits.Add(new StoreProductUnitViewModel
                    {
                        CurrentPrice = model.Price[i],
                        CreatedDate = DateTime.UtcNow,
                        UpdatedDate = DateTime.UtcNow,
                        IsDeleted = false,
                        UnitId = Convert.ToInt32(model.Size[i]),
                        StoreProductId = storeProduct.Id
                    });
                }


            }
            List<StoreProductUnit> storeProductUnitas = mapper.Map<List<StoreProductUnit>>(storeProductUnits);
            storeProductUnitService.Insert(storeProductUnitas);

            Save();
            toastNotification.AddSuccessToastMessage("Product " + storeProduct.ProductName + " added successfully");
            return Redirect("/Store/AllProducts");
        }

        [AllowAnonymous]
        [Route("Store/Info/{storeUrlByName}")]
        public IActionResult Info(string storeUrlByName)
        {
            FullStoreInfoViewModel store = mapper.Map<FullStoreInfoViewModel>(storeService.GetFullStoreInfoByStoreId(storeUrlByName));
            return View(store);
        }

        public IActionResult Orders(int id)
        {
            return View();
        }

        [Authorize]
        [HttpGet]
        public IActionResult EditProduct()
        {
            EditStoreProduct productCategoryUnit = new EditStoreProduct
            {
                Units = mapper.Map<List<UnitViewModel>>(productUnitService.GetProductUnits()),
                Categories = mapper.Map<List<ProductCategoryViewModel>>(productCategoryService.GetProductCategories())
            };
            return View(productCategoryUnit);
        }

        [Authorize]
        [HttpPost]
        public IActionResult EditProduct(int id)
        {
            return View();
        }

        [Authorize]
        [HttpGet]
        public IActionResult ViewOrder(int id)
        {
            var cartIds = cartItemService.GetCartIdByCartItemId(id);

            List<OrderDeliveryViewModel> viewOrders = new List<OrderDeliveryViewModel>();

            foreach (var item in cartIds)
            {
                OrderDeliveryViewModel orderDelivery =
                    mapper.Map<OrderDeliveryViewModel>(orderDeliveryService.GetOrderDeliveryByCartId(item.CartId));
                orderDelivery.Id = id;
                orderDelivery.Status = Convert.ToString(cartIds.Select(s => s.Status).First());
                viewOrders.Add(orderDelivery);
            }

            return View(viewOrders);
        }
        [Authorize]
        [HttpPost]
        public IActionResult ViewOrder(OrderDeliveryCheckOutViewModel model)
        {
            if (ModelState.IsValid)
            {
                var orderDelivery = cartItemService.GetItemByCartId(model.ItemId);

                orderDelivery.Status = model.NewOrder;

                cartItemService.Update(orderDelivery);

                Save();
                toastNotification.AddSuccessToastMessage("Order <b>" + orderDelivery.StoreProduct.ProductName + "</b> status change to " + GetNotificationStatus.GetNotificationStatuses(model.NewOrder));

                return RedirectToAction("Orders", "Store");
            }

            return View();
        }

    }
}