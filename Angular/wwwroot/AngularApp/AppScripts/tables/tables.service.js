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
const RX_1 = require('rxjs/RX');
const core_1 = require('@angular/core');
const Observable_1 = require('rxjs/Observable');
const http_1 = require('@angular/http');
const domain_classes_1 = require('../shared/domain.classes');
let TablesService = class TablesService {
    constructor(http) {
        this.http = http;
        this._tables = new RX_1.BehaviorSubject([]);
        this._activeOrders = new RX_1.BehaviorSubject([]);
        this.tables = this._tables.asObservable();
        this.activeOrders = this._activeOrders.asObservable();
        this.activeOrdersURL = 'orders/returnactiveorders';
        this.setTables();
        this.getActiveOrders();
    }
    setTables() {
        let tableArray = [];
        for (let i = 0; i < 12; i++) {
            let t = new domain_classes_1.Table();
            t.id = i + 1;
            tableArray.push(t);
        }
        this._tables.next(tableArray);
    }
    getActiveOrders() {
        this.http.get(this.activeOrdersURL)
            .map(data => data.json())
            .catch(this.handleError)
            .subscribe(orders => this._activeOrders.next(JSON.parse(JSON.stringify(orders))), error => this.handleError(error), () => this.setOrders());
    }
    setOrders() {
        let tables = this._tables.getValue();
        for (let order of this._activeOrders.getValue()) {
            tables = tables.map(x => {
                if (x.id === order.tableNumber) {
                    x.order = order;
                }
                return x;
            });
        }
        this._tables.next(tables);
    }
    handleError(error) {
        var errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
};
TablesService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], TablesService);
exports.TablesService = TablesService;
