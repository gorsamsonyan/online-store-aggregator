using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.UnitModels;

namespace Weed.Karma.Models.DealModels
{
    public class AddToDealViewModel : ModelBase
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public int ProductCategoryId { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public List<UnitViewModel> ProductUnits { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
