using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Filters
{
    public class DispensariesFiltersViewModel : ModelBase
    {
        public bool HaveDeliveries { get; set; }
        public bool IsOpenNow { get; set; }
        public bool IsNearMe { get; set; }
        public bool IsHavePayWithPoints { get; set; }
        public bool IsHaveGiftCartPay { get; set; }
    }
}
