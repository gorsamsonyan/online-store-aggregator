using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Delivery;

namespace Weed.Karma.DAL.Configuration
{
    internal class OrderDeliveryConfiguration : IEntityTypeConfiguration<OrderDelivery>
    {
        public void Configure(EntityTypeBuilder<OrderDelivery> builder)
        {
            builder.ToTable("OrderDelivery")
                .HasKey(k => k.Id);
            builder.HasOne(h => h.Cart).WithOne();
        }
    }
}
