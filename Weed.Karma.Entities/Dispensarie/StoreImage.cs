using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Dispensarie
{
    public class StoreImage : IEntityBase
    {
        public int Id { get; set; }
        public string ImageName { get; set; }
        public string ImagePath { get; set; }
       // public virtual Store Store { get; set; }
        public DateTime CreatedDate { get ; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
