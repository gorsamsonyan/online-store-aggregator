using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;

namespace Weed.Karma.DAL.Configuration
{
    internal class StoreProductPriceHistoryConfiguration : IEntityTypeConfiguration<StoreProductPriceHistory>
    {
        public void Configure(EntityTypeBuilder<StoreProductPriceHistory> builder)
        {
            builder.ToTable("StoreProductPriceHistory");
            builder.HasKey(k => k.Id);
        }
    }
}
