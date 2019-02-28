using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using storeadmin.ScaffoldModels;

namespace storeadmin.Controllers
{
    public class ProductController : BaseController
    {
        IHostingEnvironment _appEnvironment;
        public ProductController(weedkarmaContext context, IHostingEnvironment appEnvironment) : base(context)
        {
            _appEnvironment = appEnvironment;
        }

        public IActionResult Index()
        {
            //var listProduct = contextAdmin.productControls.ToList();
            return View();
        }

        [HttpGet]
        public IActionResult Create()
        {
            var userId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier).Value;
            
           

            //List<Store> StoreItems = contextAdmin.Store.Where(x => x.ParentId == userId).ToList();
            //ViewBag.StoreItems = new SelectList(StoreItems, "Id", "ShopName");

            ViewBag.Menus = contextAdmin.Menu.Include(x => x.Parent)
                .Where(x => x.Parent != null && x.Parent.ParentId != null && x.Parent.ParentId == userId);

           



            return View();
        }
        public static byte[] ReadFully(Stream input)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                input.CopyTo(ms);
                return ms.ToArray();
            }
        }
        [HttpPost]
        public  IActionResult Create(Product productControl, IFormFile uploads)
        {
            ProductImages productImages = new ProductImages();
            if (ModelState.IsValid)
            {
                productControl = contextAdmin.Product.Add(productControl).Entity;

                if (uploads != null)
                {
                    productImages.Path = string.Empty;
                    productImages.Base64 = Convert.ToBase64String(ReadFully(uploads.OpenReadStream()));
                    productImages.ParentId = productControl.Id;//axper abris mekel nayi es erek uzeca et nkarner kardam cuyc tam chstacvec es dminiki arajin ejin logon piti beri cuyc ta mi hat et karanq nayen    q utex piti cuyc ta tex@ bac anenq
                    //FileModel file = new FileModel { pa = uploadedFile.FileName, Path = path };
                    contextAdmin.ProductImages.Add(productImages);
                    contextAdmin.SaveChanges();
                }
                else
                {
                //    ModelState.AddModelError("", "image is required");
                //    var userId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier).Value;



                //    //List<Store> StoreItems = contextAdmin.Store.Where(x => x.ParentId == userId).ToList();
                //    //ViewBag.StoreItems = new SelectList(StoreItems, "Id", "ShopName");

                //    ViewBag.Menus = contextAdmin.Menu.Include(x => x.Parent)
                //        .Where(x => x.Parent != null && x.Parent.ParentId != null && x.Parent.ParentId == userId);
                //    return View(productControl);
                }
                contextAdmin.SaveChanges();
                return RedirectToAction("Create");
            }
            return View(productControl);
        }


        public JsonResult getProduct(int parentId)
        {
            List<Product> listProduct = new List<Product>();
            listProduct = contextAdmin.Product.Where(x => x.StoreMenuId == parentId).ToList();
            //listCity.Insert(0, new City { ID = 0, CityName = "Please Select City"});
            return Json(new SelectList(listProduct, "Id", "ProductName"));
        }
    }
}