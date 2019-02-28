using System;
using System.Collections.Generic;
using System.Text;

namespace Weed.Karma.BLL.Interfaces.User
{
    public interface IUserService : IService<Entities.Users.User>
    {
        void UpdateUserInfo(Entities.Users.User entity);
        string GetPostCommentUsersNickName(int userId);
        string GetIPAddress();
    }
}
