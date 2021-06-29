import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { EmploymentStatusIndexUI } from './EmploymentStatus/index/employmentStatus.index';
import { ContractTypeIndexUI } from './ContractType/index/contractType.index';
import { EventTypeIndexUI } from './EventType/index/eventType.index';
import { DevelopmentPlanTypeIndexUI } from './DevelopmentPlanType/index/developmentPlanType.index';
import { RelativeTypeIndexUI } from './RelativeType/index/relativeType.index';
import { MaritalStatusIndexUI } from './MaritalStatus/index/maritalStatus.index';

const base_hr_routes : Routes = [
  { path: 'ContractType', redirectTo: 'ContractType/0' },
	{ path: 'ContractType/:id', component: ContractTypeIndexUI, canActivate: [AuthGuard], data: { title: 'ContractType' }  },
	{ path: 'DevelopmentPlanType', redirectTo: 'DevelopmentPlanType/0' },
	{ path: 'DevelopmentPlanType/:id', component: DevelopmentPlanTypeIndexUI, canActivate: [AuthGuard], data: { title: 'DevelopmentPlanType' }  },
	{ path: 'EmploymentStatus', redirectTo: 'EmploymentStatus/0' },
	{ path: 'EmploymentStatus/:id', component: EmploymentStatusIndexUI, canActivate: [AuthGuard], data: { title: 'EmploymentStatus' }  },
	{ path: 'EventType', redirectTo: 'EventType/0' },
	{ path: 'EventType/:id', component: EventTypeIndexUI, canActivate: [AuthGuard], data: { title: 'EventType' }  },
	{ path: 'MaritalStatus', redirectTo: 'MaritalStatus/0' },
	{ path: 'MaritalStatus/:id', component: MaritalStatusIndexUI, canActivate: [AuthGuard], data: { title: 'MaritalStatus' }  },
	{ path: 'RelativeType', redirectTo: 'RelativeType/0' },
	{ path: 'RelativeType/:id', component: RelativeTypeIndexUI, canActivate: [AuthGuard], data: { title: 'RelativeType' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(base_hr_routes)
  ],
  exports: [RouterModule]
})

export class Base_HR_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'Base.HR', loadChildren: () => import('./Entities/Base_HR/base.hr.module').then(x => x.Base_HR_Module) }