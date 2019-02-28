using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Delivery;

namespace Weed.Karma.BLL.Interfaces.Delivery
{
    public interface IOrderDeliveryService : IService<OrderDelivery>
    {
        void Insert(OrderDelivery entity);
        OrderDelivery GetOrderDeliveryByCartId(int cartId);

        void Update(OrderDelivery entity);


    }
}
