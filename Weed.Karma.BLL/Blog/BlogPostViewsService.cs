using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Blog;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Blog
{
    public class BlogPostViewsService : Service<PostViews>, IBlogPostViewsService
    {
        public BlogPostViewsService(IRepository<PostViews> repository) : base(repository)
        {
        }

        public void InsertPostViews(PostViews entity)
        {
            Repository.InsertAsync(entity);
        }

        public int GetPostViewsCountByPostId(int postId)
        {
            return Repository.Query()
                .Where(w => w.PostId == postId)
                .GetAs(g => g.UserIPAddress)
                .Count();
        }

        public List<string> GetPostViewsIPByPostId(int postId)
        {
            return Repository.Query()
                .Where(w => w.PostId == postId)
                .GetAs(g => g.UserIPAddress)
                .ToList();
        }
    }
}
