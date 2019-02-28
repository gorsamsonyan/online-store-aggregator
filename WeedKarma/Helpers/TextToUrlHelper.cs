using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WeedKarma.Helpers
{
    internal class TextToUrlHelper
    {
        private static string Url { get; set; }
        /// <summary>
        /// Celar Text From HTML,
        /// Celar to Alpha Numeric,
        /// Remove Multi Spaces,
        /// Upper case any first Words,
        /// Relace Spaces to -
        /// </summary>
        /// <param name="url">String</param>
        /// <returns>string</returns>
        public static string GetClearUrl(string url)
        {
            Url = StripTagsRegex(url);
            Url = AlphaNumeric(Url);
            Url = RemoveMultiSpaces(Url);
            Url = UppercaseWords(Url);
            Url = RelaceSpaces(Url);
            return Url;
        }
        private static string StripTagsRegex(string source)
        {
            return Regex.Replace(source, "<.*?>", string.Empty);
        }
        private static string RelaceSpaces(string source)
        {
            return source.Replace(" ", "-");
        }
        private static string AlphaNumeric(string source)
        {
            Regex rgx = new Regex("[^a-zA-Z0-9 -]");
            return rgx.Replace(source, "");
        }
        private static string RemoveMultiSpaces(string source)
        {
            return Regex.Replace(source, @"\s+", " ");

        }
        static string UppercaseWords(string source)
        {
            char[] array = source.ToCharArray();
            if (array.Length >= 1)
            {
                if (char.IsLower(array[0]))
                {
                    array[0] = char.ToUpper(array[0]);
                }
            }

            for (int i = 1; i < array.Length; i++)
            {
                if (array[i - 1] == ' ')
                {
                    if (char.IsLower(array[i]))
                    {
                        array[i] = char.ToUpper(array[i]);
                    }
                }
            }
            return new string(array);
        }

    }
}
