using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Core
{
    public class ApiResponseModel<TData> : ResponseModel<TData>
    {
        public ApiResponseModel(TData data)
        {
            Data = data;
        }
    }
}
