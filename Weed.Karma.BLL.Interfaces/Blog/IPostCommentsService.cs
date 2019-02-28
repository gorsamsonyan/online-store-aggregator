using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.BLL.Interfaces.Blog
{
    public interface IPostCommentsService : IService<PostComments>
    {
        void InsertPostComment(PostComments entity);
        List<PostComments> GetAllPostCommentsByPostId(int postId);
    }
}
