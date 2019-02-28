using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.DeliveryModels
{
    public class DeliveryTimeViewModel : ModelBase
    {
        public int Id { get; set; }
        public string DeliveryTimeFrom { get; set; }
        public string DeliveryTimeTo { get; set; }
        public decimal MinOrderDelivery { get; set; }
        public decimal DeliveryPrice { get; set; }
    }
}
