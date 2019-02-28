using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Post
{
    public class SinglePostViewModel : ModelBase
    {
        public BlogTopPostsViewModel PostViewModel { get; set; }
        public BlogAllPostsViewModel TopPostsViewModel { get; set; }
        public List<GetPostCommentsViewModel>  GetPostComments { get; set; }
        
    }
}
