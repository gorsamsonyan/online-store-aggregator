using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Enums;

namespace Weed.Karma.Entities.Users
{
    public class Member : IEntityBase
    {
        public Member()
        {
            //UserProfile = new UserProfile();
        }
        public int Id { get; set; }
        public int UserProfileUserId { get; set; }
        public MemberType MemberType { get; set; }
        public virtual UserProfile UserProfile { get; set; }
        //public virtual Employee Employee { get; set; }
        //public virtual Employer Employer { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
