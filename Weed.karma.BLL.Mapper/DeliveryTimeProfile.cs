using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Delivery;
using Weed.Karma.Models.DeliveryModels;
using Weed.Karma.Models.StoreModels;

namespace Weed.karma.BLL.Mapper
{
    public class DeliveryTimeProfile : Profile
    {
        public DeliveryTimeProfile()
        {
            CreateMap<DeliveryTime, StoreProductsViewModel>();
            CreateMap<DeliveryTime, DeliveryTimeViewModel>();
        }
    }
}
