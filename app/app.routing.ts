import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent  } from './error/error.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { WeatherComponent } from './dashboard/weather/weather.component';


const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,
        children: [
            {
                path: 'user-list',
                component: UserListComponent,
                outlet: 'users'
            },
            {
                path: 'weather',
                component: WeatherComponent,
                outlet: 'users'
            }
        ]
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}