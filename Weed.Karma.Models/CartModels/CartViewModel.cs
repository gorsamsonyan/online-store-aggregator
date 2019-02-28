using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.CartModels
{
    public class CartViewModel : ModelBase
    {
        public string CartData { get; set; }
        public int CartTotalPrice { get; set; }
        public string Status { get; set; }
        public string Address { get; set; }
        public string Home { get; set; }
        public string Floor { get; set; }
        public string Apartment { get; set; }
        public string Comment { get; set; }
        public string PhoneNumber { get; set; }
    }
}
