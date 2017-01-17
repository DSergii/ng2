import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { WeatherComponent } from './weather/weather.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        UserListComponent,
        WeatherComponent,
    ]
})
export class DashboardModule { }
