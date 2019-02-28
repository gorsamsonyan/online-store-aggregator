using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Delivery;

namespace Weed.Karma.BLL.Interfaces.Delivery
{
    public interface IDeliveryTimeService : IService<DeliveryTime>
    {
        void AddDeliveryTime(DeliveryTime entity);
        DeliveryTime GetStoreDelivery(int storeId);
    }
}
