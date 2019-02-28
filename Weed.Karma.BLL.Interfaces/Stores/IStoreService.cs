//using Weed.Karma.Entities.Dispensarie;

using System.Collections.Generic;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Interfaces.Stores
{
    public interface IStoreService : IService<Store>
    {
        void AddStore(Store entity);
        List<Store> GetStoreLowInfoByStoreProductId(int storeId);
        void Update(Store entity);
        ICollection<Store> GetAllUserStoresByID(int CurrentUserID);
        ICollection<Store> GetStores();
        ICollection<Store> GetBestOfferByRegionId(int regionId);
        ICollection<Store> GetStoresByCityId(int cityId);
        Store GetStoreInfoByStoreId(string storeUrlByName);
        Store GetFullStoreInfoByStoreId(string urlByName);
        //-------------Filters---------------//
        List<Store> GetStoreFilterByDelivery(int cityId);
        List<Store> GetStoreFilterByNearMe(int cityId);
        int GetUserIdByStoreId(int storeId);
    }
}
