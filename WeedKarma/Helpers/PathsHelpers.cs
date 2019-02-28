using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeedKarma.Helpers
{
    public static class PathsHelpers
    {
        public static string BaseUrl { get; set; }
        public static readonly string ImagesPath = BaseUrl + "/img/";
        public static readonly string ScriptsPath = BaseUrl + "/js/";
        public static readonly string StylesPath = BaseUrl + "/css/";

    }
}
