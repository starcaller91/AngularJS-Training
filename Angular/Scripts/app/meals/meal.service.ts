import 'rxjs/RX';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/RX';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Meal } from '../shared/domain.classes'

@Injectable()
export class MealService {
    private allMealsURL = 'meals/ReturnAllMeals';

    private _meals: BehaviorSubject<Meal[]> = new BehaviorSubject([]);

    public meals: Observable<Meal[]> = this._meals.asObservable();

    constructor(private http: Http) {
        this.getmeals();
    }

    private getmeals() {
        this.http.get(this.allMealsURL)
            .map(menu => menu.json())
            .catch(this.handleError)
            .subscribe(
            menu => this._meals.next(<Meal[]>JSON.parse(JSON.stringify(menu))),
            error => this.handleError(error)
            );
    }

    private handleError(error: any) {
        var errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}