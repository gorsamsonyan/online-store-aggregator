using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.Entities.ShoppingCart
{
    public class Cart : IEntityBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal CartTotalPrice { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public User User { get; set; }
        public ICollection<CartItem> CartItems { get; set; }
    }
}
