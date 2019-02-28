using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Post
{
    public class PagingInfoViewModel : ModelBase
    {
        public int ItemsPerPage { get; set; }
        public int CurrentPage { get; set; }
        public int PreviousPage { get; set; }
        public int NextPage { get; set; }
        public double TotalPages { get; set; }
    }
}
