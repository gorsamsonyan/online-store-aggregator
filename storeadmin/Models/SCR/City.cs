﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Models.SCR
{
    [Table("City")]
    public class City
    {
        [Key]
        public int ID { get; set; }
        public string CityName { get; set; }
        public int ParentID { get; set; }
    }
}
