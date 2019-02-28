using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Brand
{
    public class AddStoreBrandProductViewModel : ModelBase
    {
        public int StoreId { get; set; }
        public int BrandId { get; set; }
        public int BrandProductId { get; set; }
        public int CategoryId { get; set; }
        public List<string> Size { get; set; }
        public List<decimal> Price { get; set; }
        public string Hashtag { get; set; }
    }
}
