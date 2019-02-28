using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Interfaces.Blog
{
    public interface IBlogPostImagesService : IService<BlogPostImages>
    {
        void InsertBlogPostImages(List<BlogPostImages> entities);
        List<BlogPostImages> GetBlogPostImagesByPostId(int postId);
    }
}
