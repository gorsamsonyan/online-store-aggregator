using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Interfaces.Products
{
    public interface IStoreProductService : IService<StoreProduct>
    {
        void AddStoreProduct(StoreProduct entity);
        List<StoreProduct> GetStoreProducts(int currentUserId);
        List<StoreProduct> GetDeals(int currentUserId);
        List<StoreProduct> GetBestDeals();
        List<StoreProduct> GetAllDeals();
        StoreProduct GetProductByProductId(int productId);
        void Update(StoreProduct entity);
        List<StoreProduct> GetStoreProductsByBrandProductId(string brandUrlByName);
        List<int> GetStoreProductsIdByStoreId(int storeId);
        int GetStoresIdByProductId(int productId);
        List<StoreProduct> GetStoreProductsByStoreId(string storeUrlByName, string urlByName);

    }
}
