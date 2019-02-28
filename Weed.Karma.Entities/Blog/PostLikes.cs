using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Blog
{
    public class PostLikes : IEntityBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BlogPostId { get; set; }
        public bool IsLiked { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
