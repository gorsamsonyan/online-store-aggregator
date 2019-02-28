using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.DeliveryModels;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.UnitModels;

namespace Weed.Karma.Models.StoreModels
{
    public class StoreProductsViewModel : ModelBase
    {
        // public int Id { get; set; }
        public List<ProductViewModel> Products { get; set; }
        public DeliveryTimeViewModel DeliveryTime { get; set; }
        public List<ProductCategoryViewModel> ProductCategory { get; set; }
        //public List<StoreProductUnitViewModel> StoreProductUnits { get; set; }
        public List<UnitViewModel> UnitViewModels { get; set; }
        public StoreInfoViewModel Store { get; set; }
        public FullStoreInfoViewModel Info { get; set; }
    }
}