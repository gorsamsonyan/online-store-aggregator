using storeadmin.Models.SCR;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace storeadmin.Models.Business
{
    //[Table("Store")]
    //public class BusinessControl
    //{
    //    public int ID {get;set;}
    //    [Display(Name = "Shop Name")]
    //    public string ShopName {get;set;}
    //    [Display(Name = "Shop Legal Name")]
    //    public string ShopLegalName {get;set;}
    //    [Display(Name = "Physical Address")]
    //    public string PhysicalAddress {get;set;}
    //    [Display(Name = "Legal Address")]
    //    public string LegalAddress {get;set;}
    //    [Display(Name = "Working Hours From")]
    //    public string WorkingHoursFrom {get;set;}
    //    [Display(Name = "Working Hours To")]
    //    public string WorkingHoursTo {get;set;}
    //    [Display(Name = "Weekend Deys")]
    //    public string WeekendDeys {get;set;}
    //    [Display(Name = "Store Logo")]
    //    public string StoreLogoPath {get;set;}
    //    [Display(Name = "Store Image")]
    //    public string StoreImagePath {get;set;}
    //    [Display(Name = "Delivery Status")]
    //    public byte DeliveryStatus {get;set;}
    //    [Display(Name = "Delivery Duration")]
    //    public string DeliveryDuration {get;set;}
    //    [Display(Name = "Min Order Amount")]
    //    public double MinOrderAmount {get;set;}
    //    [Display(Name = "Delivery Fee")]
    //    public double DeliveryFee {get;set;}
    //    [Display(Name = "Payment Method")]
    //    public string PaymentMethod {get;set;}
    //    [Display(Name = "Tax Number")]
    //    public string TaxNumber {get;set;}
    //    [Display(Name = "License Number")]
    //    public string LicenseNumber {get;set;}
    //    [Display(Name = "Contact Number")]
    //    public string ContactNumber {get;set;}
    //    [Display(Name = "Specify Website")]
    //    public string SpecifyWebsite { get; set; }
    //    public int StateID {get;set;}
    //    public int CityID {get;set;}
    //    public int RegionID {get;set;}
    //    public string CreationDate {get;set;}
    //    public string UpdateDate {get;set;}


    //    public State state = new State();
    //}
}
