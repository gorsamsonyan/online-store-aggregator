using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.CartModels
{
    public class AddItemToCartViewModel : ModelBase
    {
       
        public int Quantity { get; set; }
        public int StoreProductId { get; set; }
        public string Size { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public int Status { get; set; }
    }
}
