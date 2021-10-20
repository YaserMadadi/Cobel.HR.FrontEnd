
import {NgModule} from '@angular/core';

import { AppraiseTimeModule } from './AppraiseTime/appraiseTime.module';
import { AppraiseTypeModule } from './AppraiseType/appraiseType.module';
import { ApprovementTypeModule } from './ApprovementType/approvementType.module';
import { ApproverTypeModule } from './ApproverType/approverType.module';
import { CurrentSituationModule } from './CurrentSituation/currentSituation.module';
import { DesirableSituationModule } from './DesirableSituation/desirableSituation.module';
import { DevelopmentPlanPriorityModule } from './DevelopmentPlanPriority/developmentPlanPriority.module';
import { ExpectedLevelModule } from './ExpectedLevel/expectedLevel.module';
import { MeasurementUnitModule } from './MeasurementUnit/measurementUnit.module';
import { SubjectModule } from './Subject/subject.module';
import { TargetSettingTypeModule } from './TargetSettingType/targetSettingType.module';
import { Base_PMS_RouteModule } from './base.pms.route.module';

@NgModule({
  declarations: [],
  imports: [
    AppraiseTimeModule,
		AppraiseTypeModule,
		ApprovementTypeModule,
		ApproverTypeModule,
		CurrentSituationModule,
		DesirableSituationModule,
		DevelopmentPlanPriorityModule,
		ExpectedLevelModule,
		MeasurementUnitModule,
		SubjectModule,
		TargetSettingTypeModule,
		Base_PMS_RouteModule
  ],
  exports: [
    AppraiseTimeModule,
		AppraiseTypeModule,
		ApprovementTypeModule,
		ApproverTypeModule,
		CurrentSituationModule,
		DesirableSituationModule,
		DevelopmentPlanPriorityModule,
		ExpectedLevelModule,
		MeasurementUnitModule,
		SubjectModule,
		TargetSettingTypeModule,
		Base_PMS_RouteModule
  ]
})
export class Base_PMS_Module { }