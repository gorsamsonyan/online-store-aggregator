using AutoMapper;
using Microsoft.AspNet.SignalR.Client.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Cart;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.ShoppingCart;
using Weed.Karma.Entities.Users;
using Weed.Karma.Enums;
using Weed.Karma.Models.CartItems;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;

namespace WeedKarma.Hubs
{
    public class OrderHub : Hub, IUserIdProvider
    {
        private readonly IMapper mapper;
        private readonly IStoreProductService storeProductService;
        private readonly IStoreService storeService;
        private readonly IDeliveryTimeService deliveryTimeService;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly ICartItemService cartItemService;
        private readonly IHubContext<OrderHub> updaterHubContext;

        public OrderHub(IMapper mapper,
            IStoreProductService storeProductService,
            IProductUnitService productUnitService,
            IStoreProductPriceHistoryService storeProductPriceHistoryService,
            IStoreService storeService,
            IProductCategoryService productCategoryService,
            IDeliveryTimeService deliveryTimeService,
            IStoreProductUnitService storeProductUnitService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            ICartItemService cartItemService,
            IHubContext<OrderHub> updaterHubContext)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
            this.storeProductService = storeProductService;

            this.storeService = storeService;
            this.deliveryTimeService = deliveryTimeService;

            this.cartItemService = cartItemService;
            this.updaterHubContext = updaterHubContext;
        }


        public async Task Order(int id)
        {

            var getUserByStoreId = storeService.GetUserIdByStoreId(id);
            var getUserById = await userManager.FindByIdAsync(getUserByStoreId.ToString());
            var user = Context.User.Identity.Name;
            List<CartItem> cartItems = new List<CartItem>();


            cartItems.AddRange(cartItemService.GetCartItemsByStoreId(id));


            List<CartItemsViewModelForStore> cartItemsVM = new List<CartItemsViewModelForStore>();
   

            cartItemsVM = mapper.Map<List<CartItemsViewModelForStore>>(cartItems);

            foreach (var status in cartItemsVM)
            {
                status.OrderStatus = GetNotificationStatus.GetNotificationStatuses(status.Status);
                status.OrderTime = string.Format("{0:t}", status.CreatedDate);
            }

            await Clients.User(getUserById.Id.ToString()).SendAsync("UpdateCart", cartItemsVM);
        }

        public async Task NewOrders(int storeid,int notificationCount)
        {
            var getUserByStoreId = storeService.GetUserIdByStoreId(storeid);
            var getUserById = await userManager.FindByIdAsync(getUserByStoreId.ToString());
            var user = Context.User.Identity.Name;
            await Clients.User(getUserById.Id.ToString()).SendAsync("NotificationCount", notificationCount);
           // await Clients.All.SendAsync("UserIdentity", Context.User.Identity.Name);

        }

        //public override Task OnConnectedAsync()
        //{
        //    base.OnConnectedAsync();
        //    var user = Context.User.Identity.Name;
        //    Groups.AddToGroupAsync(Context.ConnectionId, user);
        //    return Task.CompletedTask;
        //}
        public string GetUserId(HubConnectionContext connection)
        {
            if (connection.User.Identity.IsAuthenticated)
            {
                return connection.ConnectionId;
            }
            else
            {
                return null;
            }


        }

    }
}
