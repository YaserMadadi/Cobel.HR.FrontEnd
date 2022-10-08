import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/xcore/security/auth_guard';
import { LADIndexComponent } from './index/index.component';



const dashboardRoutes: Routes = [
	{ path: 'L&DDashboard', redirectTo: 'L&DDashboard/0' },
	{ path: 'L&DDashboard/:id', component: LADIndexComponent, canActivate: [AuthGuard], data: { title: 'L&DDashboard' } },
	

];

@NgModule({
	imports: [
		RouterModule.forChild(dashboardRoutes)
	],
	exports: [RouterModule]
})

export class LAD_DashboardRouteModule { }

//   ****    should be add into app.routing.ts
//  { path: 'Core', loadChildren: () => import('./Entities/Core/core.module').then(x => x.CoreModule) }