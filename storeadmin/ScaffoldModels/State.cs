using System.Collections.Generic;

namespace storeadmin.ScaffoldModels
{
    public partial class State
    {
        public State()
        {
            City = new HashSet<City>();
            Store = new HashSet<Store>();
        }

        public int Id { get; set; }
        public string StateName { get; set; }
        public string StateAbbreviation { get; set; }

        public int Timezone { get; set; }

        public ICollection<City> City { get; set; }
        public ICollection<Store> Store { get; set; }
    }
}