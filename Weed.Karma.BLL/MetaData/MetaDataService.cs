using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.MetaData;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.MetaData;

namespace Weed.Karma.BLL.MetaData
{
    public class MetaDataService : Service<Entities.MetaData.MetaData>, IMetaDataService
    {
        public MetaDataService(IRepository<Entities.MetaData.MetaData> repository) : base(repository)
        {
        }

        public void AddMetaData(List<Entities.MetaData.MetaData> entity)
        {
            Repository.AddRangeAsync(entity);
        }

        
    }
}
