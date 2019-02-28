using System;
using System.Collections.Generic;

namespace storeadmin.ScaffoldModels
{
    public partial class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }
        // u mekel ste hesa creati ejy cuyc ta,
        public Store Parent { get; set; }
    }
}
