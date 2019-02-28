using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Delivery;

namespace Weed.Karma.BLL.Delivery
{
    public class OrderDeliveryService : Service<OrderDelivery>, IOrderDeliveryService
    {
        public OrderDeliveryService(IRepository<OrderDelivery> repository) : base(repository)
        {
        }

        public void Insert(OrderDelivery entity)
        {
            Repository.InsertAsync(entity);
        }

        public OrderDelivery GetOrderDeliveryByCartId(int cartId)
        {
            return Repository.Query()
                .Where(w => w.CartId == cartId)
                .GetAs(g=>g).FirstOrDefault();
        }
        public void Update(OrderDelivery orderDelivery)
        {
            Repository.Update(orderDelivery);
        }

    }
}
