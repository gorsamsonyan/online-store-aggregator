using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Interfaces.Blog
{
    public interface IBlogPostViewsService : IService<PostViews>
    {
        void InsertPostViews(PostViews entity);
        int GetPostViewsCountByPostId(int postId);
        List<string> GetPostViewsIPByPostId(int postId);
    }
}
