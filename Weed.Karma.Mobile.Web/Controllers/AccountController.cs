using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.AccountModels;
using AutoMapper;
using System.Collections.Generic;
using System.Security.Claims;


namespace Weed.Karma.Mobile.Web.Controllers
{
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


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model, string returnUrl)
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
                        await userManager.AddToRoleAsync(user, "Member");
                        await signInManager.SignInAsync(user, isPersistent: false);
                        return RedirectToAction("Index", "Home");
                    }
                    ModelState.AddModelError("Email", "RegisterModel.Email.Exist");
                    return RedirectToAction("Index", "Home");
                }
                return View(ModelState);
            }
            catch (Exception e)
            {

            }
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            try
            {
                returnUrl = returnUrl ?? Url.Content("~/");
                if (ModelState.IsValid)
                {
                    var result = await signInManager.PasswordSignInAsync(model.Email,
                        model.Password, model.RememberMe, lockoutOnFailure: true);
                    if (result.Succeeded)
                    {

                        var user = await userManager.FindByNameAsync(model.Email);
                        if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
                        {
                            IList<Claim> userClaims = await userManager.GetClaimsAsync(user);
                            userClaims.Add(new Claim(ClaimTypes.Sid, user.Id.ToString()));
                            var now = DateTime.UtcNow;
                            await signInManager.SignInAsync(user, isPersistent: false);

                            var authOptions = configuration.AuthOptions();
                        }
                        return LocalRedirect(returnUrl);
                    }
                    else
                    {
                        return LocalRedirect("/Account/Register");
                    }

                }
                else
                {
                    return View();
                }
            }
            catch (Exception e)
            {
            }
            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {

            return View();
        }
        [HttpGet]
        public IActionResult RegisterDoctor()
        {
            return View();
        }

        [HttpGet]
        public IActionResult RegisterStore()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> RegisterStore(RegisterStoreViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    User currentUser = await userManager.FindByEmailAsync(model.Email);
                    if (currentUser == null)
                    {
                        User user = mapper.Map<RegisterStoreViewModel, User>(model);
                        user.UserProfile.CreatedDate = DateTime.UtcNow;
                        user.UserProfile.UpdatedDate = DateTime.UtcNow;
                        await userManager.CreateAsync(user, model.Password);
                        var setRole = await userManager.AddToRoleAsync(user, "Store");
                        await signInManager.SignInAsync(user, isPersistent: false);
                        return RedirectToAction("Index", "Home");
                    }
                    ModelState.AddModelError("Email", "RegisterModel.Email.Exist");
                    return RedirectToAction("Index", "Home");
                }
                return View(ModelState);
            }
            catch (Exception e)
            {
            }
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult RegisterBrand()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> RegisterBrand(RegisterBrandViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    User currentUser = await userManager.FindByEmailAsync(model.Email);
                    if (currentUser == null)
                    {
                        User user = mapper.Map<RegisterBrandViewModel, User>(model);
                        user.UserProfile.CreatedDate = DateTime.UtcNow;
                        user.UserProfile.UpdatedDate = DateTime.UtcNow;
                        await userManager.CreateAsync(user, model.Password);
                        var setRole = await userManager.AddToRoleAsync(user, "Brand");
                        await signInManager.SignInAsync(user, isPersistent: false);
                        return RedirectToAction("Index", "Home");
                    }
                    ModelState.AddModelError("Email", "RegisterModel.Email.Exist");
                    return RedirectToAction("Index", "Home");
                }
                return View(ModelState);
            }

            catch (Exception e)
            {
            }
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult RegisterManufacturer()
        {
            return View();
        }
        [HttpGet]
        public IActionResult RegisterDelivery()
        {
            return View();
        }
        [HttpGet]
        public IActionResult RegisterDispanser()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> LogOut()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
        [HttpGet]
        public IActionResult Login(string returnUrl)
        {
            LoginViewModel login = new LoginViewModel
            {
                RedirectUrl = returnUrl
            };
            return View(login);
        }

        public IActionResult Profile()
        {
            return View();
        }

    }
}