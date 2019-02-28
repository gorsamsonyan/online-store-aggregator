using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.UnitModels;

namespace Weed.Karma.Models.Product
{
    public class SingleProductViewModel : ModelBase
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
    }
}
