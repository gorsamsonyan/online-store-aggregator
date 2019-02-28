using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;
using Weed.Karma.Models.Post;

namespace Weed.karma.BLL.Mapper
{
    public class PostCommentsProfile : Profile
    {
        public PostCommentsProfile()
        {
            CreateMap<PostComments, GetPostCommentsViewModel>().ReverseMap();

        }
    }
}
