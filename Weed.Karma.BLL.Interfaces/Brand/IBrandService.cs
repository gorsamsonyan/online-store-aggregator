using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.BLL.Interfaces.Brand
{
    public interface IBrandService : IService<Entities.Brand.Brand>
    {
        void InsertBrand(Entities.Brand.Brand entity);
        ICollection<Entities.Brand.Brand> GetBrandsByCategoryId();
        ICollection<Entities.Brand.Brand> GetBrands();
        List<Entities.Brand.Brand> GetAllBestBrands(int cityId);
        List<Entities.Brand.Brand> GetBrandsByRegion(int cityId);
        List<Entities.Brand.Brand> GetUserBrands(int Id);
        Entities.Brand.Brand GetSingleBrandByBrandId(string brandUrlByName);
        List<Entities.Brand.Brand> GetAllBestBrandsWithProducts(int cityId);//bchjdbcjd
    }
}
