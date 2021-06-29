import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingService } from './targetSetting.service';
import { TargetSettingServiceCollection } from './targetSetting.service.collection';


import { TargetSetting_BehavioralObjective_DetailUI } from './detail/targetSetting-behavioralObjective.detail';
import { BehavioralObjective_ModuleMaster } from '../BehavioralObjective/behavioralObjective.module.master';
import { TargetSetting_FinalAppraise_DetailUI } from './detail/targetSetting-finalAppraise.detail';
import { FinalAppraise_ModuleMaster } from '../FinalAppraise/finalAppraise.module.master';
import { TargetSetting_FinalApprovement_DetailUI } from './detail/targetSetting-finalApprovement.detail';
import { FinalApprovement_ModuleMaster } from '../FinalApprovement/finalApprovement.module.master';
import { TargetSetting_FunctionalObjective_DetailUI } from './detail/targetSetting-functionalObjective.detail';
import { FunctionalObjective_ModuleMaster } from '../FunctionalObjective/functionalObjective.module.master';
import { TargetSetting_NonOperationalAppraise_DetailUI } from './detail/targetSetting-nonOperationalAppraise.detail';
import { NonOperationalAppraise_ModuleMaster } from '../NonOperationalAppraise/nonOperationalAppraise.module.master';
import { TargetSetting_OperationalAppraise_DetailUI } from './detail/targetSetting-operationalAppraise.detail';
import { OperationalAppraise_ModuleMaster } from '../OperationalAppraise/operationalAppraise.module.master';
import { TargetSetting_QualitativeObjective_DetailUI } from './detail/targetSetting-qualitativeObjective.detail';
import { QualitativeObjective_ModuleMaster } from '../QualitativeObjective/qualitativeObjective.module.master';
import { TargetSetting_QuantitativeAppraise_DetailUI } from './detail/targetSetting-quantitativeAppraise.detail';
import { QuantitativeAppraise_ModuleMaster } from '../QuantitativeAppraise/quantitativeAppraise.module.master';
import { TargetSetting_AppraiseResult_DetailUI } from './detail/targetSetting-appraiseResult.detail';
import { AppraiseResult_ModuleMaster } from '../AppraiseResult/appraiseResult.module.master';

@NgModule({
	declarations: [
		TargetSetting_BehavioralObjective_DetailUI,
		TargetSetting_AppraiseResult_DetailUI,
		TargetSetting_FinalAppraise_DetailUI,
		TargetSetting_FinalApprovement_DetailUI,
		TargetSetting_FunctionalObjective_DetailUI,
		TargetSetting_NonOperationalAppraise_DetailUI,
		TargetSetting_OperationalAppraise_DetailUI,
		TargetSetting_QualitativeObjective_DetailUI,
		TargetSetting_QuantitativeAppraise_DetailUI
	],
	imports: [
		FormsModule,
		CommonModule,
		SharedModule,
		BehavioralObjective_ModuleMaster,
		AppraiseResult_ModuleMaster,
		FinalAppraise_ModuleMaster,
		FinalApprovement_ModuleMaster,
		FunctionalObjective_ModuleMaster,
		NonOperationalAppraise_ModuleMaster,
		OperationalAppraise_ModuleMaster,
		QualitativeObjective_ModuleMaster,
		QuantitativeAppraise_ModuleMaster,
	],
	exports: [
		TargetSetting_BehavioralObjective_DetailUI,
		TargetSetting_AppraiseResult_DetailUI,
		TargetSetting_FinalAppraise_DetailUI,
		TargetSetting_FinalApprovement_DetailUI,
		TargetSetting_FunctionalObjective_DetailUI,
		TargetSetting_NonOperationalAppraise_DetailUI,
		TargetSetting_OperationalAppraise_DetailUI,
		TargetSetting_QualitativeObjective_DetailUI,
		TargetSetting_QuantitativeAppraise_DetailUI
	],
	providers: [
		//TargetSettingService,
		//TargetSettingServiceCollection
	]
})
export class TargetSetting_ModuleDetail { }