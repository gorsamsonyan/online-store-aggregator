using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Product
{
    public class ProductCategory : IEntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsEach { get; set; }
        public string UrlByName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual ICollection<StoreProduct> StoreProducts { get; set; }

    }
}
