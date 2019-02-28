using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.DAL.Configuration
{
    internal class PostCommentsConfiguration : IEntityTypeConfiguration<PostComments>
    {
        public void Configure(EntityTypeBuilder<PostComments> builder)
        {
            builder.ToTable("PostComments");
            builder.HasKey(k => k.Id);
           
        }
    }
}
