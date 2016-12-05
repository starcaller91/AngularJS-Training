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
require('rxjs/RX');
const core_1 = require('@angular/core');
const Observable_1 = require('rxjs/Observable');
const RX_1 = require('rxjs/RX');
const http_1 = require('@angular/http');
const domain_classes_1 = require('../shared/domain.classes');
let MenuService = class MenuService {
    constructor(http) {
        this.http = http;
        this.dailyMenuURL = 'menu/menufortoday';
        this.mealsNotInMenuURL = 'meal/ReturnAllMealsForMenu';
        this.mealsURL = 'menu/items';
        this._menu = new RX_1.BehaviorSubject(new domain_classes_1.Menu());
        this._meals = new RX_1.BehaviorSubject([]);
        this.menu = this._menu.asObservable();
        this.meals = this._meals.asObservable();
        this.getMenuForToday();
        this.returnMealsThatAreNotInMenu();
    }
    getMenuForToday() {
        this.http.get(this.dailyMenuURL)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(menu => this._menu.next(JSON.parse(JSON.stringify(menu))), error => this.handleError(error));
    }
    returnMealsThatAreNotInMenu() {
        this.http.get(this.mealsNotInMenuURL)
            .map(meals => meals.json())
            .catch(this.handleError)
            .subscribe(meals => this._meals.next(JSON.parse(JSON.stringify(meals))), error => this.handleError(error));
    }
    addItemToMenu(meal) {
        let body = JSON.parse(JSON.stringify({ meal }));
        body = JSON.stringify(body.meal);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.mealsURL, body, options)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(menu => this._menu.next(JSON.parse(JSON.stringify(menu))), error => this.handleError(error), () => this.returnMealsThatAreNotInMenu());
    }
    removeItemFromMenu(id) {
        this.http.delete(this.mealsURL + "/" + id)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(menu => this._menu.next(JSON.parse(JSON.stringify(menu))), error => this.handleError(error), () => this.returnMealsThatAreNotInMenu());
    }
    handleError(error) {
        var errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
};
MenuService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map