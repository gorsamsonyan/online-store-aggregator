using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Members
{
    public class EditProfileViewModel : ModelBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public string PhoneNumber { get; set; }
        public string DateOfBirth { get; set; }
        public string Email { get; set; }
    }
}
