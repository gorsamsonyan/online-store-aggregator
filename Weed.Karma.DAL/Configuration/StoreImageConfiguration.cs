using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Weed.Karma.Entities.Dispensarie;

namespace Weed.Karma.DAL.Configuration
{
    internal class StoreImageConfiguration : IEntityTypeConfiguration<StoreImage>
    {
        public void Configure(EntityTypeBuilder<StoreImage> builder)
        {
            builder.ToTable("StoreImage");
            builder.HasKey(k => k.Id);
        }
    }
}
