using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class BrandProdCategoriesViewModel : ModelBase
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string UrlByName { get; set; }
    }
}
