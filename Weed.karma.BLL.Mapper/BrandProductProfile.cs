using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Models.Brand;

namespace Weed.karma.BLL.Mapper
{
    public class BrandProductProfile : Profile
    {
        public BrandProductProfile()
        {
            CreateMap<AddBrandProductViewModel, BrandProducts>()
                .ReverseMap();
            CreateMap<BrandProducts, SingleBrandProductsViewModel>();
            CreateMap<BrandProducts, GetBrandProductViewModel>().ReverseMap();

            CreateMap<BrandProducts, BrandAndProductsViewModel>().ReverseMap();
            CreateMap<BrandProducts, BrandProductLowInfoViewModel>().ReverseMap();
        }
    }
}
