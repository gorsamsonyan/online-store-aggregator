using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Interfaces.Products
{
    public interface IProductUnitService : IService<Unit>
    {
        void AddProductUnit(List< Unit> entity);
        List<Unit> GetProductUnits();
        Unit GetProductUnitsByStorePordUnitId(int id);
    }
}
