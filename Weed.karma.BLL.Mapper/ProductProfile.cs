using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;
using Weed.Karma.Models.DealModels;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.StoreModels;

namespace Weed.karma.BLL.Mapper
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<StoreProduct, StoreProductsViewModel>();
            CreateMap<ProductViewModel, StoreProduct>();
            CreateMap<AddSingleProductViewModel, StoreProduct>();
            CreateMap<StoreProduct, AllProductsViewModel>();
            CreateMap<StoreProduct, BestDealViewModel>().ReverseMap();
            CreateMap<StoreProduct, DealViewModel>().ReverseMap();


            // CreateMap<StoreProduct, StoreProducts>();
            //CreateMap<StoreProduct, AddStoreProductViewModel>();
        }
    }
}
