using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Weed.Karma.DAL;
using Weed.Karma.DTO.Configuration;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Core;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Weed.Karma.DTO;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.Web
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
            services.AddOptions();

            services.AddMemoryCache();

            var connectionString = Configuration.GetConnectionString("Connection");

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(connectionString, s => s.MigrationsAssembly("Weed.Karma.DAL"));

            });

             services.Configure<CurrencyDefaultsDTO>(options => Configuration.GetSection("Defaults:CurrencyDefaultsDTO").Bind(options));
            services.Configure<AuthOptionsDTO>(options => Configuration.GetSection("AuthOptionsDTO").Bind(options));
            services.Configure<UserDefaultsDTO>(options => Configuration.GetSection("Defaults:UserDefaultsDTO").Bind(options));
            services.Configure<LanguageDefaultsDTO>(options => Configuration.GetSection("Defaults:LanguageDefaultsDTO").Bind(options));
          

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

            // authentication
           

            services.AddSingleton<IConfigurationService, ConfigurationService>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("Connection")));
            services.AddDefaultIdentity<IdentityUser>()
                .AddDefaultUI(UIFramework.Bootstrap4)
                .AddEntityFrameworkStores<ApplicationDbContext>();

            
            services.AddRouting();
            services.AddMvc();

        }
      
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
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
