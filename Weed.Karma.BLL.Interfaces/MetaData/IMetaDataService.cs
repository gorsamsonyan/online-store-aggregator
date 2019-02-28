using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.MetaData;

namespace Weed.Karma.BLL.Interfaces.MetaData
{
    public interface IMetaDataService : IService<Weed.Karma.Entities.MetaData.MetaData>
    {
        void AddMetaData(List<Weed.Karma.Entities.MetaData.MetaData> entity);
        
    }
   
}
