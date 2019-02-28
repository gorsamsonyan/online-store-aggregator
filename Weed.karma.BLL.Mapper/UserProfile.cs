using AutoMapper;
using System;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.AccountModels;
using Weed.Karma.Models.Members;

namespace Weed.karma.BLL.Mapper
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            //CreateMap<RegisterViewModel, User>()
            //.ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.FirstName))
            //.ForMember(m => m.SecurityStamp, x => x.MapFrom(v => Guid.NewGuid()))
            //.ForMember(m => m.CreatedDate, x => x.MapFrom(r => DateTime.UtcNow))
            //.ForMember(m => m.UpdatedDate, x => x.MapFrom(r => DateTime.UtcNow))
            //.ForMember(m => m.NickName, x => x.MapFrom(r => r.NickName))
            //.ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => "0"))
            //.ForMember(dest => dest.TwoFactorEnabled, opt => opt.MapFrom(src => false))
            //.ForMember(dest => dest.LockoutEnabled, opt => opt.MapFrom(src => false))
            //.ForMember(dest => dest.AccessFailedCount, opt => opt.MapFrom(src => 0))
            //.ForMember(m => m.IsDeleted, x => x.MapFrom(r => false));
            CreateMap<RegisterViewModel, User>()
         .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
         .ForMember(m => m.SecurityStamp, x => x.MapFrom(v => Guid.NewGuid()))
         .ForMember(m => m.CreatedDate, x => x.MapFrom(r => DateTime.UtcNow))
         .ForMember(m => m.UpdatedDate, x => x.MapFrom(r => DateTime.UtcNow))
         .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => "0"))
         .ForMember(dest => dest.TwoFactorEnabled, opt => opt.MapFrom(src => false))
         .ForMember(dest => dest.LockoutEnabled, opt => opt.MapFrom(src => false))
         .ForMember(dest => dest.AccessFailedCount, opt => opt.MapFrom(src => 0))
         .ForMember(m => m.IsDeleted, x => x.MapFrom(r => false));

            CreateMap<RegisterBrandViewModel, User>()
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
            CreateMap<User, CurrentUserViewModel>().ReverseMap();

            CreateMap<User, EditProfileViewModel>()

                .ForMember(dest => dest.NickName, opt => opt.MapFrom(src => src.NickName))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
                .ReverseMap();
        }
    }
}
