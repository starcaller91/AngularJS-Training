using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.EF.EntityClasses
{
    public class Menu
    {
        public int ID { get; set; }
        public int  Day { get; set; }
        public List<MenuItem> Items { get; set; }
        
    }
}
