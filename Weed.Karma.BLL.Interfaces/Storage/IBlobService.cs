using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;
using System.Threading.Tasks;

namespace Weed.Karma.BLL.Interfaces.Storage
{
    public interface IBlobService
    {
       string SaveBlobAsync(string image, string imageName, string imageContentType);
    }
}
