using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Weed.Karma.BLL.Interfaces.Brand;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.BLL.Brand
{
    public class BrandService : Service<Entities.Brand.Brand>, IBrandService
    {
        public BrandService(IRepository<Entities.Brand.Brand> repository)
            : base(repository)
        {
        }

        public List<Entities.Brand.Brand> GetAllBestBrands(int cityId)
        {
            return Repository.Query()
                //to do is get isbest brands
                .Where(w => w.IsDeleted == false && w.RegionId == cityId)
                .GetAs(g => new Entities.Brand.Brand
                {
                    Id = g.Id,
                    LogoPath = g.LogoPath,
                    Name = g.Name,
                    Description = g.Description,
                    UrlByName = g.UrlByName

                }).ToList();
        }

        public ICollection<Entities.Brand.Brand> GetBrands()
        {
            var res = Repository.Query()
                .GetAs(g => g)
                .Where(w => !w.IsDeleted)
                .Take(5)
                .ToList();
            return res;
        }

        public ICollection<Entities.Brand.Brand> GetBrandsByCategoryId()
        {
            throw new NotImplementedException();
        }

        public List<Entities.Brand.Brand> GetBrandsByRegion(int cityId)
        {
            return Repository.Query()
                .Where(w => !w.IsDeleted && w.RegionId == cityId && w.IsBestBrand)
                .GetAs(g => new Entities.Brand.Brand
                {
                    Id = g.Id,
                    LogoPath = g.LogoPath,
                    Name = g.Name
                }).ToList();
        }

        public void InsertBrand(Entities.Brand.Brand entity)
        {
            Repository.InsertAsync(entity);
        }

        public List<Entities.Brand.Brand> GetUserBrands(int Id)
        {
            return Repository.Query()
                .Where(w => w.UserId == Id && w.IsDeleted == false)
                .GetAs(g => new Entities.Brand.Brand
                {
                    Id = g.Id,
                    Name = g.Name,

                }).ToList();
        }
        public Entities.Brand.Brand GetSingleBrandByBrandId(string brandUrlByName)
        {
            return Repository.Query()
                 .Where(w => w.UrlByName == brandUrlByName)
                 .GetAs(g => new Entities.Brand.Brand
                 {
                     Id = g.Id,
                     Name = g.Name,
                     LogoPath = g.LogoPath,
                     Description = g.Description,
                     CoverPath = g.CoverPath,
                     IsBestBrand = g.IsBestBrand,
                     UrlByName = g.UrlByName
                 }).FirstOrDefault();
        }

        public List<Entities.Brand.Brand> GetAllBestBrandsWithProducts(int cityId)
        {
            return Repository.Query()
                //.Include(i => i.BrandProducts)
                //to do is get isbest brands
                .Where(w => w.IsDeleted == false && w.RegionId == cityId)
                .GetAs(g => new Entities.Brand.Brand
                {
                    Id = g.Id,
                    LogoPath = g.LogoPath,
                    Name = g.Name,
                    Description = g.Description,

                }).ToList();
        }
    }
}
