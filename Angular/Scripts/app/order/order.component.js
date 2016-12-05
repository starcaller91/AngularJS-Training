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
const menu_service_1 = require('../menu/menu.service');
let OrderComponent = class OrderComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
    }
    mealSelected(arg) {
        console.log(arg);
    }
    getMeals() {
        this.menuService.meals.subscribe(meals => this.meals = meals);
    }
};
OrderComponent = __decorate([
    core_1.Component({
        templateUrl: '/AngularApp/Views/order.html'
    }), 
    __metadata('design:paramtypes', [menu_service_1.MenuService])
], OrderComponent);
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map