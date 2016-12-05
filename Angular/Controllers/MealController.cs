using Angular.EF.EntityClasses;
using Angular.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Angular.Controllers
{
    public class MealController : Controller
    {
        IMealRepository MealRepository;
        IMenuRepository MenuRepository;

        public MealController(IMealRepository MealRepository, IMenuRepository MenuRepository) {
            this.MealRepository = MealRepository;
            this.MenuRepository = MenuRepository;
        }


        [HttpGet]
        public JsonResult ReturnAllMealsForMenu()
        {
            ICollection<Meal> menu = MealRepository.ReturnAllAvailableMealsForMenu(MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek));

            return Json(menu);
        }

        [HttpGet]
        public JsonResult ReturnAllMeals()
        {
            ICollection<Meal> meals = MealRepository.ReturnAllMeals();
            return Json(meals);
        }

    }
}
