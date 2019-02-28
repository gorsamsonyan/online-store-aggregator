using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.DealModels;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.UnitModels;

namespace Weed.Karma.Mobile.Web.Controllers
{
    public class DealsController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IStoreProductService storeProductService;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IProductUnitService productUnitService;
        private readonly IStoreProductUnitService storeProductUnitService;

        public DealsController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IStoreProductService storeProductService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IProductUnitService productUnitService,
            IStoreProductUnitService storeProductUnitService) : base(configuration, unitOfWork)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
            this.storeProductService = storeProductService;
            this.productUnitService = productUnitService;
            this.storeProductUnitService = storeProductUnitService;
        }

        public IActionResult Index()
        {
            DealsViewModel allDeals = new DealsViewModel();

            allDeals.BestDeals = mapper.Map<List<BestDealViewModel>>(storeProductService.GetBestDeals());
            allDeals.Deals = mapper.Map<List<DealViewModel>>(storeProductService.GetAllDeals());

            foreach (var item in allDeals.BestDeals)
            {
                
                var a = storeProductUnitService.GetStoreProductUnitsByProductId(item.Id);
                foreach (var ss in a)
                {
                    item.Unit = new StoreProductUnitViewModel()
                    {
                        Id = ss.Id,
                        CurrentPrice = ss.CurrentPrice,
                        Size = ss.Unit.Size,
                        UnitId = ss.UnitId,
                        StoreProductId = ss.StoreProductId

                    };
                    
                }

               
            }

            foreach (var item in allDeals.Deals)
            {

                var a = storeProductUnitService.GetStoreProductUnitsByProductId(item.Id);
                foreach (var ss in a)
                {
                    item.Unit = new StoreProductUnitViewModel()
                    {
                        Id = ss.Id,
                        CurrentPrice = ss.CurrentPrice,
                        Size = ss.Unit.Size,
                        UnitId = ss.UnitId,
                        StoreProductId = ss.StoreProductId

                    };
                    
                }


            }

            return View(allDeals);
        }

        public async Task<IActionResult> AddToDeal(int id)
        {
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            var result = storeProductService.GetProductByProductId(id);
            List<UnitViewModel> productUnits = new List<UnitViewModel>();

            var productSizes = productUnitService.GetProductUnits();



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
                ImagePath =result.ImagePath
            };


            foreach (var element in productSizes)
            {
                productUnits.Add(new UnitViewModel()
                {
                    Id = element.Id,
                    Size = element.Size
                });
            }
            return View(product);

        }

        [HttpPost]
        public async Task<IActionResult> AddToDeal(InsertToDealVewModel model)
        {
            StoreProductUnit productUnit = new StoreProductUnit();
            productUnit = mapper.Map<StoreProductUnit>(model);
            var result = storeProductService.GetProductByProductId(model.StoreProductId);
            StoreProduct product = new StoreProduct();
            product = mapper.Map<StoreProduct>(result);
            product.IsDeal = true;
           
            storeProductService.Update(product);
            storeProductUnitService.AddToDealUnits(productUnit);
           
            await SaveAsync();
            return Redirect("/Store/AllProducts");
        }

        
    }
}