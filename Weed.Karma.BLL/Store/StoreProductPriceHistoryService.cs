using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Store
{
        public class StoreProductPriceHistoryService : Service<StoreProductPriceHistory>,IStoreProductPriceHistoryService
    { 
        public StoreProductPriceHistoryService(IRepository<StoreProductPriceHistory> repository)
          : base(repository)
        {
        }

        public void AddStoreProductPriceHistory(List<StoreProductPriceHistory> entity)
        {
            Repository.AddRangeAsync(entity);
        }
    }
}
