using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.DAL.Configuration
{
    internal class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Order")
                .HasKey(k => k.Id);
            builder.HasOne(h => h.Region);
            builder.HasOne(h => h.Cart).WithOne();

        }
    }
}
