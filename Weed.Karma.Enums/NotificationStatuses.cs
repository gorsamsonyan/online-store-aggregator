using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.Enums
{
    public enum NotificationStatuses
    {
        NewOrder = 0,
        NonConfirm = 1,
        AreWaiting = 2,
        OnWay = 3,
        Closed = 4,
        Canceled = 5
    }
    public static class GetNotificationStatus
    {
        public static string GetNotificationStatuses(int status)
        {
            NotificationStatuses statuses = (NotificationStatuses)status;
            return string.Format("{0}", statuses);
             
        }
    }
}
