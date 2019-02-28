using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Delivery;
using Weed.Karma.Models.DeliveryModels;

namespace Weed.karma.BLL.Mapper
{
   public class OrderDeliveryProfile : Profile
    {
        public OrderDeliveryProfile()
        {
            CreateMap<OrderDelivery, OrderDeliveryViewModel>().ReverseMap();
        }
    }
}
