using AutoMapper;
using System;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.AccountModels;
using Weed.Karma.Models.StoreModels;

namespace Weed.karma.BLL.Mapper
{
    public class StoreProfile : Profile
    {
        public StoreProfile()
        {
            CreateMap<AddStoreViewModel, Store>();
            CreateMap<Store, AddStoreViewModel>();
            CreateMap<Store, FullStoreInfoViewModel>().ReverseMap();
            CreateMap<RegisterStoreViewModel, User>()
             .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
            .ForMember(m => m.SecurityStamp, x => x.MapFrom(v => Guid.NewGuid()))
            .ForMember(m => m.CreatedDate, x => x.MapFrom(r => DateTime.UtcNow))
            .ForMember(m => m.UpdatedDate, x => x.MapFrom(r => DateTime.UtcNow))
            .ForMember(m => m.NickName, x => x.MapFrom(r => r.NickName))
            .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => "0"))
            .ForMember(dest => dest.TwoFactorEnabled, opt => opt.MapFrom(src => false))
            .ForMember(dest => dest.LockoutEnabled, opt => opt.MapFrom(src => false))
            .ForMember(dest => dest.AccessFailedCount, opt => opt.MapFrom(src => 0))
            .ForMember(m => m.IsDeleted, x => x.MapFrom(r => false));
            CreateMap<Store, DispensariesStoresViewModel>();
            CreateMap<Store, StoreProductsViewModel>();
            CreateMap<StoreProductsViewModel, Store>();
            CreateMap<Store, StoreInfoViewModel>();
            CreateMap<StoreInfoViewModel, Store>();
            //.ForMember(m => m.ShopName, x => x.MapFrom(r => r.ShopName))
            //.ForMember(m => m.ShopLogoPath, x => x.MapFrom(r => r.LogoPath))
            //.ForMember(m => m.WorkingHoursFrom, x => x.MapFrom(r => r.WorkingHoursFrom))
            //.ForMember(m => m.WorkingHoursTo, x => x.MapFrom(r => r.WorkingHoursTo));
        }
    }
}
