using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Weed.Karma.Models.Core
{
    public class UnauthorizedResponseModel : ResponseModel<List<Error>>
    {
        public UnauthorizedResponseModel(string message = null)
        {
            Status = HttpStatusCode.Unauthorized;
            Data = new List<Error>();
            if (!string.IsNullOrEmpty(message)) Data.Add(new Error("Message", message));
        }
    }
}
