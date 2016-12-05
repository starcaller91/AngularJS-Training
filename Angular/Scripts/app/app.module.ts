import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { appRouting, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TableOverviewComponent } from './tables/table-overview.component';
import { MealDropdownComponent } from './meals/meal-dropdown.component';

@NgModule({
    imports: [BrowserModule, HttpModule, appRouting, FormsModule],
    declarations: [AppComponent, MenuComponent, TableOverviewComponent, MealDropdownComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }


