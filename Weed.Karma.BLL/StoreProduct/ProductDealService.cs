using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Deals;

namespace Weed.Karma.BLL.StoreProduct
{
    public class ProductDealService : Service<DealProduct>, IProductDealService
    {
        public ProductDealService(IRepository<DealProduct> repository) : base(repository)
        {
        }

        public void AddDealProduct(DealProduct entity)
        {
            Repository.Insert(entity);
        }

        public List<DealProduct> GetDealProducts(int UserId)
        {
            return Repository.Query()
                .Include(i=>i.Store)
                .Where(w => w.UserId == UserId)
                .GetAs(g => new DealProduct
                {
                    Id = g.Id,
                    StoreId = g.StoreId,
                    ProductName = g.ProductName,
                    ImgSrc = g.ImgSrc,
                    Store = g.Store
                }).ToList();
        }
        public List<DealProduct> GetDealProducts()
        {
            return Repository.Query()
                .Where(w => w.IsBestDeal == false)
                .GetAs(g => new DealProduct
                {
                    Id = g.Id,
                    StoreId = g.StoreId,
                    CurrentPrice = g.CurrentPrice,
                    ProductName = g.ProductName,
                    ImgSrc = g.ImgSrc
                }).ToList();
        }
        public List<DealProduct> GetBestDealProducts()
        {
            return Repository.Query()
                .Include(i => i.Store)
                .Where(w => w.IsBestDeal == true)
                .GetAs(g => new DealProduct
                {
                    Id = g.Id,
                    StoreId = g.StoreId,
                    ProductName = g.ProductName,
                    CurrentPrice = g.CurrentPrice,
                    ImgSrc = g.ImgSrc,
                    Store = g.Store
                }).Take(4).OrderBy(o => o.CreatedDate).ToList();
        }
    }
}
