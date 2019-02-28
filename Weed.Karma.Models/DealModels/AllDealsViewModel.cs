using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.StoreModels;

namespace Weed.Karma.Models.DealModels
{
    public class AllDealsViewModel : ModelBase
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public string ShopName { get; set; }
        public int ProductCategoryId { get; set; }
        public string Description { get; set; }
        public string ProductName { get; set; }
        public string ImgSrc { get; set; }
        public bool IsDeal { get; set; }
        public StoreInfoViewModel Store { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
