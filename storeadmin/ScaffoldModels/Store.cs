using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace storeadmin.ScaffoldModels
{
    public partial class Store
    {
        public Store()
        {
            Menu = new HashSet<Menu>();
        }

        public int Id { get; set; }
        public string ShopName { get; set; }
        public string ShopLegalName { get; set; }
        public string PhysicalAddress { get; set; }
        public string LegalAddress { get; set; }
        public string WorkingHoursFrom { get; set; }
        public string WorkingHoursTo { get; set; }
        public string WeekendDeys { get; set; }
        public string StoreLogoPath { get; set; }
        public string StoreImagePath { get; set; }
        public bool DeliveryStatus { get; set; }
        public string DeliveryDuration { get; set; }
        public decimal? MinOrderAmount { get; set; }
        public decimal? DeliveryFee { get; set; }
        public string PaymentMethod { get; set; }
        public string TaxNumber { get; set; }
        public string LicenseNumber { get; set; }
        public string ContactNumber { get; set; }
        public string SpecifyWebsite { get; set; }
        public int? StateId { get; set; }
        public int? CityId { get; set; }
        public int? RegionId { get; set; }

        public string ParentId { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public City City { get; set; }
        public Region Region { get; set; }
        public State State { get; set; }
        public ICollection<Menu> Menu { get; set; }

        public ApplicationUser Parent { get; set; }

        public string LogoBase64 { get; set; }

        public string ImageBase64 { get; set; }


        [NotMapped]
        public string Deys_Monday { get; set; }
        [NotMapped]
        public string Deys_Tuesday { get; set; }
        [NotMapped]
        public string Deys_Wednesday { get; set; }
        [NotMapped]
        public string Deys_Thursday { get; set; }
        [NotMapped]
        public string Deys_Friday { get; set; }
        [NotMapped]
        public string Deys_Saturday { get; set; }
        [NotMapped]
        public string Deys_Sunday { get; set; }

        [NotMapped]
        public byte Delivery_Status { get; set; }
        [NotMapped]
        public string Base64 { get; internal set; }
    }
}
