import { Component } from '@angular/core';

import { Menu, MenuItem, Meal } from '../shared/domain.classes'
import { MenuService } from './menu.service'

@Component({
    templateUrl: '/AngularApp/Views/menu.html',
    providers: [MenuService]
})
export class MenuComponent {
    menu: Menu;
    meals: Meal[];
    errorMessage: string;
    selectedDropdownMeal: Meal;
    noMealSelectedName = ' - Select item - ';

    constructor(private _menuService: MenuService) { }

    ngOnInit() {
        this.getMenu();
        this.getMeals();
    }

    private getMenu(): void {
        this._menuService.menu.subscribe(
            menu =>  this.menu = menu,
            error => this.errorMessage = error
        );
    }

    

    private changeStateOfMeal(item: MenuItem, meal: string) {
        switch (meal) {
            case 'breakfast':
                item.breakfast = !item.breakfast;
                break;
            case 'lunch':
                item.lunch = !item.lunch;
                break;
            case 'dinner':
                item.dinner = !item.dinner;
                break;
        }
    }

    private getMeals(): void {
        this._menuService.meals.subscribe(
            meals => this.meals = meals,
            error => this.errorMessage
        )
    }

    //MealsDropdownSelect(meal: Meal) {
    //    this.selectedDropdownMeal = meal;
    //}
    mealSelected(meal: Meal) {
        this.selectedDropdownMeal = meal;
    }

    addMealToMenu(meal: Meal) {
        this._menuService.addItemToMenu(meal);
        this.selectedDropdownMeal = null;
    }

    removeFromMenu(item: MenuItem) {
        this._menuService.removeItemFromMenu(item.id);
    }


}