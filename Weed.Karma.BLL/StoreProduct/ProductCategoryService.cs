using System.Collections.Generic;
using System.Linq;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.StoreProduct
{
    public class ProductCategoryService : Service<ProductCategory>, IProductCategoryService
    {
        public ProductCategoryService(IRepository<ProductCategory> repository)
          : base(repository)
        {
        }
        public List<ProductCategory> GetProductCategories()
        {
            return Repository.Query()
                .GetAs(g=>new ProductCategory
                {
                    Id = g.Id,
                    Name = g.Name,
                    IsEach = g.IsEach,
                    UrlByName = g.UrlByName
                })
                .ToList();
        }
        public List<ProductCategory> GetProductCategoriesForBrand()
        {
            return Repository.Query()
                .GetAs(g => new ProductCategory
                {
                    Id = g.Id,
                    Name = g.Name,
                })
                .ToList();
        }

        public void Insert(ProductCategory entity)
        {
            Repository.Insert(entity);
        }
    }
}
