using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using storeadmin.Models.File;

namespace storeadmin.ScaffoldModels
{
    public partial class weedkarmaContext : IdentityDbContext
    {
        public weedkarmaContext()
        {
        }

        public weedkarmaContext(DbContextOptions<weedkarmaContext> options)
            : base(options)
        {
        }

        //public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        //public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        //public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        //public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        //public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        //public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        //public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Region> Region { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<Store> Store { get; set; }
        public virtual DbSet<ProductImages> ProductImages { get; set; }
        //public virtual DbSet<IdentityUser> IdentityUser { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=18.219.96.114; Database=weedkarma; user id=sa; password=Admin100;");
            }
        }
        //axpers apres lsi mekel harc hima tesr vor login elav inqy sax xarnec irar en vaxt miangamic nuyn ejum er bacum vonc anenq vor login arajin ejum baci miangamic nayi asem 
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ProductImages>(entity =>
            {
                entity.HasOne(e => e.Parent).WithMany(e => e.Images).HasForeignKey(e => e.ParentId)
                .HasConstraintName("FK_ProductImages_Product");
            });
            //mi hat pordzi,es mi 5 ropeic kgam ok
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

                entity.Property(e => e.ParentId).HasColumnName("ParentID");

                entity.HasOne(e => e.Parent).WithMany(e=>e.Stores).HasForeignKey(e=>e.ParentId).HasConstraintName("FK_Store_Users");
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
