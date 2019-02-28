using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Product
{
    public class ProductCategoryViewModel : ModelBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsEach { get; set; }
        public string UrlByName { get; set; }

    }
}
