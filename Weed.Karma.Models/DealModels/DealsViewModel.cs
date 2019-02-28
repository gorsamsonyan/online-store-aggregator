using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.DealModels
{
    public class DealsViewModel : ModelBase
    {
        public List<DealViewModel> Deals { get; set; }
        public List<BestDealViewModel> BestDeals { get; set; }
    }
}
