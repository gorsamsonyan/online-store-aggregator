using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Brand
{
    public  class BrandProducts : IEntityBase
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int BrandCategoryId { get; set; }
        public string Name { get; set; }
        public string UrlByName { get; set; }
        public string ProductImage { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
     // public virtual ICollection<MetaData.MetaData> MetaData { get; set; }
        public virtual Brand Brand{ get; set; }
        public virtual BrandCategory BrandCategory { get; set; }

    }
}
