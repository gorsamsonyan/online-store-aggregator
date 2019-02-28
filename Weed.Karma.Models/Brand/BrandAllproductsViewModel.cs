using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class BrandAllproductsViewModel : ModelBase
    {
        public BrandViewModel BrandViewModel { get; set; }
        public List<SingleBrandProductsViewModel> SingleBrandProductsViewModels { get; set; }
    }
}
