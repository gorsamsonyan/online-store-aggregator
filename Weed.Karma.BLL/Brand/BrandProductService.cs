using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Brand;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.BLL.Brand
{
    public class BrandProductService : Service<BrandProducts>, IBrandProductService
    {
        public BrandProductService(IRepository<BrandProducts> repository) : base(repository)
        {
        }

        public ICollection<BrandProducts> GetBrandProductsByBrandId(int brandId)
        {
            return Repository.Query()
                .GetAs(g => g)
                .Where(w => w.BrandId == brandId)
                .ToList();
        }

        public void InsertBrandProduct(BrandProducts entity)
        {
            Repository.Insert(entity);
        }

        public List<BrandProducts> GetAllBrandProductsByBrandId(string brandUrlByName)
        {
            return Repository.Query()
                .Include(i => i.BrandCategory)
                .Where(w => w.UrlByName == brandUrlByName)
                .GetAs(g => new BrandProducts
                {
                    Id = g.Id,
                    Description = g.Description,
                    ProductImage = g.ProductImage,
                    Name = g.Name,
                    BrandCategory = g.BrandCategory,
                    UrlByName = g.UrlByName
                }).ToList();
        }
        public BrandProducts GetBrandProduct(string brandProductUrlByName)
        {
            return Repository.Query()
                .Where(w => w.UrlByName == brandProductUrlByName)
                .GetAs(g => g)
                .First();
        }

        public BrandProducts GetBrandProductByBrandProductId(int brandProductId)
        {
            return Repository.Query()
                .GetAs(g => g)
                .Where(w => w.Id == brandProductId)
                .First();
        }

        public List<BrandProducts> GetBrandProducts()
        {
            return Repository.Query()
                .GetAs(g => g)
                .ToList();
        }
    }
}
