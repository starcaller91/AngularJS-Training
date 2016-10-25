using Angular.EF.EntityClasses;
using Angular.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace WebApplication1.Controllers
{
    public class OrdersController : Controller
    {
        IOrderRepository repository;

        public OrdersController(IOrderRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public JsonResult ReturnActiveOrders()
        {
            ICollection<Order> orders = repository.ReturnActiveOrders();

            return Json(orders);
        }

        [HttpPost]
        public JsonResult ReturnOrderForTable([FromBody]int id)
        {
            Order order = repository.ReturnOrderForTable(id);

            return Json(order);
        }

    }
}
