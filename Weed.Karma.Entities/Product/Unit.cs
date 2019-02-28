using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Product
{
    public class Unit : IEntityBase
    {
        public int Id { get; set; }
        //public int ProductUnitId { get; set; }
        public string Size { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual ICollection<StoreProductUnit> StoreProductUnits { get; set; }
    }
}
