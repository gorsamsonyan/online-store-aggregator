using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Blog;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Blog
{
    public class PostCommentsService : Service<PostComments>, IPostCommentsService
    {
        public PostCommentsService(IRepository<PostComments> repository) : base(repository)
        {
        }

        public List<PostComments> GetAllPostCommentsByPostId(int postId)
        {
            return Repository.Query()
                .Where(w => w.BlogPostId == postId)
                .Get()
                .ToList();
        }

        public void InsertPostComment(PostComments entity)
        {
            Repository.InsertAsync(entity);
        }
    }
}
