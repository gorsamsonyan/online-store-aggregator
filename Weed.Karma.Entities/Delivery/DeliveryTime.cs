using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.Entities.Delivery
{
    public class DeliveryTime : IEntityBase
    {
        public int Id { get; set; }
        public int DeliveryRegionId { get; set; }   
        public string DeliveryTimeFrom { get; set; }
        public string DeliveryTimeTo { get; set; }
        public decimal? MinOrderDelivery { get; set; }
        public decimal? DeliveryPrice { get; set; }
        //public virtual Store Store { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
