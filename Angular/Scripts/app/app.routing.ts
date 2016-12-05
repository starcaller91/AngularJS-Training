import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MenuComponent } from './menu/menu.component'
import { TableOverviewComponent } from './tables/table-overview.component'

const appRoutes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'tables', component: TableOverviewComponent },
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: '**', component: MenuComponent }
];

const childRoutes: Routes = [];

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const childRouting: ModuleWithProviders = RouterModule.forChild(childRoutes);


