using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.Entities.Deals
{
    public class DealProduct : IEntityBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string ProductName { get; set; }
        public decimal CurrentPrice { get; set; }
        public int StoreProductId { get; set; }
        public int ProductCategoryId { get; set; }
        public int StoreId { get; set; }
        public bool IsDeal { get; set; }
        public bool IsActiveDeal { get; set; }
        public bool IsBestDeal { get; set; }
        public string ImgSrc { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual Store Store { get; set; }
    }
}
