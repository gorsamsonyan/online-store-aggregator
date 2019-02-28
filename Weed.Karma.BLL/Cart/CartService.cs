using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Cart;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.ShoppingCart;

namespace Weed.Karma.BLL.Cart
{
    public class CartService : Service<Entities.ShoppingCart.Cart>, ICartService
    {
        public CartService(IRepository<Entities.ShoppingCart.Cart> repository) : base(repository)
        {
        }

        public void AddToCart(Entities.ShoppingCart.Cart entity)
        {
           Repository.InsertAsync(entity);
        }
    }
}
