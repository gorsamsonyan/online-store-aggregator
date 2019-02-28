using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.Entities.Product
{
    public class StoreProduct : IEntityBase
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public int? BrandProductId { get; set; }
        public string ProductName { get; set; }
        public string UrlByName { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public bool IsDeal { get; set; }
        public bool IsBestDeal { get; set; }
        public bool IsBestProduct { get; set; }
        public int ProductCategoryId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual Store Store { get; set; }
        public virtual BrandProducts BrandProduct { get; set; }
        public virtual ProductCategory ProductCategory { get; set; }
        public virtual ICollection<MetaData.MetaData> MetaDatas { get; set; }
        public virtual List<StoreProductUnit> StoreProductUnits { get; set; }
    }
}