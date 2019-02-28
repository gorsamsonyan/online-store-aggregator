using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class BrandProductLowInfoViewModel : ModelBase
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int BrandCategoryId { get; set; }
        public string Name { get; set; }
        public string ProductImage { get; set; }
        public string Description { get; set; }
        public string UrlByName { get; set; }
    }
}
