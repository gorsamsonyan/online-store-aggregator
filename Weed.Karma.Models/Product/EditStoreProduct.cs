using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.UnitModels;

namespace Weed.Karma.Models.Product
{
    public class EditStoreProduct : ModelBase
    {
        public List<UnitViewModel> Units { get; set; }
        public List<ProductCategoryViewModel> Categories { get; set; }
    }
}
