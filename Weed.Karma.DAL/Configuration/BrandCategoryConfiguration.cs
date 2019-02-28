using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.DAL.Configuration
{
    internal class BrandCategoryConfiguration : IEntityTypeConfiguration<BrandCategory>
    {
        public void Configure(EntityTypeBuilder<BrandCategory> builder)
        {
            builder.ToTable("BrandCategory").
                HasKey(k => k.Id);
            builder.HasIndex(e => e.UrlByName)
                .IsUnique()
                .ForSqlServerIsClustered();
        }
    }
}
