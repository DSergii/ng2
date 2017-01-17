import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'user-list',
                component: UserListComponent,
                outlet: 'users'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}
