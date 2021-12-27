
import { NgModule } from '@angular/core';

import { AppraiseTime_ModuleFunc } from './AppraiseTime/appraiseTime.module.func';
import { AppraiseType_ModuleFunc } from './AppraiseType/appraiseType.module.func';
import { ApprovementType_ModuleFunc } from './ApprovementType/approvementType.module.func';
import { ApproverType_ModuleFunc } from './ApproverType/approverType.module.func';
import { CurrentSituation_ModuleFunc } from './CurrentSituation/currentSituation.module.func';
import { DesirableSituation_ModuleFunc } from './DesirableSituation/desirableSituation.module.func';
import { DevelopmentPlanPriority_ModuleFunc } from './DevelopmentPlanPriority/developmentPlanPriority.module.func';
import { ExpectedLevel_ModuleFunc } from './ExpectedLevel/expectedLevel.module.func';
import { MeasurementUnit_ModuleFunc } from './MeasurementUnit/measurementUnit.module.func';
import { Subject_ModuleFunc } from './Subject/subject.module.func';
import { TargetSettingMode_ModuleFunc } from './TargetSettingMode/targetSettingMode.module.func';
import { TargetSettingType_ModuleFunc } from './TargetSettingType/targetSettingType.module.func';


@NgModule({
  declarations: [],
  imports: [
    AppraiseTime_ModuleFunc,
		AppraiseType_ModuleFunc,
		ApprovementType_ModuleFunc,
		ApproverType_ModuleFunc,
		CurrentSituation_ModuleFunc,
		DesirableSituation_ModuleFunc,
		DevelopmentPlanPriority_ModuleFunc,
		ExpectedLevel_ModuleFunc,
		MeasurementUnit_ModuleFunc,
		Subject_ModuleFunc,
		TargetSettingType_ModuleFunc,
		TargetSettingMode_ModuleFunc,
		
  ],
  exports: [
    AppraiseTime_ModuleFunc,
		AppraiseType_ModuleFunc,
		ApprovementType_ModuleFunc,
		ApproverType_ModuleFunc,
		CurrentSituation_ModuleFunc,
		DesirableSituation_ModuleFunc,
		DevelopmentPlanPriority_ModuleFunc,
		ExpectedLevel_ModuleFunc,
		MeasurementUnit_ModuleFunc,
		Subject_ModuleFunc,
		TargetSettingType_ModuleFunc,
		TargetSettingMode_ModuleFunc,
		
  ]
})
export class Base_PMS_ModuleFunc { }