using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class GetBrandProductViewModel : ModelBase
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int BrandCategoryId { get; set; }
        public string Name { get; set; }
        public string ProductImage { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public BrandViewModel BrandViewModel { get; set; }
        public bool IsDeleted { get; set; }
       
    }
}
