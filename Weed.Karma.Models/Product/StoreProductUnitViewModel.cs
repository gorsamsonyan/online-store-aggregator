using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;
using Weed.Karma.Models.StoreModels;

namespace Weed.Karma.Models.Product
{
    public class StoreProductUnitViewModel : ModelBase
    {
        public int Id { get; set; }
        public int StoreProductId { get; set; }
        public int UnitId { get; set; }
        public string Size { get; set; }
        public decimal CurrentPrice { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
 
    }
}
