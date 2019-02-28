using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.DAL.Configuration
{
    internal class PostLikesConfiguration : IEntityTypeConfiguration<PostLikes>
    {
        public void Configure(EntityTypeBuilder<PostLikes> builder)
        {
            builder.ToTable("PostLikes");
            builder.HasKey(k => k.Id);
        }
    }
}
