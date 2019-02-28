using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.DeliveryModels;

namespace Weed.Karma.Models.StoreModels
{
    public class StoreInfoViewModel : ModelBase
    {
        public int Id { get; set; }
        public string WorkingHoursFrom { get; set; }
        public string WorkingHoursTo { get; set; }
        public string ShopName { get; set; }
        public string LogoPath { get; set; }
        public string UrlByName { get; set; }

    }
}
