using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Region
{
    public class RegionViewModel : ModelBase
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public string RegionName { get; set; }
        public string RegionAbbreviation { get; set; }
        public string TimeZone { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

     
    }
}
