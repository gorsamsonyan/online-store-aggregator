using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Weed.Karma.Entities.Delivery;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.DAL.Configuration
{
    internal class StoreConfiguration : IEntityTypeConfiguration<Store>
    {
        public void Configure(EntityTypeBuilder<Store> builder)
        {
            builder.ToTable("Store").
            HasKey(k => k.Id);
            //builder.HasKey(t => new { t.Id, t.User });
            ///One User have more Stores,and ForeignKey with UserStore column
            builder.HasOne(h => h.User);

            ///One Store can have one Region
            builder.HasOne(h => h.Region);
            ///One Store can have many StoreImages
            builder.HasOne(s => s.StoreImages)
                .WithOne().HasForeignKey<StoreImage>(s => s.Id);

            //Deals 
            builder.HasMany(h => h.Deals).WithOne(w => w.Store);


            builder.HasOne(o => o.DeliveryTime).WithOne().HasForeignKey<DeliveryTime>(h => h.Id);

            builder.HasMany(p => p.StoreProducts);

            builder.Property(p => p.ShopLegalName)
                .HasMaxLength(150)
                .IsUnicode(true);

            builder.Property(p => p.ShopName)
              .HasMaxLength(60)
              .IsUnicode(true);

            builder.Property(p => p.TaxNumber)
              .HasMaxLength(60)
              .IsUnicode(true);

            builder.Property(p => p.LicenseNumber)
             .HasMaxLength(60)
             .IsUnicode(true);

            builder.Property(p => p.ContactNumber)
             .HasMaxLength(60)
             .IsUnicode(true);

            builder.Property(p => p.WebSite)
             .HasMaxLength(60)
             .IsUnicode(true);
            builder.HasIndex(e => e.UrlByName)
                .IsUnique()
                .ForSqlServerIsClustered();
        }
    }
}
