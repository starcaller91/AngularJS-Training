using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.EF.EntityClasses
{
    public class MenuItem
    {
        public int id { get; set; }
        public Meal Meal { get; set; }
        public bool Breakfast { get; set; }
        public bool Lunch { get; set; }
        public bool Dinner { get; set; }
    }
}
