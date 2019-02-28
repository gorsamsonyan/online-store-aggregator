using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Weed.Karma.BLL.Interfaces.Storage;
using Weed.Karma.Core;

namespace Weed.Karma.BLL.BlobStorage
{
    public class BlobService : IBlobService
    {
        private static readonly string _blobConnection;
        private static readonly string _blobContainerRoot;
        private static readonly string _blobContainer;
        public static string ScreenUrl;

        static BlobService()
        {
            _blobConnection = CustomeConfigurationManager.BlobConnection;
            _blobContainerRoot = CustomeConfigurationManager.BlobContainerRoot;
            _blobContainer = CustomeConfigurationManager.BlobContainer;
        }

        //public string SaveBlobAsync(byte[] image, string imageName, string imageContentType)
        //{

        //    CloudBlobContainer container = GetCloudBlobContainer();

        //    CloudBlockBlob blockBlob = container.GetBlockBlobReference(imageName + ".jpg");

        //    if (image != null)
        //    {
        //         blockBlob.UploadFromByteArrayAsync(image, 0, image.Length);

        //    }

        //    return container.Uri.ToString();
        //}

        public string SaveBlobAsync(string image, string imageName, string imageContentType)
        {
            int indexOFCutBase64 = 0;
            for (int i = 0; i < image.Length; i++)
            {
                if (image[i] == ',')
                {
                    indexOFCutBase64 = i;
                }
            }

            byte[] base64 = Convert.FromBase64String(image.Substring(indexOFCutBase64 + 1));
            CloudBlobContainer container = GetCloudBlobContainer();
            CloudBlockBlob blockBlob = container.GetBlockBlobReference(imageName + ".jpg");

            if (image != null)
            {
                blockBlob.UploadFromByteArrayAsync(base64, 0, base64.Length);
            }
            return container.Uri.ToString();
        }

        private CloudBlobContainer GetCloudBlobContainer()
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse("DefaultEndpointsProtocol=https;" +
                "AccountName=weedkarmastorage;AccountKey=onox+V/r4WMDUpUCZYo2yKoKHNjZoguUxB/" +
                "rGWB4wSFfpaEXHwFFLd3nqNMotPsM3WaK0tZ3fEqbpruTcAzgjw==;EndpointSuffix=core.windows.net");
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer container = blobClient.GetContainerReference("images");
            return container;
        }   
    }
}
