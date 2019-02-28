using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.Product;

namespace Weed.Karma.Models.Brand
{
    public class AddBrandProductViewModel : ModelBase
    {
        //public int Id { get; set; }
        public int CategoryId { get; set; }
        public int BrandId { get; set; }
        public string Name { get; set; }
        public string LogoPath { get; set; }
        public string Description { get; set; }
        public string Hashtag { get; set; }
       // public List<MetaDataViewModel> Metadatas { get; set; }
    }
}
