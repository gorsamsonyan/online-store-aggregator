using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Post
{
    public class GetPostCommentsViewModel : ModelBase
    {
        public int UserId { get; set; }
        public int PostId { get; set; }
        public string NickName { get; set; }
        public string ImgSrc { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
