using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.DAL.Configuration
{
    internal class BrandConfiguration : IEntityTypeConfiguration<Entities.Brand.Brand>
    {
        public void Configure(EntityTypeBuilder<Brand> builder)
        {
            builder.ToTable("Brand")
                .HasKey(k => k.Id);
            builder.Property(p => p.Name).IsRequired();
            builder.HasOne(h => h.Region);
            builder.HasOne(h => h.User);
            builder.HasIndex(e => e.UrlByName)
                .IsUnique()
                .ForSqlServerIsClustered();
        }
    }
}
