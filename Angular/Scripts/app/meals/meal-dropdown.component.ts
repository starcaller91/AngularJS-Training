import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Meal } from '../shared/domain.classes';

@Component({
    selector: 'meal-dropdown',
    templateUrl: '/AngularApp/Views/PartialViews/meal-dropdown.html'
    //inputs: ['meals'],
    //outputs: ['mealChanged']
})
export class MealDropdownComponent {
    @Input() meals: Meal[];
    @Input() selectedMeal: Meal;
    @Output() mealChanged = new EventEmitter();
    noMealSelectedName: string = ' - Select meal - ';

    MealsDropdownSelect(meal: Meal) {
        this.selectedMeal = meal;
        this.mealChanged.emit(meal);
    }
}

