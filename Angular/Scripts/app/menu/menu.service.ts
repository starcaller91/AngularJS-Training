import 'rxjs/RX';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/RX';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Meal, Menu } from '../shared/domain.classes'

@Injectable()
export class MenuService {
    private dailyMenuURL = 'menu/menufortoday';
    private mealsNotInMenuURL = 'meal/ReturnAllMealsForMenu';
    private mealsURL = 'menu/items';

    private _menu: BehaviorSubject<Menu> = new BehaviorSubject(new Menu());
    private _meals: BehaviorSubject<Meal[]> = new BehaviorSubject([]);

    public menu: Observable<Menu> = this._menu.asObservable();
    public meals: Observable<Meal[]> = this._meals.asObservable();

    constructor(private http: Http) {
        this.getMenuForToday();
        this.returnMealsThatAreNotInMenu();
    }

    private getMenuForToday() {
        this.http.get(this.dailyMenuURL)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(
            menu => this._menu.next(<Menu>JSON.parse(JSON.stringify(menu))),
            error => this.handleError(error)
            );
    }

    private returnMealsThatAreNotInMenu() {
        this.http.get(this.mealsNotInMenuURL)
            .map(meals => meals.json())
            .catch(this.handleError)
            .subscribe(
            meals => this._meals.next(<Meal[]>JSON.parse(JSON.stringify(meals))),
            error => this.handleError(error)
            );
    }

    public addItemToMenu(meal: Meal) {
        let body = JSON.parse(JSON.stringify({ meal }));
        body = JSON.stringify(body.meal);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.mealsURL, body, options)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(
            menu => this._menu.next(<Menu>JSON.parse(JSON.stringify(menu))),
            error => this.handleError(error),
            () => this.returnMealsThatAreNotInMenu()
            );
    }

    public removeItemFromMenu(id: number) {
        this.http.delete(this.mealsURL + "/" + id)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(
            menu => this._menu.next(<Menu>JSON.parse(JSON.stringify(menu))),
            error => this.handleError(error),
            () => this.returnMealsThatAreNotInMenu()
            );
    }



    private handleError(error: any) {
        var errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

