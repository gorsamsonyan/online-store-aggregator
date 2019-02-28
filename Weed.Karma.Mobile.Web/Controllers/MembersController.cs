using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Weed.Karma.Entities.Users;
using Microsoft.AspNetCore.Authorization;
using Weed.Karma.Models.Members;

namespace Weed.Karma.Mobile.Web.Controllers
{
    [Authorize]
    public class MembersController : ControllerBase
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        private readonly IMapper mapper;

        public MembersController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IMapper mapper) : base(configuration, unitOfWork)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
        }

        public async Task<IActionResult> Index()
        {
            CurrentUserViewModel currentUser = new CurrentUserViewModel();
            User user = await userManager.FindByEmailAsync(User.Identity.Name);
            currentUser = mapper.Map<CurrentUserViewModel>(user);
            return View(currentUser);
        }
    }
}