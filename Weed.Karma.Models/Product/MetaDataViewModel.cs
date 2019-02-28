using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Product
{
    public class MetaDataViewModel : ModelBase
    {
        public int Id { get; set; }
        public string Hashtag { get; set; }
        public int StoreProductId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
