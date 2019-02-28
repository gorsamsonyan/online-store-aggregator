using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class BrandViewModel : ModelBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LogoPath { get; set; }
        public string CoverPath { get; set; }
        public string Description { get; set; }
        public string UrlByName { get; set; }
    }
}
