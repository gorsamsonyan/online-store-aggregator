using System;
using System.Collections.Generic;

namespace WeedKarma.ScaffoldedModels
{
    public partial class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductTitle { get; set; }
        public string ProductDescription { get; set; }
        public string ProductPrice { get; set; }
        public string ProductSize { get; set; }
        public int? StoreMenuId { get; set; }
        public IEnumerable<ProductImages> Images { get; internal set; }
    }
}
