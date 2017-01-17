import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './error/error.component';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        DashboardModule,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }