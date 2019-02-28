using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Deals;
using Weed.Karma.Models.DealModels;

namespace Weed.karma.BLL.Mapper
{
   public class DealProductProfile : Profile
    {
        public DealProductProfile()
        {
            CreateMap<DealProduct, InsertToDealVewModel>().ReverseMap();
            CreateMap<DealProduct, AllDealsViewModel>().ReverseMap();
            CreateMap<DealProduct, BestDealViewModel>().ReverseMap();
            CreateMap<DealProduct, DealViewModel>().ReverseMap();
        }
    }
}
