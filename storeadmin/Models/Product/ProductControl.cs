using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Models.Product
{
    [Table("Product")]
    public class ProductControl
    {
        public int Id {get;set;}
        public string ProductName{get;set;}
	    public string ProductTitle{get;set;} 
	    public string ProductDescription{get;set;}
	    public string ProductPrice{get;set;} 
	    public string ProductSize{get;set;}
	    public int StoreMenuId{get;set;} 
    }
}
