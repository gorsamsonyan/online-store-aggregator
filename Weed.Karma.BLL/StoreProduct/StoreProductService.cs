using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Product;
using Weed.Karma.Models.Product;

namespace Weed.Karma.BLL.StoreProduct
{
    public class StoreProductService : Service<Entities.Product.StoreProduct>, IStoreProductService
    {
        public StoreProductService(IRepository<Entities.Product.StoreProduct> repository)
          : base(repository)
        {
        }

        public void AddStoreProduct(Entities.Product.StoreProduct entity)
        {
            Repository.InsertAsync(entity);
        }

        public List<Entities.Product.StoreProduct> GetStoreProducts(int currentUserId)
        {
            return Repository.Query()
                .Include(i => i.Store)
                //.Include(i=>i.Store.User)
                .GetAs(g => new Entities.Product.StoreProduct
                {
                    Id = g.Id,
                    Store = g.Store,
                    StoreId = g.StoreId,
                    ProductName = g.ProductName,
                    ProductCategoryId = g.ProductCategoryId,
                    CreatedDate = g.CreatedDate,
                    UpdatedDate = g.UpdatedDate,
                    IsDeleted = g.IsDeleted,
                    IsDeal = g.IsDeal

                })
                .Where(w => w.Store.UserId == currentUserId && !w.IsDeal && !w.IsDeleted)
                .ToList();
        }

        public List<Entities.Product.StoreProduct> GetStoreProductsByStoreId(string storeUrlByName, string urlByName)
        {
            if (urlByName != null)
            {
                return Repository.Query()
               .Include(i => i.StoreProductUnits)
             .Where(w => w.Store.UrlByName == storeUrlByName && w.IsDeleted == false && w.ProductCategory.UrlByName == urlByName)
             .GetAs(g => new Entities.Product.StoreProduct
             {
                 ImagePath = g.ImagePath,
                 Description = g.Description,
                 ProductName = g.ProductName,
                 IsDeleted = false,
                 CreatedDate = g.CreatedDate,
                 UpdatedDate = g.UpdatedDate,
                 Id = g.Id,
                 StoreId = g.StoreId,
                 StoreProductUnits = g.StoreProductUnits,
                 ProductCategoryId = g.ProductCategoryId,
                 UrlByName = g.UrlByName
             }).ToList();
            }
            else
            {
                return Repository.Query()
             .Include(i => i.StoreProductUnits)
           .Where(w => w.Store.UrlByName == storeUrlByName && w.IsDeleted == false)
           .GetAs(g => new Entities.Product.StoreProduct
           {
               ImagePath = g.ImagePath,
               Description = g.Description,
               ProductName = g.ProductName,
               IsDeleted = false,
               CreatedDate = g.CreatedDate,
               UpdatedDate = g.UpdatedDate,
               Id = g.Id,
               StoreId = g.StoreId,
               StoreProductUnits = g.StoreProductUnits,
               ProductCategoryId = g.ProductCategoryId
           }).ToList();
            }


        }

        public Entities.Product.StoreProduct GetProductByProductId(int productId)
        {

            return Repository.Query()
                .Include(i => i.StoreProductUnits)
                .Where(w => w.Id == productId && w.IsDeleted == false)
                .GetAs(g => new Entities.Product.StoreProduct
                {
                    ImagePath = g.ImagePath,
                    Description = g.Description,
                    ProductName = g.ProductName,
                    IsDeleted = g.IsDeleted,
                    CreatedDate = g.CreatedDate,
                    UpdatedDate = g.UpdatedDate,
                    Id = g.Id,
                    StoreId = g.StoreId,
                    StoreProductUnits = g.StoreProductUnits,
                    ProductCategoryId = g.ProductCategoryId,

                }).First();
        }

        public void Update(Entities.Product.StoreProduct entity)
        {
            entity.UpdatedDate = DateTime.UtcNow;
            Repository.Update(entity);
        }
        public List<Entities.Product.StoreProduct> GetStoreProductsByBrandProductId(string brandUrlByName)
        {

            return Repository.Query()
                .Include(i => i.StoreProductUnits)
                .Include(i => i.BrandProduct)
                .Include(i => i.Store)
                .Where(w => w.UrlByName == brandUrlByName)
                .GetAs(g => g)
                .ToList();
        }
        public List<Entities.Product.StoreProduct> GetDeals(int currentUserId)
        {
            return Repository.Query()
                .Include(i => i.Store)
                //.Include(i=>i.Store.User)
                .GetAs(g => new Entities.Product.StoreProduct
                {
                    Id = g.Id,
                    Store = g.Store,
                    StoreId = g.StoreId,
                    ProductName = g.ProductName,
                    ProductCategoryId = g.ProductCategoryId,
                    CreatedDate = g.CreatedDate,
                    UpdatedDate = g.UpdatedDate,
                    IsDeleted = g.IsDeleted,
                    IsDeal = g.IsDeal

                })
                .Where(w => w.Store.UserId == currentUserId && w.IsDeal && !w.IsDeleted)
                .ToList();
        }

        public List<Entities.Product.StoreProduct> GetBestDeals()
        {
            return Repository.Query()
                .Include(i => i.StoreProductUnits)
                .Include(i => i.BrandProduct)
                .Include(i => i.Store)
                .GetAs(g => g)
                .Where(w => w.IsBestDeal && !w.IsDeleted)
                .ToList();
        }

        public List<Entities.Product.StoreProduct> GetAllDeals()
        {

            return Repository.Query()
                .Include(i => i.StoreProductUnits)
                .Include(i => i.BrandProduct)
                .Include(i => i.Store)
                .GetAs(g => g)
                .Where(w => w.IsDeal && !w.IsDeleted)
                .ToList();
        }
        public int GetStoreIdByProductId(int productId)
        {
            return Repository.Query()
                .Include(i => i.Store)
                .Where(w => w.Id == productId)
                .GetAs(g => g.StoreId)
                .FirstOrDefault();
        }

        public List<int> GetStoreProductsIdByStoreId(int storeId)
        {
            return Repository.Query()
                .Where(w => w.StoreId == storeId)
                .GetAs(g => g.Id)
                .ToList();
        }

        public int GetStoresIdByProductId(int productId)
        {
            return Repository.Query()
                .Include(i => i.Store)
                .Where(w => w.Id == productId)
                .GetAs(g => g.Store.Id)
                .First();
        }
    }
}
