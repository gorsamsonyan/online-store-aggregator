using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;
using System.Linq;

namespace Weed.Karma.BLL.StoreProduct
{
    public class ProductUnitService : Service<Unit>, IProductUnitService
    {
        public ProductUnitService(IRepository<Unit> repository)
          : base(repository)
        {
        }

        public void AddProductUnit(List<Unit> entity)
        {
            Repository.AddRangeAsync(entity);
        }

        public List<Unit> GetProductUnits()
        {
            return Repository.Query()
                .GetAs(g => g)
                .ToList();
        }

        public Unit GetProductUnitsByStorePordUnitId(int id)
        {
            var res = Repository.Query()
                .Where(w=>w.Id == id)
               .GetAs(g => g)
               .FirstOrDefault();
            return res;
        }
    }
}
