import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { App } from './app.component'

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule { }


