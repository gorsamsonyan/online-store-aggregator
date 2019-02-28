using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.AccountModels
{
    public class RegisterBrandViewModel : ModelBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
