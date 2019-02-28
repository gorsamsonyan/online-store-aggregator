using System;
using System.Collections.Generic;

namespace WeedKarma.ScaffoldedModels
{
    public partial class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }

        public Store Parent { get; set; }
    }
}
