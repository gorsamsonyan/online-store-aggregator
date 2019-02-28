using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.BLL.Interfaces.Stores
{
    public interface IStoreImagesService : IService<StoreImage>
    {
        void AddStoreImages(StoreImage entity);
    }
}
