using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.BLL.Store
{
    public class StoreImageService : Service<StoreImage>, IStoreImagesService
    {
        public StoreImageService(IRepository<StoreImage> repository)
         : base(repository)
        {
        }

        public async void AddStoreImages(StoreImage entity)
        {
           await Repository.InsertAsync(entity);
        }
    }
   
}
