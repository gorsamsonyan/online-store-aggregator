using System;
using System.Collections.Generic;

namespace storeadmin.ScaffoldModels
{
    public partial class Region
    {
        public Region()
        {
            Store = new HashSet<Store>();
        }

        public int Id { get; set; }
        public string RegionName { get; set; }
        public int? ParentId { get; set; }

        public City Parent { get; set; }
        public ICollection<Store> Store { get; set; }
    }
}
