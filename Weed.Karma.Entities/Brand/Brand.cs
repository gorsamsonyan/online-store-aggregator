using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Places;
using Weed.Karma.Entities.Product;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.Entities.Brand
{
    public class Brand : IEntityBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int RegionId { get; set; }
        public string Name { get; set; }
        public string UrlByName { get; set; }
        public string LogoPath { get; set; }
        public string CoverPath { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsBestBrand { get; set; }
        public virtual ICollection<BrandProducts> BrandProducts { get; set; }
        public virtual User User { get; set; }
        public virtual Region Region { get; set; }
    }
}
