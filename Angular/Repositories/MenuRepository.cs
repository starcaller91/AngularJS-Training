using Angular.EF.Context;
using Angular.EF.EntityClasses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace Angular.Repositories
{
    public class MenuRepository:IMenuRepository
    {
        private RestourantContext context;
        public MenuRepository(RestourantContext context)
        {
            this.context = context;
        }


        public Menu ReturnMenuForDay(int Day)
        {
            var a = context.Meals.Select(x => x).ToList();

            var asd = context.Menus.Where(x => x.Day == Day).Include(menu => menu.Items).ThenInclude(x => x.Meal).ThenInclude(x => x.Category);
            var b = asd.FirstOrDefault();
            return b;
        }

        public bool SaveChanges()
        {
            return context.SaveChanges() > 0;
        }

        public void UpdateMenu(Menu menu)
        {
            context.Menus.Update(menu);
        }
    }
}
