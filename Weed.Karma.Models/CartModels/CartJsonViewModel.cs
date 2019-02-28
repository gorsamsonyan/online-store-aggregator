using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.CartModels
{
    public class CartJsonViewModel : ModelBase
    {
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public string Size { get; set; }
        public int StoreProductId { get; set; }
        public int StoreId { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }

    }
}
