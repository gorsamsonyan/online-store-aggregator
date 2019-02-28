using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Weed.Karma.Entities.Product;
using Weed.Karma.Models.Product;
using Weed.Karma.Models.UnitModels;

namespace Weed.karma.BLL.Mapper
{
   public class UnitProfile : Profile
    {
        public UnitProfile()
        {
            CreateMap<ProductUnitViewModel, Unit>();
            CreateMap<Unit, UnitViewModel>();
            CreateMap<UnitViewModel, Unit>(); 
        }

    }
}
