using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Brand
{
    public class BrandCategory : IEntityBase
    {
        public int Id { get; set; }
        public string CategoryName {get;set;}
        public string UrlByName { get; set; }
        public bool IsEach { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate {get;set;}
        public bool IsDeleted {get;set;}

    }
}
