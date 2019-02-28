using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Post
{
    public class BlogTopPostsViewModel : ModelBase
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int LikeCount { get; set; }
        public bool IsBestPost { get; set; }
        public string MainImgSrc { get; set; }
        public int ViewCount { get; set; }
        public List< GetPostCommentsViewModel> PostComments { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
