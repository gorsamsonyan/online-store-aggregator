using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Deals;

namespace Weed.Karma.BLL.Interfaces.Products
{
    public interface IProductDealService : IService<DealProduct>
    {
        void AddDealProduct(DealProduct entity);
        List<DealProduct> GetDealProducts(int UserId);
        List<DealProduct> GetDealProducts();
        List<DealProduct> GetBestDealProducts();
    }
}
