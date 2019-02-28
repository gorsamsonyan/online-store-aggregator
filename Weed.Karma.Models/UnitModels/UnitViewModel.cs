using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.UnitModels
{
    public class UnitViewModel : ModelBase
    {
        public int Id { get; set; }
        public string Size { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }

}
