using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

using Microsoft.AspNetCore.SignalR;

namespace ChatApi
{
    public class ChatHub : Hub
    {

        public void Send(string message)
        {
        }
        //    {
        //        // Call the broadcastMessage method to update clients.
        //        Clients.All.InvokeAsync("Send", message);
        //    }

    }
}