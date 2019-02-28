using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Places;
using Weed.Karma.Models.Region;

namespace Weed.karma.BLL.Mapper
{
   public class RegionProfile : Profile
    {
        public RegionProfile()
        {
            CreateMap<Region, RegionViewModel>();
            CreateMap<RegionViewModel, Region>();
        }
    }
}
