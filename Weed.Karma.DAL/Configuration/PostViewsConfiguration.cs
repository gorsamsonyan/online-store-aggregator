using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.DAL.Configuration
{
    internal class PostViewsConfiguration : IEntityTypeConfiguration<PostViews>
    {
        public void Configure(EntityTypeBuilder<PostViews> builder)
        {
            builder.ToTable("PostViews");
            builder.HasKey(k => k.Id);  
        }
    }
}
