import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeService } from './employee.service';
import { EmployeeServiceCollection } from './employee.service.collection';


import { Employee_Assessment_DetailUI } from './detail/employee-assessment.detail';
import { Assessment_ModuleMaster } from '../../LAD/Assessment/assessment.module.master';
import { Appraiser_BehavioralAppraise_DetailUI } from './detail/appraiser-behavioralAppraise.detail';
import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { Employee_Coaching_DetailUI } from './detail/employee-coaching.detail';
import { Coaching_ModuleMaster } from '../../LAD/Coaching/coaching.module.master';
import { Employee_Contract_DetailUI } from './detail/employee-contract.detail';
import { Contract_ModuleMaster } from '../Contract/contract.module.master';
import { Employee_CriticalIncident_DetailUI } from './detail/employee-criticalIncident.detail';
import { CriticalIncident_ModuleMaster } from '../../PMS/CriticalIncident/criticalIncident.module.master';
import { Writer_CriticalIncidentRecognition_DetailUI } from './detail/writer-criticalIncidentRecognition.detail';
import { CriticalIncidentRecognition_ModuleMaster } from '../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition.module.master';
import { Employee_EmployeeDetail_DetailUI } from './detail/employee-employeeDetail.detail';
import { EmployeeDetail_ModuleMaster } from '../EmployeeDetail/employeeDetail.module.master';
import { Employee_EmployeeEvent_DetailUI } from './detail/employee-employeeEvent.detail';
import { EmployeeEvent_ModuleMaster } from '../EmployeeEvent/employeeEvent.module.master';
import { Employee_EmployeeNotification_DetailUI } from './detail/employee-employeeNotification.detail';
import { EmployeeNotification_ModuleMaster } from '../EmployeeNotification/employeeNotification.module.master';
import { Approver_FinalApprovement_DetailUI } from './detail/approver-finalApprovement.detail';
import { FinalApprovement_ModuleMaster } from '../../PMS/FinalApprovement/finalApprovement.module.master';
import { Appraiser_FunctionalAppraise_DetailUI } from './detail/appraiser-functionalAppraise.detail';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { Commenter_FunctionalKPIComment_DetailUI } from './detail/commenter-functionalKPIComment.detail';
import { FunctionalKPIComment_ModuleMaster } from '../../PMS/FunctionalKPIComment/functionalKPIComment.module.master';
import { Commenter_FunctionalObjectiveComment_DetailUI } from './detail/commenter-functionalObjectiveComment.detail';
import { FunctionalObjectiveComment_ModuleMaster } from '../../PMS/FunctionalObjectiveComment/functionalObjectiveComment.module.master';
import { Approver_NonOperationalAppraise_DetailUI } from './detail/approver-nonOperationalAppraise.detail';
import { NonOperationalAppraise_ModuleMaster } from '../../PMS/NonOperationalAppraise/nonOperationalAppraise.module.master';
import { Approver_OperationalAppraise_DetailUI } from './detail/approver-operationalAppraise.detail';
import { OperationalAppraise_ModuleMaster } from '../../PMS/OperationalAppraise/operationalAppraise.module.master';
import { Employee_PositionAssignment_DetailUI } from './detail/employee-positionAssignment.detail';
import { PositionAssignment_ModuleMaster } from '../PositionAssignment/positionAssignment.module.master';
import { Appraiser_QualitativeAppraise_DetailUI } from './detail/appraiser-qualitativeAppraise.detail';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';
import { Employee_RoleMember_DetailUI } from './detail/employee-roleMember.detail';
import { RoleMember_ModuleMaster } from '../../Core/RoleMember/roleMember.module.master';
import { Employee_TargetSetting_DetailUI } from './detail/employee-targetSetting.detail';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';
import { Employee_Training_DetailUI } from './detail/employee-training.detail';
import { Training_ModuleMaster } from '../../IDEA/Training/training.module.master';
import { Employee_Vision_DetailUI } from './detail/employee-vision.detail';
import { Vision_ModuleMaster } from '../../PMS/Vision/vision.module.master';
import { ByEmployee_VisionApproved_DetailUI } from './detail/byEmployee-visionApproved.detail';
import { VisionApproved_ModuleMaster } from '../../PMS/VisionApproved/visionApproved.module.master';
import { Commentator_VisionComment_DetailUI } from './detail/commentator-visionComment.detail';
import { VisionComment_ModuleMaster } from '../../PMS/VisionComment/visionComment.module.master';

@NgModule({
  declarations: [
    Employee_Assessment_DetailUI,
		Appraiser_BehavioralAppraise_DetailUI,
		Employee_Coaching_DetailUI,
		Employee_Contract_DetailUI,
		Employee_CriticalIncident_DetailUI,
		Writer_CriticalIncidentRecognition_DetailUI,
		Employee_EmployeeDetail_DetailUI,
		Employee_EmployeeEvent_DetailUI,
		Employee_EmployeeNotification_DetailUI,
		Approver_FinalApprovement_DetailUI,
		Appraiser_FunctionalAppraise_DetailUI,
		Commenter_FunctionalKPIComment_DetailUI,
		Commenter_FunctionalObjectiveComment_DetailUI,
		Approver_NonOperationalAppraise_DetailUI,
		Approver_OperationalAppraise_DetailUI,
		Employee_PositionAssignment_DetailUI,
		Appraiser_QualitativeAppraise_DetailUI,
		Employee_RoleMember_DetailUI,
		Employee_TargetSetting_DetailUI,
		Employee_Training_DetailUI,
		Employee_Vision_DetailUI,
		ByEmployee_VisionApproved_DetailUI,
		Commentator_VisionComment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
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
    Employee_Assessment_DetailUI,
		Appraiser_BehavioralAppraise_DetailUI,
		Employee_Coaching_DetailUI,
		Employee_Contract_DetailUI,
		Employee_CriticalIncident_DetailUI,
		Writer_CriticalIncidentRecognition_DetailUI,
		Employee_EmployeeDetail_DetailUI,
		Employee_EmployeeEvent_DetailUI,
		Employee_EmployeeNotification_DetailUI,
		Approver_FinalApprovement_DetailUI,
		Appraiser_FunctionalAppraise_DetailUI,
		Commenter_FunctionalKPIComment_DetailUI,
		Commenter_FunctionalObjectiveComment_DetailUI,
		Approver_NonOperationalAppraise_DetailUI,
		Approver_OperationalAppraise_DetailUI,
		Employee_PositionAssignment_DetailUI,
		Appraiser_QualitativeAppraise_DetailUI,
		Employee_RoleMember_DetailUI,
		Employee_TargetSetting_DetailUI,
		Employee_Training_DetailUI,
		Employee_Vision_DetailUI,
		ByEmployee_VisionApproved_DetailUI,
		Commentator_VisionComment_DetailUI
  ],
  providers: [
    //EmployeeService,
    //EmployeeServiceCollection
  ]
})
export class Employee_ModuleDetail { }