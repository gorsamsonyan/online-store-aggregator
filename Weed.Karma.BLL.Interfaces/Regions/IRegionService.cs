using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Places;

namespace Weed.Karma.BLL.Interfaces.Regions
{
    public interface IRegionService : IService<Region>
    {
        void AddRegion(Region entity);
        List<Region> GetCityByRegionId(int cityRegionId);
        List<Region> GetStateByRegionId(int stateRegionId);
        Region GetCityIdbyAbbreviation(string cityCode);
    }
}
