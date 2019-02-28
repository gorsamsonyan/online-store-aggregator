using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Product
{
    public class AddProductViewModel : ModelBase
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string ProductName { get; set; }
        //string ImgBase64Path { get; set; }
        public int StoreId { get; set; }
        public int RegionId { get; set; }
        public int? BrandId { get; set; }
        public string Hashtag { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public List<string> Size { get; set; }
        public List<decimal> Price { get; set; }
    }
}
