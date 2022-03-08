
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { DesirableSituationIndexUI } from './DesirableSituation/index/desirableSituation.index';
import { AppraiseTypeIndexUI } from './AppraiseType/index/appraiseType.index';
import { TargetSettingTypeIndexUI } from './TargetSettingType/index/targetSettingType.index';
import { MeasurementUnitIndexUI } from './MeasurementUnit/index/measurementUnit.index';
import { ApproverTypeIndexUI } from './ApproverType/index/approverType.index';
import { ExpectedLevelIndexUI } from './ExpectedLevel/index/expectedLevel.index';
import { ApprovementTypeIndexUI } from './ApprovementType/index/approvementType.index';
import { DevelopmentPlanPriorityIndexUI } from './DevelopmentPlanPriority/index/developmentPlanPriority.index';
import { SubjectIndexUI } from './Subject/index/subject.index';
import { CurrentSituationIndexUI } from './CurrentSituation/index/currentSituation.index';
import { TargetSettingModeIndexUI } from './TargetSettingMode/index/targetSettingMode.index';

const base_pms_routes : Routes = [
	{ path: 'AppraiseType', redirectTo: 'AppraiseType/0' },
	{ path: 'AppraiseType/:id', component: AppraiseTypeIndexUI, canActivate: [AuthGuard], data: { title: 'AppraiseType' }  },
	{ path: 'ApprovementType', redirectTo: 'ApprovementType/0' },
	{ path: 'ApprovementType/:id', component: ApprovementTypeIndexUI, canActivate: [AuthGuard], data: { title: 'ApprovementType' }  },
	{ path: 'ApproverType', redirectTo: 'ApproverType/0' },
	{ path: 'ApproverType/:id', component: ApproverTypeIndexUI, canActivate: [AuthGuard], data: { title: 'ApproverType' }  },
	{ path: 'CurrentSituation', redirectTo: 'CurrentSituation/0' },
	{ path: 'CurrentSituation/:id', component: CurrentSituationIndexUI, canActivate: [AuthGuard], data: { title: 'CurrentSituation' }  },
	{ path: 'DesirableSituation', redirectTo: 'DesirableSituation/0' },
	{ path: 'DesirableSituation/:id', component: DesirableSituationIndexUI, canActivate: [AuthGuard], data: { title: 'DesirableSituation' }  },
	{ path: 'DevelopmentPlanPriority', redirectTo: 'DevelopmentPlanPriority/0' },
	{ path: 'DevelopmentPlanPriority/:id', component: DevelopmentPlanPriorityIndexUI, canActivate: [AuthGuard], data: { title: 'DevelopmentPlanPriority' }  },
	{ path: 'ExpectedLevel', redirectTo: 'ExpectedLevel/0' },
	{ path: 'ExpectedLevel/:id', component: ExpectedLevelIndexUI, canActivate: [AuthGuard], data: { title: 'ExpectedLevel' }  },
	{ path: 'MeasurementUnit', redirectTo: 'MeasurementUnit/0' },
	{ path: 'MeasurementUnit/:id', component: MeasurementUnitIndexUI, canActivate: [AuthGuard], data: { title: 'MeasurementUnit' }  },
	{ path: 'Subject', redirectTo: 'Subject/0' },
	{ path: 'Subject/:id', component: SubjectIndexUI, canActivate: [AuthGuard], data: { title: 'Subject' }  },
	{ path: 'TargetSettingType', redirectTo: 'TargetSettingType/0' },
	{ path: 'TargetSettingType/:id', component: TargetSettingTypeIndexUI, canActivate: [AuthGuard], data: { title: 'TargetSettingType' }  },
	{ path: 'TargetSettingMode', redirectTo: 'TargetSettingMode/0' },
	{ path: 'TargetSettingMode/:id', component: TargetSettingModeIndexUI, canActivate: [AuthGuard], data: { title: 'TargetSettingMode' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(base_pms_routes)
  ],
  exports: [RouterModule]
})

export class Base_PMS_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'Base.PMS', loadChildren: () => import('./Entities/Base_PMS/base.pms.module').then(x => x.Base_PMS_Module) }