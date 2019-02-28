using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.ShoppingCart;
using Weed.Karma.Models.CartModels;
using Weed.Karma.Models.DeliveryModels;

namespace Weed.karma.BLL.Mapper
{
    public class CartProfile : Profile
    {
        public CartProfile()
        {
            CreateMap<CartViewModel,OrderDeliveryViewModel>().ReverseMap();
        }
    }
}
