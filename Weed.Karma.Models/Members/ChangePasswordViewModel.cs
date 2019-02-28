using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Members
{
    public class ChangePasswordViewModel : ModelBase
    {
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
