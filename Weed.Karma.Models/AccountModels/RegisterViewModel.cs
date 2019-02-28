using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Weed.Karma.Models.AccountModels
{
   public class RegisterViewModel : ModelBase
    {
        [Display(Name = "LastName")]
        public string LastName { get; set; }
        [Display(Name = "FirstName")]
        public string NickName { get; set; }
        public string FirstName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string ConfirmPassword  { get; set; }
        [Display(Name = "Email")]
        [EmailAddress]
        [Required]
        public string Email { get; set; }
    }
}
