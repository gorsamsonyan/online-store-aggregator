using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.Entities.Users
{
    public class User : IdentityUser<int>, IEntityBase
    {
        public User()
        {
            UserProfile = new UserProfile();
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public string DateOfBirth { get; set; }
        //public virtual ICollection<Store> Stores { get; set; }
        public virtual UserProfile UserProfile { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
