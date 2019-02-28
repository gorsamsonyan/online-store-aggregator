using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.AccountModels
{
    public class LoginViewModel : ModelBase
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
        public string RedirectUrl { get; set; }
        public string Token { get; set; }
    }
}
