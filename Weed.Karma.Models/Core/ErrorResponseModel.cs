using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Core
{
    public class ErrorResponseModel : ResponseModel<List<Error>>
    {
        public ErrorResponseModel()
        {
            Data = new List<Error>();
            Success = false;
        }
        public ErrorResponseModel(List<Error> errors) : this()
        {
            Data = errors;
        }
        public ErrorResponseModel(string key, string message) : this()
        {
            Data.Add(new Error(key, message));
        }
    }
}
