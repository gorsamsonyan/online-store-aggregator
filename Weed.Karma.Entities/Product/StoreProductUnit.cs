using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Weed.Karma.Entities.Product
{
    public class StoreProductUnit : IEntityBase
    {
        public int Id { get; set; }
        public decimal CurrentPrice { get; set; }
        public int StoreProductId { get; set; }
        public int UnitId { get; set; }
        public bool IsDeal { get; set; }
        public bool IsActiveDeal { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual StoreProduct StoreProduct { get; set; }
        public virtual Unit Unit { get; set; }
        public virtual ICollection<StoreProductPriceHistory> StoreProductPriceHistories { get; set; }
    }
}
