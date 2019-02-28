using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Models.Brand;

namespace Weed.karma.BLL.Mapper
{
    public class BrandCategoryProfile : Profile
    {
        public BrandCategoryProfile()
        {
            CreateMap<BrandCategoriesViewModel, BrandCategory>()
                .ReverseMap();
        }
    }
}
