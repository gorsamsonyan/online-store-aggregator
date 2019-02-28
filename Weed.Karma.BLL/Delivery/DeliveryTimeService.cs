using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Delivery;

namespace Weed.Karma.BLL.Delivery
{
    public class DeliveryTimeService : Service<DeliveryTime>, IDeliveryTimeService
    {
        public DeliveryTimeService(IRepository<DeliveryTime> repository)
         : base(repository)
        {
        }

        public async void AddDeliveryTime(DeliveryTime entity)
        {
            await Repository.InsertAsync(entity);
        }

        public DeliveryTime GetStoreDelivery(int storeId)
        {
            return Repository.Query()
                .Where(w => w.Id == storeId && w.IsDeleted == false)
                .GetAs(g => new DeliveryTime
                {
                    DeliveryTimeFrom = g.DeliveryTimeFrom,
                    DeliveryTimeTo = g.DeliveryTimeTo,
                    DeliveryPrice = g.DeliveryPrice,
                    MinOrderDelivery = g.MinOrderDelivery
                }).FirstOrDefault();

        }
    }
}
