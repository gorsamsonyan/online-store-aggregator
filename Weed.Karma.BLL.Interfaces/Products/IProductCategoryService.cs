using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Interfaces.Products
{
    public interface IProductCategoryService : IService<ProductCategory>
    {
        List<ProductCategory> GetProductCategories();
        List<ProductCategory> GetProductCategoriesForBrand();
        void Insert(ProductCategory entity);
    }
}
