using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.StoreProduct
{
    public class StoreProductUnitService : Service<StoreProductUnit>, IStoreProductUnitService
    {
        public StoreProductUnitService(IRepository<StoreProductUnit> repository)
        : base(repository)
        {
        }

        public void Insert(List<StoreProductUnit> entity)
        {
            Repository.AddRangeAsync(entity);
        }
        public async void AddToDealUnits(StoreProductUnit entity)
        {
            entity.IsDeal = true;
            entity.IsActiveDeal = true;
            await Repository.InsertAsync(entity);
        }

        public List<StoreProductUnit> GetStoreProductUnitsByProductId(int productId)
        {
            return Repository.Query()
                 .Where(w => w.StoreProductId == productId)
                 .Include(i => i.Unit)
                 .GetAs(g => g)
                 .ToList();
        }
    }

}
