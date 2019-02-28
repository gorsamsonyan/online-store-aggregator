using System;
using System.Collections.Generic;
using Weed.Karma.Models.DeliveryModels;

namespace Weed.Karma.Models.StoreModels
{
    public class AddStoreViewModel : ModelBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string ShopName { get; set; }
        public string ShopLegalName { get; set; }
        public string PhysicalAddress { get; set; }
        public string LegalAddress { get; set; }
        public string UrlByName { get; set; }
        public string PaymentMethod { get; set; }
        public string LogoPath { get; set; }
        public int TaxNumber { get; set; }
        public int LicenseNumber { get; set; }
        public string ContactNumber { get; set; }
        public string WebSite { get; set; }
        public string WorkingHoursFrom { get; set; }
        public string WorkingHoursTo { get; set; }
        public string DeliveryTimeFrom { get; set; }
        public string DeliveryTimeTo { get; set; }
        public decimal? MinOrderDelivery { get; set; }
        public decimal? DeliveryPrice { get; set; }
        public int DeliveryRegionId { get; set; }
        public List<int> Weekends { get; set; }
        public string ImageSrc { get; set; }
        public string Description { get; set; }
        // public ICollection<StoreImageViewModel> StoreImages { get; set; }
        public DeliveryTimeViewModel DeliveryTime { get; set; }
        public int RegionId { get; set; }
        public bool IsBestStore { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
