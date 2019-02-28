using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.DAL.Configuration
{
    internal class BrandProductConfiguration : IEntityTypeConfiguration<BrandProducts>
    {
        public void Configure(EntityTypeBuilder<BrandProducts> builder)
        {
            builder.ToTable("BrandProduct")
                .HasKey(k => k.Id);
            builder.HasOne(h => h.BrandCategory);
            builder.HasOne(h => h.Brand).WithMany().HasForeignKey("BrandId");
            builder.HasIndex(e => e.UrlByName)
                .IsUnique()
                .ForSqlServerIsClustered();
        }
    }
}
