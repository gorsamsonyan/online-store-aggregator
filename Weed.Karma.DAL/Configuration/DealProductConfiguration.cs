using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Deals;

namespace Weed.Karma.DAL.Configuration
{
    internal class DealProductConfiguration : IEntityTypeConfiguration<DealProduct>
    {
        public void Configure(EntityTypeBuilder<DealProduct> builder)
        {
            builder.ToTable("DealProduct").
          HasKey(k => k.Id);
        }
    }
}