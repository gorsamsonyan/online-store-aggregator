using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Interfaces.Products
{
    public interface IStoreProductUnitService : IService<StoreProductUnit>
    {
        void Insert(List<StoreProductUnit> entity);
        void AddToDealUnits(StoreProductUnit entity);
        List<StoreProductUnit> GetStoreProductUnitsByProductId(int productId);

    }
}
