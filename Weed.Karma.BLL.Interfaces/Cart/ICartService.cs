using System;
using System.Collections.Generic;
using System.Text;
using  Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.BLL.Interfaces.Cart
{
    public interface ICartService : IService<Entities.ShoppingCart.Cart>
    {
        void AddToCart(Entities.ShoppingCart.Cart entity);

    }
}
