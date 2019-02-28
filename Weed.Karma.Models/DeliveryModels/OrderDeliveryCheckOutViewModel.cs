using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.DeliveryModels
{
    public class OrderDeliveryCheckOutViewModel : ModelBase
    {
        public int ItemId { get; set; }
        public int CartId { get; set; }
        public int NewOrder { get; set; }
    }
}
