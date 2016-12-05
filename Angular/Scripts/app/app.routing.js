"use strict";
const router_1 = require('@angular/router');
const menu_component_1 = require('./menu/menu.component');
const table_overview_component_1 = require('./tables/table-overview.component');
const appRoutes = [
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'tables', component: table_overview_component_1.TableOverviewComponent },
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: '**', component: menu_component_1.MenuComponent }
];
const childRoutes = [];
exports.appRoutingProviders = [];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
exports.childRouting = router_1.RouterModule.forChild(childRoutes);
//# sourceMappingURL=app.routing.js.map