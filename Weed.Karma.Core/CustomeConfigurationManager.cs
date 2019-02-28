using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Core
{
    public class CustomeConfigurationManager
    {

        public static string BlobConnection { get; private set; }
        public static string BlobContainerRoot { get; private set; }
        public static string BlobContainer { get; private set; }

        static CustomeConfigurationManager()
        {
            BlobConnection = "DefaultEndpointsProtocol=https;AccountName=storagesvs;AccountKey=6Yckj+HxdNOqIGzL34mFX3jSe/+hh9HeJYwYBjQBvhKfkHu6I112GJRA5xDIadFvbyXHqFw0h1sdGfYY7dwvWw==;EndpointSuffix=core.windows.net";
            BlobContainerRoot = "weedkarma";
            BlobContainer = "weedkarma/images";
        }
    }
}
