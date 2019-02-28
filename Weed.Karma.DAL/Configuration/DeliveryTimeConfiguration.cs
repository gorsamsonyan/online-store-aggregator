using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Weed.Karma.Entities.Delivery;

namespace Weed.Karma.DAL.Configuration
{
    internal class DeliveryTimeConfiguration : IEntityTypeConfiguration<DeliveryTime>
    {
        public void Configure(EntityTypeBuilder<DeliveryTime> builder)
        {
            builder.ToTable("DeliveryTime");
            builder.HasKey(k => k.Id);
        }
    }
}
