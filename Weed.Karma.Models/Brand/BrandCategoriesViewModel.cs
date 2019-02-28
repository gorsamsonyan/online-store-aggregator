using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class BrandCategoriesViewModel : ModelBase
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public bool IsEach { get; set; }


    }
}
