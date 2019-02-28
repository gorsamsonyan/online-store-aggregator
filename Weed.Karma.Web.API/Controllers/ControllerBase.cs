using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Configuration;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Models.Core;
using Weed.Karma.Web.API.Controllers.Core;

namespace Weed.Karma.Web.API.Controllers
{

    [Route("api/[controller]/[action]")]
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
        protected OkObjectResult ApiResult<T>(T model = default(T))
        {
            return new OkObjectResult(new ApiResponseModel<T>(model));
        }
        protected OkObjectResult ApiResult<T>()
        {
            return ApiResult<object>();
        }
        protected OkObjectResult Unauthorized(string model = null)
        {
            return new OkObjectResult(new UnauthorizedResponseModel(model));
        }
        protected OkObjectResult Error(ModelStateDictionary model)
        {
            List<Error> translatedErrors = new List<Error>();
            model.ToList()
                .ForEach(s =>
                {
                    translatedErrors.AddRange(s.Value.Errors.Select(e =>
                        new Error(s.Key, e.ErrorMessage)));
                });
            return Error(new ErrorResponseModel(translatedErrors));
        }
        protected OkObjectResult Error(string key, string message)
        {
            return Error(new ErrorResponseModel(key, message));
        }
        protected OkObjectResult Error(ErrorResponseModel model)
        {
            return new OkObjectResult(model);
        }
        protected OkObjectResult Error()
        {
            return Error(ControllerContext.ModelState);
        }

        protected OkObjectResult HandleException(Exception e)
        {
            return Error("Exception", e.Message);
        }
    }
}