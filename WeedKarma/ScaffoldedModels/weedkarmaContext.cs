using Microsoft.EntityFrameworkCore;

namespace WeedKarma.ScaffoldedModels
{
    public partial class weedkarmaContext : DbContext
    {
        public weedkarmaContext()
        {
        }

        public weedkarmaContext(DbContextOptions<weedkarmaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Region> Region { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<Store> Store { get; set; }
        public virtual DbSet<ProductImages> ProductImages { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductImages>(entity =>
            {
                entity.HasOne(x => x.Parent).WithMany(x => x.Images).HasForeignKey(x => x.ParentId).HasConstraintName("FK_ProductImages_Product");
                
            });
            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.HasIndex(e => e.RoleId);

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName)
                    .HasName("RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.LoginProvider).HasMaxLength(128);

                entity.Property(e => e.ProviderKey).HasMaxLength(128);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Discriminator).IsRequired();

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.InverseIdNavigation)
                    .HasForeignKey<AspNetUsers>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AspNetUsers_AspNetUsers1");
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.Property(e => e.LoginProvider).HasMaxLength(128);

                entity.Property(e => e.Name).HasMaxLength(128);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CityName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ParentId).HasColumnName("ParentID");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.City)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_City_State");
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.Menu)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_Menu_Store");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductDescription).HasColumnType("text");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ProductSize)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ProductTitle)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ParentId).HasColumnName("ParentID");

                entity.Property(e => e.RegionName)
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.Region)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_Region_City");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.StateAbbreviation)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.StateName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Store>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DeliveryDuration)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DeliveryFee).HasColumnType("money");

                entity.Property(e => e.LegalAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LicenseNumber)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.MinOrderAmount).HasColumnType("money");

                entity.Property(e => e.ParentId)
                    .HasColumnName("ParentID")
                    .HasMaxLength(450);

                entity.Property(e => e.PaymentMethod)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.PhysicalAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RegionId).HasColumnName("RegionID");

                entity.Property(e => e.ShopLegalName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ShopName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SpecifyWebsite).HasColumnType("text");

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.Property(e => e.StoreImagePath).HasColumnType("text");

                entity.Property(e => e.StoreLogoPath).HasColumnType("text");

                entity.Property(e => e.TaxNumber)
                    .HasMaxLength(18)
                    .IsUnicode(false);

                entity.Property(e => e.WeekendDeys)
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.WorkingHoursFrom)
                    .HasMaxLength(7)
                    .IsUnicode(false);

                entity.Property(e => e.WorkingHoursTo)
                    .HasMaxLength(7)
                    .IsUnicode(false);

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Store)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK_Store_City");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.Store)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_Store_Users");

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.Store)
                    .HasForeignKey(d => d.RegionId)
                    .HasConstraintName("FK_Store_Region");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Store)
                    .HasForeignKey(d => d.StateId)
                    .HasConstraintName("FK_Store_State");
            });
        }
    }
}