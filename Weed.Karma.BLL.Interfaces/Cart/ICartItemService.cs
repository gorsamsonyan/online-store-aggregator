using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.ShoppingCart;
using System.Threading.Tasks;

namespace Weed.Karma.BLL.Interfaces.Cart
{
    public interface ICartItemService : IService<CartItem>
    {
        void AddCartItem(ICollection<CartItem> entity);
        CartItem GetCartItemsByStoreProductId(int storeId);
        List<CartItem> GetCartItemsByStoreId(int storeId);
        List<CartItem> GetCartIdByCartItemId(int cartId);
        CartItem GetItemByCartId(int cartItemId);
        void Update(CartItem entity);
    }
}
