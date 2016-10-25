using Angular.EF.Context;
using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Repositories
{
    public class OrdersRepository : IOrderRepository
    {
        private RestourantContext context;
        public OrdersRepository(RestourantContext context) {
            this.context = context;
        }

        public ICollection<Order> ReturnActiveOrders()
        {
            return context.Orders.Where(x => x.Status != Status.PAID).Include(x => x.Items)
                .ThenInclude(x => x.Meal)
                .ThenInclude(x => x.Category).ToList();
        }

        public Order ReturnOrderForTable(int tableId)
        {
            return context.Orders.Where(x => x.TableNumber == tableId && x.Status != Status.PAID).FirstOrDefault();
        }
    }
}
