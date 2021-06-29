import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../xcore/security/auth_guard';

// Import Containers
import { DefaultLayoutComponent } from './layouts';
import { LoginComponent } from './security/login/login.component';
import { IndexComponent } from './Dashboards/index/index.component';

import { P404Component } from './layouts/components/error/404.component';
import { P500Component } from './layouts/components/error/500.component';
//import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch:'full'
  },
  // {
  //   path: 'IndividualDevelopmentPlan',
  //   redirectTo: 'IndividualDevelopmentPlan/0'
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'Home',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: '....'
    },
    children: [
      {
        path: 'Home',
        component: IndexComponent
      },
      {
        path: 'base',
        loadChildren: () => import('./layouts/components/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./layouts/components/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./layouts/components/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./layouts/components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./layouts/components/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./layouts/components/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./layouts/components/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./layouts/components/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    //canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'Base',
        loadChildren: () => import('./Entities/Base/base.module').then(m => m.Base_Module), data: { title: 'Base' },
      },
      {
        path: 'Base.HR',
        loadChildren: () => import('./Entities/Base.HR/base.hr.module').then(m => m.Base_HR_Module), data: { title: 'Base.HR' },
      },
      {
        path: 'Base.PMS',
        loadChildren: () => import('./Entities/Base.PMS/base.pms.module').then(m => m.Base_PMS_Module), data: { title: 'Base.PMS' },
      },
      {
        path: 'Core',
        loadChildren: () => import('./Entities/Core/core.module').then(m => m.Core_Module),
      },
      {
        path: 'HR',
        loadChildren: () => import('./Entities/HR/hr.module').then(m => m.HR_Module),
      },
      {
        path: 'IDEA',
        loadChildren: () => import('./Entities/IDEA/idea.module').then(m => m.IDEA_Module),
      },
      {
        path: 'LAD',
        loadChildren: () => import('./Entities/LAD/lad.module').then(m => m.LAD_Module),
      },
      {
        path: 'PMS',
        loadChildren: () => import('./Entities/PMS/pms.module').then(m => m.PMS_Module),
      },
      {
        path: 'XCode',
        loadChildren: () => import('./Entities/XCode/xcode.module').then(m => m.XCode_Module)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
