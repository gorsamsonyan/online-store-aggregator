using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Blog;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Blog
{
    public class BlogPostImagesService : Service<BlogPostImages>, IBlogPostImagesService
    {
        public BlogPostImagesService(IRepository<BlogPostImages> repository) : base(repository)
        {
        }

        public List<BlogPostImages> GetBlogPostImagesByPostId(int postId)
        {
            return Repository.Query()
                .Where(w => w.BlogPostsId == postId)
                .Get()
                .ToList();
        }

        public void InsertBlogPostImages(List<BlogPostImages> entities)
        {
            Repository.AddRangeAsync(entities);
        }
    }
}
