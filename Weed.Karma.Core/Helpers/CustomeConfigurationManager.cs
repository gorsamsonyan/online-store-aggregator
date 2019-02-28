using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weed.Karma.Core.Helpers
{
    public class CustomeConfigurationManager
    {
        public static string BlobConnection { get; private set; }
        public static string BlobContainerRoot { get; private set; }
        public static string BlobContainer { get; private set; }
        public static string ApiUrl { get; private set; }
        public static string ApiTokenUrl { get; private set; }
        static CustomeConfigurationManager()
        {
        //    BlobConnection = ConfigurationManager.AppSettings["BlobConnection"].ToString();
        //    BlobContainerRoot = ConfigurationManager.AppSettings["BlobContainerRoot"].ToString();
        //    BlobContainer = ConfigurationManager.AppSettings["BlobContainer"];
        //    ApiUrl = ConfigurationManager.AppSettings["ApiUrl"];
        //    ApiTokenUrl = ConfigurationManager.AppSettings["ApiTokenUrl"];
        }
    }
}
