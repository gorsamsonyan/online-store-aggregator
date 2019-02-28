using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.Entities.ShoppingCart
{
    public class CartItem : IEntityBase
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int StoreId { get; set; }
        public int StoreProductId { get; set; }
        public int CartId { get; set; }
        public string Size { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual StoreProduct StoreProduct { get; set; }
    }
}
