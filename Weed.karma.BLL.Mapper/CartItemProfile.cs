using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.ShoppingCart;
using Weed.Karma.Models.CartItems;
using Weed.Karma.Models.CartModels;

namespace Weed.karma.BLL.Mapper
{
    public class CartItemProfile : Profile
    {
        public CartItemProfile()
        {
            CreateMap<AddItemToCartViewModel, CartItem>().ReverseMap();
            CreateMap<CartItem, CartItemsViewModelForStore>().ReverseMap();
        }
    }
}
