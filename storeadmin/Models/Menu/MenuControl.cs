using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Models.Menu
{
    [Table("Menu")]
    public class MenuControl 
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string ParentId { get; set; }
    }
}
