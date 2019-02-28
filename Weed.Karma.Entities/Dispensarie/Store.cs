using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Weed.Karma.Entities.Deals;
using Weed.Karma.Entities.Delivery;
using Weed.Karma.Entities.Places;
using Weed.Karma.Entities.Product;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.Entities.Dispensarie
{
    public class Store : IEntityBase
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
        public string ContactNumber { get; set; }
        public string WebSite { get; set; }
        //public virtual Store UserStore { get; set; }       
        public string WorkingHoursFrom { get; set; }
        public string WorkingHoursTo { get; set; }
        public string Weekends { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public bool IsBestStore { get; set; }
        public int RegionId { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public virtual User User { get; set; }
        public virtual Region Region { get; set; }
        public virtual DeliveryTime DeliveryTime { get; set; }
        public virtual StoreImage StoreImages { get; set; }
        public virtual ICollection<DealProduct> Deals { get; set; }
        public virtual ICollection<StoreProduct> StoreProducts { get; set; }
    }
}
