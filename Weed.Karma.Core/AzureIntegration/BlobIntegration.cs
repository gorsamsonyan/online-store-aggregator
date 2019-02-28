using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Weed.Karma.Core.Helpers;
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;


namespace Weed.Karma.Core.AzureIntegration
{
    public static class BlobIntegration
    {
        private static readonly string _blobConnection;
        private static readonly string _blobContainerRoot;
        private static readonly string _blobContainer;
        public static string ScreenUrl;
        static BlobIntegration()
        {
            _blobConnection = CustomeConfigurationManager.BlobConnection;
            _blobContainerRoot = CustomeConfigurationManager.BlobContainerRoot;
            _blobContainer = CustomeConfigurationManager.BlobContainer;

        }
        public static void AddImageToBlobStorageAsync(Bitmap image, string imageName, string imageContentType)
        {
            try
            {
                //  get the container reference
                var container = GetImagesBlobContainer();
                // using the container reference, get a block blob reference and set its type
                CloudBlockBlob blockBlob = container.GetBlockBlobReference(imageName);
                blockBlob.Properties.ContentType = imageContentType;
                // finally, upload the image into blob storage using the block blob reference
                byte[] result = null;
                if (image != null)
                {
                    using (MemoryStream stream = new MemoryStream())
                    {
                        image.Save(stream, ImageFormat.Jpeg);
                        result = stream.ToArray();
                    }
                }
                blockBlob.UploadFromByteArrayAsync(result, 0, result.Length);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        private static CloudBlobContainer GetImagesBlobContainer()
        {
            // use the connection string to get the storage account
            var storageAccount = CloudStorageAccount.Parse(_blobConnection);
            // using the storage account, create the blob client
            var blobClient = storageAccount.CreateCloudBlobClient();
            // finally, using the blob client, get a reference to our container
            var container = blobClient.GetContainerReference(_blobContainer);
            // if we had not created the container in the portal, this would automatically create it for us at run time
            //container.CreateIfNotExists();
            container.CreateIfNotExistsAsync();
            // by default, blobs are private and would require your access key to download.
            //   You can allow public access to the blobs by making the container public.   
            container.SetPermissionsAsync(
                new BlobContainerPermissions
                {
                    PublicAccess = BlobContainerPublicAccessType.Blob
                });
            ScreenUrl = container.StorageUri.ToString();
            return container;
        }
    }
}
