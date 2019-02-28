using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using NToastNotify;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Weed.Karma.BLL.Core;
using AutoMapper;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.DTO;
using Weed.Karma.DTO.Configuration;
using Weed.Karma.Entities.Users;
using Weed.Karma.BLL.Interfaces.Stores;
using Weed.Karma.BLL.Stores;
using Weed.Karma.BLL.Interfaces.Regions;
using Weed.Karma.BLL.Regions;
using Weed.Karma.BLL.Interfaces.Delivery;
using Weed.Karma.BLL.Delivery;
using Weed.Karma.BLL.Store;
using Weed.Karma.BLL.Interfaces.Products;
using Weed.Karma.BLL.StoreProduct;
using Weed.Karma.BLL.MetaData;
using Weed.Karma.BLL.Interfaces.MetaData;
using Weed.Karma.BLL.Interfaces.Storage;
using Weed.Karma.BLL.BlobStorage;
using Weed.Karma.BLL.Interfaces.Brand;
using Weed.Karma.BLL.Brand;
using Weed.Karma.BLL.Cart;
using Weed.Karma.BLL.Interfaces.Cart;
using WeedKarma.Hubs;
using Weed.Karma.BLL.User;
using Weed.Karma.BLL.Interfaces.User;
using Weed.Karma.BLL.Blog;
using Weed.Karma.BLL.Interfaces.Blog;
using System.Net;

namespace WeedKarma
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddNToastNotifyToastr(new ToastrOptions()
            {
                ProgressBar = true,
                PositionClass = ToastPositions.TopRight,
                NewestOnTop = true
            });

            services.AddOptions();


            services.AddMemoryCache();

            var connectionString = Configuration.GetConnectionString("Connection");

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(connectionString, s => s.MigrationsAssembly("Weed.Karma.DAL"));

            });

            //services.Configure<SmtpConfiguration>(options => Configuration.GetSection("SmtpConfiguration").Bind(options));
            services.Configure<CurrencyDefaultsDTO>(options => Configuration.GetSection("Defaults:CurrencyDefaultsDTO").Bind(options));
            services.Configure<AuthOptionsDTO>(options => Configuration.GetSection("AuthOptionsDTO").Bind(options));
            services.Configure<UserDefaultsDTO>(options => Configuration.GetSection("Defaults:UserDefaultsDTO").Bind(options));
            services.Configure<LanguageDefaultsDTO>(options => Configuration.GetSection("Defaults:LanguageDefaultsDTO").Bind(options));
            //services.Configure<DimensionDefaultsDTO>(options => Configuration.GetSection("Defaults:DimensionDefaults").Bind(options));
            //services.Configure<EmailSender>(options => Configuration.GetSection("EmailSender").Bind(options));
            //services.Configure<StorageSettings>(options => Configuration.GetSection("StorageSettings").Bind(options));

            services.Configure<ApplicationContextOptions>(options => Configuration.GetSection("ApplicationContextOptions").Bind(options));

            services.AddIdentity<User, Role>(options =>
            {
                options.User.RequireUniqueEmail = true;
                options.SignIn.RequireConfirmedPhoneNumber = false;
                options.SignIn.RequireConfirmedEmail = false;

                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;

            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();



            services.AddSingleton<IConfigurationService, ConfigurationService>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IStoreService, StoreService>();
            services.AddScoped<IRegionService, RegionService>();
            services.AddScoped<IDeliveryTimeService, DeliveryTimeService>();
            services.AddScoped<IStoreImagesService, StoreImageService>();
            services.AddScoped<IStoreProductService, StoreProductService>();
            services.AddScoped<IProductUnitService, ProductUnitService>();
            services.AddScoped<IStoreProductPriceHistoryService, StoreProductPriceHistoryService>();
            services.AddScoped<IProductCategoryService, ProductCategoryService>();
            services.AddScoped<IDeliveryTimeService, DeliveryTimeService>();
            services.AddScoped<IStoreProductUnitService, StoreProductUnitService>();
            services.AddScoped<IMetaDataService, MetaDataService>();
            services.AddScoped<IBrandService, BrandService>();
            services.AddScoped<IBrandCategoryService, BrandCategoryService>();
            services.AddScoped<IBrandProductService, BrandProductService>();
            services.AddScoped<ICartService, CartService>();
            services.AddScoped<ICartItemService, CartItemService>();
            services.AddScoped<IBlobService, BlobService>();
            services.AddScoped<IOrderDeliveryService, OrderDeliveryService>();
            services.AddScoped<IUserService, UserSercice>();
            services.AddScoped<IProductDealService, ProductDealService>();
            services.AddScoped<IBlogPostsService, BlogPostsService>();
            services.AddScoped<IPostCommentsService, PostCommentsService>();
            services.AddScoped<IBlogPostImagesService, BlogPostImagesService>();
            services.AddScoped<IBlogPostViewsService, BlogPostViewsService>();


            //SignalR
            services.AddSignalR();
            services.AddRouting();
            services.AddMvc();
            services.AddAutoMapper(conf =>
            {
                //var webProfilesAssembly = typeof(Weed.karma.BLL.Mapper.AssemblyReference).Assembly;
                var bllProfilesAssembly = typeof(Weed.karma.BLL.Mapper.AssemblyReference).Assembly;
                //var bllStore = typeof(Weed.karma.BLL.Mapper.StoreProfile).Assembly;
                // conf.AddProfiles(webProfilesAssembly);
                conf.AddProfiles(bllProfilesAssembly);
                // conf.AddProfiles(bllStore);

            });
            //services.AddAutoMapper();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }
            app.UseNToastNotify();

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseSignalR(routes =>
            {
                routes.MapHub<OrderHub>("/orderHub");
                routes.MapHub<NotificationHub>("/notificationHub");


            });
            app.UseMvc(routes =>
            {

                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute("Dispensaries", "{cityCode}/{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute("Brands", "{cityCode}/{controller=Home}/{action=Index}/{brandId?}/{brandProductId?}");
                routes.MapRoute("Info", "{controller=Home}/{action=Index}/{brandId?}/{brandProductId?}");
                routes.MapRoute("UrlByName", "{controller=Home}/{action=Index}/{UrlByName?}");


            });
        }
    }
}