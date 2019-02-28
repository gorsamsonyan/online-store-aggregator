using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Blog;

namespace Weed.Karma.DAL.Configuration
{
    internal class BlogPostsConfiguration : IEntityTypeConfiguration<BlogPosts>
    {
        public void Configure(EntityTypeBuilder<BlogPosts> builder)
        {
            builder.ToTable("BlogPosts");
            builder.HasKey(k => k.Id);
            builder.HasMany(h => h.PostComments);
            builder.HasMany(h => h.BlogPostImages);
            builder.HasOne(h => h.User).WithMany();
            builder.HasMany(h => h.PostLikes);
            builder.HasMany(h => h.PostViews);
        }
    }
}
