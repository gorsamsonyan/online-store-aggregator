using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.BLL.Interfaces.Brand
{
    public interface IBrandCategoryService : IService<BrandCategory>
    {
        ICollection<BrandCategory> GetAllBrandCategory();
        ICollection<BrandCategory> GetConcentratesotegories();
        ICollection<BrandCategory> GetFlowerCategories();
        ICollection<BrandCategory> GetVapePensCategories();
        ICollection<BrandCategory> GetEdiblesCategories();
        ICollection<BrandCategory> GetMedicalCategories();


        List<BrandCategory> GetAllBrandCategories();
    }
}
