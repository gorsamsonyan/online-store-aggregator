using System.Collections.Generic;

namespace storeadmin.ScaffoldModels
{
    public partial class City
    {
        public City()
        {
            Region = new HashSet<Region>();
            Store = new HashSet<Store>();
        }

        public int Id { get; set; }
        public string CityName { get; set; }
        public int? ParentId { get; set; }
        public string CityCode { get; set; }

        public State Parent { get; set; }
        public ICollection<Region> Region { get; set; }
        public ICollection<Store> Store { get; set; }
    }
}