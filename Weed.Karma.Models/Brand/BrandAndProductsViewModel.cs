using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class BrandAndProductsViewModel : ModelBase
    {

        public List<BrandViewModel> Brands { get; set; }
        public List<BrandProductLowInfoViewModel> BrandProducts { get; set; }

    }
}
