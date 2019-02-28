using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;
using Weed.Karma.Models.DealModels;
using Weed.Karma.Models.Product;

namespace Weed.karma.BLL.Mapper
{
   public class StoreProductUnitProfile : Profile
    {
        public StoreProductUnitProfile()
        {
            CreateMap<StoreProductUnit, StoreProductUnitViewModel>()
                .ForMember(dest =>dest.Size, src => src.AllowNull())
                .ReverseMap();
            CreateMap<StoreProductUnit, InsertToDealVewModel>().ReverseMap();
            CreateMap<StoreProductUnit, StoreProductUnitViewModel>().ReverseMap();
        }
    }
}
