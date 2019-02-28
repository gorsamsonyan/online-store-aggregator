using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.Entities.Places
{
    public class Region : IEntityBase
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public string RegionName { get; set; }
        public string RegionAbbreviation { get; set; }
        public string TimeZone { get; set; }
        public virtual Region Parent { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
