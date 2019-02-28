using storeadmin.Models.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace storeadmin.Models.SCR
{
    public class SCRData
    {
        public int StateID { get; set; }
        public int CityID { get; set; }
        public int RegionID { get; set; }

        //public BusinessControl business = new BusinessControl();
    }
}
