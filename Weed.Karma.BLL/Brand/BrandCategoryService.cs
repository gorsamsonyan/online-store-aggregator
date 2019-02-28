using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weed.Karma.BLL.Interfaces.Brand;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Brand;

namespace Weed.Karma.BLL.Brand
{
    public class BrandCategoryService : Service<BrandCategory>, IBrandCategoryService
    {
        public BrandCategoryService(IRepository<BrandCategory> repository) : base(repository)
        {
        }

        public List<BrandCategory> GetAllBrandCategories()
        {
            return Repository.Query()
                  .GetAs(g => new BrandCategory
                  {
                      Id = g.Id,
                      CategoryName = g.CategoryName
                  }).ToList();
        }

        public ICollection<BrandCategory> GetAllBrandCategory()
        {
            return Repository.Query()
                .GetAs(g => g)
                .ToList();
        }

        public ICollection<BrandCategory> GetConcentratesotegories()
        {
            return Repository.Query()
                            .Where(w => w.Id >= 8 && w.Id <= 18)
                           .GetAs(g => g)
                           .ToList();
        }

        public ICollection<BrandCategory> GetEdiblesCategories()
        {
            return Repository.Query()
                 .Where(w => w.Id >= 25 && w.Id <= 31)
                .GetAs(g => g)
                .ToList();
        }

        public ICollection<BrandCategory> GetFlowerCategories()
        {
            return Repository.Query()
                   .Where(w => w.Id >= 1 && w.Id <= 7)
                  .GetAs(g => g)
                  .ToList();
        }

        public ICollection<BrandCategory> GetMedicalCategories()
        {
            return Repository.Query()
                .Where(w => w.Id >= 32 && w.Id <= 34 )
               .GetAs(g => g)
               .ToList();
        }

        public ICollection<BrandCategory> GetVapePensCategories()
        {
            return Repository.Query()
                           .Where(w => w.Id >= 19 && w.Id <= 24)
                          .GetAs(g => g)
                          .ToList();
        }
    }
}
