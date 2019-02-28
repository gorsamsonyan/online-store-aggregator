using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Mobile.Web.Controllers.Core;

namespace Weed.Karma.Mobile.Web.Controllers
{
    
    public class ControllerBase : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        protected readonly IConfigurationService configuration;
   

        protected ControllerBase(
           IConfigurationService configuration,
            IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.configuration = configuration;
        }
        protected ApiContext ApiContext { get; private set; }
        protected void Save()
        {
            unitOfWork.Save();
        }
        protected async Task SaveAsync()
        {
            await unitOfWork.SaveAsync();
        }
    }
}
