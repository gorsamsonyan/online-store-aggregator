using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Entities
{
    public interface IEntityBase
    {
        DateTime CreatedDate { get; set; }
        DateTime UpdatedDate { get; set; }
        bool IsDeleted { get; set; }
    }
}