using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Swagger;
using AutoMapper;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Weed.Karma.DAL;
using Weed.Karma.DTO.Configuration;
using Weed.Karma.DTO;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.Core;
using Weed.Karma.BLL.Core;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Weed.karma.BLL.Mapper;
using Weed.Karma.Web.API.Core.Swagger;

namespace Weed.Karma.Web.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

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

            // authentication
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = Configuration["AuthOptionsDTO:Issuer"],
                    ValidateAudience = true,
                    ValidAudience = Configuration["AuthOptionsDTO:Audience"],
                    ValidateLifetime = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["AuthOptionsDTO:Key"])),
                    ValidateIssuerSigningKey = true
                };
                options.Events = new JwtBearerEvents()
                {
                    OnAuthenticationFailed = c =>
                    {
                        c.NoResult();
                        c.Response.StatusCode = 200;
                        c.Response.ContentType = c.Request.ContentType;

                        string responseObj = JsonConvert.SerializeObject(new UnauthorizedResponseModel(c.Exception.Message));

                        return c.Response.WriteAsync(responseObj);
                    }

                };
            });

            services.AddSingleton<IConfigurationService, ConfigurationService>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            //services.AddDbContext<ApplicationDbContext>();

            //var tokenParams = new TokenValidationParameters()
            //{
            //    ValidateIssuer = true,
            //    ValidateAudience = true,
            //    ValidateLifetime = true,
            //    ValidIssuer = Configuration["JWT:issuer"],
            //    ValidAudience = Configuration["JWT:audience"],
            //    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:key"]))

            //};

            //services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //    .AddJwtBearer(jwtconfig =>
            //    {
            //        jwtconfig.TokenValidationParameters = tokenParams;
            //    });
            services.AddRouting();
            services.AddMvc();

            // mapper
            services.AddAutoMapper(conf =>
            {
                var webProfilesAssembly = typeof(AssemblyReference).Assembly;
                var bllProfilesAssembly = typeof(AssemblyReference).Assembly;
                conf.AddProfiles(webProfilesAssembly);
                conf.AddProfiles(bllProfilesAssembly);
            });

            services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer",
                    new ApiKeyScheme()
                    {
                        In = "header",
                        Description = "Please insert JWT with Bearer into field",
                        Name = "Authorization",
                        Type = "apiKey"
                    });
                c.SwaggerDoc("v1", new Info { Title = "Testing API", Description = " Swagger ", Version = "v1" });
                c.OperationFilter<AddTokenHeaderParameter>();

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();

            app.UseMvc();

            app.UseCors(builder =>
            {
                //builder.WithOrigins("http://localhost:3000");
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
                builder.AllowAnyOrigin();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Core Api");
            });
        }
    }
}