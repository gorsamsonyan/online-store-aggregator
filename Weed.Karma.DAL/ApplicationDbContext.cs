using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Weed.Karma.Entities.Users;
using Weed.Karma.Entities;
using System.Reflection;
using Weed.Karma.DAL.Configuration;
using Weed.Karma.DTO;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.DAL
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, int,
        UserClaim, UserRole, UserLogin, RoleClaim, UserToken>
    {
        private readonly ApplicationContextOptions options;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IOptions<ApplicationContextOptions> o)
            : base(options)
        {
            this.options = o?.Value;
        }

        public DbSet<UserProfile> UserProfiles { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.AddConfiguration<User, UserConfiguration>();
            //builder.AddConfiguration<Role, RoleConfiguration>();

            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new RoleConfiguration());
            builder.ApplyConfiguration(new UserClaimConfiguration());
            builder.ApplyConfiguration(new UserRoleConfiguration());
            builder.ApplyConfiguration(new UserLoginConfiguration());
            builder.ApplyConfiguration(new RoleClaimConfiguration());
            builder.ApplyConfiguration(new UserTokenConfiguration());
            builder.ApplyConfiguration(new UserProfileConfiguration());
            builder.ApplyConfiguration(new StoreConfiguration());
            builder.ApplyConfiguration(new ProductCategoryConfiguration());
            builder.ApplyConfiguration(new StoreProductConfiguration());
            builder.ApplyConfiguration(new StoreProductPriceHistoryConfiguration());
            builder.ApplyConfiguration(new ProductCategoryConfiguration());
            builder.ApplyConfiguration(new ProductUnitConfiguration());
            builder.ApplyConfiguration(new StoreProductUnitConfigation());
            builder.ApplyConfiguration(new StoreImageConfiguration());
            builder.ApplyConfiguration(new MetaDataConfiguration());
            builder.ApplyConfiguration(new BrandConfiguration());
            builder.ApplyConfiguration(new BrandCategoryConfiguration());
            builder.ApplyConfiguration(new CartItemConfiguration());
            builder.ApplyConfiguration(new OrderConfiguration());
            builder.ApplyConfiguration(new CartConfiguration());
            builder.ApplyConfiguration(new OrderDeliveryConfiguration());
            builder.ApplyConfiguration(new BlogPostsConfiguration());
            builder.ApplyConfiguration(new PostCommentsConfiguration());



            if (options.SoftDelete)
            {
                foreach (var type in builder.Model.GetEntityTypes())
                {
                    if (typeof(IEntityBase).IsAssignableFrom(type.ClrType)
                        && (type.BaseType == null
                            || !typeof(IEntityBase).IsAssignableFrom(type.BaseType.Clr‌​Type)))
                        SoftDeleteFilter(builder, type.ClrType);
                }
            }
        }
        public void SoftDeleteFilter(ModelBuilder modelBuilder, Type entityType)
        {
            this.GetType().GetMethod(nameof(SetSoftDeleteFilter), BindingFlags.Static | BindingFlags.NonPublic)
                .MakeGenericMethod(entityType)
                .Invoke(null, new object[] { modelBuilder });

        }

        private static void SetSoftDeleteFilter<TEntity>(ModelBuilder modelBuilder)
            where TEntity : class, IEntityBase
        {
            modelBuilder.Entity<TEntity>().HasQueryFilter(x => !x.IsDeleted);
        }
    }
}
