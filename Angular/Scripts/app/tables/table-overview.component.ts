import { Component } from '@angular/core';

import { Table } from '../shared/domain.classes'
import { TablesService } from './tables.service'

@Component({
    templateUrl: '/AngularApp/Views/table-overview.html',
    providers: [TablesService]
})
export class TableOverviewComponent {
    tables: Table[];
    errorMessage: string;

    constructor(private _tablesService: TablesService) { }

    ngOnInit() {
        this.getTables();
    }

    private getTables() {
        this._tablesService.tables.subscribe(
            tables => this.tables = tables,
            error => this.errorMessage = error
        );
    }
}

