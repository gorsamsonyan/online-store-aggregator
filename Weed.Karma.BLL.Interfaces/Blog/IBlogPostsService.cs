using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Interfaces.Blog
{
    public interface IBlogPostsService : IService<BlogPosts>
    {
        void InsertBlogPost(BlogPosts entity);
        List<BlogPosts> GetBlogPosts(int skip, int take);
        BlogPosts GetBlogPost(int postId);
        List<BlogPosts> GetTopBlogPosts();
        void UpdateBlogPost(BlogPosts entity);
        List<BlogPosts> GetPupularPosts();
        List<BlogPosts> GetBlogPosts();
        List<BlogPosts> GetLatestPosts();
        int PostsCount();
    }
}