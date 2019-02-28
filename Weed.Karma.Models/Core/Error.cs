using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Models.Core
{
    public class Error
    {
        public string Key { get; set; }
        public string Message { get; set; }
        public Error(string key, string message)
        {
            Key = key;
            Message = message;
        }
    }
}
