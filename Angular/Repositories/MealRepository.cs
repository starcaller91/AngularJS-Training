using Angular.EF.Context;
using Angular.EF.EntityClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Angular.Repositories
{
    public class MealRepository : IMealRepository
    {
        private RestourantContext context;
        public MealRepository(RestourantContext context)
        {
            this.context = context;
        }

        public ICollection<Meal> ReturnAllAvailableMealsForMenu(Menu menu)
        {
            var takenMeals = menu.Items.Select(x => x.Meal).ToList();

            return context.Meals
                .Where(x => !takenMeals.Any(meal => meal == x))
                .ToList();
        }
    }
}
