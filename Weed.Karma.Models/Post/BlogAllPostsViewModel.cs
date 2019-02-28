using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Post
{
    public class BlogAllPostsViewModel : ModelBase
    {
        public List<BlogTopPostsViewModel> BlogTopPosts { get; set; }
        public List<BlogTopPostsViewModel> BlogPostsByDate { get; set; }
        public List<BlogTopPostsViewModel> BlogPopularPosts { get; set; }
        public List<BlogTopPostsViewModel> BlogLatestPosts { get; set; }
        public PagingInfoViewModel PagingInfo { get; set; }
    }
}
