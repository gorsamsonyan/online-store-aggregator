using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.DAL.Infrastructure;

namespace WeedKarma.Controllers
{
    public class ProductController : ControllerBase
    {
        public ProductController(IConfigurationService configurationSvc,
            IUnitOfWork unitOfWork) : base(configurationSvc, unitOfWork)
        {
        }
        public IActionResult Index()
        {
            //ViewModelDemo vmDemo = new ViewModelDemo();
            //vmDemo._productControls = contextAdmin.Product.ToList();
            //vmDemo._menuControls = contextAdmin.Menu.ToList();
            //vmDemo._businessControls = contextAdmin.Store.ToList();

            return View();
        }

        //[HttpGet("store/{storeName}")]
        //public IActionResult GetProducts(string storeName)
        //{
        //    //ViewModelDemo vmDemo = new ViewModelDemo();
        //    //storeName = WebUtility.UrlDecode(storeName);

        //    //vmDemo._menuControls = contextAdmin.Menu.Include(x => x.Parent)
        //    //     .AsNoTracking()
        //    //     .Where(x => x.Parent != null && x.Parent.ShopName == storeName).ToList();
        //    //vmDemo._businessControls = new System.Collections.Generic.List<Store>
        //    //{
        //    //    contextAdmin.Store.FirstOrDefault(x=>x.ShopName==storeName)
        //    //};
        //    //var firstMenu = vmDemo._menuControls.FirstOrDefault();
        //    //if (firstMenu != null)
        //    //{
        //    //    vmDemo._productControls = contextAdmin.Product.Include(x => x.Images).Where(x => x.StoreMenuId == firstMenu.Id).ToList().ToList();
        //    //}
        //    //else
        //    //{
        //    //    vmDemo._productControls = new System.Collections.Generic.List<Product>();
        //    //}
        //    return View();
        //}

        //[HttpGet("store/{storeName}/menu/{menuName}")]
        //public IActionResult GetMenu(string storeName, string menuName)
        //{
        //    //storeName = WebUtility.UrlDecode(storeName);
        //    //menuName = WebUtility.UrlDecode(menuName);
        //    //// lsi du vonc es tve vor beri karda id te name
        //    ////hl@ mi hat el kanes,routing-i mej mi ban en chi
        //    //var store = contextAdmin.Store.FirstOrDefault(x => x.ShopName == storeName);
        //    //var menu = contextAdmin.Menu.FirstOrDefault(x => x.Name == menuName && x.ParentId == store.Id);
        //    //if (menu == null)
        //    //{
        //    //    return RedirectToAction("Store", storeName);
        //    //}
        //    //var products = contextAdmin.Product.Include(x => x.Images).Where(x => x.StoreMenuId == menu.Id).ToList();
        //    //ViewModelDemo vmDemo = new ViewModelDemo();

        //    //vmDemo._productImages = contextAdmin.ProductImages.Include(x => x.Parent)
        //    //   .AsNoTracking()
        //    //    .Where(x => x.Parent != null && x.Parent.Id == store.Id).ToList();

        //    ////axpers lsi es ete prcar inj kases vornc karam urish patic stanam nkarnery,lav
        //    //vmDemo._menuControls = contextAdmin.Menu.Include(x => x.Parent)
        //    //     .AsNoTracking()
        //    //     .Where(x => x.Parent != null && x.ParentId == store.Id).ToList();
        //    //vmDemo._businessControls = new System.Collections.Generic.List<Store>
        //    //{
        //    //   store
        //    //};
        //    //vmDemo._productControls = products.ToList();
        //    return View();
        //}

        ////  [NonAction]
        ////        private Product PutImageInModel(Product arg)
        ////        {
        ////            //hly kneres bayc sra paty piti chtanq indxeum..inch index?hima base64 ov em anum,vor inq@ serveri vrayic file@ karda poxanci
        ////            foreach (var item in arg.Images)
        ////            {
        ////                var path = System.IO.Path.GetFullPath(@"\inetpub\storeadmin\wwwroot\" + item.Path);
        ////#if DEBUG
        ////                path = System.IO.Path.GetFullPath(@"..\storeadmin\storeadmin\wwwroot\" + item.Path);
        ////#endif
        ////                item.Base64 = Convert.ToBase64String(System.IO.File.ReadAllBytes(path));
        ////            }
        ////            return arg;
        ////        }
    }
}