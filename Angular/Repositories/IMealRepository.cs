using Angular.EF.EntityClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Repositories
{
    public interface IMealRepository
    {
        ICollection<Meal> ReturnAllAvailableMealsForMenu(Menu menu);

        ICollection<Meal> ReturnAllMeals();


    }
}
