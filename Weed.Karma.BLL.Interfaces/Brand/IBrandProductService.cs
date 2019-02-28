using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.BLL.Interfaces.Brand
{
    public interface IBrandProductService : IService<BrandProducts>
    {
        void InsertBrandProduct(BrandProducts entity);
        List<BrandProducts> GetAllBrandProductsByBrandId(string brandUrlByName);
        ICollection<BrandProducts> GetBrandProductsByBrandId(int brandId);
        BrandProducts GetBrandProduct(string brandProductUrlByName);
        List<BrandProducts> GetBrandProducts();
        BrandProducts GetBrandProductByBrandProductId(int brandProductId);
    }
}
