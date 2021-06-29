import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const authCoreRoutes : Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(authCoreRoutes)
  ],
  exports: [RouterModule]
})

export class AuthCoreRouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'Base', loadChildren: () => import('./Entities/Base/base.module').then(x => x.BaseModule) }