using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.Product;

namespace Weed.Karma.Models.Brand
{
    public class BrandProductViewModel : ModelBase
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public int BrandId { get; set; }
        public int StoreId { get; set; }
        public string UrlByName { get; set; }
        public List<BrandViewModel> Brands { get; set; }
        public List<BrandCategoriesViewModel> BrandCategories { get; set; }
        public List<ProductCategoryViewModel> ProductCategories { get; set; }
        public List<ProductUnitViewModel> ProductUnits { get; set; }
    }
}
