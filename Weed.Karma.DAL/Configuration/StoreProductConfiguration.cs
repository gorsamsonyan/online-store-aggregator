using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.DAL.Configuration
{
    internal class StoreProductConfiguration : IEntityTypeConfiguration<StoreProduct>
    {
        public void Configure(EntityTypeBuilder<StoreProduct> builder)
        {
            builder.ToTable("StoreProduct");
            builder.HasKey(k => k.Id);
            builder.HasMany(h => h.MetaDatas);
            builder.HasMany(h => h.StoreProductUnits)
                .WithOne(w => w.StoreProduct)
                .HasForeignKey(s=> s.StoreProductId);
            builder.HasOne(h => h.BrandProduct);
            builder.HasIndex(e => e.UrlByName)
                .IsUnique()
                .ForSqlServerIsClustered();

        }
    }
}