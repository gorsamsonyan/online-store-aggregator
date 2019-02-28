using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.StoreModels;

namespace Weed.Karma.Models.CartItems
{
    public class CartItemsViewModelForStore : ModelBase
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int StoreProductId { get; set; }
        public int CartId { get; set; }
        public string Size { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public int Status { get; set; }
        public string OrderStatus { get; set; }
        public string OrderTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public  StoreProductViewModel StoreProduct { get; set; }
    }
}
