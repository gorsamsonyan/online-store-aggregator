using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Cart;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.BLL.Cart
{
    public class OrderService : Service<Order>, IOrderService
    {
        public OrderService(IRepository<Order> repository) : base(repository)
        {
        }
    }
}
