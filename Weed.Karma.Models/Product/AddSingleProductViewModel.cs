using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Product
{
    public class AddSingleProductViewModel : ModelBase
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public int StoreId { get; set; }
        public int? BrandProductId { get; set; }
        public int ProductCategoryId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public string UrlByName { get; set; }
        public ProductCategoryViewModel ProductCategory { get; set; }
        public ICollection<MetaDataViewModel> MetaDatas { get; set; }
        public ICollection<StoreProductUnitViewModel> StoreProductUnits { get; set; }

    }
}
