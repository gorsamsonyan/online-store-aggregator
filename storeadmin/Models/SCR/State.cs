using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Models.SCR
{
    [Table("State")]
    public class State
    {
        public int ID { get; set; }
        public string StateName { get; set; }
        public string StateAbbreviation { get; set; }
    }

   
}
