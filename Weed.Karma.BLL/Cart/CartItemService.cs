using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.BLL.Interfaces.Cart;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.ShoppingCart;
using System.Threading.Tasks;
using System.Linq;

namespace Weed.Karma.BLL.Cart
{
    public class CartItemService : Service<CartItem>, ICartItemService
    {
        public CartItemService(IRepository<CartItem> repository) : base(repository)
        {
        }

        public void AddCartItem(ICollection<CartItem> entity)
        {
            Repository.AddRangeAsync(entity);
        }

        public List<CartItem> GetCartItemsByStoreId(int storeId)
        {
            return Repository.Query()
                .Include(i => i.StoreProduct)
                .Where(w => /*w.StoreId == storeId &&*/ !w.IsDeleted)
                .Get()
                .ToList();
        }

        public CartItem GetCartItemsByStoreProductId(int storeProductId)
        {
            return Repository.Query()
                  .Include(i => i.StoreProduct)
                  .Where(w => w.StoreProductId == storeProductId && !w.IsDeleted)
                  .Get()
                  .FirstOrDefault();
        }

        public List<CartItem> GetCartIdByCartItemId(int cartId)
        {
            return Repository.Query()
                .Where(w => w.Id == cartId)
                .Get()
                .ToList();
        }


        public void Update(CartItem entity)
        {
            Repository.Update(entity);

        }

        public CartItem GetItemByCartId(int cartItemId)
        {
            var cartItem = Repository.Query()
                .Include(i => i.StoreProduct)
                  .Where(w => w.Id == cartItemId)
                  .Get()
                  .FirstOrDefault();

            return cartItem;
        }
    }
}
