using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Data
{
    public class ApplicationUserAdmin : IdentityUser
    {

      
        [PersonalData]
        public string FirstName { get; set; }
        [PersonalData]
        public string LastName { get; set; }
        [PersonalData]
        public DateTime CreateDate { get; set; }
        [PersonalData]
        public DateTime UpdateDate { get; set; }

        [PersonalData]
        public string RegistrationStatus { get; set; }
        
    }
}
