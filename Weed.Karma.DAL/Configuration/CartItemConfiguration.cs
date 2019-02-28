using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.DAL.Configuration
{
    internal class CartItemConfiguration : IEntityTypeConfiguration<CartItem>
    {
        public void Configure(EntityTypeBuilder<CartItem> builder)
        {
            builder.ToTable("CartItem")
                .HasKey(k => k.Id);
            builder.HasOne(h => h.StoreProduct);
        }
    }
}
