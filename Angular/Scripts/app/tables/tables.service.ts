import 'rxjs/RX';
import { BehaviorSubject } from 'rxjs/RX';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { Table, Order } from '../shared/domain.classes';


@Injectable()
export class TablesService {
    private _tables: BehaviorSubject<Table[]> = new BehaviorSubject([]);
    private _activeOrders: BehaviorSubject<Order[]> = new BehaviorSubject([]);

    public tables: Observable<Table[]> = this._tables.asObservable();
    public activeOrders: Observable<Order[]> = this._activeOrders.asObservable();

    private activeOrdersURL = 'orders/returnactiveorders';

    constructor(private http: Http) {
        this.setTables();
        this.getActiveOrders();
    }

    private setTables() {
        let tableArray: Table[] = [];
        for (let i = 0; i < 12; i++) {
            let t = new Table();
            t.id = i + 1;
            tableArray.push(t);
        }
        this._tables.next(tableArray);
    }

    private getActiveOrders() {
        this.http.get(this.activeOrdersURL)
            .map(data => data.json())
            .catch(this.handleError)
            .subscribe(
            orders => this._activeOrders.next(<Order[]>JSON.parse(JSON.stringify(orders))),
            error => this.handleError(error),
            () => this.setOrders()
            );
    }

    private setOrders() {
        let tables: Table[] = this._tables.getValue();
        for (let order of this._activeOrders.getValue()) {
            tables = tables.map(
                x => {
                    if (x.id === order.tableNumber) {
                        x.order = order;
                    }
                    return x;
                });
        }
        this._tables.next(tables);
    }

    private handleError(error: any) {
        var errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

