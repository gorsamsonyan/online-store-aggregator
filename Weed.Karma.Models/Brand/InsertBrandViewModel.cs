using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class InsertBrandViewModel:ModelBase
    {
        public int UserId { get; set; }
        public int RegionId { get; set; }
        public string Name { get; set; }
        public string LogoPath { get; set; }
        public string UrlToName { get; set; }
        public string CoverPath { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsBestBrand { get; set; }
    }
}
