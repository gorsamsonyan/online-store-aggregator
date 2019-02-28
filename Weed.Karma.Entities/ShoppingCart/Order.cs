using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Places;

namespace Weed.Karma.Entities.ShoppingCart
{
    public class Order : IEntityBase
    {
        public int Id { get; set; }
        public int RegionId { get; set; }
        public int CartId { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual Region Region { get; set; }
        public virtual Cart Cart { get; set; }
    }
}
