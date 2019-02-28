using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Enums
{
    public enum DaysOfWeek
    {
        Sun = 1,
        Mon = 2,
        Tues = 3,
        Wed = 4,
        Thu = 5,
        Fri = 6,
        Sat = 7
    }

    public static class GetDaysOfWeek
    {
        public static string GetDayOfWeek(int days)
        {
            DaysOfWeek daya = (DaysOfWeek)days;
            string day = string.Format("{0}, ", daya);
            return day;
        }
    }
}
