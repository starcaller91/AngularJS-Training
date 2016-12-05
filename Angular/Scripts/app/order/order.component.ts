import { Component, OnInit } from '@angular/core';

import { Order, Meal } from '../shared/domain.classes';
import { MenuService } from '../menu/menu.service';

@Component({
    templateUrl: '/AngularApp/Views/order.html'
})
export class OrderComponent implements OnInit {
    order: Order;
    meals: Meal[];

    constructor(private menuService: MenuService) {

    }

    ngOnInit() {

    }

    mealSelected(arg) {
        console.log(arg);
    }

    getMeals() {
        this.menuService.meals.subscribe(
            meals => this.meals = meals
        );
    } 

}