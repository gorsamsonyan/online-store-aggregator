using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Models.CartModels;
using Newtonsoft.Json;
using Weed.Karma.Entities.ShoppingCart;
using AutoMapper;
using Weed.Karma.BLL.Interfaces.Cart;
using Microsoft.AspNetCore.Identity;
using Weed.Karma.Entities.Users;
using Microsoft.AspNetCore.Authorization;
using Weed.Karma.BLL.Interfaces.Products;
using Microsoft.AspNetCore.SignalR;
using WeedKarma.Hubs;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.Models.DeliveryModels;
using Weed.Karma.Entities.Delivery;

namespace WeedKarma.Controllers
{
    public class CartController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ICartService cartService;
        private readonly ICartItemService cartItemService;
        private readonly IStoreProductService storeProductService;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IHubContext<OrderHub> updaterHubContext;
        private readonly IOrderDeliveryService orderDeliveryService;

        public CartController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            ICartService cartService,
            ICartItemService cartItemService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IStoreProductService storeProductService,
            IHubContext<OrderHub> updaterHubContext,
            IOrderDeliveryService orderDeliveryService) : base(configuration, unitOfWork)
        {
            this.cartService = cartService;
            this.mapper = mapper;
            this.cartItemService = cartItemService;
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.storeProductService = storeProductService;
            this.updaterHubContext = updaterHubContext;
            this.orderDeliveryService = orderDeliveryService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Redirect("/");
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Index(CartViewModel model)
        {
            List<CartItem> cartItems = new List<CartItem>();
            OrderDelivery orderDeliveryEntity = new OrderDelivery();
            OrderDeliveryViewModel orderDeliveryViewModel = new OrderDeliveryViewModel();
            orderDeliveryViewModel = mapper.Map<OrderDeliveryViewModel>(model);
            orderDeliveryEntity = mapper.Map<OrderDelivery>(orderDeliveryViewModel);
            Cart cart = new Cart();
            User user = await userManager.FindByEmailAsync(User.Identity.Name);

            model.CartTotalPrice = 0;

            //decimal sum = 0m;
            List<AddItemToCartViewModel> cartToOrderJson = JsonConvert.DeserializeObject<List<AddItemToCartViewModel>>(model.CartData);
            foreach (var item in cartToOrderJson)
            {

                model.CartTotalPrice += Convert.ToInt32(item.UnitPrice * item.Quantity);
            }

            cartItems = mapper.Map<List<CartItem>>(cartToOrderJson);
            cart.CartTotalPrice = model.CartTotalPrice;
            cart.UserId = user.Id;

            cartService.AddToCart(cart);
            Save();
            foreach (var item in cartItems)
            {
                item.CartId = cart.Id;
               // item.StoreId = storeProductService.GetStoresIdByProductId(item.StoreProductId);
            }

            orderDeliveryEntity.CartId = cart.Id;
            orderDeliveryEntity.Status = "0";
            orderDeliveryService.Insert(orderDeliveryEntity);
            cartItemService.AddCartItem(cartItems);
            Save();
            //await updaterHubContext.Clients.All.SendAsync("UpdateCart");
            //await updaterHubContext.Clients.All.SendAsync("UpdateCart");
            return Redirect("/");
        }

    }
}