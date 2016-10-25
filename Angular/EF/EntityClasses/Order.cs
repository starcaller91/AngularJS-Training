using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.EF.EntityClasses
{
    public class Order
    {
        public int ID { get; set; }
        public List<OrderItems> Items { get; set; }
        public decimal Price { get; set; }
        public int TableNumber { get; set; }
        public Status Status { get; set; }
    }
}
