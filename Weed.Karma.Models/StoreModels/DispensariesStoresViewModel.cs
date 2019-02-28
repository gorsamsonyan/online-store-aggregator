using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.DeliveryModels;
using Weed.Karma.Models.PaymentMethod;

namespace Weed.Karma.Models.StoreModels
{
    public class DispensariesStoresViewModel : ModelBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string ShopName { get; set; }
        public string UrlByName { get; set; }

        public string ShopLegalName { get; set; }
        public string PhysicalAddress { get; set; }
        public string LegalAddress { get; set; }//lalala
        public string LogoPath { get; set; }
        public int TaxNumber { get; set; }
        public int LicenseNumber { get; set; }
        public string ContactNumber { get; set; }
        public string WebSite { get; set; }
        public string WorkingHoursFrom { get; set; }
        public string WorkingHoursTo { get; set; }
        public string Weekends { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public  DeliveryTimeViewModel DeliveryTime { get; set; }
        public  StoreImageViewModel StoreImages { get; set; }
        public bool IsBestStore { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

    }
}
