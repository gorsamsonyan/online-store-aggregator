using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.StoreModels
{
    public class StoreProductPriceHistoryViewModel : ModelBase
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public DateTime DateTimeFrom { get; set; }
        public DateTime DateTimeTo { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
