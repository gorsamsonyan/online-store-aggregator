using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;
using Weed.Karma.Models.Brand;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.StoreModels;

namespace Weed.karma.BLL.Mapper
{
    public class ProductCategoryProfile : Profile
    {
        public ProductCategoryProfile()
        {
            CreateMap<ProductCategory, StoreProductsViewModel>();
            CreateMap<ProductCategoryViewModel, ProductCategory>();
            CreateMap<ProductCategory, BrandCategoriesViewModel>()
                .ForMember(m => m.CategoryName, x => x.MapFrom(r => r.Name));
            //CreateMap<ProductCategory, ProductCategoryViewModel>();
            //CreateMap<StoreProduct, AddStoreProductViewModel>();
        }
    }
}
