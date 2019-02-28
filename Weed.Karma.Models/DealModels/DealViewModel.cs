using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.StoreModels;

namespace Weed.Karma.Models.DealModels
{
    public class DealViewModel : ModelBase
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public int ProductCategoryId { get; set; }
        public string ShopName { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public string ImgSrc { get; set; }
        public string ImagePath { get; set; }
        public decimal CurrentPrice { get; set; }
        public bool IsDeal { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public StoreInfoViewModel Store { get; set; }
        public StoreProductUnitViewModel Unit { get; set; }
        public StoreProductViewModel Product { get; set; }
    }
}
