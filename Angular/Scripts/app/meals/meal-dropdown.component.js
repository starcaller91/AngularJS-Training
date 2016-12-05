"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const domain_classes_1 = require('../shared/domain.classes');
let MealDropdownComponent = class MealDropdownComponent {
    constructor() {
        this.mealChanged = new core_1.EventEmitter();
        this.noMealSelectedName = ' - Select meal - ';
    }
    MealsDropdownSelect(meal) {
        this.selectedMeal = meal;
        this.mealChanged.emit(meal);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], MealDropdownComponent.prototype, "meals", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', domain_classes_1.Meal)
], MealDropdownComponent.prototype, "selectedMeal", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], MealDropdownComponent.prototype, "mealChanged", void 0);
MealDropdownComponent = __decorate([
    core_1.Component({
        selector: 'meal-dropdown',
        templateUrl: '/AngularApp/Views/PartialViews/meal-dropdown.html'
    }), 
    __metadata('design:paramtypes', [])
], MealDropdownComponent);
exports.MealDropdownComponent = MealDropdownComponent;
//# sourceMappingURL=meal-dropdown.component.js.map