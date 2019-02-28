using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Models.SCR
{
    [Table("Region")]
    public class Region
    {
        public int ID { get; set; }
        public string RegionName { get; set; }
        public int ParentID { get; set; }
    }
}
