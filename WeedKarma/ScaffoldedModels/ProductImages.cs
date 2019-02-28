﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WeedKarma.ScaffoldedModels
{
    public class ProductImages
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public int? ParentId { get; set; }

        public Product Parent { get; set; }

        public string Base64 { get; set; }
    }
}
