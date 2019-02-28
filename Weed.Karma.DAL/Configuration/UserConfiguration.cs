using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Dispensarie;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.DAL.Configuration
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.HasKey(k => k.Id);
            
            builder.HasOne(p => p.UserProfile)
                .WithOne(w => w.User);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.FirstName)
                .HasMaxLength(64)
                .IsUnicode(true);
            builder.Property(p => p.LastName)
                .HasMaxLength(64)
                .IsUnicode(true);
        }
    }
}
