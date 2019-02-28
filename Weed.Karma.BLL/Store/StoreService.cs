using System;
using System.Collections.Generic;
using System.Linq;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Entities.Places;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.BLL.Stores
{
    public class StoreService : Service<Entities.Dispensarie.Store>, IStoreService
    {
        public StoreService(IRepository<Entities.Dispensarie.Store> repository)
            : base(repository)
        {
        }

        public async void AddStore(Entities.Dispensarie.Store entity)
        {
            await Repository.InsertAsync(entity);
        }

        public ICollection<Entities.Dispensarie.Store> GetStores()
        {
            return Repository.Query()
                .Include(i => i.DeliveryTime)
                .Include(i => i.StoreImages)
                .GetAs(g => g)
                .Where(w => w.IsDeleted == false)
                .ToList();
        }

        public ICollection<Entities.Dispensarie.Store> GetAllUserStoresByID(int CurrentUserID)
        {
            return Repository.Query()
                //.Include(i => i.DeliveryTime)
                //.Include(i => i.Region)
                //.Include(i => i.StoreImages)
                .GetAs(g => g)
                .Where(w => w.UserId == CurrentUserID)
                .ToList();
        }

        public ICollection<Entities.Dispensarie.Store> GetBestOfferByRegionId(int regionId)
        {
            return Repository.Query()
                .Include(i => i.DeliveryTime)
                .Include(i => i.Region)
                .Include(i => i.StoreImages)
                .GetAs(g => g)
                .Where(w => w.IsBestStore == true && w.Region.Id == regionId)
                .ToList();
        }

        public ICollection<Entities.Dispensarie.Store> GetStoresByCityId(int cityId)
        {
            return Repository.Query()
                .Include(i => i.DeliveryTime)
                .Include(i => i.Region)
                .Include(i => i.StoreImages)
                .GetAs(g => g)
                .Where(w => w.IsDeleted == false && w.Region.Id == cityId)
                .ToList();
        }

        public Entities.Dispensarie.Store GetStoreInfoByStoreId(string storeUrlByName)
        {
            return Repository.Query()
                .Include(i => i.DeliveryTime)
                  .Where(w => w.UrlByName == storeUrlByName && w.IsDeleted == false)
                  .GetAs(g => new Entities.Dispensarie.Store
                  {
                      Id = g.Id,
                      WorkingHoursFrom = g.WorkingHoursFrom,
                      WorkingHoursTo = g.WorkingHoursTo,
                      ShopName = g.ShopName,
                      LogoPath = g.LogoPath,
                      DeliveryTime = g.DeliveryTime,
                      UrlByName = g.UrlByName
                  }).FirstOrDefault();
        }

        public void Update(Entities.Dispensarie.Store entity)
        {
            Repository.Update(entity);
        }

        public Entities.Dispensarie.Store GetFullStoreInfoByStoreId(string urlByName)
        {
            return Repository.Query()
                .Include(i => i.DeliveryTime)
                .Where(w => w.UrlByName == urlByName && w.IsDeleted == false)
                .GetAs(g => g).FirstOrDefault();
        }

        public List<Entities.Dispensarie.Store> GetStoreLowInfoByStoreProductId(int storeId)
        {
            return Repository.Query()
                .Where(w => w.Id == storeId)
                .GetAs(g => new Entities.Dispensarie.Store
                {
                    RegionId = g.RegionId,
                    ShopName = g.ShopName,
                }).ToList();
        }

        public List<Entities.Dispensarie.Store> GetStoreFilterByDelivery(int cityId)
        {
            return Repository.Query()
                .Include(i => i.DeliveryTime)
                .Include(i => i.Region)
                .Include(i => i.StoreImages)
                .GetAs(g => g)
                .Where(w => w.IsDeleted == false && w.Region.Id == cityId &&
                       w.DeliveryTime.DeliveryTimeFrom == null)
                .ToList();
        }

        public List<Entities.Dispensarie.Store> GetStoreFilterByNearMe(int cityId)
        {
            throw new NotImplementedException();
        }

        public int GetUserIdByStoreId(int storeId)
        {
            return Repository.Query()
                .Include(i => i.User)
                .Where(w=>w.Id == storeId)
                .GetAs(g => g.User.Id)
                .First();
        }
    }
}