using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.PaymentMethod
{
    public class PaymentMethodViewModel : ModelBase
    {
        public int Id { get; set; }
        public string PaymentName { get; set; }
        public string PaymentLogoPath { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
