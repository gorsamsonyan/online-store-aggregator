using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Weed.Karma.Entities.Users;
using Microsoft.AspNetCore.Authorization;
using Weed.Karma.Models.Members;
using Weed.Karma.BLL.Interfaces.User;

namespace WeedKarma.Controllers
{
    [Authorize]
    public class MembersController : ControllerBase
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        private readonly IMapper mapper;
        private readonly IUserService userService;

        public MembersController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IMapper mapper,
            IUserService userService) : base(configuration, unitOfWork)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
            this.userService = userService;
        }

        public async Task<IActionResult> Index()
        {
            CurrentUserViewModel currentUser = new CurrentUserViewModel();
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            currentUser = mapper.Map<CurrentUserViewModel>(user);
            return View(currentUser);
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> EditProfile()
        {
            EditProfileViewModel currentUser = new EditProfileViewModel();
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            currentUser = mapper.Map<EditProfileViewModel>(user);
            return View(currentUser);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> EditProfile(EditProfileViewModel model)
        {
            EditProfileViewModel editProfileViewModel = new EditProfileViewModel();
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            user.NickName = model.NickName;
            user.PhoneNumber = model.PhoneNumber;
            user.DateOfBirth = model.DateOfBirth;
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;


            userService.UpdateUserInfo(user);
            Save();
            return Redirect("/Members/Index");
        }

        [HttpGet]
        [Authorize]
        public IActionResult ChangePassword()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> ChangePassword(ChangePasswordViewModel model)
        {
            if (model.NewPassword == model.ConfirmPassword)
            {
                User user = await userManager.FindByEmailAsync(User.Identity.Name);
                await userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
                return Redirect("/Members/Index");
            }

            return View();
        }

    }
}