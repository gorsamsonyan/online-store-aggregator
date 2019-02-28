using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Models.DeliveryModels;

namespace Weed.Karma.Models.StoreModels
{
    public class FullStoreInfoViewModel : ModelBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string ShopName { get; set; }
        public string ShopLegalName { get; set; }
        public string UrlByName { get; set; }

        public string PhysicalAddress { get; set; }
        public string LegalAddress { get; set; }
        public string LogoPath { get; set; }
        public int TaxNumber { get; set; }
        public int LicenseNumber { get; set; }
        public int ContactNumber { get; set; }
        public string WebSite { get; set; }
        public string WorkingHoursFrom { get; set; }
        public string WorkingHoursTo { get; set; }
        public string Weekends { get; set; }
        public bool IsBestStore { get; set; }
        public int RegionId { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public DeliveryTimeViewModel DeliveryTime { get; set; }
        public int StoreProductId { get; set; }

    }
}
