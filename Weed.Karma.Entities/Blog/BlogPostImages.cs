using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Blog
{
    public class BlogPostImages : IEntityBase
    {
        public int Id { get; set; }
        public int BlogPostsId { get; set; }
        public string ImgSrc { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
