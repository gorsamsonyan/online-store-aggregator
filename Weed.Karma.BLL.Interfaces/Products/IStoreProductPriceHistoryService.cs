using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Interfaces.Products
{
   public interface IStoreProductPriceHistoryService : IService<StoreProductPriceHistory>
    {
        void AddStoreProductPriceHistory(List< StoreProductPriceHistory> entity);
    }
}
