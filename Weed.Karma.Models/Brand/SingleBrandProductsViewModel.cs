using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class SingleBrandProductsViewModel : ModelBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductImage { get; set; }
        public string Description { get; set; }
        public string UrlByName { get; set; }
        public BrandProdCategoriesViewModel BrandCategory { get; set; }
    }
}
