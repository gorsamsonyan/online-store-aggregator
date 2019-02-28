using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.DAL.Configuration
{
    public class StoreProductUnitConfigation : IEntityTypeConfiguration<StoreProductUnit>
    {
        public void Configure(EntityTypeBuilder<StoreProductUnit> builder)
        {
            builder.ToTable("StoreProductUnit");
            builder.HasKey(k => k.Id);
            builder.HasMany(h => h.StoreProductPriceHistories);
            builder.HasOne(w => w.Unit)
                .WithMany(s => s.StoreProductUnits)
                .HasForeignKey(f => f.UnitId);
            builder.HasOne(w => w.StoreProduct)
                .WithMany(s => s.StoreProductUnits)
                .HasForeignKey(f => f.StoreProductId);
        }
    }
}
