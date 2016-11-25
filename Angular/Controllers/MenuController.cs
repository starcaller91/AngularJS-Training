using Angular.EF.EntityClasses;
using Angular.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;


namespace WebApplication1.Controllers
{
    public class MenuController:Controller
    {
        IMenuRepository MenuRepository;
        public MenuController(IMenuRepository repository)
        {
            MenuRepository = repository;
        }

        [HttpGet]
        public JsonResult MenuForToday() {
            //0 sunday, 6 saturday
            Menu menu = MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek);

            return Json(menu);
        }



        [HttpPost]
        public JsonResult Items([FromBody]Meal Meal)
        {
            //[FromBody] try to map from what is in the body of the request to the parameter

            try
            {
                if (ModelState.IsValid)
                {
                    Menu menu = MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek);
                    menu.Items.Add(new MenuItem() {
                        Meal = Meal,
                        Breakfast = false,
                        Lunch = false,
                        Dinner = false
                    });
                    MenuRepository.UpdateMenu(menu);

                    if (MenuRepository.SaveChanges())
                    {
                        Response.StatusCode = (int)HttpStatusCode.Created;
                        return Json(menu);
                    }
                }
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { MemberList = ex.Message });
            }

            Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return Json(new { Message = "Failed", ModelState = ModelState });
        }


        [HttpDelete]
        public JsonResult Items(int id)
        {
            //[FromBody] try to map from what is in the body of the request to the parameter

            try
            {
                if (ModelState.IsValid)
                {
                    Menu menu = MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek);
                    menu.Items.RemoveAll(x => x.id == id);
                    MenuRepository.UpdateMenu(menu);

                    if (MenuRepository.SaveChanges())
                    {
                        menu = MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek);
                        Response.StatusCode = (int)HttpStatusCode.Created;
                        return Json(menu);
                    }
                }
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { MemberList = ex.Message });
            }

            Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return Json(new { Message = "Failed", ModelState = ModelState });
        }



        //[HttpPost]
        //public JsonResult AddNewMenuItem([FromBody]Meal Meal)
        //{
        //    //[FromBody] try to map from what is in the body of the request to the parameter

        //    try
        //    {
        //        if (ModelState.IsValid)
        //        {
        //            Menu menu = MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek);
        //            menu.Items.Add(new MenuItem()
        //            {
        //                Meal = Meal,
        //                Breakfast = false,
        //                Lunch = false,
        //                Dinner = false
        //            });
        //            MenuRepository.UpdateMenu(menu);

        //            if (MenuRepository.SaveChanges())
        //            {
        //                Response.StatusCode = (int)HttpStatusCode.Created;
        //                return Json(menu);
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return Json(new { MemberList = ex.Message });
        //    }

        //    Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //    return Json(new { Message = "Failed", ModelState = ModelState });
        //}


        //[HttpPost]
        //public JsonResult RemoveMenuItem([FromBody]MenuItem item)
        //{
        //    //[FromBody] try to map from what is in the body of the request to the parameter

        //    try
        //    {
        //        if (ModelState.IsValid)
        //        {
        //            Menu menu = MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek);
        //            menu.Items.RemoveAll(x => x.id == item.id);
        //            MenuRepository.UpdateMenu(menu);

        //            if (MenuRepository.SaveChanges())
        //            {
        //                Response.StatusCode = (int)HttpStatusCode.Created;
        //                return Json(menu);
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return Json(new { MemberList = ex.Message });
        //    }

        //    Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //    return Json(new { Message = "Failed", ModelState = ModelState });
        //}
    }
}
