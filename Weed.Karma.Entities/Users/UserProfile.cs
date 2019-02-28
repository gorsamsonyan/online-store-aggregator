using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities.Users
{
    public class UserProfile : IEntityBase
    {
        public UserProfile()
        {

        }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        //public ICollection<Member> Members { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
