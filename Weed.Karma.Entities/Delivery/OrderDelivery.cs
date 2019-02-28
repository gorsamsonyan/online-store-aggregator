using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.Entities.Delivery
{
    public class OrderDelivery : IEntityBase
    {
        public int Id { get; set; }
        public int CartId { get; set; }
        public string Status { get; set; }
        public string Address { get; set; }
        public string Home { get; set; }
        public string Floor { get; set; }
        public string Apartment { get; set; }
        public string Comment { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual Cart Cart { get; set; }
    }
}
