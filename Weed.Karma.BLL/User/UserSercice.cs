using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using Weed.Karma.BLL.Interfaces.User;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Users;

namespace Weed.Karma.BLL.User
{

    public class UserSercice : Service<Entities.Users.User>, IUserService
    {
        public UserSercice(IRepository<Entities.Users.User> repository)
          : base(repository)
        {
        }

        public string GetIPAddress()
        {
            string ipAddress = string.Empty;

            //IPHostEntry heserver = Dns.GetHostEntry(Dns.GetHostName());
            //var ip = heserver.AddressList[2].ToString();
        
            //string IPAddress = string.Empty;
            //IPHostEntry Host = default(IPHostEntry);
            //string Hostname = null;
            //Hostname = System.Environment.MachineName;
            //Host = Dns.GetHostEntry(Hostname);
            //foreach (IPAddress IP in Host.AddressList)
            //{
            //    if (IP.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
            //    {
            //        IPAddress = Convert.ToString(IP);
            //    }
            //}
            return ipAddress;
        }

        public string GetPostCommentUsersNickName(int userId)
        {
            return Repository.Query()
                  .Where(w => w.Id == userId)
                  .GetAs(g => g.NickName)
                  .FirstOrDefault();

        }

        public void UpdateUserInfo(Entities.Users.User entity)
        {
            Repository.Update(entity);
        }

    }
}