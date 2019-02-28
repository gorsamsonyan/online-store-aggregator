using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Weed.Karma.Web.API.Core.Swagger
{
    public class AddTokenHeaderParameter : IOperationFilter
    {
        public void Apply(Operation operation, OperationFilterContext context)
        {
            if (operation.Parameters == null)
            {
                operation.Parameters = new List<IParameter>();
            }

            var languageParameter = new NonBodyParameter
            {
                Name = "app-lang",
                In = "header",
                Description = "The user language",
                Required = false,
                Type = "string"
            };

            var currencyParameter = new NonBodyParameter
            {
                Name = "app-curr",
                In = "header",
                Description = "The user currency",
                Required = false,
                Type = "string"
            };

            operation.Parameters.Add(languageParameter);
            operation.Parameters.Add(currencyParameter);
        }
    }
}
