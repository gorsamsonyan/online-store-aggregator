using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Post
{
    public class AddPostViewModel : ModelBase
    {
        public int UserId { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int LikeCount { get; set; }
        public bool IsBestPost { get; set; }
        public string MainImgSrc { get; set; }
    }
}
