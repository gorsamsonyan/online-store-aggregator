using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Entities.Places;

namespace Weed.Karma.BLL.Regions
{
    public class RegionService : Service<Region>, IRegionService
    {
        public RegionService(IRepository<Region> repository)
            : base(repository)
        {
        }

        public async void AddRegion(Region entity)
        {
            await Repository.InsertAsync(entity);
        }

        public List<Region> GetCityByRegionId(int cityRegionId)
        {
            var result = Repository.Query()
                .GetAs(g => g)
                .Where(i => i.ParentId == cityRegionId)
                .ToList();
            return result;
        }

        public Region GetCityIdbyAbbreviation(string cityCode)
        {
          
            return Repository.Query()
                    .Get()
                    .Where(w => w.RegionAbbreviation == cityCode)
                    .First();
            
        }

        public List<Region> GetStateByRegionId(int stateRegionId)
        {
            var result = Repository.Query()
                .GetAs(g => g)
                .Where(i => i.ParentId == stateRegionId)
                .ToList();
            return result;
        }
    }
}
