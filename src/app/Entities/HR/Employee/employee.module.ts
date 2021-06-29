import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EmployeeService } from './employee.service';
import { EmployeeServiceCollection } from './employee.service.collection';

import { EmployeeIndexUI } from './index/employee.index';
import { Employee_ModuleFunc } from './employee.module.func';
import { Employee_ModuleMaster } from './employee.module.master';


import { Assessment_ModuleFunc } from '../../LAD/Assessment/assessment.module.func';
import { Assessment_ModuleMaster } from '../../LAD/Assessment/assessment.module.master';
import { BehavioralAppraise_ModuleFunc } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.func';
import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { Coaching_ModuleFunc } from '../../LAD/Coaching/coaching.module.func';
import { Coaching_ModuleMaster } from '../../LAD/Coaching/coaching.module.master';
import { Contract_ModuleFunc } from '../Contract/contract.module.func';
import { Contract_ModuleMaster } from '../Contract/contract.module.master';
import { CriticalIncident_ModuleFunc } from '../../PMS/CriticalIncident/criticalIncident.module.func';
import { CriticalIncident_ModuleMaster } from '../../PMS/CriticalIncident/criticalIncident.module.master';
import { CriticalIncidentRecognition_ModuleFunc } from '../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition.module.func';
import { CriticalIncidentRecognition_ModuleMaster } from '../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition.module.master';
import { EmployeeDetail_ModuleFunc } from '../EmployeeDetail/employeeDetail.module.func';
import { EmployeeDetail_ModuleMaster } from '../EmployeeDetail/employeeDetail.module.master';
import { EmployeeEvent_ModuleFunc } from '../EmployeeEvent/employeeEvent.module.func';
import { EmployeeEvent_ModuleMaster } from '../EmployeeEvent/employeeEvent.module.master';
import { EmployeeNotification_ModuleFunc } from '../EmployeeNotification/employeeNotification.module.func';
import { EmployeeNotification_ModuleMaster } from '../EmployeeNotification/employeeNotification.module.master';
import { FinalApprovement_ModuleFunc } from '../../PMS/FinalApprovement/finalApprovement.module.func';
import { FinalApprovement_ModuleMaster } from '../../PMS/FinalApprovement/finalApprovement.module.master';
import { FunctionalAppraise_ModuleFunc } from '../../PMS/FunctionalAppraise/functionalAppraise.module.func';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { FunctionalKPIComment_ModuleFunc } from '../../PMS/FunctionalKPIComment/functionalKPIComment.module.func';
import { FunctionalKPIComment_ModuleMaster } from '../../PMS/FunctionalKPIComment/functionalKPIComment.module.master';
import { FunctionalObjectiveComment_ModuleFunc } from '../../PMS/FunctionalObjectiveComment/functionalObjectiveComment.module.func';
import { FunctionalObjectiveComment_ModuleMaster } from '../../PMS/FunctionalObjectiveComment/functionalObjectiveComment.module.master';
import { NonOperationalAppraise_ModuleFunc } from '../../PMS/NonOperationalAppraise/nonOperationalAppraise.module.func';
import { NonOperationalAppraise_ModuleMaster } from '../../PMS/NonOperationalAppraise/nonOperationalAppraise.module.master';
import { OperationalAppraise_ModuleFunc } from '../../PMS/OperationalAppraise/operationalAppraise.module.func';
import { OperationalAppraise_ModuleMaster } from '../../PMS/OperationalAppraise/operationalAppraise.module.master';
import { PositionAssignment_ModuleFunc } from '../PositionAssignment/positionAssignment.module.func';
import { PositionAssignment_ModuleMaster } from '../PositionAssignment/positionAssignment.module.master';
import { QualitativeAppraise_ModuleFunc } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.func';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';
import { RoleMember_ModuleFunc } from '../../Core/RoleMember/roleMember.module.func';
import { RoleMember_ModuleMaster } from '../../Core/RoleMember/roleMember.module.master';
import { TargetSetting_ModuleFunc } from '../../PMS/TargetSetting/targetSetting.module.func';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';
import { Training_ModuleFunc } from '../../IDEA/Training/training.module.func';
import { Training_ModuleMaster } from '../../IDEA/Training/training.module.master';
import { Vision_ModuleFunc } from '../../PMS/Vision/vision.module.func';
import { Vision_ModuleMaster } from '../../PMS/Vision/vision.module.master';
import { VisionApproved_ModuleFunc } from '../../PMS/VisionApproved/visionApproved.module.func';
import { VisionApproved_ModuleMaster } from '../../PMS/VisionApproved/visionApproved.module.master';
import { VisionComment_ModuleFunc } from '../../PMS/VisionComment/visionComment.module.func';
import { VisionComment_ModuleMaster } from '../../PMS/VisionComment/visionComment.module.master';

@NgModule({
  declarations: [
    EmployeeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Employee_ModuleMaster,
		Assessment_ModuleMaster,
		BehavioralAppraise_ModuleMaster,
		Coaching_ModuleMaster,
		Contract_ModuleMaster,
		CriticalIncident_ModuleMaster,
		CriticalIncidentRecognition_ModuleMaster,
		EmployeeDetail_ModuleMaster,
		EmployeeEvent_ModuleMaster,
		EmployeeNotification_ModuleMaster,
		FinalApprovement_ModuleMaster,
		FunctionalAppraise_ModuleMaster,
		FunctionalKPIComment_ModuleMaster,
		FunctionalObjectiveComment_ModuleMaster,
		NonOperationalAppraise_ModuleMaster,
		OperationalAppraise_ModuleMaster,
		PositionAssignment_ModuleMaster,
		QualitativeAppraise_ModuleMaster,
		RoleMember_ModuleMaster,
		TargetSetting_ModuleMaster,
		Training_ModuleMaster,
		Vision_ModuleMaster,
		VisionApproved_ModuleMaster,
		VisionComment_ModuleMaster,
  ],
  exports: [
    EmployeeIndexUI,
		Employee_ModuleMaster,
  ],
  providers: [
    // EmployeeService,
    // EmployeeServiceCollection
  ]
})
export class EmployeeModule {}