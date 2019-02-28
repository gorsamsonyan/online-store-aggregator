using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.UnitModels;

namespace Weed.Karma.Models.DealModels
{
    public class InsertToDealVewModel : ModelBase
    {
        //public int Id { get; set; }
        public decimal CurrentPrice { get; set; }
        public int StoreProductId { get; set; }
        public int ProductCategoryId { get; set; }
        public string ProductName { get; set; }
        public int StoreId { get; set; }
        public bool IsDeal { get; set; }
        public bool IsActiveDeal { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
