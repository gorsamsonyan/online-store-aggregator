using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Product
{
    public class ProductViewModel : ModelBase
    {
        public string Id { get; set; }
        public int StoreId { get; set; }
        public int ProductCategoryId { get; set; }
        public string UrlByName { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public List<StoreProductUnitViewModel> StoreProductUnits { get; set; }
    }
}
