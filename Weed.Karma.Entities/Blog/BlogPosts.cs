using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.Entities.Blog
{
    public class BlogPosts : IEntityBase
    {
        public int Id { get; set; }
        public int RegionId { get; set; }
        public int CategoryId { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int ViewCount { get; set; }
        public int LikeCount { get; set; }
        public bool IsBestPost { get; set; }
        public string MainImgSrc { get; set; }
        public virtual ICollection<PostViews> PostViews { get; set; }
        public virtual ICollection<PostLikes> PostLikes { get; set; }
        public virtual ICollection<PostComments> PostComments { get; set; }
        public virtual ICollection<BlogPostImages> BlogPostImages { get; set; }
        public virtual User User { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
