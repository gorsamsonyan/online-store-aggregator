using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Models.Brand;

namespace Weed.karma.BLL.Mapper
{
    public class BrandProfile : Profile
    {
        public BrandProfile()
        {
            CreateMap<Brand, BrandViewModel>();
            CreateMap<BrandViewModel, Brand>();
            CreateMap<InsertBrandViewModel, Brand>();
            CreateMap<Brand, GetBrandProductViewModel>().ReverseMap();
        }
    }
}
