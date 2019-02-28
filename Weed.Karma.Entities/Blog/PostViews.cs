using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Blog
{
    public class PostViews : IEntityBase
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string UserIPAddress { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
