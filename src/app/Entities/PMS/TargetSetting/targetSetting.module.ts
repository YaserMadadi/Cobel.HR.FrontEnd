import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { TargetSettingService } from './targetSetting.service';
import { TargetSettingServiceCollection } from './targetSetting.service.collection';

import { TargetSettingIndexUI } from './index/targetSetting.index';
import { TargetSetting_ModuleFunc } from './targetSetting.module.func';
import { TargetSetting_ModuleMaster } from './targetSetting.module.master';


import { BehavioralObjective_ModuleFunc } from '../BehavioralObjective/behavioralObjective.module.func';
import { BehavioralObjective_ModuleMaster } from '../BehavioralObjective/behavioralObjective.module.master';
import { FinalAppraise_ModuleFunc } from '../FinalAppraise/finalAppraise.module.func';
import { FinalAppraise_ModuleMaster } from '../FinalAppraise/finalAppraise.module.master';
import { FinalApprovement_ModuleFunc } from '../FinalApprovement/finalApprovement.module.func';
import { FinalApprovement_ModuleMaster } from '../FinalApprovement/finalApprovement.module.master';
import { FunctionalObjective_ModuleFunc } from '../FunctionalObjective/functionalObjective.module.func';
import { FunctionalObjective_ModuleMaster } from '../FunctionalObjective/functionalObjective.module.master';
import { NonOperationalAppraise_ModuleFunc } from '../NonOperationalAppraise/nonOperationalAppraise.module.func';
import { NonOperationalAppraise_ModuleMaster } from '../NonOperationalAppraise/nonOperationalAppraise.module.master';
import { OperationalAppraise_ModuleFunc } from '../OperationalAppraise/operationalAppraise.module.func';
import { OperationalAppraise_ModuleMaster } from '../OperationalAppraise/operationalAppraise.module.master';
import { QualitativeObjective_ModuleFunc } from '../QualitativeObjective/qualitativeObjective.module.func';
import { QualitativeObjective_ModuleMaster } from '../QualitativeObjective/qualitativeObjective.module.master';
import { QuantitativeAppraise_ModuleFunc } from '../QuantitativeAppraise/quantitativeAppraise.module.func';
import { QuantitativeAppraise_ModuleMaster } from '../QuantitativeAppraise/quantitativeAppraise.module.master';

@NgModule({
  declarations: [
    TargetSettingIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    TargetSetting_ModuleMaster,
		BehavioralObjective_ModuleMaster,
		FinalAppraise_ModuleMaster,
		FinalApprovement_ModuleMaster,
		FunctionalObjective_ModuleMaster,
		NonOperationalAppraise_ModuleMaster,
		OperationalAppraise_ModuleMaster,
		QualitativeObjective_ModuleMaster,
		QuantitativeAppraise_ModuleMaster,
  ],
  exports: [
    TargetSettingIndexUI,
		TargetSetting_ModuleMaster,
   ]
})
export class TargetSettingModule {}