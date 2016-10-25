using Angular.EF.EntityClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Repositories
{
    public interface IOrderRepository
    {
        ICollection<Order> ReturnActiveOrders();
        Order ReturnOrderForTable(int tableId);
    }
}
