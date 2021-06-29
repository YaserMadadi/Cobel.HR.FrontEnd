import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';


const dashboardRoutes : Routes = [
  { path: 'dashboard', component: IndexComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule]
})

export class DashboardRouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'Base', loadChildren: () => import('./Entities/Base/base.module').then(x => x.BaseModule) }