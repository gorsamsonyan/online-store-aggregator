using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.AccountModels;

namespace Weed.Karma.Web.API.Controllers
{
    [ApiController]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        private readonly IMapper mapper;
        public AccountController(
            IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork,
            SignInManager<User> signInManager,
            UserManager<User> userManager,
            IMapper mapper)
            : base(configurationSvc, unitOfWork)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.mapper = mapper;
        }

        /// <summary>
        /// User Registration Action
        /// </summary>
        /// <param name="model">RegisterVM model</param>
        /// <returns>true if registration success otherwise false</returns>
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> SignUp([FromBody]RegisterViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    User currentUser = await userManager.FindByEmailAsync(model.Email);
                    if (currentUser == null)
                    {
                        User user = mapper.Map<RegisterViewModel, User>(model);
                        user.UserProfile.CreatedDate = DateTime.UtcNow;
                        user.UserProfile.UpdatedDate = DateTime.UtcNow;
                        await userManager.CreateAsync(user, model.Password);
                        return ApiResult(true);
                    }
                    ModelState.AddModelError("Email", "RegisterModel.Email.Exist");
                    return Error(ModelState);
                }
                return Error(ModelState);
            }
            catch (Exception e)
            {
                return HandleException(e);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> SignIn([FromBody] LoginViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var signin = await signInManager.PasswordSignInAsync(model.Email,
                         model.Password, model.RememberMe, lockoutOnFailure: true);
                    if (signin.Succeeded)
                    {
                        var user = await userManager.FindByNameAsync(model.Email);
                        if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
                        {
                            IList<Claim> userClaims = await userManager.GetClaimsAsync(user);
                            userClaims.Add(new Claim(ClaimTypes.Sid, user.Id.ToString()));
                            var now = DateTime.Now;

                            var authOptions = configuration.AuthOptions();

                            var jwt = new JwtSecurityToken(
                                    issuer: authOptions.Issuer,
                                    audience: authOptions.Audience,
                                    notBefore: now,
                                    claims: userClaims,
                                    expires: now.Add(TimeSpan.FromMinutes(authOptions.Lifetime)),
                                    signingCredentials: new SigningCredentials(authOptions.SymmetricSecurityKey, SecurityAlgorithms.HmacSha256));
                            var token = new JwtSecurityTokenHandler().WriteToken(jwt);
                            return ApiResult(new LoginViewModel { Email = user.UserName, Token  = token });
                        }
                    }
                    return Error("LoginModel", "LoginModel.InvalidCredentials");
                }
                return Error(ModelState);
            }
            catch (Exception)
            {

                throw;
            }

        }

        //[Route("api/hhh")]
        //[HttpGet]
        //public ActionResult<IEnumerable<string>> Get()
        //{

        //    return Ok(new string[] { JwtTokenBuilder() });
        //}

        //private string JwtTokenBuilder()
        //{
        //    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:key"]));

        //    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        //    var jwtToken = new JwtSecurityToken(issuer: configuration["JWT:issuer"],
        //        audience: configuration["JWT:audience"], signingCredentials: credentials,
        //        expires: DateTime.Now.AddMinutes(10));

        //    return new JwtSecurityTokenHandler().WriteToken(jwtToken);
        //}
    }
}