using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.DAL.Configuration
{
    internal class CartConfiguration : IEntityTypeConfiguration<Cart>
    {
        public void Configure(EntityTypeBuilder<Cart> builder)
        {
            builder.ToTable("Cart")
                .HasKey(k => k.Id);
            builder.HasOne(h => h.User);
            builder.HasMany(h => h.CartItems);
        }
    }
}
