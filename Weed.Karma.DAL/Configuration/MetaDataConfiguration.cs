using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.MetaData;

namespace Weed.Karma.DAL.Configuration
{
    internal class MetaDataConfiguration : IEntityTypeConfiguration<MetaData>
    {
        public void Configure(EntityTypeBuilder<MetaData> builder)
        {
            builder.ToTable("MetaData");
            builder.HasKey(k => k.Id);
        }
    }
}
