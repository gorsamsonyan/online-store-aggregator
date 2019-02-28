using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Blog
{
    public class PostComments : IEntityBase
    {
        public int Id { get; set; }
        public int BlogPostId { get; set; }
        public int UserId { get; set; }
        public string ImgSrc { get; set; }
        public string Comment { get; set; }
        public virtual BlogPosts BlogPost { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
