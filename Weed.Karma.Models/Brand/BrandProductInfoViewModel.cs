using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.StoreModels;

namespace Weed.Karma.Models.Brand
{
    public class BrandProductInfoViewModel : ModelBase
    {
        public BrandViewModel Brand { get; set; }
        public GetBrandProductViewModel BrandProduct { get; set; }
        public List<FullStoreInfoViewModel> Stores { get; set; }
        public List<StoreProductUnitViewModel> Units { get; set; }
    }
}
