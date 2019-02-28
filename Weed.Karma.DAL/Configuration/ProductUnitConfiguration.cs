using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.DAL.Configuration
{
    internal class ProductUnitConfiguration : IEntityTypeConfiguration<Unit>
    {
        public void Configure(EntityTypeBuilder<Unit> builder)
        {
            builder.ToTable("ProductUnit");
            builder.HasKey(k => k.Id);
            builder.HasMany(m => m.StoreProductUnits);
        }
    }
}
