using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Blog;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Blog
{
    public class BlogPostsService : Service<BlogPosts>, IBlogPostsService
    {
        public BlogPostsService(IRepository<BlogPosts> repository) : base(repository)
        {
        }
        public void InsertBlogPost(BlogPosts entity)
        {
            Repository.InsertAsync(entity);
        }
        public void UpdateBlogPost(BlogPosts entity)
        {
            Repository.Update(entity);
        }
        public BlogPosts GetBlogPost(int postId)
        {
            var result = Repository.Query()
                  .Include(i => i.User)
                  .Include(i => i.BlogPostImages)
                  .Where(w => w.Id == postId && w.IsDeleted == false)
                  .Get()
                  .SingleOrDefault();
            return result;
        }

        public List<BlogPosts> GetTopBlogPosts()
        {
            return Repository.Query()
                .Include(i => i.PostComments)
                .Where(w => w.IsBestPost == true && w.IsDeleted == false)
                .GetAs(g => new BlogPosts
                {
                    Id = g.Id,
                    MainImgSrc = g.MainImgSrc,
                    Description = g.Description,
                    Title = g.Title,
                    ViewCount = g.ViewCount,
                    CreatedDate = g.CreatedDate,
                    PostComments = g.PostComments
                })
                .Take(3)
                .ToList();
        }
        public List<BlogPosts> GetBlogPosts(int skip, int take)
        {

            return Repository.Query()
                    .Include(i => i.PostComments)
                     .Where(w => w.IsDeleted == false)
                         .GetAs(g => new BlogPosts
                         {
                             Id = g.Id,
                             MainImgSrc = g.MainImgSrc,
                             Description = g.Description,
                             Title = g.Title,
                             ViewCount = g.ViewCount,
                             CreatedDate = g.CreatedDate,
                             PostComments = g.PostComments
                         })
                     .OrderByDescending(o => o.CreatedDate)
                     .Skip(skip)
                     .Take(take)
                     .ToList();

        }

        public List<BlogPosts> GetBlogPosts()
        {

            return Repository.Query()
                    .Include(i => i.PostComments.Count())
                     .Where(w => w.IsDeleted == false)
                         .GetAs(g => new BlogPosts
                         {
                             Id = g.Id,
                             MainImgSrc = g.MainImgSrc,
                             Description = g.Description,
                             Title = g.Title,
                             ViewCount = g.ViewCount,
                             CreatedDate = g.CreatedDate,
                             PostComments = g.PostComments
                         })
                     .OrderByDescending(o => o.CreatedDate)
                     .ToList();

        }

        public List<BlogPosts> GetPupularPosts()
        {
            return Repository.Query()
                .Include(i => i.PostComments)
                .Where(w => w.IsDeleted == false)
                   .GetAs(g => new BlogPosts
                   {
                       Id = g.Id,
                       MainImgSrc = g.MainImgSrc,
                       Description = g.Description,
                       Title = g.Title,
                       ViewCount = g.ViewCount,
                       CreatedDate = g.CreatedDate,
                       PostComments = g.PostComments
                   })
                .OrderByDescending(o => o.ViewCount)
                .ToList();
        }

        public List<BlogPosts> GetLatestPosts()
        {
            return Repository.Query()
                .Include(i => i.PostComments)
                .Where(w => w.IsDeleted == false)
                  .GetAs(g => new BlogPosts
                  {
                      Id = g.Id,
                      MainImgSrc = g.MainImgSrc,
                      Description = g.Description,
                      Title = g.Title,
                      ViewCount = g.ViewCount,
                      CreatedDate = g.CreatedDate,
                      PostComments = g.PostComments
                  }).OrderByDescending(o => o.CreatedDate)
                  .Take(3)
                  .ToList();
        }

        public int PostsCount()
        {
            return Repository.Query()
                .Where(w => w.IsDeleted == false)
                .Count();
        }
    }
}
